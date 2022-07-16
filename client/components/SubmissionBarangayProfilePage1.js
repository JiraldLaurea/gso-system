import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Axios from "axios";

// const getFormValues = () => {
//     if (typeof window !== "undefined") {
//         const storedValues = localStorage.getItem("brgyProfilePage1");
//         if (!storedValues)
//             return {
//                 // city: "",
//                 legalBasis: "",
//                 dateRatification: "",
//                 sitio1: "",
//                 sitio2: "",
//                 sitio3: "",
//                 sitio4: "",
//                 north: "",
//                 south: "",
//                 east: "",
//                 west: "",
//                 distanceFromCityHall: "",
//                 distanceFromPoblacion: "",
//                 distanceFromCapitol: "",
//                 distanceFromHighway: "",
//                 totalLandArea: "",
//                 totalPopulation: "",
//                 totalPopulationMale: 0,
//                 totalPopulationFemale: 0,
//                 totalPopulationBoth: 0,
//                 male1: 0,
//                 male2: 0,
//                 male3: 0,
//                 male4: 0,
//                 male5: 0,
//                 male6: 0,
//                 male7: 0,
//                 male8: 0,
//                 male9: 0,
//                 male10: 0,
//                 male11: 0,
//                 male12: 0,
//                 male13: 0,
//                 male14: 0,
//                 male15: 0,
//                 male16: 0,
//                 male17: 0,
//                 male18: 0,
//                 male19: 0,
//                 male20: 0,
//                 female1: 0,
//                 female2: 0,
//                 female3: 0,
//                 female4: 0,
//                 female5: 0,
//                 female6: 0,
//                 female7: 0,
//                 female8: 0,
//                 female9: 0,
//                 female10: 0,
//                 female11: 0,
//                 female12: 0,
//                 female13: 0,
//                 female14: 0,
//                 female15: 0,
//                 female16: 0,
//                 female17: 0,
//                 female18: 0,
//                 female19: 0,
//                 female20: 0,
//                 both1: 0,
//                 both2: 0,
//                 both3: 0,
//                 both4: 0,
//                 both5: 0,
//                 both6: 0,
//                 both7: 0,
//                 both8: 0,
//                 both9: 0,
//                 both10: 0,
//                 both11: 0,
//                 both12: 0,
//                 both13: 0,
//                 both14: 0,
//                 both15: 0,
//                 both16: 0,
//                 both17: 0,
//                 both18: 0,
//                 both19: 0,
//                 both20: 0,
//                 totalMale: 0,
//                 totalFemale: 0,
//                 totalBoth: 0,
//                 totalHouseholdsCY: "",
//                 totalHouseholds: 0,
//                 dialectSpoken: "",
//                 ethnicGroups: "",
//             };

//         return JSON.parse(storedValues);
//     }
// };

function SubmissionBarangayProfilePage1({ page1Data }) {
    // const { data: page1Data } = useSWR(
    //     "http://localhost:3001/submission/brgyProfilePage1"
    // );

    const [values, setValues] = useState({
        city: page1Data.city,
        legalBasis: page1Data.legalBasis,
        dateRatification: page1Data.dateRatification,
        sitio1: page1Data.sitio1,
        sitio2: page1Data.sitio2,
        sitio3: page1Data.sitio3,
        sitio4: page1Data.sitio4,
        north: page1Data.north,
        south: page1Data.south,
        east: page1Data.east,
        west: page1Data.west,
        distanceFromCityHall: page1Data.distanceFromCityHall,
        distanceFromPoblacion: page1Data.distanceFromPoblacion,
        distanceFromCapitol: page1Data.distanceFromCapitol,
        distanceFromHighway: page1Data.distanceFromHighway,
        totalLandArea: page1Data.totalLandArea,
        totalPopulation: page1Data.totalPopulation,
        totalPopulationMale: page1Data.totalPopulationMale,
        totalPopulationFemale: page1Data.totalPopulationFemale,
        totalPopulationBoth: page1Data.totalPopulationBoth,
        male1: page1Data.male1,
        male2: page1Data.male2,
        male3: page1Data.male3,
        male4: page1Data.male4,
        male5: page1Data.male5,
        male6: page1Data.male6,
        male7: page1Data.male7,
        male8: page1Data.male8,
        male9: page1Data.male9,
        male10: page1Data.male10,
        male11: page1Data.male11,
        male12: page1Data.male12,
        male13: page1Data.male13,
        male14: page1Data.male14,
        male15: page1Data.male15,
        male16: page1Data.male16,
        male17: page1Data.male17,
        male18: page1Data.male18,
        male19: page1Data.male19,
        male20: page1Data.male20,
        female1: page1Data.female1,
        female2: page1Data.female2,
        female3: page1Data.female3,
        female4: page1Data.female4,
        female5: page1Data.female5,
        female6: page1Data.female6,
        female7: page1Data.female7,
        female8: page1Data.female8,
        female9: page1Data.female9,
        female10: page1Data.female10,
        female11: page1Data.female11,
        female12: page1Data.female12,
        female13: page1Data.female13,
        female14: page1Data.female14,
        female15: page1Data.female15,
        female16: page1Data.female16,
        female17: page1Data.female17,
        female18: page1Data.female18,
        female19: page1Data.female19,
        female20: page1Data.female20,
        both1: page1Data.both1,
        both2: page1Data.both2,
        both3: page1Data.both3,
        both4: page1Data.both4,
        both5: page1Data.both5,
        both6: page1Data.both6,
        both7: page1Data.both7,
        both8: page1Data.both8,
        both9: page1Data.both9,
        both10: page1Data.both10,
        both11: page1Data.both11,
        both12: page1Data.both12,
        both13: page1Data.both13,
        both14: page1Data.both14,
        both15: page1Data.both15,
        both16: page1Data.both16,
        both17: page1Data.both17,
        both18: page1Data.both18,
        both19: page1Data.both19,
        both20: page1Data.both20,
        totalMale: page1Data.totalMale,
        totalFemale: page1Data.toalFemale,
        totalBoth: page1Data.totalBoth,
        totalHouseholdsCY: page1Data.totalHouseholdsCY,
        totalHouseholds: page1Data.totalHouseholds,
        dialectSpoken: page1Data.dialectSpoken,
        ethnicGroups: page1Data.ethnicGroups,
    });

    // const [values, setValues] = useState(getFormValues);

    const cityRef = useRef(null);
    const legalBasisRef = useRef(null);
    const dateRatificationRef = useRef(null);
    const sitio1Ref = useRef(null);
    const sitio2Ref = useRef(null);
    const sitio3Ref = useRef(null);
    const sitio4Ref = useRef(null);
    const northRef = useRef(null);
    const southRef = useRef(null);
    const eastRef = useRef(null);
    const westRef = useRef(null);
    const distanceFromCityHallRef = useRef(null);
    const distanceFromPoblacionRef = useRef(null);
    const distanceFromCapitolRef = useRef(null);
    const distanceFromHighwayRef = useRef(null);
    const totalLandAreaRef = useRef(null);
    const totalPopulationRef = useRef(null);
    const totalPopulationMaleRef = useRef(null);
    const totalPopulationFemaleRef = useRef(null);
    const totalPopulationBothRef = useRef(null);
    const male1Ref = useRef(null);
    const male2Ref = useRef(null);
    const male3Ref = useRef(null);
    const male4Ref = useRef(null);
    const male5Ref = useRef(null);
    const male6Ref = useRef(null);
    const male7Ref = useRef(null);
    const male8Ref = useRef(null);
    const male9Ref = useRef(null);
    const male10Ref = useRef(null);
    const male11Ref = useRef(null);
    const male12Ref = useRef(null);
    const male13Ref = useRef(null);
    const male14Ref = useRef(null);
    const male15Ref = useRef(null);
    const male16Ref = useRef(null);
    const male17Ref = useRef(null);
    const male18Ref = useRef(null);
    const male19Ref = useRef(null);
    const male20Ref = useRef(null);
    const female1Ref = useRef(null);
    const female2Ref = useRef(null);
    const female3Ref = useRef(null);
    const female4Ref = useRef(null);
    const female5Ref = useRef(null);
    const female6Ref = useRef(null);
    const female7Ref = useRef(null);
    const female8Ref = useRef(null);
    const female9Ref = useRef(null);
    const female10Ref = useRef(null);
    const female11Ref = useRef(null);
    const female12Ref = useRef(null);
    const female13Ref = useRef(null);
    const female14Ref = useRef(null);
    const female15Ref = useRef(null);
    const female16Ref = useRef(null);
    const female17Ref = useRef(null);
    const female18Ref = useRef(null);
    const female19Ref = useRef(null);
    const female20Ref = useRef(null);
    const both1Ref = useRef(null);
    const both2Ref = useRef(null);
    const both3Ref = useRef(null);
    const both4Ref = useRef(null);
    const both5Ref = useRef(null);
    const both6Ref = useRef(null);
    const both7Ref = useRef(null);
    const both8Ref = useRef(null);
    const both9Ref = useRef(null);
    const both10Ref = useRef(null);
    const both11Ref = useRef(null);
    const both12Ref = useRef(null);
    const both13Ref = useRef(null);
    const both14Ref = useRef(null);
    const both15Ref = useRef(null);
    const both16Ref = useRef(null);
    const both17Ref = useRef(null);
    const both18Ref = useRef(null);
    const both19Ref = useRef(null);
    const both20Ref = useRef(null);
    const totalMaleRef = useRef(null);
    const totalFemaleRef = useRef(null);
    const totalBothRef = useRef(null);
    const totalHouseholdsCYRef = useRef(null);
    const totalHouseholdsRef = useRef(null);
    const dialectSpokenRef = useRef(null);
    const ethnicGroupsRef = useRef(null);

    const [totalPopulationBoth, setTotalPopulationBoth] = useState(0);
    const [both1, setBoth1] = useState(0);

    // console.log(page1Data.city);

    // const totalPopulationBoth =
    //     page1Data.totalPopulationMale + page1Data.totalPopulationFemale;

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

    // useEffect(() => {
    //     setCity(page1Data?.city);
    // }, [page1Data]);

    // useEffect(() => {
    //     localStorage.setItem("brgyProfilePage1", JSON.stringify(values));
    // }, [values]);

    // const SECOND_MS = 3000;

    // useEffect(() => {
    //     const interval = setInterval(async () => {
    //         console.log("CITY: ", values.city);
    //         // setTotalPopulationBoth(
    //         //     Number(totalPopulationMaleRef.current?.value) +
    //         //         Number(totalPopulationFemaleRef.current?.value)
    //         // );

    // const data = {
    //     city: values.city,
    //     legalBasis: legalBasisRef.current?.value,
    //     dateRatification: dateRatificationRef.current?.value,
    //     sitio1: sitio1Ref.current?.value,
    //     sitio2: sitio2Ref.current?.value,
    //     sitio3: sitio3Ref.current?.value,
    //     sitio4: sitio4Ref.current?.value,
    //     north: northRef.current?.value,
    //     south: southRef.current?.value,
    //     east: eastRef.current?.value,
    //     west: westRef.current?.value,
    //     distanceFromCityHall: distanceFromCityHallRef.current?.value,
    //     distanceFromPoblacion: distanceFromPoblacionRef.current?.value,
    //     distanceFromCapitol: distanceFromCapitolRef.current?.value,
    //     distanceFromHighway: distanceFromHighwayRef.current?.value,
    //     totalLandArea: totalLandAreaRef.current?.value,
    //     totalPopulation: totalPopulationRef.current?.value,
    //     totalPopulationMale: totalPopulationMaleRef.current?.value,
    //     totalPopulationFemale: totalPopulationFemaleRef.current?.value,
    //     totalPopulationBoth:
    //         Number(totalPopulationMaleRef.current?.value) +
    //         Number(totalPopulationFemaleRef.current?.value),
    //     male1: male1Ref.current?.value,
    //     male2: male2Ref.current?.value,
    //     male3: male3Ref.current?.value,
    //     male4: male4Ref.current?.value,
    //     male5: male5Ref.current?.value,
    //     male6: male6Ref.current?.value,
    //     male7: male7Ref.current?.value,
    //     male8: male8Ref.current?.value,
    //     male9: male9Ref.current?.value,
    //     male10: male10Ref.current?.value,
    //     male11: male11Ref.current?.value,
    //     male12: male12Ref.current?.value,
    //     male13: male13Ref.current?.value,
    //     male14: male14Ref.current?.value,
    //     male15: male15Ref.current?.value,
    //     male16: male16Ref.current?.value,
    //     male17: male17Ref.current?.value,
    //     male18: male18Ref.current?.value,
    //     male19: male19Ref.current?.value,
    //     male20: male20Ref.current?.value,
    //     female1: female1Ref.current?.value,
    //     female2: female2Ref.current?.value,
    //     female3: female3Ref.current?.value,
    //     female4: female4Ref.current?.value,
    //     female5: female5Ref.current?.value,
    //     female6: female6Ref.current?.value,
    //     female7: female7Ref.current?.value,
    //     female8: female8Ref.current?.value,
    //     female9: female9Ref.current?.value,
    //     female10: female10Ref.current?.value,
    //     female11: female11Ref.current?.value,
    //     female12: female12Ref.current?.value,
    //     female13: female13Ref.current?.value,
    //     female14: female14Ref.current?.value,
    //     female15: female15Ref.current?.value,
    //     female16: female16Ref.current?.value,
    //     female17: female17Ref.current?.value,
    //     female18: female18Ref.current?.value,
    //     female19: female19Ref.current?.value,
    //     female20: female20Ref.current?.value,
    //     both1: both1Ref.current?.value,
    //     both2: both2Ref.current?.value,
    //     both3: both3Ref.current?.value,
    //     both4: both4Ref.current?.value,
    //     both5: both5Ref.current?.value,
    //     both6: both6Ref.current?.value,
    //     both7: both7Ref.current?.value,
    //     both8: both8Ref.current?.value,
    //     both9: both9Ref.current?.value,
    //     both10: both10Ref.current?.value,
    //     both11: both11Ref.current?.value,
    //     both12: both12Ref.current?.value,
    //     both13: both13Ref.current?.value,
    //     both14: both14Ref.current?.value,
    //     both15: both15Ref.current?.value,
    //     both16: both16Ref.current?.value,
    //     both17: both17Ref.current?.value,
    //     both18: both18Ref.current?.value,
    //     both19: both19Ref.current?.value,
    //     both20: both20Ref.current?.value,
    //     totalMale: totalMaleRef.current?.value,
    //     totalFemale: totalFemaleRef.current?.value,
    //     totalBoth: totalBothRef.current?.value,
    //     totalHouseholdsCY: totalHouseholdsCYRef.current?.value,
    //     totalHouseholds: totalHouseholdsRef.current?.value,
    //     dialectSpoken: dialectSpokenRef.current?.value,
    //     ethnicGroups: ethnicGroupsRef.current?.value,
    // };
    //         await Axios.put(
    //             "http://localhost:3001/submission/brgyProfilePage1",
    //             data
    //         );
    //     }, SECOND_MS);

    //     return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    // }, []);

    useEffect(() => {
        const updateSubmissionBarangayProfilePage1 = async () => {
            console.log("CITY: ", values.city);
            // setTotalPopulationBoth(
            //     Number(totalPopulationMaleRef.current?.value) +
            //         Number(totalPopulationFemaleRef.current?.value)
            // );

            const data = {
                city: values.city,
                legalBasis: values.legalBasis,
                dateRatification: values.dateRatification,
                sitio1: values.sitio1,
                sitio2: values.sitio2,
                sitio3: values.sitio3,
                sitio4: values.sitio4,
                north: values.north,
                south: values.south,
                east: values.east,
                west: values.west,
                distanceFromCityHall: values.distanceFromCityHall,
                distanceFromPoblacion: values.distanceFromPoblacion,
                distanceFromCapitol: values.distanceFromCapitol,
                distanceFromHighway: values.distanceFromHighway,
                totalLandArea: values.totalLandArea,
                totalPopulation: values.totalPopulation,
                totalPopulationMale: values.totalPopulationMale,
                totalPopulationFemale: values.totalPopulationFemale,
                totalPopulationBoth: values.totalPopulationBoth,
                male1: values.male1,
                male2: values.male2,
                male3: values.male3,
                male4: values.male4,
                male5: values.male5,
                male6: values.male6,
                male7: values.male7,
                male8: values.male8,
                male9: values.male9,
                male10: values.male10,
                male11: values.male11,
                male12: values.male12,
                male13: values.male13,
                male14: values.male14,
                male15: values.male15,
                male16: values.male16,
                male17: values.male17,
                male18: values.male18,
                male19: values.male19,
                male20: values.male20,
                female1: values.female1,
                female2: values.female2,
                female3: values.female3,
                female4: values.female4,
                female5: values.female5,
                female6: values.female6,
                female7: values.female7,
                female8: values.female8,
                female9: values.female9,
                female10: values.female10,
                female11: values.female11,
                female12: values.female12,
                female13: values.female13,
                female14: values.female14,
                female15: values.female15,
                female16: values.female16,
                female17: values.female17,
                female18: values.female18,
                female19: values.female19,
                female20: values.female20,
                both1: values.both1,
                both2: values.both2,
                both3: values.both3,
                both4: values.both4,
                both5: values.both5,
                both6: values.both6,
                both7: values.both7,
                both8: values.both8,
                both9: values.both9,
                both10: values.both10,
                both11: values.both11,
                both12: values.both12,
                both13: values.both13,
                both14: values.both14,
                both15: values.both15,
                both16: values.both16,
                both17: values.both17,
                both18: values.both18,
                both19: values.both19,
                both20: values.both20,
                totalMale: values.totalMale,
                totalFemale: values.totalFemale,
                totalBoth: values.totalBoth,
                totalHouseholdsCY: values.totalHouseholdsCY,
                totalHouseholds: values.totalHouseholds,
                dialectSpoken: values.dialectSpoken,
                ethnicGroups: values.ethnicGroups,
            };

            await Axios.put(
                "http://localhost:3001/submission/brgyProfilePage1",
                data
            );
        };

        updateSubmissionBarangayProfilePage1();
    }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleChangePage1 = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
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
                        value={values.city}
                        name="city"
                        // defaultValue={page1Data.city}
                        // ref={cityRef}
                        onChange={handleChange}
                        type="text"
                        a
                        className="border-b border-black w-52 focus:outline-none"
                    />
                </span>
            </div>
            <div className="font-bold">
                <p>I. GENERAL INFORMATION</p>
                <div>
                    <p className="ml-4">A. Name of Existence</p>
                    <div className="ml-8 font-normal">
                        <div className="flex items-center">
                            <p className="mr-1">1. Legal Basis of Creation:</p>
                            <input
                                value={values.legalBasis}
                                name="legalBasis"
                                onChange={handleChange}
                                type="text"
                                className="border-b border-black focus:outline-none w-96"
                            />
                        </div>

                        <p>2. Dated:</p>
                        <p className="ml-4 mr-1">
                            2.1 Date of Ratification:
                            <input
                                value={values.dateRatification}
                                name="dateRatification"
                                onChange={handleChange}
                                type="text"
                                className="border-b border-black w-36 focus:outline-none"
                            />
                        </p>
                        <div className="flex justify-between">
                            <div>
                                <p>3. Names of Sitios/Putok/Zones:</p>
                                <div className="ml-4">
                                    <div>
                                        <input
                                            value={values.sitio1}
                                            name="sitio1"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-48 border-b border-black focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            value={values.sitio2}
                                            name="sitio2"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-48 border-b border-black focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            value={values.sitio3}
                                            name="sitio3"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-48 border-b border-black focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            value={values.sitio4}
                                            name="sitio4"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-48 border-b border-black focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    4. Adjacent Barangays &#40;North, South,
                                    East, West&#41;
                                </p>
                                <div className="flex ml-8">
                                    <div className="mr-1">
                                        <p className="border-b border-transparent">
                                            N-
                                        </p>
                                        <p className="border-b border-transparent">
                                            S-
                                        </p>
                                        <p className="border-b border-transparent">
                                            E-
                                        </p>
                                        <p className="border-b border-transparent">
                                            W-
                                        </p>
                                    </div>
                                    <div className="flex flex-col flex-grow">
                                        <input
                                            value={values.north}
                                            name="north"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border-b border-black focus:outline-none"
                                        />

                                        <input
                                            value={values.south}
                                            name="south"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border-b border-black focus:outline-none"
                                        />

                                        <input
                                            value={values.east}
                                            name="east"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border-b border-black focus:outline-none"
                                        />

                                        <input
                                            value={values.west}
                                            name="west"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full border-b border-black focus:outline-none"
                                        />
                                    </div>
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
                                        value={values.distanceFromCityHall}
                                        name="distanceFromCityHall"
                                        onChange={handleChange}
                                        type="text"
                                        className="w-16 ml-2 border-b border-black focus:outline-none"
                                    />
                                </p>
                                <p>
                                    2. Poblacion to the nearest municipality
                                    <input
                                        value={values.distanceFromPoblacion}
                                        name="distanceFromPoblacion"
                                        onChange={handleChange}
                                        type="text"
                                        className="w-24 ml-2 border-b border-black focus:outline-none"
                                    />
                                </p>
                            </div>
                            <div>
                                <p>
                                    3. Provincial Capitol
                                    <input
                                        value={values.distanceFromCapitol}
                                        name="distanceFromCapitol"
                                        onChange={handleChange}
                                        type="text"
                                        className="w-16 ml-2 border-b border-black focus:outline-none"
                                    />
                                </p>
                                <p>
                                    4. National Highway
                                    <input
                                        value={values.distanceFromHighway}
                                        name="distanceFromHighway"
                                        onChange={handleChange}
                                        type="text"
                                        className="w-16 ml-2 border-b border-black focus:outline-none"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="ml-4">
                        C. Total Land Area:
                        <input
                            value={values.totalLandArea}
                            name="totalLandArea"
                            onChange={handleChange}
                            type="text"
                            className="w-16 ml-2 font-normal text-center border-b border-black focus:outline-none"
                        />
                        <span className="font-normal">
                            &#40; Source: City Assessor's Office/CPDO &#41;
                        </span>
                    </p>
                </div>

                <div>
                    <p className="ml-4">D. Population:</p>
                    <div className="ml-8 font-normal">
                        <span>
                            <span className="">
                                1. Total Population &#40;
                                <input
                                    value={values.totalPopulation}
                                    name="totalPopulation"
                                    onChange={handleChange}
                                    type="text"
                                    className="font-normal text-center border-b border-black w-14 focus:outline-none"
                                />
                                &#41;
                            </span>
                            <span className="ml-2">
                                Male
                                <input
                                    value={values.totalPopulationMale}
                                    name="totalPopulationMale"
                                    onChange={handleChange}
                                    type="text"
                                    className="w-10 ml-1 mr-2 font-normal text-center border-b border-black focus:outline-none"
                                />
                            </span>
                            <span>
                                Female
                                <input
                                    value={values.totalPopulationFemale}
                                    name="totalPopulationFemale"
                                    onChange={handleChange}
                                    type="text"
                                    className="w-10 ml-1 mr-2 font-normal text-center border-b border-black focus:outline-none"
                                />
                            </span>
                            <span>
                                Both Sexes
                                <input
                                    readOnly
                                    value={
                                        Number(values.totalPopulationMale) +
                                        Number(values.totalPopulationFemale)
                                    }
                                    name="totalPopulationBoth"
                                    // onChange={handleChange}
                                    type="text"
                                    className="w-10 text-center cursor-default focus:outline-none"
                                />
                            </span>
                        </span>
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
                                            value={values.male1}
                                            name="male1"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female1}
                                            name="female1"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male1) +
                                                Number(values.female1)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
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
                                            value={values.male2}
                                            name="male2"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female2}
                                            name="female2"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male2) +
                                                Number(values.female2)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">40-44</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male3}
                                            name="male3"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female3}
                                            name="female3"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male3) +
                                                Number(values.female3)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">5-9</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male4}
                                            name="male4"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female4}
                                            name="female4"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male4) +
                                                Number(values.female4)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">45-49</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male5}
                                            name="male5"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female5}
                                            name="female5"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male5) +
                                                Number(values.female5)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">10-14</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male6}
                                            name="male6"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female6}
                                            name="female6"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male6) +
                                                Number(values.female6)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">50-54</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male7}
                                            name="male7"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female7}
                                            name="female7"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male7) +
                                                Number(values.female7)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">15-19</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male8}
                                            name="male8"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female8}
                                            name="female8"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male8) +
                                                Number(values.female8)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">55-59</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male9}
                                            name="male9"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female9}
                                            name="female9"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male9) +
                                                Number(values.female9)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">20-24</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male10}
                                            name="male10"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female10}
                                            name="female10"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male10) +
                                                Number(values.female10)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">60-69</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male11}
                                            name="male11"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female11}
                                            name="female11"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male11) +
                                                Number(values.female11)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">25-29</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male12}
                                            name="male12"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female12}
                                            name="female12"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male12) +
                                                Number(values.female12)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">70-74</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male13}
                                            name="male13"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female13}
                                            name="female13"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male13) +
                                                Number(values.female13)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">30-34</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male14}
                                            name="male14"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female14}
                                            name="female14"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male14) +
                                                Number(values.female14)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">75-79</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male15}
                                            name="male15"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female15}
                                            name="female15"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male15) +
                                                Number(values.female15)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">35-39</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male16}
                                            name="male16"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female16}
                                            name="female16"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male16) +
                                                Number(values.female16)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">80-above</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male17}
                                            name="male17"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female17}
                                            name="female17"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male17) +
                                                Number(values.female17)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
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
                                            value={totalMale}
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            readOnly
                                            value={totalFemale}
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={totalMale + totalFemale}
                                            ref={dateRatificationRef}
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
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
                                            value={values.male1}
                                            name="male1"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female1}
                                            name="female1"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male1) +
                                                Number(values.female1)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">1-4</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male2}
                                            name="male2"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female2}
                                            name="female2"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male2) +
                                                Number(values.female2)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">5-9</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male4}
                                            name="male4"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female4}
                                            name="female4"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male4) +
                                                Number(values.female4)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">10-14</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male6}
                                            name="male6"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female6}
                                            name="female6"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male6) +
                                                Number(values.female6)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">15-19</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male8}
                                            name="male8"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female8}
                                            name="female8"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male8) +
                                                Number(values.female8)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">20-24</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male10}
                                            name="male10"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female10}
                                            name="female10"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male10) +
                                                Number(values.female10)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">25-29</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male12}
                                            name="male12"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female12}
                                            name="female12"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male12) +
                                                Number(values.female12)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">30-34</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male14}
                                            name="male14"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female14}
                                            name="female14"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male14) +
                                                Number(values.female14)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t">35-39</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male16}
                                            name="male16"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female16}
                                            name="female16"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male16) +
                                                Number(values.female16)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">40-44</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male3}
                                            name="male3"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female3}
                                            name="female3"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male3) +
                                                Number(values.female3)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">45-49</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male5}
                                            name="male5"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female5}
                                            name="female5"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male5) +
                                                Number(values.female5)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">50-54</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male7}
                                            name="male7"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female7}
                                            name="female7"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male7) +
                                                Number(values.female7)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">55-59</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male9}
                                            name="male9"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female9}
                                            name="female9"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male9) +
                                                Number(values.female9)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">60-69</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male11}
                                            name="male11"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female11}
                                            name="female11"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male11) +
                                                Number(values.female11)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">70-74</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male13}
                                            name="male13"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female13}
                                            name="female13"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male13) +
                                                Number(values.female13)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">75-79</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male15}
                                            name="male15"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female15}
                                            name="female15"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male15) +
                                                Number(values.female15)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t ">80-above</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male17}
                                            name="male17"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female17}
                                            name="female17"
                                            onChange={handleChange}
                                            type="text"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                Number(values.male17) +
                                                Number(values.female17)
                                            }
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
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
                                            value={totalMale}
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            readOnly
                                            value={totalFemale}
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={totalMale + totalFemale}
                                            ref={dateRatificationRef}
                                            type="text"
                                            className="w-full text-center cursor-default focus:outline-none"
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
                                    value={values.totalHouseholdsCY}
                                    name="totalHouseholdsCY"
                                    onChange={handleChange}
                                    type="text"
                                    className="text-center border-b border-black w-14 focus:outline-none"
                                />
                                &#41;
                                <input
                                    defaultValue={page1Data.totalHouseholds}
                                    name="totalHouseholds"
                                    onChange={handleChange}
                                    type="text"
                                    className="w-16 ml-2 text-center border-b border-black focus:outline-none"
                                />
                            </span>
                        </p>
                        <p className="mt-2">
                            F. Dialect predominantly spoken
                            <span className="ml-2 font-normal">
                                <input
                                    defaultValue={page1Data.dialectSpoken}
                                    name="dialectSpoken"
                                    onChange={handleChange}
                                    type="text"
                                    className="border-b border-black w-80 focus:outline-none"
                                />
                            </span>
                        </p>
                        <p className="mt-2">
                            G. Ethnic/Tribal Group/s in the Barangay
                            <span className="ml-2 font-normal">
                                <input
                                    defaultValue={page1Data.ethnicGroups}
                                    name="ethnicGroups"
                                    onChange={handleChange}
                                    type="text"
                                    className="border-b border-black w-80 focus:outline-none"
                                />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmissionBarangayProfilePage1;
