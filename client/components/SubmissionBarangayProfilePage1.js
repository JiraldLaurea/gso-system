import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Axios from "axios";

function SubmissionBarangayProfilePage1({
    page1Data,
    totalPopulationCount,
    setTotalPopulationCount,
}) {
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
        totalFemale: page1Data.totalFemale,
        totalBoth: page1Data.totalBoth,
        totalHouseholdsCY: page1Data.totalHouseholdsCY,
        totalHouseholds: page1Data.totalHouseholds,
        dialectSpoken: page1Data.dialectSpoken,
        ethnicGroups: page1Data.ethnicGroups,
    });

    const totalMale =
        Number(values.male1) +
        Number(values.male2) +
        Number(values.male3) +
        Number(values.male4) +
        Number(values.male5) +
        Number(values.male6) +
        Number(values.male7) +
        Number(values.male8) +
        Number(values.male9) +
        Number(values.male10) +
        Number(values.male11) +
        Number(values.male12) +
        Number(values.male13) +
        Number(values.male14) +
        Number(values.male15) +
        Number(values.male16) +
        Number(values.male17);

    const totalFemale =
        Number(values.female1) +
        Number(values.female2) +
        Number(values.female3) +
        Number(values.female4) +
        Number(values.female5) +
        Number(values.female6) +
        Number(values.female7) +
        Number(values.female8) +
        Number(values.female9) +
        Number(values.female10) +
        Number(values.female11) +
        Number(values.female12) +
        Number(values.female13) +
        Number(values.female14) +
        Number(values.female15) +
        Number(values.female16) +
        Number(values.female17);

    const { data, error, isValidating } = useSWR(
        "http://localhost:3001/user/me"
    );

    useEffect(() => {
        setTotalPopulationCount(
            Number(values.totalPopulationMale) +
                Number(values.totalPopulationFemale)
        );
        const updateSubmissionBarangayProfilePage1 = async () => {
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

    // setTotalPopulationCount(Number(values.male1) + Number(values.female1));

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <div className="font-bold text-center ">
                <p>BARANGAY PROFILE</p>
                <p>OF</p>
                <p>BARANGAY {data?.barangayName.toUpperCase()}</p>
            </div>
            <div className="flex items-center justify-between mb-6 font-bold">
                <p>District: {data?.districtName.toUpperCase()}</p>
                <span className="flex items-center">
                    <p className="mr-1">City:</p>
                    <input
                        value={values.city}
                        name="city"
                        // defaultValue={page1Data.city}
                        // ref={cityRef}
                        onChange={handleChange}
                        type="text"
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
                                className="ml-1 border-b border-black w-36 focus:outline-none"
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
                                    type="number"
                                    className="w-20 ml-1 mr-2 font-normal text-center border-b border-black focus:outline-none"
                                />
                            </span>
                            <span>
                                Female
                                <input
                                    value={values.totalPopulationFemale}
                                    name="totalPopulationFemale"
                                    onChange={handleChange}
                                    type="number"
                                    className="w-20 ml-1 mr-2 font-normal text-center border-b border-black focus:outline-none"
                                />
                            </span>
                            <span>
                                Both Sexes
                                <input
                                    readOnly
                                    value={
                                        !null
                                            ? Number(
                                                  values.totalPopulationMale
                                              ) +
                                              Number(
                                                  values.totalPopulationFemale
                                              )
                                            : 0
                                    }
                                    name="totalPopulationBoth"
                                    // onChange={handleChange}
                                    type="number"
                                    className="w-20 text-center cursor-default focus:outline-none"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female1}
                                            name="female1"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male1) +
                                                      Number(values.female1)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female2}
                                            name="female2"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male2) +
                                                      Number(values.female2)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">40-44</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male3}
                                            name="male3"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female3}
                                            name="female3"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male3) +
                                                      Number(values.female3)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female4}
                                            name="female4"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male4) +
                                                      Number(values.female4)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">45-49</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male5}
                                            name="male5"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female5}
                                            name="female5"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male5) +
                                                      Number(values.female5)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female6}
                                            name="female6"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male6) +
                                                      Number(values.female6)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">50-54</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male7}
                                            name="male7"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female7}
                                            name="female7"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male7) +
                                                      Number(values.female7)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female8}
                                            name="female8"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male8) +
                                                      Number(values.female8)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">55-59</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male9}
                                            name="male9"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female9}
                                            name="female9"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male9) +
                                                      Number(values.female9)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female10}
                                            name="female10"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male10) +
                                                      Number(values.female10)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">60-69</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male11}
                                            name="male11"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female11}
                                            name="female11"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male11) +
                                                      Number(values.female11)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female12}
                                            name="female12"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male12) +
                                                      Number(values.female12)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">70-74</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male13}
                                            name="male13"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female13}
                                            name="female13"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male13) +
                                                      Number(values.female13)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female14}
                                            name="female14"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male14) +
                                                      Number(values.female14)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">75-79</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male15}
                                            name="male15"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female15}
                                            name="female15"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male15) +
                                                      Number(values.female15)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female16}
                                            name="female16"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male16) +
                                                      Number(values.female16)
                                                    : 0
                                            }
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">80-above</td>
                                    <td className="border-t border-x">
                                        <input
                                            value={values.male17}
                                            name="male17"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female17}
                                            name="female17"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male17) +
                                                      Number(values.female17)
                                                    : 0
                                            }
                                            type="number"
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
                                            value={!null ? totalMale : 0}
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            readOnly
                                            value={!null ? totalFemale : 0}
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? totalMale + totalFemale
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female1}
                                            name="female1"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={totalPopulationCount}
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female2}
                                            name="female2"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male2) +
                                                      Number(values.female2)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female4}
                                            name="female4"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male4) +
                                                      Number(values.female4)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female6}
                                            name="female6"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male6) +
                                                      Number(values.female6)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female8}
                                            name="female8"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male8) +
                                                      Number(values.female8)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female10}
                                            name="female10"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male10) +
                                                      Number(values.female10)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female12}
                                            name="female12"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male12) +
                                                      Number(values.female12)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female14}
                                            name="female14"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male14) +
                                                      Number(values.female14)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female16}
                                            name="female16"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-x">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male16) +
                                                      Number(values.female16)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female3}
                                            name="female3"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male3) +
                                                      Number(values.female3)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female5}
                                            name="female5"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male5) +
                                                      Number(values.female5)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female7}
                                            name="female7"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male7) +
                                                      Number(values.female7)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female9}
                                            name="female9"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male9) +
                                                      Number(values.female9)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female11}
                                            name="female11"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male11) +
                                                      Number(values.female11)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female13}
                                            name="female13"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male13) +
                                                      Number(values.female13)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female15}
                                            name="female15"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male15) +
                                                      Number(values.female15)
                                                    : 0
                                            }
                                            type="number"
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
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            value={values.female17}
                                            name="female17"
                                            onChange={handleChange}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? Number(values.male17) +
                                                      Number(values.female17)
                                                    : 0
                                            }
                                            type="number"
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
                                            value={!null ? totalMale : 0}
                                            name="totalMale"
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            readOnly
                                            value={!null ? totalFemale : 0}
                                            name="totalFemale"
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            readOnly
                                            value={
                                                !null
                                                    ? totalMale + totalFemale
                                                    : 0
                                            }
                                            name="totalBoth"
                                            type="number"
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
                                    value={values.totalHouseholds}
                                    name="totalHouseholds"
                                    onChange={handleChange}
                                    type="number"
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
