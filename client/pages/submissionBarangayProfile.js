import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("form");
        if (!storedValues)
            return {
                city: "",
                legalBasis: "",
                dateRatification: "",
                sitio1: "",
                sitio2: "",
                sitio3: "",
                sitio4: "",
                north: "",
                south: "",
                east: "",
                west: "",
                distanceFromCityHall: "",
                distanceFromPoblacion: "",
                distanceFromCapitol: "",
                distanceFromHighway: "",
                totalLandArea: "",
                totalPopulation: "",
                totalPopulationMale: "",
                totalPopulationFemale: "",
                totalPopulationBoth: "",
                male1: 0,
                male2: 0,
                male3: 0,
                male4: 0,
                male5: 0,
                male6: 0,
                male7: 0,
                male8: 0,
                male9: 0,
                male10: 0,
                male11: 0,
                male12: 0,
                male13: 0,
                male14: 0,
                male15: 0,
                male16: 0,
                male17: 0,
                male18: 0,
                male19: 0,
                male20: 0,
                female1: 0,
                female2: 0,
                female3: 0,
                female4: 0,
                female5: 0,
                female6: 0,
                female7: 0,
                female8: 0,
                female9: 0,
                female10: 0,
                female11: 0,
                female12: 0,
                female13: 0,
                female14: 0,
                female15: 0,
                female16: 0,
                female17: 0,
                female18: 0,
                female19: 0,
                female20: 0,
                both1: 0,
                both2: 0,
                both3: 0,
                both4: 0,
                both5: 0,
                both6: 0,
                both7: 0,
                both8: 0,
                both9: 0,
                both10: 0,
                both11: 0,
                both12: 0,
                both13: 0,
                both14: 0,
                both15: 0,
                both16: 0,
                both17: 0,
                both18: 0,
                both19: 0,
                both20: 0,
                totalMale: 0,
                totalFemale: 0,
                totalBoth: 0,
                totalHouseholdsCY: 0,
                totalHouseholds: 0,
                dialectSpoken: "",
                ethnicGroups: "",
            };

        return JSON.parse(storedValues);
    }
};

function submissionBarangayProfile() {
    const [values, setValues] = useState(getFormValues);
    // const { user, authenticated, loading } = useAuthState();
    const contentRef = useRef(null);
    const [totals, setTotals] = useState({
        bothSexes1: 0,
    });

    const totalMale =
        Number(values?.male1) +
        Number(values?.male2) +
        Number(values?.male3) +
        Number(values?.male4) +
        Number(values?.male5) +
        Number(values?.male6) +
        Number(values?.male7) +
        Number(values?.male8) +
        Number(values?.male9) +
        Number(values?.male10) +
        Number(values?.male11) +
        Number(values?.male12) +
        Number(values?.male13) +
        Number(values?.male14) +
        Number(values?.male15) +
        Number(values?.male16) +
        Number(values?.male17);

    const totalFemale =
        Number(values?.female1) +
        Number(values?.female2) +
        Number(values?.female3) +
        Number(values?.female4) +
        Number(values?.female5) +
        Number(values?.female6) +
        Number(values?.female7) +
        Number(values?.female8) +
        Number(values?.female9) +
        Number(values?.female10) +
        Number(values?.female11) +
        Number(values?.female12) +
        Number(values?.female13) +
        Number(values?.female14) +
        Number(values?.female15) +
        Number(values?.female16) +
        Number(values?.female17);

    const { data, error, isValidating } = useSWR(
        "http://localhost:3001/user/me"
    );

    useEffect(() => {
        localStorage.setItem("form", JSON.stringify(values));
    }, [values]);

    // const generatePDF = async (e) => {
    //     e.preventDefault();
    //     const pdf = new jsPDF("portrait", "in", [14, 8.5]);
    //     const pdfHeight2 = pdf.internal.pageSize.getHeight();
    //     const imgHeight = contentRef.current.clientHeight / 96;
    //     const totalPDFPages = imgHeight / pdfHeight2;
    //     const data = contentRef.current;

    //     let i = 1;

    //     while (totalPDFPages > i) {
    //         pdf.addPage();
    //     }

    //     pdf.html(data).then(() => {
    //         pdf.save("BarangayProdile.pdf");
    //     });

    //     doc.html(document.querySelector("#content"), {
    //         callback: function (pdf) {
    //             pdf.save(`${data?.barangayName}BarangayProfile.pdf`);
    //         },
    //     });
    // };

    const createPDF = async (e) => {
        e.preventDefault();

        let scImg = null;

        await htmlToImage
            .toPng(contentRef.current, {
                pixelRatio: 1,
            })
            .then(function (dataUrl) {
                let img = new Image();
                img.src = dataUrl;
                scImg = img;
            });

        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "in",
            format: [14, 8.5],
        });

        const formPages = contentRef.current.children.length;

        const pdfHeight2 = pdf.internal.pageSize.getHeight();
        const imgHeight = contentRef.current.clientHeight / 96;
        // const totalPDFPages = imgHeight / pdfHeight2;
        const data = await html2canvas(contentRef.current, {
            useCORS: true,
            scale: 2,
        });

        const imgProperties = pdf.getImageProperties(scImg);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        // console.log();

        pdf.addImage(scImg, "PNG", 0, 0, pdfWidth, pdfHeight);

        let i = 1;

        while (formPages > i) {
            pdf.addPage();
            pdf.addImage(
                scImg,
                "PNG",
                0,
                -(pdfHeight2 * i + 0.125 * i),
                pdfWidth,
                pdfHeight
            );
            i += 1;
        }

        pdf.save("BarangayProfile.pdf");
    };

    // const generatePDF = () => {
    //     const input = document.getElementById("content");
    //     html2canvas(input, {
    //         logging: true,
    //         letterRendering: 1,
    //         useCORS: true,
    //     }).then((canvas) => {
    //         const imgWidth = canvas.width;
    //         const imgHeight = canvas.height;
    //         const imgData = canvas.toDataURL("img/png");
    //         const pdf = new jsPDF("p", "pt", "letter");
    //         pdf.addImage(imgData, "PNG", 0, 0, imgHeight, imgHeight);
    //         pdf.save("BarangayProfile.pdf");
    //     });
    // };

    // useEffect(() => {
    //     setValues(localStorage.getItem("form"));
    // }, []);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="flex flex-col items-center p-3 space-y-4 text-sm bg-gray-300 ">
            <form
                onSubmit={createPDF}
                autoComplete="off"
                ref={contentRef}
                className="border-black "
            >
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20">
                    <div className="font-bold text-center ">
                        <p>BARANGAY PROFILE</p>
                        <p>OF</p>
                        <p>BARANGAY {data?.barangayName.toUpperCase()}</p>
                    </div>
                    <div className="flex items-center justify-between mb-6 font-bold">
                        <p>District: JARO</p>
                        <span className="flex items-center">
                            <p className="mr-1">City:</p>
                            <input
                                name="city"
                                value={values?.city}
                                type="text"
                                className="border-b border-black w-52 focus:outline-none"
                                onChange={handleChange}
                            />
                        </span>
                    </div>
                    <div className="font-bold">
                        <p>I. GENERAL INFORMATION</p>
                        <div>
                            <p className="ml-4">A. Name of Existence</p>
                            <div className="ml-8 font-normal">
                                <div className="flex items-center">
                                    <p className="mr-1">
                                        1. Legal Basis of Creation:
                                    </p>
                                    <input
                                        name="legalBasis"
                                        value={values?.legalBasis}
                                        type="text"
                                        className="border-b border-black focus:outline-none w-96"
                                        onChange={handleChange}
                                    />
                                </div>

                                <p>2. Dated:</p>
                                <p className="ml-4 mr-1">
                                    2.1 Date of Ratification:{" "}
                                    <input
                                        name="dateRatification"
                                        value={values?.dateRatification}
                                        type="text"
                                        className="border-b border-black w-36 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </p>
                                <div className="flex justify-between">
                                    <div>
                                        <p>3. Names of Sitios/Putok/Zones:</p>
                                        <div className="ml-4">
                                            <div>
                                                <input
                                                    name="sitio1"
                                                    value={values?.sitio1}
                                                    type="text"
                                                    className="w-48 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    name="sitio2"
                                                    value={values?.sitio2}
                                                    type="text"
                                                    className="w-48 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    name="sitio3"
                                                    value={values?.sitio3}
                                                    type="text"
                                                    className="w-48 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>
                                            4. Adjacent Barangays &#40;North,
                                            South, East, West&#41;
                                        </p>
                                        <div className="ml-8">
                                            <p>
                                                N-
                                                <input
                                                    name="north"
                                                    value={values?.north}
                                                    type="text"
                                                    className="w-48 ml-2 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </p>
                                            <p>
                                                S-
                                                <input
                                                    name="south"
                                                    value={values?.south}
                                                    type="text"
                                                    className="w-48 ml-2 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </p>
                                            <p>
                                                E-
                                                <input
                                                    name="east"
                                                    value={values?.east}
                                                    type="text"
                                                    className="w-48 ml-2 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </p>
                                            <p>
                                                W-
                                                <input
                                                    name="west"
                                                    value={values?.west}
                                                    type="text"
                                                    className="w-48 ml-2 border-b border-black focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="ml-4">B. Distance from:</p>
                            <div className="ml-8 font-normal">
                                <div className="flex justify-between">
                                    <div>
                                        <p>
                                            1. City Hall
                                            <input
                                                name="distanceFromCityHall"
                                                value={
                                                    values?.distanceFromCityHall
                                                }
                                                type="text"
                                                className="w-16 ml-2 border-b border-black focus:outline-none"
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p>
                                            2. Poblacion to the nearest
                                            municipality
                                            <input
                                                name="distanceFromPoblacion"
                                                value={
                                                    values?.distanceFromPoblacion
                                                }
                                                type="text"
                                                className="w-16 ml-2 border-b border-black focus:outline-none"
                                                onChange={handleChange}
                                            />
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            3. Provincial Capitol
                                            <input
                                                name="distanceFromCapitol"
                                                value={
                                                    values?.distanceFromCapitol
                                                }
                                                type="text"
                                                className="w-16 ml-2 border-b border-black focus:outline-none"
                                                onChange={handleChange}
                                            />
                                        </p>
                                        <p>
                                            4. National Highway
                                            <input
                                                name="distanceFromHighway"
                                                value={
                                                    values?.distanceFromHighway
                                                }
                                                type="text"
                                                className="w-16 ml-2 border-b border-black focus:outline-none"
                                                onChange={handleChange}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="ml-4">
                                C. Total Land Area:{" "}
                                <input
                                    name="totalLandArea"
                                    value={values?.totalLandArea}
                                    type="text"
                                    className="w-16 ml-2 font-normal border-b border-black focus:outline-none"
                                    onChange={handleChange}
                                />
                                <span className="font-normal">
                                    &#40; Source: City Assessor's Office/CPDO
                                    &#41;
                                </span>
                            </p>
                        </div>

                        <div>
                            <p className="ml-4">D. Population:</p>
                            <div className="ml-8 font-normal">
                                <div className="flex items-center">
                                    <p className="">
                                        1. Total Population &#40;
                                        <input
                                            name="totalPopulation"
                                            value={values?.totalPopulation}
                                            type="text"
                                            className="font-normal text-center border-b border-black w-14 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                        &#41;
                                    </p>
                                    <p className="ml-2">
                                        Male
                                        <input
                                            name="totalPopulationMale"
                                            value={values?.totalPopulationMale}
                                            type="text"
                                            className="w-10 ml-1 mr-2 font-normal text-center border-b border-black focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </p>
                                    <p>
                                        Female
                                        <input
                                            name="totalPopulationFemale"
                                            value={
                                                values?.totalPopulationFemale
                                            }
                                            type="text"
                                            className="w-10 ml-1 mr-2 font-normal text-center border-b border-black focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </p>
                                    <p>
                                        Both Sexes
                                        <input
                                            readOnly
                                            name="totalPopulationBoth"
                                            value={
                                                Number(
                                                    values?.totalPopulationMale
                                                ) +
                                                Number(
                                                    values?.totalPopulationFemale
                                                )
                                            }
                                            type="text"
                                            className="w-10 text-center cursor-default focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </p>
                                </div>
                                <p>2. Age and Sex Distribution:</p>
                            </div>

                            <div>
                                <table className="w-full mt-2 text-xs border">
                                    <thead>
                                        <tr>
                                            <th className="border-r"></th>
                                            <th>Male</th>
                                            <th className="border-x">Female</th>
                                            <th>Both Sexes</th>
                                            <th className="w-10 border-x"></th>
                                            <th>Male</th>
                                            <th className="border-x">Female</th>
                                            <th>Both Sexes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-normal text-center ">
                                        <tr>
                                            <td className="font-bold border-t">
                                                Under 1 year
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male1"
                                                    value={values?.male1}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female1"
                                                    value={values?.female1}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both1"
                                                    value={
                                                        Number(
                                                            values?.female1
                                                        ) +
                                                        Number(values?.male1)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t "></td>
                                            <td className="border-t border-x"></td>
                                            <td className="border-t "></td>
                                            <td className="border-t border-l"></td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">1-4</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male2"
                                                    value={values?.male2}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female2"
                                                    value={values?.female2}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both2"
                                                    value={
                                                        Number(
                                                            values?.female2
                                                        ) +
                                                        Number(values?.male2)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">40-44</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male3"
                                                    value={values?.male3}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female3"
                                                    value={values?.female3}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                <input
                                                    readOnly
                                                    name="both3"
                                                    value={
                                                        Number(
                                                            values?.female3
                                                        ) +
                                                        Number(values?.male3)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">5-9</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male4"
                                                    value={values?.male4}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female4"
                                                    value={values?.female4}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both4"
                                                    value={
                                                        Number(
                                                            values?.female4
                                                        ) +
                                                        Number(values?.male4)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">45-49</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male5"
                                                    value={values?.male5}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female5"
                                                    value={values?.female5}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both5"
                                                    value={
                                                        Number(
                                                            values?.female5
                                                        ) +
                                                        Number(values?.male5)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            {" "}
                                            <td className="border-t">10-14</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male6"
                                                    value={values?.male6}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female6"
                                                    value={values?.female6}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both6"
                                                    value={
                                                        Number(
                                                            values?.female6
                                                        ) +
                                                        Number(values?.male6)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">50-54</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male7"
                                                    value={values?.male7}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female7"
                                                    value={values?.female7}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both7"
                                                    value={
                                                        Number(
                                                            values?.female7
                                                        ) +
                                                        Number(values?.male7)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            {" "}
                                            <td className="border-t">15-19</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male8"
                                                    value={values?.male8}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female8"
                                                    value={values?.female8}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both8"
                                                    value={
                                                        Number(
                                                            values?.female8
                                                        ) +
                                                        Number(values?.male8)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">55-59</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male9"
                                                    value={values?.male9}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female9"
                                                    value={values?.female9}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both9"
                                                    value={
                                                        Number(
                                                            values?.female9
                                                        ) +
                                                        Number(values?.male9)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">20-24</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male10"
                                                    value={values?.male10}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female10"
                                                    value={values?.female10}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both10"
                                                    value={
                                                        Number(
                                                            values?.female10
                                                        ) +
                                                        Number(values?.male10)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">60-69</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male11"
                                                    value={values?.male11}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female11"
                                                    value={values?.female11}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both11"
                                                    value={
                                                        Number(
                                                            values?.female11
                                                        ) +
                                                        Number(values?.male11)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">25-29</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male12"
                                                    value={values?.male12}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female12"
                                                    value={values?.female12}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both12"
                                                    value={
                                                        Number(
                                                            values?.female12
                                                        ) +
                                                        Number(values?.male12)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">70-74</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male13"
                                                    value={values?.male13}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female13"
                                                    value={values?.female13}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both13"
                                                    value={
                                                        Number(
                                                            values?.female13
                                                        ) +
                                                        Number(values?.male13)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">30-34</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male14"
                                                    value={values?.male14}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female14"
                                                    value={values?.female14}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both14"
                                                    value={
                                                        Number(
                                                            values?.female14
                                                        ) +
                                                        Number(values?.male14)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">75-79</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male15"
                                                    value={values?.male15}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female15"
                                                    value={values?.female15}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both15"
                                                    value={
                                                        Number(
                                                            values?.female15
                                                        ) +
                                                        Number(values?.male15)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">35-39</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male16"
                                                    value={values?.male16}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female16"
                                                    value={values?.female16}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both16"
                                                    value={
                                                        Number(
                                                            values?.female16
                                                        ) +
                                                        Number(values?.male16)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                80-above
                                            </td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male17"
                                                    value={values?.male17}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female17"
                                                    value={values?.female17}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                <input
                                                    readOnly
                                                    name="both17"
                                                    value={
                                                        Number(
                                                            values?.female17
                                                        ) +
                                                        Number(values?.male17)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t"></td>
                                            <td className="border-t border-x"></td>
                                            <td className="border-t "></td>
                                            <td className="border-t border-x"></td>
                                            <td className="font-bold border-t">
                                                Total
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="totalMale"
                                                    value={Number(totalMale)}
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    readOnly
                                                    name="totalMale"
                                                    value={Number(totalFemale)}
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                <input
                                                    readOnly
                                                    name="totalMale"
                                                    value={Number(
                                                        totalMale + totalFemale
                                                    )}
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="w-full max-w-sm mt-2 text-xs border">
                                    <thead>
                                        <tr>
                                            <th className="border-r"></th>
                                            <th>Male</th>
                                            <th className="border-x">Female</th>
                                            <th>Both Sexes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-normal text-center ">
                                        <tr>
                                            <td className="font-bold border-t">
                                                Under 1 year
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male1"
                                                    value={values?.male1}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female1"
                                                    value={values?.female1}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both1"
                                                    value={
                                                        Number(
                                                            values?.female1
                                                        ) +
                                                        Number(values?.male1)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">1-4</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male2"
                                                    value={values?.male2}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female2"
                                                    value={values?.female2}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both2"
                                                    value={
                                                        Number(
                                                            values?.female2
                                                        ) +
                                                        Number(values?.male2)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">5-9</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male4"
                                                    value={values?.male4}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female4"
                                                    value={values?.female4}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both4"
                                                    value={
                                                        Number(
                                                            values?.female4
                                                        ) +
                                                        Number(values?.male4)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            {" "}
                                            <td className="border-t">10-14</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male6"
                                                    value={values?.male6}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female6"
                                                    value={values?.female6}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both6"
                                                    value={
                                                        Number(
                                                            values?.female6
                                                        ) +
                                                        Number(values?.male6)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            {" "}
                                            <td className="border-t">15-19</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male8"
                                                    value={values?.male8}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female8"
                                                    value={values?.female8}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both8"
                                                    value={
                                                        Number(
                                                            values?.female8
                                                        ) +
                                                        Number(values?.male8)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">20-24</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male10"
                                                    value={values?.male10}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female10"
                                                    value={values?.female10}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both10"
                                                    value={
                                                        Number(
                                                            values?.female10
                                                        ) +
                                                        Number(values?.male10)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">25-29</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male12"
                                                    value={values?.male12}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female12"
                                                    value={values?.female12}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both12"
                                                    value={
                                                        Number(
                                                            values?.female12
                                                        ) +
                                                        Number(values?.male12)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">30-34</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male14"
                                                    value={values?.male14}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female14"
                                                    value={values?.female14}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both14"
                                                    value={
                                                        Number(
                                                            values?.female14
                                                        ) +
                                                        Number(values?.male14)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t">35-39</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male16"
                                                    value={values?.male16}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female16"
                                                    value={values?.female16}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="both16"
                                                    value={
                                                        Number(
                                                            values?.female16
                                                        ) +
                                                        Number(values?.male16)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">40-44</td>
                                            <td className="border-t border-x">
                                                <input
                                                    name="male3"
                                                    value={values?.male3}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    name="female3"
                                                    value={values?.female3}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                <input
                                                    readOnly
                                                    name="both3"
                                                    value={
                                                        Number(
                                                            values?.female3
                                                        ) +
                                                        Number(values?.male3)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">45-49</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male5"
                                                    value={values?.male5}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female5"
                                                    value={values?.female5}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both5"
                                                    value={
                                                        Number(
                                                            values?.female5
                                                        ) +
                                                        Number(values?.male5)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">50-54</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male7"
                                                    value={values?.male7}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female7"
                                                    value={values?.female7}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both7"
                                                    value={
                                                        Number(
                                                            values?.female7
                                                        ) +
                                                        Number(values?.male7)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">55-59</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male9"
                                                    value={values?.male9}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female9"
                                                    value={values?.female9}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both9"
                                                    value={
                                                        Number(
                                                            values?.female9
                                                        ) +
                                                        Number(values?.male9)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">60-69</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male11"
                                                    value={values?.male11}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female11"
                                                    value={values?.female11}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both11"
                                                    value={
                                                        Number(
                                                            values?.female11
                                                        ) +
                                                        Number(values?.male11)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">70-74</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male13"
                                                    value={values?.male13}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female13"
                                                    value={values?.female13}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both13"
                                                    value={
                                                        Number(
                                                            values?.female13
                                                        ) +
                                                        Number(values?.male13)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">75-79</td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male15"
                                                    value={values?.male15}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female15"
                                                    value={values?.female15}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                {" "}
                                                <input
                                                    readOnly
                                                    name="both15"
                                                    value={
                                                        Number(
                                                            values?.female15
                                                        ) +
                                                        Number(values?.male15)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-t ">
                                                80-above
                                            </td>
                                            <td className="border-t border-x">
                                                {" "}
                                                <input
                                                    name="male17"
                                                    value={values?.male17}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                {" "}
                                                <input
                                                    name="female17"
                                                    value={values?.female17}
                                                    type="text"
                                                    className="w-10 text-center focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                <input
                                                    readOnly
                                                    name="both17"
                                                    value={
                                                        Number(
                                                            values?.female17
                                                        ) +
                                                        Number(values?.male17)
                                                    }
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold border-t">
                                                Total
                                            </td>
                                            <td className="border-t border-x">
                                                <input
                                                    readOnly
                                                    name="totalMale"
                                                    value={Number(totalMale)}
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t ">
                                                <input
                                                    readOnly
                                                    name="totalMale"
                                                    value={Number(totalFemale)}
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                            <td className="border-t border-l">
                                                <input
                                                    readOnly
                                                    name="totalMale"
                                                    value={Number(
                                                        totalMale + totalFemale
                                                    )}
                                                    type="text"
                                                    className="w-10 text-center cursor-default focus:outline-none"
                                                    onChange={handleChange}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="mt-2">
                                    E. Total Number of Households
                                    <span className="ml-2 font-normal">
                                        &#40;
                                        <input
                                            name="totalHouseholdsCY"
                                            value={values?.totalHouseholdsCY}
                                            type="text"
                                            className="text-center border-b border-black w-14 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                        &#41;{" "}
                                        <input
                                            name="totalHouseholds"
                                            value={values?.totalHouseholds}
                                            type="text"
                                            className="w-16 ml-2 border-b border-black focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </span>
                                </p>
                                <p className="mt-2">
                                    F. Dialect predominantly spoken
                                    <span className="ml-2 font-normal">
                                        <input
                                            name="dialectSpoken"
                                            value={values?.dialectSpoken}
                                            type="text"
                                            className="border-b border-black w-52 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </span>
                                </p>
                                <p className="mt-2">
                                    G. Ethnic/Tribal Group/s in the Barangay
                                    <span className="ml-2 font-normal">
                                        <input
                                            name="ethnicGroups"
                                            value={values?.ethnicGroups}
                                            type="text"
                                            className="border-b border-black w-52 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 2</p>
                    <button className="px-3 py-2 mt-8 border">
                        Generate PDF
                    </button>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 3</p>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 4</p>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 5</p>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 6</p>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 7</p>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 8</p>
                </div>
                <div className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3">
                    <p>Page 9</p>
                </div>
            </form>
        </div>
    );
}

export default submissionBarangayProfile;
