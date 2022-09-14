import React, { useEffect, useState } from "react";
import Axios from "axios";

function SubmissionBarangayProfilePage9({ values, handleChange }) {
    // const [values, setValues] = useState(getFormValues);

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
                    <p className="mb-10">Encoded by:</p>
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
