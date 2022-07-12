import React, { useEffect, useState } from "react";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage5");
        if (!storedValues)
            return {
                causeEarlyNeonatalDeathsCY: 0,
                causeEarlyNeonatalCause1: "",
                causeEarlyNeonatalCause2: "",
                causeEarlyNeonatalCause3: "",
                causeEarlyNeonatalNum1: 0,
                causeEarlyNeonatalNum2: 0,
                causeEarlyNeonatalNum3: 0,
                causeMaternalDeathsCY: 0,
                causeMaternalCause1: "",
                causeMaternalCause2: "",
                causeMaternalCause3: "",
                causeMaternalNum1: 0,
                causeMaternalNum2: 0,
                causeMaternalNum3: 0,
                healthClinicsHospitalName1: "",
                healthClinicsHospitalName2: "",
                healthClinicsHospitalName3: "",
                healthClinicsHospitalName4: "",
                healthClinicsHospitalNumGov1: 0,
                healthClinicsHospitalNumGov2: 0,
                healthClinicsHospitalNumGov3: 0,
                healthClinicsHospitalNumGov4: 0,
                healthClinicsHospitalNumPrivate1: 0,
                healthClinicsHospitalNumPrivate2: 0,
                healthClinicsHospitalNumPrivate3: 0,
                healthClinicsHospitalNumPrivate4: 0,
                medicalHealthPersonnelDoctorNumGov: 0,
                medicalHealthPersonnelNurseNumGov: 0,
                medicalHealthPersonnelMidwifeNumGov: 0,
                medicalHealthPersonnelBHWNumGov: 0,
                medicalHealthPersonnelDoctorNumPrivate: 0,
                medicalHealthPersonnelNurseNumPrivate: 0,
                medicalHealthPersonnelMidwifeNumPrivate: 0,
                medicalHealthPersonnelBHWNumPrivate: 0,
                medicalServiceType1: "",
                medicalServiceType2: "",
                medicalServiceType3: "",
                medicalServiceType4: "",
                medicalServiceFrequency1: "",
                medicalServiceFrequency2: "",
                medicalServiceFrequency3: "",
                medicalServiceFrequency4: "",
                toiletAutoFlush: 0,
                toiletWaterSealed: 0,
                toiletAntipolo: 0,
                toiletOthers: 0,
                toiletTotal: 0,
                disposalTrucks: 0,
                disposalOpenPit: 0,
                disposalBurying: 0,
                disposalBurning: 0,
                disposalThrowAnywhere: 0,
                disposalOthersSpecify: "",
                disposalOthers: 0,
                householdOSYThirteenToTwentyOneMale: 0,
                householdOSYThirteenToTwentyOneFemale: 0,
                householdOSYThirteenToTwentyOneTotal: 0,
                householdDisabilitiesMale: 0,
                householdDisabilitiesFemale: 0,
                householdDisabilitiesTotal: 0,
                householdTotalFiveToSeventeen: 0,
                householdTotalFiveToSeventeenHelping: 0,
                householdFiveToSeventeenHelpingName1: "",
                householdFiveToSeventeenHelpingName2: "",
                householdFiveToSeventeenHelpingName3: "",
                householdFiveToSeventeenHelpingName4: "",
                householdFiveToSeventeenHelpingAge1: 0,
                householdFiveToSeventeenHelpingAge2: 0,
                householdFiveToSeventeenHelpingAge3: 0,
                householdFiveToSeventeenHelpingAge4: 0,
                householdFiveToSeventeenHelpingGradeSchool1: "",
                householdFiveToSeventeenHelpingGradeSchool2: "",
                householdFiveToSeventeenHelpingGradeSchool3: "",
                householdFiveToSeventeenHelpingGradeSchool4: "",
                householdFiveToSeventeenHelpingJobActivity1: "",
                householdFiveToSeventeenHelpingJobActivity2: "",
                householdFiveToSeventeenHelpingJobActivity3: "",
                householdFiveToSeventeenHelpingJobActivity4: "",
                householdFiveToSeventeenHelpingIncomeWeekly1: 0,
                householdFiveToSeventeenHelpingIncomeWeekly2: 0,
                householdFiveToSeventeenHelpingIncomeWeekly3: 0,
                householdFiveToSeventeenHelpingIncomeWeekly4: 0,
                householdFiveToSeventeenHelpingProgramsAvailed: "",
            };
        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage5() {
    const [values, setValues] = useState(getFormValues);

    const toiletTotal =
        Number(values?.toiletAutoFlush) +
        Number(values?.toiletWaterSealed) +
        Number(values?.toiletAntipolo) +
        Number(values?.toiletOthers);

    useEffect(() => {
        localStorage.setItem("brgyProfilePage5", JSON.stringify(values));
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
                <div className="max-w-xs">
                    <p className="mb-2 font-bold">
                        A.1.11 Five Leading Causes of Early Neonatal Deaths
                        &#40;0-6 days&#41;, CY{" "}
                        <input
                            name="causeEarlyNeonatalDeathsCY"
                            value={values?.causeEarlyNeonatalDeathsCY}
                            type="text"
                            className="w-10 font-normal text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold">
                            <tr>
                                <th className="border-r">Causes</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="causeEarlyNeonatalCause1"
                                        value={values?.causeEarlyNeonatalCause1}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="causeEarlyNeonatalNum1"
                                        value={values?.causeEarlyNeonatalNum1}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="causeEarlyNeonatalCause2"
                                        value={values?.causeEarlyNeonatalCause2}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="causeEarlyNeonatalNum2"
                                        value={values?.causeEarlyNeonatalNum2}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="causeEarlyNeonatalCause3"
                                        value={values?.causeEarlyNeonatalCause3}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="causeEarlyNeonatalNum3"
                                        value={values?.causeEarlyNeonatalNum3}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-xs">
                    <p className="font-bold mb-7">
                        A.1.12 Causes of Maternal Deaths, CY
                        <input
                            name="causeMaternalDeathsCY"
                            value={values?.causeMaternalDeathsCY}
                            type="text"
                            className="w-10 font-normal text-center border-b border-black focus:outline-none"
                            onChange={handleChange}
                        />
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold">
                            <tr>
                                <th className="border-r">Causes</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="causeMaternalCause1"
                                        value={values?.causeMaternalCause1}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="causeMaternalNum1"
                                        value={values?.causeMaternalNum1}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="causeMaternalCause2"
                                        value={values?.causeMaternalCause2}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="causeMaternalNum2"
                                        value={values?.causeMaternalNum2}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="causeMaternalCause3"
                                        value={values?.causeMaternalCause3}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="causeMaternalNum3"
                                        value={values?.causeMaternalNum3}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <p className="mt-4 font-bold">
                    A.2 Health Facilities and Services
                </p>
                <p className="mb-2 ml-4 font-bold">
                    A.2.1 Medical/Health Facilities, Services and Personnel
                </p>
                <table className="w-full text-xs border">
                    <thead className="font-bold">
                        <tr>
                            <th rowSpan={2} className="border-r">
                                Name of Health/Clinics/Hospital
                            </th>
                            <th colSpan={2} className="border-b">
                                Number
                            </th>
                            <th rowSpan={2} className="border-x">
                                Type of Medical Health Personnel
                            </th>
                            <th colSpan={2} className="border-b border-r">
                                Number
                            </th>
                            <th colSpan={2} className="border-b">
                                Services Rendered
                            </th>
                        </tr>
                        <tr>
                            <th className="border-r">Gov't</th>
                            <th>Private</th>
                            <th>Gov't</th>
                            <th className="border-x">Private</th>
                            <th className="border-r">Type</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody className="font-normal">
                        <tr className="border-t">
                            <td>
                                <input
                                    name="healthClinicsHospitalName1"
                                    value={values?.healthClinicsHospitalName1}
                                    type="text"
                                    className="w-full pl-2 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="healthClinicsHospitalNumGov1"
                                    value={values?.healthClinicsHospitalNumGov1}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="healthClinicsHospitalNumPrivate1"
                                    value={
                                        values?.healthClinicsHospitalNumPrivate1
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-x">Doctor</td>
                            <td>
                                <input
                                    name="medicalHealthPersonnelDoctorNumGov"
                                    value={
                                        values?.medicalHealthPersonnelDoctorNumGov
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="medicalHealthPersonnelDoctorNumPrivate"
                                    value={
                                        values?.medicalHealthPersonnelDoctorNumPrivate
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-r">
                                <input
                                    name="medicalServiceType1"
                                    value={values?.medicalServiceType1}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="medicalServiceFrequency1"
                                    value={values?.medicalServiceFrequency1}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td>
                                <input
                                    name="healthClinicsHospitalName2"
                                    value={values?.healthClinicsHospitalName2}
                                    type="text"
                                    className="w-full pl-2 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="healthClinicsHospitalNumGov2"
                                    value={values?.healthClinicsHospitalNumGov2}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="healthClinicsHospitalNumPrivate2"
                                    value={
                                        values?.healthClinicsHospitalNumPrivate2
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-x">Nurse</td>
                            <td>
                                <input
                                    name="medicalHealthPersonnelNurseNumGov"
                                    value={
                                        values?.medicalHealthPersonnelNurseNumGov
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="medicalHealthPersonnelNurseNumPrivate"
                                    value={
                                        values?.medicalHealthPersonnelNurseNumPrivate
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-r">
                                <input
                                    name="medicalServiceType2"
                                    value={values?.medicalServiceType2}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="medicalServiceFrequency2"
                                    value={values?.medicalServiceFrequency2}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td>
                                <input
                                    name="healthClinicsHospitalName3"
                                    value={values?.healthClinicsHospitalName3}
                                    type="text"
                                    className="w-full pl-2 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="healthClinicsHospitalNumGov3"
                                    value={values?.healthClinicsHospitalNumGov3}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="healthClinicsHospitalNumPrivate3"
                                    value={
                                        values?.healthClinicsHospitalNumPrivate3
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-x">Midwife</td>
                            <td>
                                <input
                                    name="medicalHealthPersonnelMidwifeNumGov"
                                    value={
                                        values?.medicalHealthPersonnelMidwifeNumGov
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="medicalHealthPersonnelMidwifeNumPrivate"
                                    value={
                                        values?.medicalHealthPersonnelMidwifeNumPrivate
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-r">
                                <input
                                    name="medicalServiceType3"
                                    value={values?.medicalServiceType3}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="medicalServiceFrequency3"
                                    value={values?.medicalServiceFrequency3}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td>
                                <input
                                    name="healthClinicsHospitalName4"
                                    value={values?.healthClinicsHospitalName4}
                                    type="text"
                                    className="w-full pl-2 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="healthClinicsHospitalNumGov4"
                                    value={values?.healthClinicsHospitalNumGov4}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="healthClinicsHospitalNumPrivate4"
                                    value={
                                        values?.healthClinicsHospitalNumPrivate4
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-x">BHW</td>
                            <td>
                                <input
                                    name="medicalHealthPersonnelBHWNumGov"
                                    value={
                                        values?.medicalHealthPersonnelBHWNumGov
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="medicalHealthPersonnelBHWNumPrivate"
                                    value={
                                        values?.medicalHealthPersonnelBHWNumPrivate
                                    }
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-r">
                                <input
                                    name="medicalServiceType4"
                                    value={values?.medicalServiceType4}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="medicalServiceFrequency4"
                                    value={values?.medicalServiceFrequency4}
                                    type="text"
                                    className="pl-2 w-36 focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-4">
                <div className="w-full max-w-xs">
                    <p className="mb-2 font-bold">A.3 Toilet Facilities</p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td className="border-r">Type of Toilet</td>
                                <td className="w-20">No. of household</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    1. Automatic Flush
                                </td>
                                <td>
                                    <input
                                        name="toiletAutoFlush"
                                        value={values?.toiletAutoFlush}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    2. Water Sealed &#40;Porcelain/Cement&#41;
                                </td>
                                <td>
                                    <input
                                        name="toiletWaterSealed"
                                        value={values?.toiletWaterSealed}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    3. Antipolo/closed Pit
                                </td>
                                <td>
                                    <input
                                        name="toiletAntipolo"
                                        value={values?.toiletAntipolo}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    4. Others &#40;specify&#41;
                                </td>
                                <td>
                                    <input
                                        name="toiletOthers"
                                        value={values?.toiletOthers}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="font-bold text-center border-r">
                                    TOTAL
                                </td>
                                <td>
                                    <input
                                        readOnly
                                        name="toiletTotal"
                                        value={toiletTotal}
                                        type="text"
                                        className="w-full text-center cursor-default focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-xs">
                    <p className="mb-2 font-bold">
                        A.4 Disposal System of Garbage/Solid Waste
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td className="border-r">DISPOSAL System</td>
                                <td className="w-20">No. of household</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    1. Collected by trucks &#40;Office of Public
                                    Services&#41;
                                </td>
                                <td>
                                    <input
                                        name="disposalTrucks"
                                        value={values?.disposalTrucks}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">2. Open Pit</td>
                                <td>
                                    <input
                                        name="disposalOpenPit"
                                        value={values?.disposalOpenPit}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">3. Burying</td>
                                <td>
                                    <input
                                        name="disposalBurying"
                                        value={values?.disposalBurying}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">4. Burning</td>
                                <td>
                                    <input
                                        name="disposalBurning"
                                        value={values?.disposalBurning}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    5. Throw Anywhere
                                </td>
                                <td>
                                    <input
                                        name="disposalThrowAnywhere"
                                        value={values?.disposalThrowAnywhere}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    6. Others &#40;specify&#41;{" "}
                                    <input
                                        name="disposalOthersSpecify"
                                        value={values?.disposalOthersSpecify}
                                        type="text"
                                        className="w-28 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="disposalOthers"
                                        value={values?.disposalOthers}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-4 font-bold">B. Social Welfare</p>
            <div className="flex justify-between">
                <div className="w-full max-w-xs">
                    <p className="mb-2 font-bold">
                        B.1 Number of Household Members with ages 13-21yrs. who
                        are not in School/Out of School Youth &#40;OSY&#41;
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td colSpan={3}>Household Members</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>&#40;Ages 13-21 yrs&#41;</td>
                            </tr>
                            <tr className="border-t">
                                <td>Male</td>
                                <td className="border-x">Female</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td>
                                    <input
                                        name="householdOSYThirteenToTwentyOneMale"
                                        value={
                                            values?.householdOSYThirteenToTwentyOneMale
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="border-x">
                                    <input
                                        name="householdOSYThirteenToTwentyOneFemale"
                                        value={
                                            values?.householdOSYThirteenToTwentyOneFemale
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        readOnly
                                        name="householdOSYThirteenToTwentyOneTotal"
                                        value={
                                            Number(
                                                values?.householdOSYThirteenToTwentyOneMale
                                            ) +
                                            Number(
                                                values?.householdOSYThirteenToTwentyOneFemale
                                            )
                                        }
                                        type="text"
                                        className="w-full text-center cursor-default focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-xs">
                    <p className="mb-2 font-bold">
                        B.2 Number of household members with disabilities
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td colSpan={3}>
                                    Household Members with Disabilities
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td>Male</td>
                                <td className="border-x">Female</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td>
                                    <input
                                        name="householdDisabilitiesMale"
                                        value={
                                            values?.householdDisabilitiesMale
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td className="border-x">
                                    <input
                                        name="householdDisabilitiesFemale"
                                        value={
                                            values?.householdDisabilitiesFemale
                                        }
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        readOnly
                                        name="householdDisabilitiesTotal"
                                        value={
                                            Number(
                                                values?.householdDisabilitiesMale
                                            ) +
                                            Number(
                                                values?.householdDisabilitiesFemale
                                            )
                                        }
                                        type="text"
                                        className="w-full text-center cursor-default focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-4 font-bold">
                B.3 Total Number of Household Members with Ages 5-17 years old{" "}
                <input
                    name="householdTotalFiveToSeventeen"
                    value={values?.householdTotalFiveToSeventeen}
                    type="text"
                    className="w-10 font-normal text-center border-b border-black focus:outline-none"
                    onChange={handleChange}
                />
            </p>
            <p className="ml-4 font-bold">
                B.3.1 Out of 5-17 years old household Members get the number
                members Helping or augmenting family's income{" "}
                <input
                    name="householdTotalFiveToSeventeenHelping"
                    value={values?.householdTotalFiveToSeventeenHelping}
                    type="text"
                    className="w-10 font-normal text-center border-b border-black focus:outline-none"
                    onChange={handleChange}
                />
            </p>
            <p className="mt-4 mb-2 ml-8 font-bold">
                B.3.1.1 Please state their names and other information below:
            </p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <td>Name</td>
                        <td className="border-x">Age</td>
                        <td>Grade/School</td>
                        <td className="border-x">Job/Activity</td>
                        <td>
                            <p>Income</p>
                            <p>&#40;Ave. Weekly&#41;</p>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td>
                            <input
                                name="householdFiveToSeventeenHelpingName1"
                                value={
                                    values?.householdFiveToSeventeenHelpingName1
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingAge1"
                                value={
                                    values?.householdFiveToSeventeenHelpingAge1
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingGradeSchool1"
                                value={
                                    values?.householdFiveToSeventeenHelpingGradeSchool1
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="">
                            <input
                                name="householdFiveToSeventeenHelpingJobActivity1"
                                value={
                                    values?.householdFiveToSeventeenHelpingJobActivity1
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-l">
                            <input
                                name="householdFiveToSeventeenHelpingIncomeWeekly1"
                                value={
                                    values?.householdFiveToSeventeenHelpingIncomeWeekly1
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td>
                            <input
                                name="householdFiveToSeventeenHelpingName2"
                                value={
                                    values?.householdFiveToSeventeenHelpingName2
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingAge2"
                                value={
                                    values?.householdFiveToSeventeenHelpingAge2
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingGradeSchool2"
                                value={
                                    values?.householdFiveToSeventeenHelpingGradeSchool2
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="">
                            <input
                                name="householdFiveToSeventeenHelpingJobActivity2"
                                value={
                                    values?.householdFiveToSeventeenHelpingJobActivity2
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-l">
                            <input
                                name="householdFiveToSeventeenHelpingIncomeWeekly2"
                                value={
                                    values?.householdFiveToSeventeenHelpingIncomeWeekly2
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td>
                            <input
                                name="householdFiveToSeventeenHelpingName3"
                                value={
                                    values?.householdFiveToSeventeenHelpingName3
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingAge3"
                                value={
                                    values?.householdFiveToSeventeenHelpingAge3
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingGradeSchool3"
                                value={
                                    values?.householdFiveToSeventeenHelpingGradeSchool3
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="">
                            <input
                                name="householdFiveToSeventeenHelpingJobActivity3"
                                value={
                                    values?.householdFiveToSeventeenHelpingJobActivity3
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-l">
                            <input
                                name="householdFiveToSeventeenHelpingIncomeWeekly3"
                                value={
                                    values?.householdFiveToSeventeenHelpingIncomeWeekly3
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td>
                            <input
                                name="householdFiveToSeventeenHelpingName4"
                                value={
                                    values?.householdFiveToSeventeenHelpingName4
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingAge4"
                                value={
                                    values?.householdFiveToSeventeenHelpingAge4
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-x">
                            <input
                                name="householdFiveToSeventeenHelpingGradeSchool4"
                                value={
                                    values?.householdFiveToSeventeenHelpingGradeSchool4
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="">
                            <input
                                name="householdFiveToSeventeenHelpingJobActivity4"
                                value={
                                    values?.householdFiveToSeventeenHelpingJobActivity4
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>

                        <td className="border-l">
                            <input
                                name="householdFiveToSeventeenHelpingIncomeWeekly4"
                                value={
                                    values?.householdFiveToSeventeenHelpingIncomeWeekly4
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="mt-2 ml-8">
                <p className="font-bold">
                    B.3.1.2 Program/Services availed by names stated above
                    &#40;e.g: AUSAID, NGO's ECD, others, please specify&#41;
                </p>
                <input
                    name="householdFiveToSeventeenHelpingProgramsAvailed"
                    value={
                        values?.householdFiveToSeventeenHelpingProgramsAvailed
                    }
                    type="text"
                    className="w-full border-b border-black focus:outline-none"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default SubmissionBarangayProfilePage5;
