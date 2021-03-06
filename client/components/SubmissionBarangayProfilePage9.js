import React, { useEffect, useState } from "react";
import Axios from "axios";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage9");
        if (!storedValues)
            return {
                actualExpendituresCY1: 0,
                actualExpendituresCY2: 0,
                actualExpendituresAmount1CY1: 0,
                actualExpendituresAmount1CY2: 0,
                actualExpendituresAmount2CY1: 0,
                actualExpendituresAmount2CY2: 0,
                actualExpendituresAmount3CY1: 0,
                actualExpendituresAmount3CY2: 0,
                actualExpendituresAmountTotalCY1: 0,
                actualExpendituresAmountTotalCY2: 0,
                governanceOwnedFacilities1: "",
                governanceOwnedFacilities2: "",
                governanceOwnedFacilities3: "",
                governanceOwnedFacilities4: "",
                governanceOwnedFacilities5: "",
                governanceOwnedFacilities6: "",
                governanceOwnedFacilities7: "",
                governanceOwnedFacilities8: "",
                governanceOwnedFacilities9: "",
                governanceOwnedFacilities10: "",
                governanceOwnedFacilities11: "",
                governanceOwnedFacilities12: "",
                governanceOwnedFacilities12Specify: "",
                barangayGovSupportOrgNum1: 0,
                barangayGovSupportOrgNum2: 0,
                barangayGovSupportOrgNum3: 0,
                barangayGovSupportOrgNum4: 0,
                barangayGovSupportOrgNum5: 0,
                barangayGovSupportOrgNum6: 0,
                barangayGovSupportOrgNum7: 0,
                barangayGovSupportOrgNum7Specify: "",
                barangayGovSupportOrgNum8: 0,
                barangayGovSupportOrgNum8Specify: "",
                barangayGovSupportOrgNum9: 0,
                barangayGovSupportOrgNum10: 0,
                barangayGovSupportOrgNum11: 0,
                barangayGovSupportOrgNum12: 0,
                signatureOverPrintedName: "",
                position: "",
                date1: "",
                barangayCaptain: "",
                date2: "",
            };
        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage9({ page9Data }) {
    // const [values, setValues] = useState(getFormValues);

    const [values, setValues] = useState({
        actualExpendituresCY1: page9Data.actualExpendituresCY1,
        actualExpendituresCY2: page9Data.actualExpendituresCY2,
        actualExpendituresAmount1CY1: page9Data.actualExpendituresAmount1CY1,
        actualExpendituresAmount1CY2: page9Data.actualExpendituresAmount1CY2,
        actualExpendituresAmount2CY1: page9Data.actualExpendituresAmount2CY1,
        actualExpendituresAmount2CY2: page9Data.actualExpendituresAmount2CY2,
        actualExpendituresAmount3CY1: page9Data.actualExpendituresAmount3CY1,
        actualExpendituresAmount3CY2: page9Data.actualExpendituresAmount3CY2,
        actualExpendituresAmountTotalCY1:
            page9Data.actualExpendituresAmountTotalCY1,
        actualExpendituresAmountTotalCY2:
            page9Data.actualExpendituresAmountTotalCY2,
        governanceOwnedFacilities1: page9Data.governanceOwnedFacilities1,
        governanceOwnedFacilities2: page9Data.governanceOwnedFacilities2,
        governanceOwnedFacilities3: page9Data.governanceOwnedFacilities3,
        governanceOwnedFacilities4: page9Data.governanceOwnedFacilities4,
        governanceOwnedFacilities5: page9Data.governanceOwnedFacilities5,
        governanceOwnedFacilities6: page9Data.governanceOwnedFacilities6,
        governanceOwnedFacilities7: page9Data.governanceOwnedFacilities7,
        governanceOwnedFacilities8: page9Data.governanceOwnedFacilities8,
        governanceOwnedFacilities8StateOwnership:
            page9Data.governanceOwnedFacilities8StateOwnership,
        governanceOwnedFacilities9: page9Data.governanceOwnedFacilities9,
        governanceOwnedFacilities9StateOwnership:
            page9Data.governanceOwnedFacilities9StateOwnership,
        governanceOwnedFacilities10: page9Data.governanceOwnedFacilities10,
        governanceOwnedFacilities11: page9Data.governanceOwnedFacilities11,
        governanceOwnedFacilities12: page9Data.governanceOwnedFacilities12,
        governanceOwnedFacilities12Specify:
            page9Data.governanceOwnedFacilities12Specify,
        barangayGovSupportOrgNum1: page9Data.barangayGovSupportOrgNum1,
        barangayGovSupportOrgNum2: page9Data.barangayGovSupportOrgNum2,
        barangayGovSupportOrgNum3: page9Data.barangayGovSupportOrgNum3,
        barangayGovSupportOrgNum4: page9Data.barangayGovSupportOrgNum4,
        barangayGovSupportOrgNum5: page9Data.barangayGovSupportOrgNum5,
        barangayGovSupportOrgNum6: page9Data.barangayGovSupportOrgNum6,
        barangayGovSupportOrgNum7: page9Data.barangayGovSupportOrgNum7,
        barangayGovSupportOrgNum7Specify:
            page9Data.barangayGovSupportOrgNum7Specify,
        barangayGovSupportOrgNum8: page9Data.barangayGovSupportOrgNum8,
        barangayGovSupportOrgNum8Specify:
            page9Data.barangayGovSupportOrgNum8Specify,
        barangayGovSupportOrgNum9: page9Data.barangayGovSupportOrgNum9,
        barangayGovSupportOrgNum10: page9Data.barangayGovSupportOrgNum10,
        barangayGovSupportOrgNum11: page9Data.barangayGovSupportOrgNum11,
        barangayGovSupportOrgNum12: page9Data.barangayGovSupportOrgNum12,
        signatureOverPrintedName: page9Data.signatureOverPrintedName,
        position: page9Data.position,
        date1: page9Data.date1,
        barangayCaptain: page9Data.barangayCaptain,
        date2: page9Data.date2,
    });

    useEffect(() => {
        const updateSubmissionBarangayProfilePage9 = async () => {
            const data = {
                actualExpendituresCY1: values.actualExpendituresCY1,
                actualExpendituresCY2: values.actualExpendituresCY2,
                actualExpendituresAmount1CY1:
                    values.actualExpendituresAmount1CY1,
                actualExpendituresAmount1CY2:
                    values.actualExpendituresAmount1CY2,
                actualExpendituresAmount2CY1:
                    values.actualExpendituresAmount2CY1,
                actualExpendituresAmount2CY2:
                    values.actualExpendituresAmount2CY2,
                actualExpendituresAmount3CY1:
                    values.actualExpendituresAmount3CY1,
                actualExpendituresAmount3CY2:
                    values.actualExpendituresAmount3CY2,
                actualExpendituresAmountTotalCY1:
                    values.actualExpendituresAmountTotalCY1,
                actualExpendituresAmountTotalCY2:
                    values.actualExpendituresAmountTotalCY2,
                governanceOwnedFacilities1: values.governanceOwnedFacilities1,
                governanceOwnedFacilities2: values.governanceOwnedFacilities2,
                governanceOwnedFacilities3: values.governanceOwnedFacilities3,
                governanceOwnedFacilities4: values.governanceOwnedFacilities4,
                governanceOwnedFacilities5: values.governanceOwnedFacilities5,
                governanceOwnedFacilities6: values.governanceOwnedFacilities6,
                governanceOwnedFacilities7: values.governanceOwnedFacilities7,
                governanceOwnedFacilities8: values.governanceOwnedFacilities8,
                governanceOwnedFacilities8StateOwnership:
                    values.governanceOwnedFacilities8StateOwnership,
                governanceOwnedFacilities9: values.governanceOwnedFacilities9,
                governanceOwnedFacilities9StateOwnership:
                    values.governanceOwnedFacilities9StateOwnership,
                governanceOwnedFacilities10: values.governanceOwnedFacilities10,
                governanceOwnedFacilities11: values.governanceOwnedFacilities11,
                governanceOwnedFacilities12: values.governanceOwnedFacilities12,
                governanceOwnedFacilities12Specify:
                    values.governanceOwnedFacilities12Specify,
                barangayGovSupportOrgNum1: values.barangayGovSupportOrgNum1,
                barangayGovSupportOrgNum2: values.barangayGovSupportOrgNum2,
                barangayGovSupportOrgNum3: values.barangayGovSupportOrgNum3,
                barangayGovSupportOrgNum4: values.barangayGovSupportOrgNum4,
                barangayGovSupportOrgNum5: values.barangayGovSupportOrgNum5,
                barangayGovSupportOrgNum6: values.barangayGovSupportOrgNum6,
                barangayGovSupportOrgNum7: values.barangayGovSupportOrgNum7,
                barangayGovSupportOrgNum7Specify:
                    values.barangayGovSupportOrgNum7Specify,
                barangayGovSupportOrgNum8: values.barangayGovSupportOrgNum8,
                barangayGovSupportOrgNum8Specify:
                    values.barangayGovSupportOrgNum8Specify,
                barangayGovSupportOrgNum9: values.barangayGovSupportOrgNum9,
                barangayGovSupportOrgNum10: values.barangayGovSupportOrgNum10,
                barangayGovSupportOrgNum11: values.barangayGovSupportOrgNum11,
                barangayGovSupportOrgNum12: values.barangayGovSupportOrgNum12,
                signatureOverPrintedName: values.signatureOverPrintedName,
                position: values.position,
                date1: values.date1,
                barangayCaptain: values.barangayCaptain,
                date2: values.date2,
            };

            await Axios.put(
                "http://localhost:3001/submission/brgyProfilePage9",
                data
            );
        };

        updateSubmissionBarangayProfilePage9();
    }, [values]);

    const actualExpendituresAmountTotalCY1 =
        Number(values?.actualExpendituresAmount1CY1) +
        Number(values?.actualExpendituresAmount2CY1) +
        Number(values?.actualExpendituresAmount3CY1);

    const actualExpendituresAmountTotalCY2 =
        Number(values?.actualExpendituresAmount1CY2) +
        Number(values?.actualExpendituresAmount2CY2) +
        Number(values?.actualExpendituresAmount3CY2);

    // useEffect(() => {
    //     localStorage.setItem("brgyProfilePage9", JSON.stringify(values));
    // }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="">
            <p className="mb-2 font-bold">B. Barangay Actual Expenditures</p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th rowSpan={2} className="border-r">
                            Actual Expenditures
                        </th>
                        <th colSpan={2} className="border-b">
                            Amount
                        </th>
                    </tr>
                    <tr>
                        <th className="border-r">
                            CY
                            <input
                                name="actualExpendituresCY1"
                                value={values?.actualExpendituresCY1}
                                type="number"
                                className="w-16 ml-1 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </th>
                        <th>
                            CY
                            <input
                                name="actualExpendituresCY2"
                                value={values?.actualExpendituresCY2}
                                type="number"
                                className="w-16 ml-1 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">1. Personal Services</td>
                        <td className="border-x">
                            <input
                                name="actualExpendituresAmount1CY1"
                                value={values?.actualExpendituresAmount1CY1}
                                type="number"
                                className="w-full pr-2 text-right focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="actualExpendituresAmount1CY2"
                                value={values?.actualExpendituresAmount1CY2}
                                type="number"
                                className="w-full pr-2 text-right focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            2. Maintenance &amp; other Operating Expenses
                        </td>
                        <td className="border-x">
                            <input
                                name="actualExpendituresAmount2CY1"
                                value={values?.actualExpendituresAmount2CY1}
                                type="number"
                                className="w-full pr-2 text-right focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="actualExpendituresAmount2CY2"
                                value={values?.actualExpendituresAmount2CY2}
                                type="number"
                                className="w-full pr-2 text-right focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">3. Capital Outlay</td>
                        <td className="border-x">
                            <input
                                name="actualExpendituresAmount3CY1"
                                value={values?.actualExpendituresAmount3CY1}
                                type="number"
                                className="w-full pr-2 text-right focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="actualExpendituresAmount3CY2"
                                value={values?.actualExpendituresAmount3CY2}
                                type="number"
                                className="w-full pr-2 text-right focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="font-bold border-t">
                        <td className="text-center">TOTAL</td>
                        <td className="border-x">
                            <input
                                readOnly
                                name="actualExpendituresAmountTotalCY1"
                                value={actualExpendituresAmountTotalCY1}
                                type="number"
                                className="w-full pr-2 text-right cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                readOnly
                                name="actualExpendituresAmountTotalCY2"
                                value={actualExpendituresAmountTotalCY2}
                                type="number"
                                className="w-full pr-2 text-right cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-4 mb-2 font-bold">
                C. Governance Owned Facilities &#40;Pls. Check&#41;
            </p>
            <div>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities1"
                        value={values?.governanceOwnedFacilities1}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Barangay Hall/Multipurpose Center
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities2"
                        value={values?.governanceOwnedFacilities2}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Brgy. Tanod Outpost
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities3"
                        value={values?.governanceOwnedFacilities3}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Barangay Public Market/Talipapa
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities4"
                        value={values?.governanceOwnedFacilities4}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Multipurpose Pavement
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities5"
                        value={values?.governanceOwnedFacilities5}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Barangay Library/Reading Center
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities6"
                        value={values?.governanceOwnedFacilities6}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Agricultural Equipment &#40;i,e., baby cano, etc.&#41;
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities7"
                        value={values?.governanceOwnedFacilities7}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Agricultural Produce Collection and Buying Station
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities8"
                        value={values?.governanceOwnedFacilities8}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Public Cemetery &#40;state ownership&#41;
                    <input
                        name="governanceOwnedFacilities8StateOwnership"
                        value={values?.governanceOwnedFacilities8StateOwnership}
                        type="text"
                        className="w-40 ml-2 border-b border-black focus:outline-none"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities9"
                        value={values?.governanceOwnedFacilities9}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Private Ownership &#40;state ownership&#41;
                    <input
                        name="governanceOwnedFacilities9StateOwnership"
                        value={values?.governanceOwnedFacilities9StateOwnership}
                        type="text"
                        className="w-40 ml-2 border-b border-black focus:outline-none"
                        onChange={handleChange}
                    />
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities10"
                        value={values?.governanceOwnedFacilities10}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Day Care Center
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities11"
                        value={values?.governanceOwnedFacilities11}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Covered Gym
                </p>
                <p>
                    &#40;
                    <input
                        name="governanceOwnedFacilities12"
                        value={values?.governanceOwnedFacilities12}
                        type="text"
                        className="w-4 text-center focus:outline-none"
                        onChange={handleChange}
                    />
                    &#41; Others, specify:
                    <input
                        name="governanceOwnedFacilities12Specify"
                        value={values?.governanceOwnedFacilities12Specify}
                        type="text"
                        className="ml-2 border-b border-black w-52 focus:outline-none"
                        onChange={handleChange}
                    />
                </p>
            </div>

            <p className="mt-4 mb-2 font-bold">
                D. Barangay Government Support Organizations
            </p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th className="w-1/2 border-r">Name</th>
                        <th>Number of Members</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Lupong Tagapamayapa</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum1"
                                value={values?.barangayGovSupportOrgNum1}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">
                            Barangay Development Council
                        </td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum2"
                                value={values?.barangayGovSupportOrgNum2}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">
                            Brgy. Disaster Coordinating Council
                        </td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum3"
                                value={values?.barangayGovSupportOrgNum3}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Sangguniang Kabataan</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum4"
                                value={values?.barangayGovSupportOrgNum4}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Tanod Brigade</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum5"
                                value={values?.barangayGovSupportOrgNum5}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Fire Brigade</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum6"
                                value={values?.barangayGovSupportOrgNum6}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">
                            NGO/PO &#40;pls. Specify&#41;
                            <input
                                name="barangayGovSupportOrgNum7Specify"
                                value={values?.barangayGovSupportOrgNum7Specify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum7"
                                value={values?.barangayGovSupportOrgNum7}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">
                            Others &#40;specify&#41;
                            <input
                                name="barangayGovSupportOrgNum8Specify"
                                value={values?.barangayGovSupportOrgNum8Specify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum8"
                                value={values?.barangayGovSupportOrgNum8}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">BNC</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum9"
                                value={values?.barangayGovSupportOrgNum9}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">BCPC</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum10"
                                value={values?.barangayGovSupportOrgNum10}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">BADAC</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum11"
                                value={values?.barangayGovSupportOrgNum11}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">BPOC</td>
                        <td>
                            <input
                                name="barangayGovSupportOrgNum12"
                                value={values?.barangayGovSupportOrgNum12}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="flex mt-20 font-bold">
                <div className="mr-28">
                    <p className="mb-10">Prepared by:</p>
                    <div className="flex flex-col items-center">
                        <input
                            name="signatureOverPrintedName"
                            value={values?.signatureOverPrintedName}
                            type="text"
                            className="w-56 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <p>Signature over Printed Name</p>
                        <input
                            name="position"
                            value={values?.position}
                            type="text"
                            className="w-56 mt-6 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <p>Position</p>
                        <input
                            name="date1"
                            value={values?.date1}
                            type="text"
                            className="w-56 mt-6 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <p>Date</p>
                    </div>
                </div>
                <div>
                    <p className="mb-10">Certified Correct:</p>
                    <div className="flex flex-col items-center">
                        <input
                            name="barangayCaptain"
                            value={values?.barangayCaptain}
                            type="text"
                            className="w-56 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <p>Barangay Captain</p>
                        <input
                            name="date2"
                            value={values?.date2}
                            type="text"
                            className="w-56 mt-6 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <p>Date</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmissionBarangayProfilePage9;
