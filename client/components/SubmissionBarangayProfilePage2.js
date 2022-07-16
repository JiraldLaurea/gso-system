import React, { useEffect, useRef, useState } from "react";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage2");
        if (!storedValues)
            return {
                dateLastElection: "",
                numRegisteredVoters: 0,
                numPredominantVoters: 0,
                numPrecincts: 0,
                majorSourcesLivelihood: "",
                totalSelfEmployed: 0,
                totalDriver: 0,
                totalEmployee: 0,
                totalTrisikadDriver: 0,
                totalTeacher: 0,
                totalFishermanFarmer: 0,
                totalOFWSeaman: 0,
                totalVendor: 0,
                totalMedicalProfession: 0,
                totalDressmakerTailor: 0,
                totalCarpenterPlumber: 0,
                totalBarbersHairdresser: 0,
                totalLaborerOddJobs: 0,
                totalBusinessman: 0,
                totalJanitorGardener: 0,
                totalBeautician: 0,
                totalSecretary: 0,
                totalElectricianTechnician: 0,
                totalSalesClerk: 0,
                totalOthers: 0,
                totalOthersSpecify: "",
                totalOneToTen: 0,
                totalElevenToTwenty: 0,
                totalGrand: 0,
                employmentMale1: 0,
                employmentMale2: 0,
                employmentMale3: 0,
                employmentMale4: 0,
                employmentMale5: 0,
                employmentMale6: 0,
                employmentMale7: 0,
                employmentMale8: 0,
                employmentMale9: 0,
                employmentMale10: 0,
                employmentMale11: 0,
                employmentFemale10: 0,
                employmentFemale11: 0,
                employmentFemale1: 0,
                employmentFemale2: 0,
                employmentFemale3: 0,
                employmentFemale4: 0,
                employmentFemale5: 0,
                employmentFemale6: 0,
                employmentFemale7: 0,
                employmentFemale8: 0,
                employmentFemale9: 0,
                employmentFemale10: 0,
                employmentFemale11: 0,
                employmentTotalMale: 0,
                employmentTotalFemale: 0,
                monthlyIncome1: 0,
                monthlyIncome2: 0,
                monthlyIncome3: 0,
                monthlyIncome4: 0,
                monthlyIncome5: 0,
                monthlyIncome6: 0,
                monthlyIncome7: 0,
                monthlyIncome8: 0,
                monthlyIncome9: 0,
                monthlyIncome10: 0,
                monthlyIncome11: 0,
                monthlyIncome12: 0,
                monthlyIncome13: 0,
                monthlyIncome14: 0,
                monthlyIncome15: 0,
                monthlyIncomeGrandTotal: 0,
                farmingTechnique: "",
                methodUsed: "",
                annualIncomeFarmerTenant: 0,
                cropsRice: 0,
                cropsVegetableCorn: 0,
                cropsRiceYieldYearKg: 0,
                cropsVegetableCornYieldYearKg: 0,
                numFarmersTenantsRice: 0,
                numFarmersTenantsVegetableCorn: 0,
                cropsProduced1: "",
                cropsProduced1Number: 0,
                cropsProduced1YieldYear: 0,
                cropsProduced1FarmersTenants: 0,
                agriFacilityRicemills: 0,
                agriFacilityCono: 0,
                agriFacilityKiskisan: 0,
                agriFacilityWarehouse: 0,
                agriFacilityBuyingStations: 0,
                agriFacilityTractors: 0,
                agriFacilityOthers: 0,
                agriFacilityOthersSpecify: "",
                irrigationSystem1: "",
                irrigationSystem1ServicesArea: "",
                irrigationSystem1NumFarmers: 0,
                irrigationSystem1ThrougoutTheYear: "",
                irrigationSystem1TwiceAYear: "",
                irrigationSystem1OnceAYear: "",
                irrigationSystem2: "",
                irrigationSystem2ServicesArea: "",
                irrigationSystem2NumFarmers: 0,
                irrigationSystem2ThrougoutTheYear: "",
                irrigationSystem2TwiceAYear: "",
                irrigationSystem2OnceAYear: "",
                irrigationSystem3: "",
                irrigationSystem3ServicesArea: "",
                irrigationSystem3NumFarmers: 0,
                irrigationSystem3ThrougoutTheYear: "",
                irrigationSystem3TwiceAYear: "",
                irrigationSystem3OnceAYear: "",
            };

        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage2() {
    const [values, setValues] = useState(getFormValues);
    // const { user, authenticated, loading } = useAuthState();
    const contentRef = useRef(null);

    const totalOneToTen =
        Number(values?.totalSelfEmployed) +
        Number(values?.totalEmployee) +
        Number(values?.totalTeacher) +
        Number(values?.totalOFWSeaman) +
        Number(values?.totalMedicalProfession) +
        Number(values?.totalCarpenterPlumber) +
        Number(values?.totalLaborerOddJobs) +
        Number(values?.totalJanitorGardener) +
        Number(values?.totalSecretary) +
        Number(values?.totalSalesClerk);

    const totalElevenToTwenty =
        Number(values?.totalDriver) +
        Number(values?.totalTrisikadDriver) +
        Number(values?.totalFishermanFarmer) +
        Number(values?.totalVendor) +
        Number(values?.totalDressmakerTailor) +
        Number(values?.totalBarbersHairdresser) +
        Number(values?.totalBusinessman) +
        Number(values?.totalBeautician) +
        Number(values?.totalElectricianTechnician) +
        Number(values?.totalOthers);

    const employmentTotalMale =
        Number(values?.employmentMale1) +
        Number(values?.employmentMale2) +
        Number(values?.employmentMale3) +
        Number(values?.employmentMale4) +
        Number(values?.employmentMale5) +
        Number(values?.employmentMale6) +
        Number(values?.employmentMale7) +
        Number(values?.employmentMale8) +
        Number(values?.employmentMale9) +
        Number(values?.employmentMale10) +
        Number(values?.employmentMale11);

    const employmentTotalFemale =
        Number(values?.employmentFemale1) +
        Number(values?.employmentFemale2) +
        Number(values?.employmentFemale3) +
        Number(values?.employmentFemale4) +
        Number(values?.employmentFemale5) +
        Number(values?.employmentFemale6) +
        Number(values?.employmentFemale7) +
        Number(values?.employmentFemale8) +
        Number(values?.employmentFemale9) +
        Number(values?.employmentFemale10) +
        Number(values?.employmentFemale11);

    const monthlyIncomeGrandTotal =
        Number(values?.monthlyIncome1) +
        Number(values?.monthlyIncome2) +
        Number(values?.monthlyIncome3) +
        Number(values?.monthlyIncome4) +
        Number(values?.monthlyIncome5) +
        Number(values?.monthlyIncome6) +
        Number(values?.monthlyIncome7) +
        Number(values?.monthlyIncome8) +
        Number(values?.monthlyIncome9) +
        Number(values?.monthlyIncome10) +
        Number(values?.monthlyIncome11) +
        Number(values?.monthlyIncome12) +
        Number(values?.monthlyIncome13) +
        Number(values?.monthlyIncome14) +
        Number(values?.monthlyIncome15);

    useEffect(() => {
        localStorage.setItem("brgyProfilePage2", JSON.stringify(values));
    }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <p className="font-bold">H. Election Data</p>
                    <div className="ml-4">
                        <p className="my-[1px]">1. No. Of Registered Voters</p>
                        <p className="mb-[1px]">
                            2. No. Of Predominantly Voters who actually voted
                        </p>
                        <p className="mb-[1px]">3. No. Of Precincts</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold">
                        Date of Last Election:{" "}
                        <input
                            name="dateLastElection"
                            value={values?.dateLastElection}
                            type="text"
                            className="w-32 font-normal border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                    </p>
                    <div className="flex flex-col">
                        <input
                            name="numRegisteredVoters"
                            value={values?.numRegisteredVoters}
                            type="text"
                            className="w-32 border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            name="numPredominantVoters"
                            value={values?.numPredominantVoters}
                            type="text"
                            className="w-32 border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            name="numPrecincts"
                            value={values?.numPrecincts}
                            type="text"
                            className="w-32 border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <p className="my-4 font-bold">II. ECONOMIC CONDITION</p>
            <p className="mb-1 font-bold">
                A. Major Sources of Livelihood: &#40;prioritized&#41;
            </p>
            <input
                name="majorSourcesLivelihood"
                value={values?.majorSourcesLivelihood}
                type="text"
                className="ml-4 border-b border-black w-96 focus:outline-none"
                onChange={handleChange}
            />
            <p className="mt-4 mb-2 ml-8 font-bold">A.1 Occupation</p>
            <table className="text-xs border">
                <thead>
                    <tr className="font-bold text-center">
                        <td className="border-r">
                            OCCUPATION &#40;Type/Class of Work/Profession&#41;
                        </td>
                        <td>Total Number</td>
                        <td className="border-x">
                            OCCUPATION &#40;Type/Class of Work/Profession&#41;
                        </td>
                        <td>Total Number</td>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            1. Self-employed &#40;store owner, poultry/livestock
                            raisers, etc.&#41;
                        </td>
                        <td className="text-center">
                            <input
                                name="totalSelfEmployed"
                                value={values?.totalSelfEmployed}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            11. Driver &#40;taxi, PUJ, Motorcycle, Truck&#41;
                        </td>
                        <td className="text-center">
                            <input
                                name="totalDriver"
                                value={values?.totalDriver}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            2. Employee &#40;public/private&#41;
                        </td>
                        <td className="text-center">
                            <input
                                name="totalEmployee"
                                value={values?.totalEmployee}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">12. Trisikad Driver</td>
                        <td className="text-center">
                            <input
                                name="totalTrisikadDriver"
                                value={values?.totalTrisikadDriver}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            3. Teacher &#40;private/public&#41;
                        </td>
                        <td className="text-center">
                            <input
                                name="totalTeacher"
                                value={values?.totalTeacher}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">13. Fisherman/farmer</td>
                        <td className="text-center">
                            <input
                                name="totalFishermanFarmer"
                                value={values?.totalFishermanFarmer}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">4. OFW/Seaman</td>
                        <td className="text-center">
                            <input
                                name="totalOFWSeaman"
                                value={values?.totalOFWSeaman}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            14. Vendor &#40;Fish, Vegetable, Cook Food,
                            etc.&#41;
                        </td>
                        <td className="text-center">
                            <input
                                name="totalVendor"
                                value={values?.totalVendor}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            5. Nurse/Doctor/Medical related Profession
                        </td>
                        <td className="text-center">
                            <input
                                name="totalMedicalProfession"
                                value={values?.totalMedicalProfession}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">15. Dressmaker/Tailor</td>
                        <td className="text-center">
                            <input
                                name="totalDressmakerTailor"
                                value={values?.totalDressmakerTailor}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            6. Carpenter/Construction Worker/Plumber
                        </td>
                        <td className="text-center">
                            <input
                                name="totalCarpenterPlumber"
                                value={values?.totalCarpenterPlumber}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            16. Barbers/Hairdresser
                        </td>
                        <td className="text-center">
                            <input
                                name="totalBarbersHairdresser"
                                value={values?.totalBarbersHairdresser}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">7. Laborer/odd Jobs</td>
                        <td className="text-center">
                            <input
                                name="totalLaborerOddJobs"
                                value={values?.totalLaborerOddJobs}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">17. Businessman/Woman</td>
                        <td className="text-center">
                            <input
                                name="totalBusinessman"
                                value={values?.totalBusinessman}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">8. Janitor/Gardener</td>
                        <td className="text-center">
                            <input
                                name="totalJanitorGardener"
                                value={values?.totalJanitorGardener}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            18. Beautician/Make-up Artist
                        </td>
                        <td className="text-center">
                            <input
                                name="totalBeautician"
                                value={values?.totalBeautician}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            9. Secretary/Clerk/Programmer
                        </td>
                        <td className="text-center">
                            <input
                                name="totalSecretary"
                                value={values?.totalSecretary}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            19. Electrician/Technician
                        </td>
                        <td className="text-center">
                            <input
                                name="totalElectricianTechnician"
                                value={values?.totalElectricianTechnician}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="text-left border-t">
                        <td className="pl-2 border-r">
                            10. Sales Lady/Sales Clerk/Receptionist
                        </td>
                        <td className="text-center">
                            <input
                                name="totalSalesClerk"
                                value={values?.totalSalesClerk}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            20. Others &#40;pls. Specify&#41;
                            <input
                                name="totalOthersSpecify"
                                value={values?.totalOthersSpecify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="text-center">
                            <input
                                name="totalOthers"
                                value={values?.totalOthers}
                                type="text"
                                className="w-10 text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r">Total</td>
                        <td>
                            <input
                                readOnly
                                name="totalMale"
                                value={Number(totalOneToTen)}
                                type="text"
                                className="w-10 text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x"></td>
                        <td>
                            <input
                                readOnly
                                name="totalMale"
                                value={Number(totalElevenToTwenty)}
                                type="text"
                                className="w-10 text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="font-bold border-t font">
                            GRAND TOTAL:
                            <input
                                readOnly
                                name="totalGrand"
                                value={
                                    Number(totalOneToTen) +
                                    Number(totalElevenToTwenty)
                                }
                                type="text"
                                className="w-16 text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex mt-4 mb-1 font-bold">
                <p className="mr-6">A.2 Employment By Age Group and Sex</p>
                <p>A.3 Income/Salary</p>
            </div>
            <div className="flex mb-2">
                <table className="w-full max-w-[200px] text-xs text-center border">
                    <thead className="font-bold ">
                        <tr>
                            <td rowSpan={2} className="border-r">
                                Age Group
                            </td>
                            <td colSpan={2} className="border-b ">
                                Sex
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r">Male</td>
                            <td>Female</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="border-r">15-19</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale1"
                                    value={values?.employmentMale1}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale1"
                                    value={values?.employmentFemale1}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">20-24</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale2"
                                    value={values?.employmentMale2}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale2"
                                    value={values?.employmentFemale2}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">25-29</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale3"
                                    value={values?.employmentMale3}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale3"
                                    value={values?.employmentFemale3}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">30-34</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale4"
                                    value={values?.employmentMale4}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale4"
                                    value={values?.employmentFemale4}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">35-39</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale5"
                                    value={values?.employmentMale5}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale5"
                                    value={values?.employmentFemale5}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">40-44</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale6"
                                    value={values?.employmentMale6}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale6"
                                    value={values?.employmentFemale6}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">45-49</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale7"
                                    value={values?.employmentMale7}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale7"
                                    value={values?.employmentFemale7}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">50-54</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale8"
                                    value={values?.employmentMale8}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale8"
                                    value={values?.employmentFemale8}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">55-59</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale9"
                                    value={values?.employmentMale9}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale9"
                                    value={values?.employmentFemale9}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">60-64</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale10"
                                    value={values?.employmentMale10}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale10"
                                    value={values?.employmentFemale10}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">65 and over</td>
                            <td className="border-r">
                                <input
                                    name="employmentMale11"
                                    value={values?.employmentMale11}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="employmentFemale11"
                                    value={values?.employmentFemale11}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="font-bold border-r">TOTAL</td>
                            <td className="border-r">
                                <input
                                    readOnly
                                    name="employmentTotalMale"
                                    value={employmentTotalMale}
                                    type="text"
                                    className="w-10 text-center cursor-default focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    readOnly
                                    name="employmentTotalFemale"
                                    value={employmentTotalFemale}
                                    type="text"
                                    className="w-10 text-center cursor-default focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="ml-20 text-xs border">
                    <thead className="font-bold text-center border-b">
                        <tr>
                            <td>Monthly Income/Salary</td>
                            <td className="border-x">No. HHS</td>
                            <td></td>
                            <td className="border-x">Monthly Income/Salary</td>
                            <td className="border-r">No. HHS</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr className="border-t">
                            <td className="border-r">Less than 2,000</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome1"
                                    value={values?.monthlyIncome1}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">14,000 - 19,999</td>
                            <td>
                                <input
                                    name="monthlyIncome2"
                                    value={values?.monthlyIncome2}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">2,000 - 3,999</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome3"
                                    value={values?.monthlyIncome3}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">20,000 - 24,999</td>
                            <td>
                                <input
                                    name="monthlyIncome4"
                                    value={values?.monthlyIncome4}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">4,000 - 5,999</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome5"
                                    value={values?.monthlyIncome5}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">25,000 - 29,999</td>
                            <td>
                                <input
                                    name="monthlyIncome6"
                                    value={values?.monthlyIncome6}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">6,000 - 7,999</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome7"
                                    value={values?.monthlyIncome7}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">30,000 - 34,999</td>
                            <td>
                                <input
                                    name="monthlyIncome8"
                                    value={values?.monthlyIncome8}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">8,000 - 9,999</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome9"
                                    value={values?.monthlyIncome9}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">35,000 - 39,999</td>
                            <td>
                                <input
                                    name="monthlyIncome10"
                                    value={values?.monthlyIncome10}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">10,000 - 11,999</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome11"
                                    value={values?.monthlyIncome11}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">40,000 - 44,999</td>
                            <td>
                                <input
                                    name="monthlyIncome12"
                                    value={values?.monthlyIncome12}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">12,000 - 13,999</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome13"
                                    value={values?.monthlyIncome13}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>

                            <td className="border-r">45,000 - 49,999</td>
                            <td>
                                <input
                                    name="monthlyIncome14"
                                    value={values?.monthlyIncome14}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-l"></td>
                        </tr>
                        <tr className="border-t">
                            <td
                                colSpan={3}
                                className="border-b-0 border-l"
                            ></td>
                            <td className="border-x">50,000 &amp; above</td>
                            <td className="border-r">
                                <input
                                    name="monthlyIncome15"
                                    value={values?.monthlyIncome15}
                                    type="text"
                                    className="w-10 text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-r"></td>
                        </tr>
                        <tr className="">
                            <td
                                colSpan={3}
                                className="border-0 border-b border-l"
                            ></td>
                            <td className="font-bold border-t border-x">
                                GRAND TOTAL
                            </td>
                            <td className="border-t border-r">
                                <input
                                    readOnly
                                    name="monthlyIncomeGrandTotal"
                                    value={monthlyIncomeGrandTotal}
                                    type="text"
                                    className="w-10 text-center cursor-default focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="w-10 border-t border-r"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between font-bold">
                <div className="mr-4">
                    <p>B. Agriculture</p>
                    <div className="mb-2 ml-4">
                        <p>B.1 Crop Production</p>
                        <p>B.1.1 Yield and Value of Crops</p>
                    </div>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td className="border-r">Crops Produced</td>
                                <td>No. of Crops Season/Year</td>
                                <td className="w-32 border-x">
                                    Yield/Year &#40;Kg&#41;
                                </td>
                                <td>No. of Farmers/Tenants</td>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            <tr className="border-t">
                                <td className="pl-2 border-r">Rice</td>
                                <td className="text-center">
                                    <input
                                        name="cropsRice"
                                        value={values?.cropsRice}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="cropsRiceYieldYearKg"
                                        value={values?.cropsRiceYieldYearKg}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="numFarmersTenantsRice"
                                        value={values?.numFarmersTenantsRice}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    Vegetable/Corn
                                </td>
                                <td className="text-center">
                                    {" "}
                                    <input
                                        name="cropsVegetableCorn"
                                        value={values?.cropsVegetableCorn}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="cropsVegetableCornYieldYearKg"
                                        value={
                                            values?.cropsVegetableCornYieldYearKg
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="numFarmersTenantsVegetableCorn"
                                        value={
                                            values?.numFarmersTenantsVegetableCorn
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    <input
                                        name="cropsProduced1"
                                        value={values?.cropsProduced1}
                                        type="text"
                                        className="w-24 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="cropsProduced1Number"
                                        value={values?.cropsProduced1Number}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="cropsProduced1YieldYear"
                                        value={values?.cropsProduced1YieldYear}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="cropsProduced1FarmersTenants"
                                        value={
                                            values?.cropsProduced1FarmersTenants
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 mb-2 ml-4 font-bold">
                        B.1.4 Irrigation System
                    </p>
                    <table className="w-full max-w-xs text-xs border">
                        <thead className="font-bold">
                            <tr>
                                <th rowSpan={2}>
                                    Name/Source of Irrigation System
                                </th>
                                <th rowSpan={2} className="border-x">
                                    Services Area &#40;Has&#41;
                                </th>
                                <th rowSpan={2} className="">
                                    No. Of Farmers / Beneficiaries
                                </th>
                                <th colSpan={3} className="border-b border-l">
                                    Availability of Water Supply &#40;Pls.
                                    Check&#41; Once a year
                                </th>
                            </tr>
                            <tr>
                                <th className="border-l">
                                    Throughout the year
                                </th>
                                <th className="border-x">Twice a year</th>
                                <th>Once a year</th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            <tr className="border-t">
                                <td className="font-bold">
                                    <input
                                        name="irrigationSystem1"
                                        value={values?.irrigationSystem1}
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="irrigationSystem1ServicesArea"
                                        value={
                                            values?.irrigationSystem1ServicesArea
                                        }
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="irrigationSystem1NumFarmers"
                                        value={
                                            values?.irrigationSystem1NumFarmers
                                        }
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="irrigationSystem1ThrougoutTheYear"
                                        value={
                                            values?.irrigationSystem1ThrougoutTheYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="irrigationSystem1TwiceAYear"
                                        value={
                                            values?.irrigationSystem1TwiceAYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-l">
                                    <input
                                        name="irrigationSystem1OnceAYear"
                                        value={
                                            values?.irrigationSystem1OnceAYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="font-bold">
                                    <input
                                        name="irrigationSystem2"
                                        value={values?.irrigationSystem2}
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="irrigationSystem2ServicesArea"
                                        value={
                                            values?.irrigationSystem2ServicesArea
                                        }
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="irrigationSystem2NumFarmers"
                                        value={
                                            values?.irrigationSystem2NumFarmers
                                        }
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="irrigationSystem2ThrougoutTheYear"
                                        value={
                                            values?.irrigationSystem2ThrougoutTheYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="irrigationSystem2TwiceAYear"
                                        value={
                                            values?.irrigationSystem2TwiceAYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-l">
                                    <input
                                        name="irrigationSystem2OnceAYear"
                                        value={
                                            values?.irrigationSystem2OnceAYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="font-bold">
                                    <input
                                        name="irrigationSystem3"
                                        value={values?.irrigationSystem3}
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="irrigationSystem3ServicesArea"
                                        value={
                                            values?.irrigationSystem3ServicesArea
                                        }
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="irrigationSystem3NumFarmers"
                                        value={
                                            values?.irrigationSystem3NumFarmers
                                        }
                                        type="text"
                                        className="w-20 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-x">
                                    <input
                                        name="irrigationSystem3ThrougoutTheYear"
                                        value={
                                            values?.irrigationSystem3ThrougoutTheYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center">
                                    <input
                                        name="irrigationSystem3TwiceAYear"
                                        value={
                                            values?.irrigationSystem3TwiceAYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="text-center border-l">
                                    <input
                                        name="irrigationSystem3OnceAYear"
                                        value={
                                            values?.irrigationSystem3OnceAYear
                                        }
                                        type="text"
                                        className="w-10 text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col items-center">
                    <div>
                        <p>B.1.1.2 Farming Techniques / Methods Used</p>
                        <input
                            name="farmingTechnique"
                            value={values?.farmingTechnique}
                            type="text"
                            className="w-48 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            name="methodUsed"
                            value={values?.methodUsed}
                            type="text"
                            className="w-48 text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <p className="my-8">
                            B.1.3 Average Annual Income of Farmers/Tenants:{" "}
                            <input
                                name="annualIncomeFarmerTenant"
                                value={values?.annualIncomeFarmerTenant}
                                type="text"
                                className="w-48 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </p>
                        <p className="mb-2">
                            B.1.5 No. of Agricultural Facilities
                        </p>
                        <table className="text-xs border">
                            <thead className="font-bold text-center">
                                <tr className="border-b">
                                    <th className="border-r">Facilities</th>
                                    <th className="px-1">Number</th>
                                </tr>
                            </thead>
                            <tbody className="font-normal">
                                <tr className="border-b">
                                    <td className="pl-2 border-r">
                                        Ricemills/Cornmills
                                    </td>
                                    <td className="text-center">
                                        {" "}
                                        <input
                                            name="agriFacilityRicemills"
                                            value={
                                                values?.agriFacilityRicemills
                                            }
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="pl-2 border-r">Cono</td>
                                    <td className="text-center">
                                        <input
                                            name="agriFacilityCono"
                                            value={values?.agriFacilityCono}
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="pl-2 border-r">Kiskisan</td>
                                    <td className="text-center">
                                        {" "}
                                        <input
                                            name="agriFacilityKiskisan"
                                            value={values?.agriFacilityKiskisan}
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="pl-2 border-r">Warehouse</td>
                                    <td className="text-center">
                                        <input
                                            name="agriFacilityWarehouse"
                                            value={
                                                values?.agriFacilityWarehouse
                                            }
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="pl-2 border-r">
                                        BuyingStations
                                    </td>
                                    <td className="text-center">
                                        <input
                                            name="agriFacilityBuyingStations"
                                            value={
                                                values?.agriFacilityBuyingStations
                                            }
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="pl-2 border-r">Tractors</td>
                                    <td className="text-center">
                                        <input
                                            name="agriFacilityTractors"
                                            value={values?.agriFacilityTractors}
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className="pl-2 border-r">
                                        Others &#40;specify&#41;
                                        <input
                                            name="agriFacilityOthersSpecify"
                                            value={
                                                values?.agriFacilityOthersSpecify
                                            }
                                            type="text"
                                            className="w-full focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td className="text-center">
                                        <input
                                            name="agriFacilityOthers"
                                            value={values?.agriFacilityOthers}
                                            type="text"
                                            className="w-10 focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmissionBarangayProfilePage2;
