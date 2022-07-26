import React, { useEffect, useState } from "react";
import Axios from "axios";

function SubmissionBarangayProfilePage4({ page4Data, values, handleChange }) {
    const childTotalUnderOneYearNum =
        Number(values?.childSUUnderOneYearNum) +
        Number(values?.childModUUnderOneYearNum) +
        Number(values?.childMildUUnderOneYearNum);

    const childTotalUnderOneYearPercent =
        Number(
            values?.childSUUnderOneYearPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values?.childModUUnderOneYearPercent?.toString().replace(/%/g, "")
        ) +
        Number(
            values?.childMildUUnderOneYearPercent?.toString().replace(/%/g, "")
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
