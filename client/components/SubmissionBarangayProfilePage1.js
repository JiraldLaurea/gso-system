import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import Axios from "axios";

function SubmissionBarangayProfilePage1({
    page1Data,
    totalPopulationCount,
    setTotalPopulationCount,
    values,
    handleChange,
}) {
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

    useEffect(() => {
        setTotalPopulationCount(totalMale + totalFemale);
    }, [values]);

    // useEffect(() => {
    //     console.log("TOTAL POPULATION COUNT ", totalPopulationCount);
    // }, [totalPopulationCount]);

    // setTotalPopulationCount(Number(values.male1) + Number(values.female1));

    // const handleChange = (e) => {
    //     setValues((previousValues) => ({
    //         ...previousValues,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    const { data } = useSWR(
        "http://localhost:3001/barangay/getSelectedBarangay"
    );

    return (
        <div>
            <div className="font-bold text-center ">
                <p>BARANGAY PROFILE</p>
                <p>OF</p>
                <p>BARANGAY {data?.selectedBarangay.toUpperCase()}</p>
            </div>
            <div className="flex items-center justify-between mb-6 font-bold">
                <p>District: {data?.selectedDistrict.toUpperCase()}</p>
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
                                    tabIndex="-1"
                                    readOnly
                                    value={totalMale}
                                    name="totalPopulationMale"
                                    type="number"
                                    className="w-20 text-center cursor-default focus:outline-none"
                                />
                            </span>
                            <span>
                                Female
                                <input
                                    tabIndex="-1"
                                    readOnly
                                    value={totalFemale}
                                    name="totalPopulationFemale"
                                    type="number"
                                    className="w-20 text-center cursor-default focus:outline-none"
                                />
                            </span>
                            <span>
                                Both Sexes
                                <input
                                    tabIndex="-1"
                                    readOnly
                                    value={
                                        !null
                                            ? Number(totalFemale) +
                                              Number(totalMale)
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
                                            tabIndex="-1"
                                            readOnly
                                            value={
                                                Number(values.male1) +
                                                Number(values.female1)
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
                                            readOnly
                                            value={!null ? totalMale : 0}
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            tabIndex="-1"
                                            readOnly
                                            value={!null ? totalFemale : 0}
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            tabIndex="-1"
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
                                            tabIndex="-1"
                                            readOnly
                                            value={
                                                Number(values.male1) +
                                                Number(values.female1)
                                            }
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
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
                                            tabIndex="-1"
                                            readOnly
                                            value={!null ? totalMale : 0}
                                            name="totalMale"
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t ">
                                        <input
                                            tabIndex="-1"
                                            readOnly
                                            value={!null ? totalFemale : 0}
                                            name="totalFemale"
                                            type="number"
                                            className="w-full text-center cursor-default focus:outline-none"
                                        />
                                    </td>
                                    <td className="border-t border-l">
                                        <input
                                            tabIndex="-1"
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
                                    value={values.dialectSpoken}
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
                                    value={values.ethnicGroups}
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
