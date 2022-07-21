import * as htmlToImage from "html-to-image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Axios from "axios";
import SubmissionBarangayProfilePage1 from "../components/SubmissionBarangayProfilePage1";
import SubmissionBarangayProfilePage2 from "../components/SubmissionBarangayProfilePage2";
import SubmissionBarangayProfilePage3 from "../components/SubmissionBarangayProfilePage3";
import SubmissionBarangayProfilePage4 from "../components/SubmissionBarangayProfilePage4";
import SubmissionBarangayProfilePage5 from "../components/SubmissionBarangayProfilePage5";
import SubmissionBarangayProfilePage6 from "../components/SubmissionBarangayProfilePage6";
import SubmissionBarangayProfilePage7 from "../components/SubmissionBarangayProfilePage7";
import SubmissionBarangayProfilePage8 from "../components/SubmissionBarangayProfilePage8";
import SubmissionBarangayProfilePage9 from "../components/SubmissionBarangayProfilePage9";

function submissionBarangayProfile({
    page1Data,
    page2Data,
    page3Data,
    page4Data,
    page5Data,
    page6Data,
    page7Data,
    page8Data,
    page9Data,
}) {
    const contentRef = useRef(null);
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);
    const page4Ref = useRef(null);
    const page5Ref = useRef(null);
    const page6Ref = useRef(null);
    const page7Ref = useRef(null);
    const page8Ref = useRef(null);
    const page9Ref = useRef(null);
    const {
        data: meData,
        error,
        isValidating,
    } = useSWR("http://localhost:3001/user/me");
    const date = new Date();

    const [isLoading, setIsLoading] = useState(false);
    const [totalPopulationCount, setTotalPopulationCount] = useState(0);
    const [yearSubmitted, setYearSubmitted] = useState(date.getFullYear());
    const [scrollPosition, setScrollPosition] = useState(0);
    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [page4, setPage4] = useState(false);
    const [page5, setPage5] = useState(false);
    const [page6, setPage6] = useState(false);
    const [page7, setPage7] = useState(false);
    const [page8, setPage8] = useState(false);
    const [page9, setPage9] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset + 68;
        setScrollPosition(position);
        console.log("POSITION", position);
        console.log("PAGE 1 REF", page1Ref.current.offsetTop);
        console.log("PAGE 2 REF", page2Ref.current.offsetTop);

        if (
            position >= page1Ref.current.offsetTop &&
            page2Ref.current.offsetTop > position
        ) {
            setPage1(true);
        } else {
            setPage1(false);
        }

        if (
            position >= page2Ref.current.offsetTop &&
            page3Ref.current.offsetTop > position
        ) {
            setPage2(true);
        } else {
            setPage2(false);
        }

        if (
            position >= page3Ref.current.offsetTop &&
            page4Ref.current.offsetTop > position
        ) {
            setPage3(true);
        } else {
            setPage3(false);
        }

        if (
            position >= page4Ref.current.offsetTop &&
            page5Ref.current.offsetTop > position
        ) {
            setPage4(true);
        } else {
            setPage4(false);
        }

        if (
            position >= page5Ref.current.offsetTop &&
            page6Ref.current.offsetTop > position
        ) {
            setPage5(true);
        } else {
            setPage5(false);
        }

        if (
            position >= page6Ref.current.offsetTop &&
            page7Ref.current.offsetTop > position
        ) {
            setPage6(true);
        } else {
            setPage6(false);
        }

        if (
            position >= page7Ref.current.offsetTop &&
            page8Ref.current.offsetTop > position
        ) {
            setPage7(true);
        } else {
            setPage7(false);
        }

        if (
            position >= page8Ref.current.offsetTop &&
            page9Ref.current.offsetTop > position
        ) {
            setPage8(true);
        } else {
            setPage8(false);
        }

        if (position >= page9Ref.current.offsetTop) {
            setPage9(true);
        } else {
            setPage9(false);
        }

        // if (position <= 1200) {
        //     setPage1(true);
        // } else {
        //     setPage1(false);
        // }

        // console.log("Page 2 ref", page2Ref.current.offsetTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // console.log("PAGE1 DATA", page1Data);

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

        setIsLoading(true);

        let scImg = null;

        await htmlToImage
            .toJpeg(contentRef.current, {
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
        // const imgHeight = contentRef.current.clientHeight / 96;
        // // const totalPDFPages = imgHeight / pdfHeight2;
        // const data = await html2canvas(contentRef.current, {
        //     useCORS: true,
        //     scale: 2,
        // });

        const imgProperties = pdf.getImageProperties(scImg);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(scImg, "JPEG", 0, 0, pdfWidth, pdfHeight);

        let i = 1;

        while (formPages > i) {
            pdf.addPage();
            pdf.addImage(
                scImg,
                "JPEG",
                0,
                -(pdfHeight2 * i + 0.125 * i),
                pdfWidth,
                pdfHeight
            );
            i += 1;
        }

        const pdfAttachment = new File(
            [pdf.output("blob")],
            `BarangayProfile${meData.barangayName}${meData.districtName}${yearSubmitted}.pdf`,
            {
                type: pdf.output("blob").type,
                lastModified: pdf.output("blob").lastModified,
            }
        );

        const formData = new FormData();
        formData.append("file", pdfAttachment);

        await Axios.post("http://localhost:3001/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        const data = {
            documentName: `BarangayProfile${meData.barangayName}${meData.districtName}${yearSubmitted}.pdf`,
            yearSubmitted: yearSubmitted,
            populationCount: totalPopulationCount,
            userId: meData.id,
        };

        await Axios.post("http://localhost:3001/submission/submit", data).then(
            () => {
                alert("Successfully submitted document");
                // fetchSubmissions();
                Axios.put("http://localhost:3001/barangay/update", {
                    populationCount: totalPopulationCount,
                    userId: meData.id,
                });
            }
        );

        pdf.save(
            `BarangayProfile${meData.barangayName}${meData.districtName}.pdf`
        );

        setIsLoading(false);
    };

    // const submitDocument = (e) => {
    //     createPDF(e);
    // };

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

    return (
        <div className="flex justify-between ">
            <div className="flex flex-col items-center flex-grow p-3 space-y-4 text-sm bg-gray-200">
                <form
                    spellCheck="false"
                    onSubmit={createPDF}
                    autoComplete="off"
                    ref={contentRef}
                    className="submissionBarangayProfile"
                >
                    <div
                        ref={page1Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20"
                    >
                        <SubmissionBarangayProfilePage1
                            page1Data={page1Data}
                            totalPopulationCount={totalPopulationCount}
                            setTotalPopulationCount={setTotalPopulationCount}
                        />
                    </div>
                    <div
                        ref={page2Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage2 page2Data={page2Data} />
                    </div>
                    <div
                        ref={page3Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage3 page3Data={page3Data} />
                    </div>
                    <div
                        ref={page4Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage4 page4Data={page4Data} />
                    </div>
                    <div
                        ref={page5Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage5 page5Data={page5Data} />
                    </div>
                    <div
                        ref={page6Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage6 page6Data={page6Data} />
                    </div>
                    <div
                        ref={page7Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage7 page7Data={page7Data} />
                    </div>
                    <div
                        ref={page8Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage8 page8Data={page8Data} />
                    </div>
                    <div
                        ref={page9Ref}
                        className="bg-white w-[8.5in] h-[14in] py-4 px-20 mt-3"
                    >
                        <SubmissionBarangayProfilePage9 page9Data={page9Data} />
                    </div>
                </form>
            </div>

            <div className="h-[calc(100vh-56px)] sticky top-[56px] bg-gray-50 flex flex-col py-4 border-l  w-full max-w-[260px] overflow-y-auto">
                <div className="px-4">
                    <p className="mb-2 text-sm text-gray-700">
                        Year of submission:
                    </p>
                    <input
                        value={yearSubmitted}
                        placeholder="Year"
                        onChange={(e) => setYearSubmitted(e.target.value)}
                        type="number"
                        className="w-20 px-2 py-1 text-center border restoreNumberArrows focus:outline-none"
                    />
                </div>
                <hr className="my-4" />
                <p className="mb-2 ml-4 text-sm text-gray-700">
                    Barangay profile
                </p>
                <div className="text-sm ">
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page1Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page1 && "bg-gray-300"
                        }`}
                    >
                        Page 1
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page2Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page2 && "bg-gray-300"
                        }`}
                    >
                        Page 2
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page3Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page3 && "bg-gray-300"
                        }`}
                    >
                        Page 3
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page4Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page4 && "bg-gray-300"
                        }`}
                    >
                        Page 4
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page5Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page5 && "bg-gray-300"
                        }`}
                    >
                        Page 5
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page6Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page6 && "bg-gray-300"
                        }`}
                    >
                        Page 6
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page7Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page7 && "bg-gray-300"
                        }`}
                    >
                        Page 7
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page8Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page8 && "bg-gray-300"
                        }`}
                    >
                        Page 8
                    </p>
                    <p
                        onClick={() => {
                            window.scrollTo({
                                top: page9Ref.current.offsetTop - 68,
                            });
                        }}
                        className={`py-2 pl-4 cursor-pointer hover:bg-gray-300 ${
                            page9 && "bg-gray-300"
                        }`}
                    >
                        Page 9
                    </p>
                </div>
                <hr className="my-4" />
                <div className="px-4">
                    <button
                        disabled={isLoading}
                        onClick={createPDF}
                        className={`w-full px-3 mb-4 py-2 text-white bg-blue-500 rounded-sm ${
                            isLoading && "cursor-not-allowed "
                        }`}
                    >
                        {!isLoading ? "Submit" : "Processing..."}
                    </button>
                    {/* <button
                        disabled={isLoading}
                        onClick={createPDF}
                        className={`w-full px-3 py-2 border text-blue-600 rounded-sm ${
                            isLoading && "cursor-not-allowed"
                        }`}
                    >
                        {!isLoading ? "Download" : "Processing..."}
                    </button> */}
                </div>
            </div>
        </div>
    );
}

export default submissionBarangayProfile;

export const getServerSideProps = async (context) => {
    const me = await fetch("http://localhost:3001/user/me", {
        headers: { Cookie: context.req.headers.cookie },
    }).then((res) => res.json());

    if (me.isAdmin == true) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    const pageData = await fetch(
        "http://localhost:3001/submission/brgyProfilePages",
        {
            headers: { Cookie: context.req.headers.cookie },
        }
    ).then((res) => res.json());

    return {
        props: {
            page1Data: pageData[0],
            page2Data: pageData[1],
            page3Data: pageData[2],
            page4Data: pageData[3],
            page5Data: pageData[4],
            page6Data: pageData[5],
            page7Data: pageData[6],
            page8Data: pageData[7],
            page9Data: pageData[8],
        },
    };
};
