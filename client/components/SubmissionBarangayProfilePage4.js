import React, { useEffect, useState } from "react";
import Axios from "axios";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage4");
        if (!storedValues)
            return {
                numPaperManufacturing: 0,
                numCockpit: 0,
                numCementManufacturing: 0,
                numFinancialInstitutions: 0,
                numHallowBlocksMaking: 0,
                numRestaurants: 0,
                numMarbleCraft: 0,
                numRealEstate: 0,
                numBlacksmith: 0,
                numNightClubBarMassage: 0,
                numIronMetalCraft: 0,
                numMemorialParks: 0,
                numEngineeringWorkMachineShop: 0,
                numInsurance: 0,
                numJewelryManufacturingGoldsmith: 0,
                numGasolineStation: 0,
                numCeramicsPottery: 0,
                numGeneralServiceContractors: 0,
                numWoodcraft: 0,
                numArrastreServices: 0,
                numEngraving: 0,
                numBodyWorkshop: 0,
                numFashionAccessories: 0,
                numFitnessGym: 0,
                numOthersManufacturing: 0,
                numOthersManufacturingSpecify: "",
                numBeautyParlorBarberShop: 0,
                numCooperativeRiceGrowers: 0,
                numOthersCommercial: 0,
                numOthersCommercialSpecify: "",
                totalNumBirths: 0,
                totalNumDeathsAllCauses: 0,
                totalNumStillBirth: 0,
                totalNumInfantDeaths: 0,
                totalNumEarlyNeonatalDeaths: 0,
                fiveLeadingCausesMortalityCY: 0,
                fiveLeadingMorbidityCY: 0,
                causeCardiovascularDisorder: 0,
                causeCancer: 0,
                causeOldAge: 0,
                causeKidneyFailure: 0,
                causeTB: 0,
                causeFeverFlu: 0,
                causeCough: 0,
                causeAsthma: 0,
                causeHypertension: 0,
                causePTB: 0,
                numMalnourishedChildrenCY: 0,
                totalNumChildWeighted: 0,
                childSUUnderOneYearNum: 0,
                childSUUnderOneYearPercent: 0,
                childSUOneToFourYearsNum: 0,
                childSUOneToFourYearsPercent: 0,
                childSUFiveToSixYearsNum: 0,
                childSUFiveToSixYearsPercent: 0,
                childSUTotalNum: 0,
                childSUPercent: 0,
                childModUUnderOneYearNum: 0,
                childModUUnderOneYearPercent: 0,
                childModUOneToFourYearsNum: 0,
                childModUOneToFourYearsPercent: 0,
                childModUFiveToSixYearsNum: 0,
                childModUFiveToSixYearsPercent: 0,
                childModUTotalNum: 0,
                childModUPercent: 0,
                childMildUUnderOneYearNum: 0,
                childMildUUnderOneYearPercent: 0,
                childMildUOneToFourYearsNum: 0,
                childMildUOneToFourYearsPercent: 0,
                childMildUFiveToSixYearsNum: 0,
                childMildUFiveToSixYearsPercent: 0,
                childMildUTotalNum: 0,
                childMildUPercent: 0,
                childTotalUnderOneYearNum: 0,
                childTotalUnderOneYearPercent: 0,
                childTotalOneToFourYearsNum: 0,
                childTotalOneToFourYearsPercent: 0,
                childTotalFiveToSixYearsNum: 0,
                childTotalFiveToSixYearsPercent: 0,
                childTotalTotalNum: 0,
                childTotalPercent: 0,
                infantLeadingCausesMortalityCY: 0,
                infantLeadingCausesMorbidityCY: 0,
                infantMortalityCause1: "",
                infantMortalityCause2: "",
                infantMortalityCause3: "",
                infantMortalityNum1: 0,
                infantMortalityNum2: 0,
                infantMortalityNum3: 0,
                infantMorbidityFeverNum: 0,
                infantMorbidityCoughNum: 0,
                infantMorbidityMalnutritionNum: 0,
                infantMorbidityDiarrheaNum: 0,
                infantMorbidityTCPrimaryComplexNum: 0,
            };
        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage4({ page4Data }) {
    // const [values, setValues] = useState(getFormValues);
    const [values, setValues] = useState({
        numPaperManufacturing: page4Data.numPaperManufacturing,
        numCockpit: page4Data.numCockpit,
        numCementManufacturing: page4Data.numCementManufacturing,
        numFinancialInstitutions: page4Data.numFinancialInstitutions,
        numHallowBlocksMaking: page4Data.numHallowBlocksMaking,
        numRestaurants: page4Data.numRestaurants,
        numMarbleCraft: page4Data.numMarbleCraft,
        numRealEstate: page4Data.numRealEstate,
        numBlacksmith: page4Data.numBlacksmith,
        numNightClubBarMassage: page4Data.numNightClubBarMassage,
        numIronMetalCraft: page4Data.numIronMetalCraft,
        numMemorialParks: page4Data.numMemorialParks,
        numEngineeringWorkMachineShop: page4Data.numEngineeringWorkMachineShop,
        numInsurance: page4Data.numInsurance,
        numJewelryManufacturingGoldsmith:
            page4Data.numJewelryManufacturingGoldsmith,
        numGasolineStation: page4Data.numGasolineStation,
        numCeramicsPottery: page4Data.numCeramicsPottery,
        numGeneralServiceContractors: page4Data.numGeneralServiceContractors,
        numWoodcraft: page4Data.numWoodcraft,
        numArrastreServices: page4Data.numArrastreServices,
        numEngraving: page4Data.numEngraving,
        numBodyWorkshop: page4Data.numBodyWorkshop,
        numFashionAccessories: page4Data.numFashionAccessories,
        numFitnessGym: page4Data.numFitnessGym,
        numOthersManufacturing: page4Data.numOthersManufacturing,
        numOthersManufacturingSpecify: page4Data.numOthersManufacturingSpecify,
        numBeautyParlorBarberShop: page4Data.numBeautyParlorBarberShop,
        numCooperativeRiceGrowers: page4Data.numCooperativeRiceGrowers,
        numOthersCommercial: page4Data.numOthersCommercial,
        numOthersCommercialSpecify: page4Data.numOthersCommercialSpecify,
        totalNumBirths: page4Data.totalNumBirths,
        totalNumDeathsAllCauses: page4Data.totalNumDeathsAllCauses,
        totalNumStillBirth: page4Data.totalNumStillBirth,
        totalNumInfantDeaths: page4Data.totalNumInfantDeaths,
        totalNumEarlyNeonatalDeaths: page4Data.totalNumEarlyNeonatalDeaths,
        fiveLeadingCausesMortalityCY: page4Data.fiveLeadingCausesMortalityCY,
        fiveLeadingMorbidityCY: page4Data.fiveLeadingMorbidityCY,
        causeCardiovascularDisorder: page4Data.causeCardiovascularDisorder,
        causeCancer: page4Data.causeCancer,
        causeOldAge: page4Data.causeOldAge,
        causeKidneyFailure: page4Data.causeKidneyFailure,
        causeTB: page4Data.causeTB,
        causeFeverFlu: page4Data.causeFeverFlu,
        causeCough: page4Data.causeCough,
        causeAsthma: page4Data.causeAsthma,
        causeHypertension: page4Data.causeHypertension,
        causePTB: page4Data.causePTB,
        numMalnourishedChildrenCY: page4Data.numMalnourishedChildrenCY,
        totalNumChildWeighted: page4Data.totalNumChildWeighted,
        childSUUnderOneYearNum: page4Data.childSUUnderOneYearNum,
        childSUUnderOneYearPercent: page4Data.childSUUnderOneYearPercent,
        childSUOneToFourYearsNum: page4Data.childSUOneToFourYearsNum,
        childSUOneToFourYearsPercent: page4Data.childSUOneToFourYearsPercent,
        childSUFiveToSixYearsNum: page4Data.childSUFiveToSixYearsNum,
        childSUFiveToSixYearsPercent: page4Data.childSUFiveToSixYearsPercent,
        childSUTotalNum: page4Data.childSUTotalNum,
        childSUPercent: page4Data.childSUPercent,
        childModUUnderOneYearNum: page4Data.childModUUnderOneYearNum,
        childModUUnderOneYearPercent: page4Data.childModUUnderOneYearPercent,
        childModUOneToFourYearsNum: page4Data.childModUOneToFourYearsNum,
        childModUOneToFourYearsPercent:
            page4Data.childModUOneToFourYearsPercent,
        childModUFiveToSixYearsNum: page4Data.childModUFiveToSixYearsNum,
        childModUFiveToSixYearsPercent:
            page4Data.childModUFiveToSixYearsPercent,
        childModUTotalNum: page4Data.childModUTotalNum,
        childModUPercent: page4Data.childModUPercent,
        childMildUUnderOneYearNum: page4Data.childMildUUnderOneYearNum,
        childMildUUnderOneYearPercent: page4Data.childMildUUnderOneYearPercent,
        childMildUOneToFourYearsNum: page4Data.childMildUOneToFourYearsNum,
        childMildUOneToFourYearsPercent:
            page4Data.childMildUOneToFourYearsPercent,
        childMildUFiveToSixYearsNum: page4Data.childMildUFiveToSixYearsNum,
        childMildUFiveToSixYearsPercent:
            page4Data.childMildUFiveToSixYearsPercent,
        childMildUTotalNum: page4Data.childMildUTotalNum,
        childMildUPercent: page4Data.childMildUPercent,
        childTotalUnderOneYearNum: page4Data.childTotalUnderOneYearNum,
        childTotalUnderOneYearPercent: page4Data.childTotalUnderOneYearPercent,
        childTotalOneToFourYearsNum: page4Data.childTotalOneToFourYearsNum,
        childTotalOneToFourYearsPercent:
            page4Data.childTotalOneToFourYearsPercent,
        childTotalFiveToSixYearsNum: page4Data.childTotalFiveToSixYearsNum,
        childTotalFiveToSixYearsPercent:
            page4Data.childTotalFiveToSixYearsPercent,
        childTotalTotalNum: page4Data.childTotalTotalNum,
        childTotalPercent: page4Data.childTotalPercent,
        infantLeadingCausesMortalityCY:
            page4Data.infantLeadingCausesMortalityCY,
        infantLeadingCausesMorbidityCY:
            page4Data.infantLeadingCausesMorbidityCY,
        infantMortalityCause1: page4Data.infantMortalityCause1,
        infantMortalityCause2: page4Data.infantMortalityCause2,
        infantMortalityCause3: page4Data.infantMortalityCause3,
        infantMortalityNum1: page4Data.infantMortalityNum1,
        infantMortalityNum2: page4Data.infantMortalityNum2,
        infantMortalityNum3: page4Data.infantMortalityNum3,
        infantMorbidityFeverNum: page4Data.infantMorbidityFeverNum,
        infantMorbidityCoughNum: page4Data.infantMorbidityCoughNum,
        infantMorbidityMalnutritionNum:
            page4Data.infantMorbidityMalnutritionNum,
        infantMorbidityDiarrheaNum: page4Data.infantMorbidityDiarrheaNum,
        infantMorbidityTCPrimaryComplexNum:
            page4Data.infantMorbidityTCPrimaryComplexNum,
    });

    useEffect(() => {
        const updateSubmissionBarangayProfilePage4 = async () => {
            const data = {
                numPaperManufacturing: values.numPaperManufacturing,
                numCockpit: values.numCockpit,
                numCementManufacturing: values.numCementManufacturing,
                numFinancialInstitutions: values.numFinancialInstitutions,
                numHallowBlocksMaking: values.numHallowBlocksMaking,
                numRestaurants: values.numRestaurants,
                numMarbleCraft: values.numMarbleCraft,
                numRealEstate: values.numRealEstate,
                numBlacksmith: values.numBlacksmith,
                numNightClubBarMassage: values.numNightClubBarMassage,
                numIronMetalCraft: values.numIronMetalCraft,
                numMemorialParks: values.numMemorialParks,
                numEngineeringWorkMachineShop:
                    values.numEngineeringWorkMachineShop,
                numInsurance: values.numInsurance,
                numJewelryManufacturingGoldsmith:
                    values.numJewelryManufacturingGoldsmith,
                numGasolineStation: values.numGasolineStation,
                numCeramicsPottery: values.numCeramicsPottery,
                numGeneralServiceContractors:
                    values.numGeneralServiceContractors,
                numWoodcraft: values.numWoodcraft,
                numArrastreServices: values.numArrastreServices,
                numEngraving: values.numEngraving,
                numBodyWorkshop: values.numBodyWorkshop,
                numFashionAccessories: values.numFashionAccessories,
                numFitnessGym: values.numFitnessGym,
                numOthersManufacturing: values.numOthersManufacturing,
                numOthersManufacturingSpecify:
                    values.numOthersManufacturingSpecify,
                numBeautyParlorBarberShop: values.numBeautyParlorBarberShop,
                numCooperativeRiceGrowers: values.numCooperativeRiceGrowers,
                numOthersCommercial: values.numOthersCommercial,
                numOthersCommercialSpecify: values.numOthersCommercialSpecify,
                totalNumBirths: values.totalNumBirths,
                totalNumDeathsAllCauses: values.totalNumDeathsAllCauses,
                totalNumStillBirth: values.totalNumStillBirth,
                totalNumInfantDeaths: values.totalNumInfantDeaths,
                totalNumEarlyNeonatalDeaths: values.totalNumEarlyNeonatalDeaths,
                fiveLeadingCausesMortalityCY:
                    values.fiveLeadingCausesMortalityCY,
                fiveLeadingMorbidityCY: values.fiveLeadingMorbidityCY,
                causeCardiovascularDisorder: values.causeCardiovascularDisorder,
                causeCancer: values.causeCancer,
                causeOldAge: values.causeOldAge,
                causeKidneyFailure: values.causeKidneyFailure,
                causeTB: values.causeTB,
                causeFeverFlu: values.causeFeverFlu,
                causeCough: values.causeCough,
                causeAsthma: values.causeAsthma,
                causeHypertension: values.causeHypertension,
                causePTB: values.causePTB,
                numMalnourishedChildrenCY: values.numMalnourishedChildrenCY,
                totalNumChildWeighted: values.totalNumChildWeighted,
                childSUUnderOneYearNum: values.childSUUnderOneYearNum,
                childSUUnderOneYearPercent: values.childSUUnderOneYearPercent,
                childSUOneToFourYearsNum: values.childSUOneToFourYearsNum,
                childSUOneToFourYearsPercent:
                    values.childSUOneToFourYearsPercent,
                childSUFiveToSixYearsNum: values.childSUFiveToSixYearsNum,
                childSUFiveToSixYearsPercent:
                    values.childSUFiveToSixYearsPercent,
                childSUTotalNum: values.childSUTotalNum,
                childSUPercent: values.childSUPercent,
                childModUUnderOneYearNum: values.childModUUnderOneYearNum,
                childModUUnderOneYearPercent:
                    values.childModUUnderOneYearPercent,
                childModUOneToFourYearsNum: values.childModUOneToFourYearsNum,
                childModUOneToFourYearsPercent:
                    values.childModUOneToFourYearsPercent,
                childModUFiveToSixYearsNum: values.childModUFiveToSixYearsNum,
                childModUFiveToSixYearsPercent:
                    values.childModUFiveToSixYearsPercent,
                childModUTotalNum: values.childModUTotalNum,
                childModUPercent: values.childModUPercent,
                childMildUUnderOneYearNum: values.childMildUUnderOneYearNum,
                childMildUUnderOneYearPercent:
                    values.childMildUUnderOneYearPercent,
                childMildUOneToFourYearsNum: values.childMildUOneToFourYearsNum,
                childMildUOneToFourYearsPercent:
                    values.childMildUOneToFourYearsPercent,
                childMildUFiveToSixYearsNum: values.childMildUFiveToSixYearsNum,
                childMildUFiveToSixYearsPercent:
                    values.childMildUFiveToSixYearsPercent,
                childMildUTotalNum: values.childMildUTotalNum,
                childMildUPercent: values.childMildUPercent,
                childTotalUnderOneYearNum: values.childTotalUnderOneYearNum,
                childTotalUnderOneYearPercent:
                    values.childTotalUnderOneYearPercent,
                childTotalOneToFourYearsNum: values.childTotalOneToFourYearsNum,
                childTotalOneToFourYearsPercent:
                    values.childTotalOneToFourYearsPercent,
                childTotalFiveToSixYearsNum: values.childTotalFiveToSixYearsNum,
                childTotalFiveToSixYearsPercent:
                    values.childTotalFiveToSixYearsPercent,
                childTotalTotalNum: values.childTotalTotalNum,
                childTotalPercent: values.childTotalPercent,
                infantLeadingCausesMortalityCY:
                    values.infantLeadingCausesMortalityCY,
                infantLeadingCausesMorbidityCY:
                    values.infantLeadingCausesMorbidityCY,
                infantMortalityCause1: values.infantMortalityCause1,
                infantMortalityCause2: values.infantMortalityCause2,
                infantMortalityCause3: values.infantMortalityCause3,
                infantMortalityNum1: values.infantMortalityNum1,
                infantMortalityNum2: values.infantMortalityNum2,
                infantMortalityNum3: values.infantMortalityNum3,
                infantMorbidityFeverNum: values.infantMorbidityFeverNum,
                infantMorbidityCoughNum: values.infantMorbidityCoughNum,
                infantMorbidityMalnutritionNum:
                    values.infantMorbidityMalnutritionNum,
                infantMorbidityDiarrheaNum: values.infantMorbidityDiarrheaNum,
                infantMorbidityTCPrimaryComplexNum:
                    values.infantMorbidityTCPrimaryComplexNum,
            };

            await Axios.put(
                "http://localhost:3001/submission/brgyProfilePage4",
                data
            );
        };

        updateSubmissionBarangayProfilePage4();
    }, [values]);

    const childTotalUnderOneYearNum =
        Number(values?.childSUUnderOneYearNum) +
        Number(values?.childModUUnderOneYearNum) +
        Number(values?.childMildUUnderOneYearNum);

    const childTotalUnderOneYearPercent =
        Number(
            values.childSUUnderOneYearPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values.childModUUnderOneYearPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values.childMildUUnderOneYearPercent?.toString().replace(/%/g, "")
        );

    const childTotalOneToFourYearsNum =
        Number(values?.childSUOneToFourYearsNum) +
        Number(values?.childModUOneToFourYearsNum) +
        Number(values?.childMildUOneToFourYearsNum);

    const childTotalOneToFourYearsPercent =
        Number(
            values.childSUOneToFourYearsPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values.childModUOneToFourYearsPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values.childMildUOneToFourYearsPercent?.toString().replace(/%/g, "")
        );

    const childTotalFiveToSixYearsNum =
        Number(values?.childSUFiveToSixYearsNum) +
        Number(values?.childModUFiveToSixYearsNum) +
        Number(values?.childMildUFiveToSixYearsNum);

    const childTotalFiveToSixYearsPercent =
        Number(
            values.childSUFiveToSixYearsPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values.childModUFiveToSixYearsPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values.childMildUFiveToSixYearsPercent?.toString().replace(/%/g, "")
        );

    const childTotalTotalNum =
        Number(values?.childSUTotalNum) +
        Number(values?.childModUTotalNum) +
        Number(values?.childMildUTotalNum);

    const childTotalPercent =
        Number(values.childSUPercent?.toString().replace(/%/g, "")) +
        Number(values.childModUPercent?.toString().replace(/%/g, "")) +
        Number(values.childMildUPercent?.toString().replace(/%/g, ""));

    // useEffect(() => {
    //     localStorage.setItem("brgyProfilePage4", JSON.stringify(values));
    // }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <table className="text-xs border">
                <thead></thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">Paper Manufacturing</td>
                        <td className="border-x">
                            <input
                                name="numPaperManufacturing"
                                value={values?.numPaperManufacturing}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">Cockpit</td>
                        <td>
                            <input
                                name="numCockpit"
                                value={values?.numCockpit}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">Cement Manufacturing</td>
                        <td className="border-x">
                            <input
                                name="numCementManufacturing"
                                value={values?.numCementManufacturing}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Financial Institutions
                        </td>
                        <td>
                            <input
                                name="numFinancialInstitutions"
                                value={values?.numFinancialInstitutions}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Hallow Blocks Making</td>
                        <td className="border-x">
                            <input
                                name="numHallowBlocksMaking"
                                value={values?.numHallowBlocksMaking}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Restaurants/Carinderia
                        </td>
                        <td>
                            <input
                                name="numRestaurants"
                                value={values?.numRestaurants}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Marble Craft</td>
                        <td className="border-x">
                            <input
                                name="numMarbleCraft"
                                value={values?.numMarbleCraft}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">Real Estate</td>
                        <td>
                            <input
                                name="numRealEstate"
                                value={values?.numRealEstate}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Blacksmith</td>
                        <td className="border-x">
                            <input
                                name="numBlacksmith"
                                value={values?.numBlacksmith}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Night Club/Bar and Massage Clinics
                        </td>
                        <td>
                            <input
                                name="numNightClubBarMassage"
                                value={values?.numNightClubBarMassage}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Iron and Metal Craft</td>
                        <td className="border-x">
                            <input
                                name="numIronMetalCraft"
                                value={values?.numIronMetalCraft}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">Memorial Parks</td>
                        <td>
                            <input
                                name="numMemorialParks"
                                value={values?.numMemorialParks}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Engineering Work Machine Shop</td>
                        <td className="border-x">
                            <input
                                name="numEngineeringWorkMachineShop"
                                value={values?.numEngineeringWorkMachineShop}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Insurance/Dealer in Securities
                        </td>
                        <td>
                            <input
                                name="numInsurance"
                                value={values?.numInsurance}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">
                            Jewelry Manufacturing and Goldsmith
                        </td>
                        <td className="border-x">
                            <input
                                name="numJewelryManufacturingGoldsmith"
                                value={values?.numJewelryManufacturingGoldsmith}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">Gasoline Station</td>
                        <td>
                            <input
                                name="numGasolineStation"
                                value={values?.numGasolineStation}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Ceramics Pottery</td>
                        <td className="border-x">
                            <input
                                name="numCeramicsPottery"
                                value={values?.numCeramicsPottery}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            General Service/Contractors
                        </td>
                        <td>
                            <input
                                name="numGeneralServiceContractors"
                                value={values?.numGeneralServiceContractors}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Woodcraft</td>
                        <td className="border-x">
                            <input
                                name="numWoodcraft"
                                value={values?.numWoodcraft}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">Arrastre Services</td>
                        <td>
                            <input
                                name="numArrastreServices"
                                value={values?.numArrastreServices}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Engraving</td>
                        <td className="border-x">
                            <input
                                name="numEngraving"
                                value={values?.numEngraving}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Body Workshop/Physical
                        </td>
                        <td>
                            <input
                                name="numBodyWorkshop"
                                value={values?.numBodyWorkshop}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    <tr className="border-t">
                        <td className="pl-2">Fashion Accessories</td>
                        <td className="border-x">
                            <input
                                name="numFashionAccessories"
                                value={values?.numFashionAccessories}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">Fitness Gym</td>
                        <td>
                            <input
                                name="numFitnessGym"
                                value={values?.numFitnessGym}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            Others: &#40;Pls. Specify&#41;{" "}
                            <input
                                name="numOthersManufacturingSpecify"
                                value={values?.numOthersManufacturingSpecify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="numOthersManufacturing"
                                value={values?.numOthersManufacturing}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Beauty Parlor/Barber Shop
                        </td>
                        <td>
                            <input
                                name="numBeautyParlorBarberShop"
                                value={values?.numBeautyParlorBarberShop}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">Cooperative Rice Growers</td>
                        <td className="border-x">
                            <input
                                name="numCooperativeRiceGrowers"
                                value={values?.numCooperativeRiceGrowers}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-r">
                            Others: &#40;Pls. Specify&#41;
                            <input
                                name="numOthersCommercialSpecify"
                                value={values?.numOthersCommercialSpecify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="numOthersCommercial"
                                value={values?.numOthersCommercial}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="my-4 font-bold">III. SOCIAL CONDITION</p>

            <div className="ml-4 font-bold">
                <p>A. Health</p>
                <p className="ml-4">A.1 Health Status</p>
                <table className="w-full max-w-xl ml-8 text-xs font-normal">
                    <tbody>
                        <tr>
                            <td>A.1.1 Total Number of Births</td>
                            <td>
                                <input
                                    name="totalNumBirths"
                                    value={values?.totalNumBirths}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                A.1.2 Total Number of Deaths &#40;All
                                Causes&#41;
                            </td>
                            <td>
                                <input
                                    name="totalNumDeathsAllCauses"
                                    value={values?.totalNumDeathsAllCauses}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>A.1.3 Total Number of Still Birth</td>
                            <td>
                                <input
                                    name="totalNumStillBirth"
                                    value={values?.totalNumStillBirth}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>A.1.4 Total Number of Infant Deaths</td>
                            <td>
                                <input
                                    name="totalNumInfantDeaths"
                                    value={values?.totalNumInfantDeaths}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                A.1.5 Total Number of Early Neonatal Deaths
                                &#40;0-6 days&#41;
                            </td>
                            <td>
                                <input
                                    name="totalNumEarlyNeonatalDeaths"
                                    value={values?.totalNumEarlyNeonatalDeaths}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 font-bold">
                <span className="mr-4">
                    A.1.6 Five Leading Causes of Mortality, CY
                    <input
                        name="fiveLeadingCausesMortalityCY"
                        value={values?.fiveLeadingCausesMortalityCY}
                        type="text"
                        className="w-10 font-normal text-center border-b border-black focus:outline-none"
                        onChange={handleChange}
                    />
                </span>
                <span>
                    A.1.7 Five Leading Morbidity, CY
                    <input
                        name="fiveLeadingMorbidityCY"
                        value={values?.fiveLeadingMorbidityCY}
                        type="text"
                        className="w-10 font-normal text-center border-b border-black focus:outline-none"
                        onChange={handleChange}
                    />
                </span>
            </div>

            <div className="flex justify-between mt-4">
                <table className="w-full max-w-xs text-xs border">
                    <thead className="font-bol">
                        <tr>
                            <th className="border-r">Causes</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-2 border-r">
                                Cardiovascular Disorder
                            </td>
                            <td>
                                <input
                                    name="causeCardiovascularDisorder"
                                    value={values?.causeCardiovascularDisorder}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">Cancer</td>
                            <td>
                                <input
                                    name="causeCancer"
                                    value={values?.causeCancer}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">Old age</td>
                            <td>
                                <input
                                    name="causeOldAge"
                                    value={values?.causeOldAge}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">Kidney Failure</td>
                            <td>
                                <input
                                    name="causeKidneyFailure"
                                    value={values?.causeKidneyFailure}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">TB</td>
                            <td>
                                <input
                                    name="causeTB"
                                    value={values?.causeTB}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="w-full max-w-xs text-xs border">
                    <thead className="font-bol">
                        <tr>
                            <th className="border-r">Causes</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="px-2 border-r">Fever/Flu</td>
                            <td>
                                <input
                                    name="causeFeverFlu"
                                    value={values?.causeFeverFlu}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">Cough</td>
                            <td>
                                <input
                                    name="causeCough"
                                    value={values?.causeCough}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">Asthma</td>
                            <td>
                                <input
                                    name="causeAsthma"
                                    value={values?.causeAsthma}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">Hypertension</td>
                            <td>
                                <input
                                    name="causeHypertension"
                                    value={values?.causeHypertension}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-2 border-r">PTB</td>
                            <td>
                                <input
                                    name="causePTB"
                                    value={values?.causePTB}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mt-4 mb-2 font-bold">
                A.1.8 Number of Malnourished Children, CY
                <input
                    name="numMalnourishedChildrenCY"
                    value={values?.numMalnourishedChildrenCY}
                    type="number"
                    className="w-10 font-normal text-center border-b border-black focus:outline-none"
                    onChange={handleChange}
                />
            </p>

            <table className="text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <td rowSpan={2} className="border-r">
                            Classification of Malnourished Children
                        </td>
                        <td colSpan={6} className="">
                            Total No. of Children Weighted by Age Group
                        </td>
                        <td className="border-x">
                            Total No. of Children Weighted
                        </td>
                        <td>Percent &#40;&#37;&#41;</td>
                    </tr>
                    <tr className="border-t">
                        <td colSpan={2}>
                            Under 1 yr. <div>&#40;0-11 mos.&#41;</div>
                        </td>
                        <td colSpan={2} className="border-x">
                            1-4 yrs <div>&#40;12-59 mos.&#41;</div>
                        </td>
                        <td colSpan={2}>
                            5-6 yrs <div>&#40;60-83 mos.&#41;</div>
                        </td>
                        <td className="border-x">476</td>
                        <td>100&#37;</td>
                    </tr>
                    <tr className="text-left border-t">
                        <td></td>
                        <td className="pl-2 border-x">No.</td>
                        <td className="pl-2">&#37;</td>
                        <td className="pl-2 border-x">No.</td>
                        <td className="pl-2">&#37;</td>
                        <td className="pl-2 border-x">No.</td>
                        <td className="pl-2">&#37;</td>
                        <td className="border-x"></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            1.Severely Underweight
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childSUUnderOneYearNum"
                                value={values?.childSUUnderOneYearNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childSUUnderOneYearPercent"
                                value={values?.childSUUnderOneYearPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childSUOneToFourYearsNum"
                                value={values?.childSUOneToFourYearsNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childSUOneToFourYearsPercent"
                                value={values?.childSUOneToFourYearsPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childSUFiveToSixYearsNum"
                                value={values?.childSUFiveToSixYearsNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childSUFiveToSixYearsPercent"
                                value={values?.childSUFiveToSixYearsPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childSUTotalNum"
                                value={values?.childSUTotalNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childSUPercent"
                                value={values?.childSUPercent}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            2.Moderately Underweight
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childModUUnderOneYearNum"
                                value={values?.childModUUnderOneYearNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childModUUnderOneYearPercent"
                                value={values?.childModUUnderOneYearPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childModUOneToFourYearsNum"
                                value={values?.childModUOneToFourYearsNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childModUOneToFourYearsPercent"
                                value={values?.childModUOneToFourYearsPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childModUFiveToSixYearsNum"
                                value={values?.childModUFiveToSixYearsNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childModUFiveToSixYearsPercent"
                                value={values?.childModUFiveToSixYearsPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childModUTotalNum"
                                value={values?.childModUTotalNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childModUPercent"
                                value={values?.childModUPercent}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">3.Mildly Underweight</td>
                        <td className="pl-2 border-x">
                            <input
                                name="childMildUUnderOneYearNum"
                                value={values?.childMildUUnderOneYearNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childMildUUnderOneYearPercent"
                                value={values?.childMildUUnderOneYearPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childMildUOneToFourYearsNum"
                                value={values?.childMildUOneToFourYearsNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childMildUOneToFourYearsPercent"
                                value={values?.childMildUOneToFourYearsPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childMildUFiveToSixYearsNum"
                                value={values?.childMildUFiveToSixYearsNum}
                                type="number"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childMildUFiveToSixYearsPercent"
                                value={values?.childMildUFiveToSixYearsPercent}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                name="childMildUTotalNum"
                                value={values?.childMildUTotalNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childMildUPercent"
                                value={values?.childMildUPercent}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">GRAND TOTAL</td>
                        <td className="pl-2 border-x">
                            <input
                                readOnly
                                name="childTotalUnderOneYearNum"
                                value={childTotalUnderOneYearNum}
                                type="number"
                                className="w-full cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                readOnly
                                name="childTotalUnderOneYearPercent"
                                value={childTotalUnderOneYearPercent + "%"}
                                type="text"
                                className="w-full cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                readOnly
                                name="childTotalOneToFourYearsNum"
                                value={childTotalOneToFourYearsNum}
                                type="number"
                                className="w-full cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                readOnly
                                name="childTotalOneToFourYearsPercent"
                                value={childTotalOneToFourYearsPercent + "%"}
                                type="text"
                                className="w-full cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                readOnly
                                name="childTotalFiveToSixYearsNum"
                                value={childTotalFiveToSixYearsNum}
                                type="number"
                                className="w-full cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                readOnly
                                name="childTotalFiveToSixYearsPercent"
                                value={childTotalFiveToSixYearsPercent + "%"}
                                type="text"
                                className="w-full cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2 border-x">
                            <input
                                readOnly
                                name="childTotalTotalNum"
                                value={childTotalTotalNum}
                                type="number"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="pl-2">
                            <input
                                name="childTotalPercent"
                                value={childTotalPercent + "%"}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-between mt-4 mb-2 font-bold">
                <div className="w-full max-w-xs">
                    <div className="mb-2">
                        <p>
                            A.1.9 Five Leading Causes of Infant Mortality,&nbsp;
                            CY
                            <input
                                name="infantLeadingCausesMortalityCY"
                                value={values?.infantLeadingCausesMortalityCY}
                                type="number"
                                className="w-16 font-normal text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </p>
                    </div>
                    <table className="w-full text-xs border ">
                        <thead className="font-bold">
                            <tr>
                                <th className="border-r">Causes</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="infantMortalityCause1"
                                        value={values?.infantMortalityCause1}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="infantMortalityNum1"
                                        value={values?.infantMortalityNum1}
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="infantMortalityCause2"
                                        value={values?.infantMortalityCause2}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="infantMortalityNum2"
                                        value={values?.infantMortalityNum2}
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="infantMortalityCause3"
                                        value={values?.infantMortalityCause3}
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="infantMortalityNum3"
                                        value={values?.infantMortalityNum3}
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-xs">
                    <div className="mb-2">
                        <p>
                            A.1.10 Five Leading Causes of Infant Morbidity, CY
                            <input
                                name="infantLeadingCausesMorbidityCY"
                                value={values?.infantLeadingCausesMorbidityCY}
                                type="number"
                                className="w-16 font-normal text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </p>
                    </div>
                    <table className="w-full text-xs border">
                        <thead className="font-bold">
                            <tr>
                                <th className="border-r">Causes</th>
                                <th>Number</th>
                            </tr>
                        </thead>
                        <tbody className="font-normal">
                            <tr className="border-t">
                                <td className="pl-2 border-r">Fever</td>
                                <td>
                                    <input
                                        name="infantMorbidityFeverNum"
                                        value={values?.infantMorbidityFeverNum}
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">Cough</td>
                                <td>
                                    <input
                                        name="infantMorbidityCoughNum"
                                        value={values?.infantMorbidityCoughNum}
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">Malnutrition</td>
                                <td>
                                    <input
                                        name="infantMorbidityMalnutritionNum"
                                        value={
                                            values?.infantMorbidityMalnutritionNum
                                        }
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">Diarrhea</td>
                                <td>
                                    <input
                                        name="infantMorbidityDiarrheaNum"
                                        value={
                                            values?.infantMorbidityDiarrheaNum
                                        }
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 border-r">
                                    T/C primary complex
                                </td>
                                <td>
                                    <input
                                        name="infantMorbidityTCPrimaryComplexNum"
                                        value={
                                            values?.infantMorbidityTCPrimaryComplexNum
                                        }
                                        type="number"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SubmissionBarangayProfilePage4;
