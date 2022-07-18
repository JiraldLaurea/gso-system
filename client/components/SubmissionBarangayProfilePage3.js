import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";

function SubmissionBarangayProfilePage3({ page3Data }) {
    const [values, setValues] = useState({
        fishFarm1Type: page3Data.fishFarm1Type,
        fishFarm1Num: page3Data.fishFarm1Num,
        fishFarm1NumWorkers: page3Data.fishFarm1NumWorkers,
        fishFarm1AreasCovered: page3Data.fishFarm1AreasCovered,
        fishFarm1VolumeCatch: page3Data.fishFarm1VolumeCatch,
        fishFarm1ProductionValue: page3Data.fishFarm1ProductionValue,
        fishFarm2Type: page3Data.fishFarm2Type,
        fishFarm2Num: page3Data.fishFarm2Num,
        fishFarm2NumWorkers: page3Data.fishFarm2NumWorkers,
        fishFarm2AreasCovered: page3Data.fishFarm2AreasCovered,
        fishFarm2VolumeCatch: page3Data.fishFarm2VolumeCatch,
        fishFarm2ProductionValue: page3Data.fishFarm2ProductionValue,
        fishFarm3Type: page3Data.fishFarm3Type,
        fishFarm3Num: page3Data.fishFarm3Num,
        fishFarm3NumWorkers: page3Data.fishFarm3NumWorkers,
        fishFarm3AreasCovered: page3Data.fishFarm3AreasCovered,
        fishFarm3VolumeCatch: page3Data.fishFarm3VolumeCatch,
        fishFarm3ProductionValue: page3Data.fishFarm3ProductionValue,
        fishVolume: page3Data.fishVolume,
        fishProductionValue: page3Data.fishProductionValue,
        shrimpVolume: page3Data.shrimpVolume,
        shrimpProductionValue: page3Data.shrimpProductionValue,
        shellsVolume: page3Data.shellsVolume,
        shellsProductionValue: page3Data.shellsProductionValue,
        fishFryVolume: page3Data.fishFryVolume,
        fishFryProductionValue: page3Data.fishFryProductionValue,
        musselsVolume: page3Data.musselsVolume,
        musselsProductionValue: page3Data.musselsProductionValue,
        oystersVolume: page3Data.oystersVolume,
        oystersProductionValue: page3Data.oystersProductionValue,
        fishOthersVolume: page3Data.fishOthersVolume,
        fishOthersProductionValue: page3Data.fishOthersProductionValue,
        fishOthersSpecify: page3Data.fishOthersSpecify,
        numFisherman: page3Data.numFisherman,
        averageIncomeFisherman: page3Data.averageIncomeFisherman,
        livestockLayers: page3Data.livestockLayers,
        livestockCattles: page3Data.livestockCattles,
        livestockBroilers: page3Data.livestockBroilers,
        livestockCarabaos: page3Data.livestockCarabaos,
        livestockMuscovy: page3Data.livestockMuscovy,
        livestockHogs: page3Data.livestockHogs,
        livestockGeese: page3Data.livestockGeese,
        livestockGoats: page3Data.livestockGoats,
        livestockPigeons: page3Data.livestockPigeons,
        livestockHorses: page3Data.livestockHorses,
        livestockQuails: page3Data.livestockQuails,
        livestockDogs: page3Data.livestockDogs,
        livestockPoultryOthers: page3Data.livestockPoultryOthers,
        livestockPoultryOthersSpecify: page3Data.livestockPoultryOthersSpecify,
        livestockOthers: page3Data.livestockOthers,
        livestockTurkey: page3Data.livestockTurkey,
        livestockCats: page3Data.livestockCats,
        livestockLoveBirds: page3Data.livestockLoveBirds,
        livestockFightingCocks: page3Data.livestockFightingCocks,
        livestockPig: page3Data.livestockPig,
        livestockChicken: page3Data.livestockChicken,
        prescenceAgricultural: page3Data.prescenceAgricultural,
        prescenceWeeklyVisitation: page3Data.prescenceWeeklyVisitation,
        prescenceSeedCollection: page3Data.prescenceSeedCollection,
        prescenceStorageAndProcessing: page3Data.prescenceStorageAndProcessing,
        prescenceCreditAndCooperative: page3Data.prescenceCreditAndCooperative,
        prescenceOthers: page3Data.prescenceOthers,
        prescenceOthersInput: page3Data.prescenceOthersInput,
        numBakery: page3Data.numBakery,
        numGrocery: page3Data.numGrocery,
        numIceCream: page3Data.numIceCream,
        numSariSariStore: page3Data.numSariSariStore,
        numNativeDelicacies: page3Data.numNativeDelicacies,
        numHardwareElectrical: page3Data.numHardwareElectrical,
        numSweetPreserves: page3Data.numSweetPreserves,
        numConstructionConcrete: page3Data.numConstructionConcrete,
        numSitcharon: page3Data.numSitcharon,
        numCarJeepPartsSupplies: page3Data.numCarJeepPartsSupplies,
        numNoodles: page3Data.numNoodles,
        numMotorcyclesBicyclesSupplies:
            page3Data.numMotorcyclesBicyclesSupplies,
        numBalut: page3Data.numBalut,
        numAgriculturalEquipmentSupplies:
            page3Data.numAgriculturalEquipmentSupplies,
        numVinegar: page3Data.numVinegar,
        numSchoolOfficeSupplies: page3Data.numSchoolOfficeSupplies,
        numFishDryingSmoking: page3Data.numFishDryingSmoking,
        numPhotoCenterSupplies: page3Data.numPhotoCenterSupplies,
        numLaboratories: page3Data.numLaboratories,
        numAppliance: page3Data.numAppliance,
        numChemicalIndustries: page3Data.numChemicalIndustries,
        numJewelryShopStore: page3Data.numJewelryShopStore,
        numFeedmills: page3Data.numFeedmills,
        numBagsFootwearStore: page3Data.numBagsFootwearStore,
        numGarmentEmbroidery: page3Data.numGarmentEmbroidery,
        numVideoTapesCenter: page3Data.numVideoTapesCenter,
        numFootwearFactories: page3Data.numFootwearFactories,
        numBazaars: page3Data.numBazaars,
        numTextileMills: page3Data.numTextileMills,
        numPrintingPress: page3Data.numPrintingPress,
        numBagsWalletFactories: page3Data.numBagsWalletFactories,
        numPawnshop: page3Data.numPawnshop,
        numFurnitureWooden: page3Data.numFurnitureWooden,
        numFurnitureRattan: page3Data.numFurnitureRattan,
        numFurnitureBamboo: page3Data.numFurnitureBamboo,
        numFurnitureMetal: page3Data.numFurnitureMetal,
        numFuneralParlor: page3Data.numFuneralParlor,
        numDrugStore: page3Data.numDrugStore,
        numPublicMarket: page3Data.numPublicMarket,
        numTalipapa: page3Data.numTalipapa,
        numCinema: page3Data.numCinema,
    });

    useEffect(() => {
        const updateSubmissionBarangayProfilePage3 = async () => {
            const data = {
                fishFarm1Type: values.fishFarm1Type,
                fishFarm1Num: values.fishFarm1Num,
                fishFarm1NumWorkers: values.fishFarm1NumWorkers,
                fishFarm1AreasCovered: values.fishFarm1AreasCovered,
                fishFarm1VolumeCatch: values.fishFarm1VolumeCatch,
                fishFarm1ProductionValue: values.fishFarm1ProductionValue,
                fishFarm2Type: values.fishFarm2Type,
                fishFarm2Num: values.fishFarm2Num,
                fishFarm2NumWorkers: values.fishFarm2NumWorkers,
                fishFarm2AreasCovered: values.fishFarm2AreasCovered,
                fishFarm2VolumeCatch: values.fishFarm2VolumeCatch,
                fishFarm2ProductionValue: values.fishFarm2ProductionValue,
                fishFarm3Type: values.fishFarm3Type,
                fishFarm3Num: values.fishFarm3Num,
                fishFarm3NumWorkers: values.fishFarm3NumWorkers,
                fishFarm3AreasCovered: values.fishFarm3AreasCovered,
                fishFarm3VolumeCatch: values.fishFarm3VolumeCatch,
                fishFarm3ProductionValue: values.fishFarm3ProductionValue,
                fishVolume: values.fishVolume,
                fishProductionValue: values.fishProductionValue,
                shrimpVolume: values.shrimpVolume,
                shrimpProductionValue: values.shrimpProductionValue,
                shellsVolume: values.shellsVolume,
                shellsProductionValue: values.shellsProductionValue,
                fishFryVolume: values.fishFryVolume,
                fishFryProductionValue: values.fishFryProductionValue,
                musselsVolume: values.musselsVolume,
                musselsProductionValue: values.musselsProductionValue,
                oystersVolume: values.oystersVolume,
                oystersProductionValue: values.oystersProductionValue,
                fishOthersVolume: values.fishOthersVolume,
                fishOthersProductionValue: values.fishOthersProductionValue,
                fishOthersSpecify: values.fishOthersSpecify,
                numFisherman: values.numFisherman,
                averageIncomeFisherman: values.averageIncomeFisherman,
                livestockLayers: values.livestockLayers,
                livestockCattles: values.livestockCattles,
                livestockBroilers: values.livestockBroilers,
                livestockCarabaos: values.livestockCarabaos,
                livestockMuscovy: values.livestockMuscovy,
                livestockHogs: values.livestockHogs,
                livestockGeese: values.livestockGeese,
                livestockGoats: values.livestockGoats,
                livestockPigeons: values.livestockPigeons,
                livestockHorses: values.livestockHorses,
                livestockQuails: values.livestockQuails,
                livestockDogs: values.livestockDogs,
                livestockPoultryOthers: values.livestockPoultryOthers,
                livestockPoultryOthersSpecify:
                    values.livestockPoultryOthersSpecify,
                livestockOthers: values.livestockOthers,
                livestockTurkey: values.livestockTurkey,
                livestockCats: values.livestockCats,
                livestockLoveBirds: values.livestockLoveBirds,
                livestockFightingCocks: values.livestockFightingCocks,
                livestockPig: values.livestockPig,
                livestockChicken: values.livestockChicken,
                prescenceAgricultural: values.prescenceAgricultural,
                prescenceWeeklyVisitation: values.prescenceWeeklyVisitation,
                prescenceSeedCollection: values.prescenceSeedCollection,
                prescenceStorageAndProcessing:
                    values.prescenceStorageAndProcessing,
                prescenceCreditAndCooperative:
                    values.prescenceCreditAndCooperative,
                prescenceOthers: values.prescenceOthers,
                prescenceOthersInput: values.prescenceOthersInput,
                numBakery: values.numBakery,
                numGrocery: values.numGrocery,
                numIceCream: values.numIceCream,
                numSariSariStore: values.numSariSariStore,
                numNativeDelicacies: values.numNativeDelicacies,
                numHardwareElectrical: values.numHardwareElectrical,
                numSweetPreserves: values.numSweetPreserves,
                numConstructionConcrete: values.numConstructionConcrete,
                numSitcharon: values.numSitcharon,
                numCarJeepPartsSupplies: values.numCarJeepPartsSupplies,
                numNoodles: values.numNoodles,
                numMotorcyclesBicyclesSupplies:
                    values.numMotorcyclesBicyclesSupplies,
                numBalut: values.numBalut,
                numAgriculturalEquipmentSupplies:
                    values.numAgriculturalEquipmentSupplies,
                numVinegar: values.numVinegar,
                numSchoolOfficeSupplies: values.numSchoolOfficeSupplies,
                numFishDryingSmoking: values.numFishDryingSmoking,
                numPhotoCenterSupplies: values.numPhotoCenterSupplies,
                numLaboratories: values.numLaboratories,
                numAppliance: values.numAppliance,
                numChemicalIndustries: values.numChemicalIndustries,
                numJewelryShopStore: values.numJewelryShopStore,
                numFeedmills: values.numFeedmills,
                numBagsFootwearStore: values.numBagsFootwearStore,
                numGarmentEmbroidery: values.numGarmentEmbroidery,
                numVideoTapesCenter: values.numVideoTapesCenter,
                numFootwearFactories: values.numFootwearFactories,
                numBazaars: values.numBazaars,
                numTextileMills: values.numTextileMills,
                numPrintingPress: values.numPrintingPress,
                numBagsWalletFactories: values.numBagsWalletFactories,
                numPawnshop: values.numPawnshop,
                numFurnitureWooden: values.numFurnitureWooden,
                numFurnitureRattan: values.numFurnitureRattan,
                numFurnitureBamboo: values.numFurnitureBamboo,
                numFurnitureMetal: values.numFurnitureMetal,
                numFuneralParlor: values.numFuneralParlor,
                numDrugStore: values.numDrugStore,
                numPublicMarket: values.numPublicMarket,
                numTalipapa: values.numTalipapa,
                numCinema: values.numCinema,
            };

            await Axios.put(
                "http://localhost:3001/submission/brgyProfilePage3",
                data
            );
        };

        updateSubmissionBarangayProfilePage3();
    }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <div className="font-bold">
                <p>B.2 Fish Farming</p>
                <p className="mb-2 ml-4">
                    B.2.1 No. of Fishponds, Areas covered, Volume of Catch and
                    Production Value by Type of Fish and Aquatic Products.
                </p>
                <table className="text-xs border text-normal">
                    <thead className="font-bold">
                        <tr>
                            <th>Type of Fish/Aquatic Products</th>
                            <th className="border-x">No. of Fishponds</th>
                            <th>No. of Workers</th>
                            <th className="border-x">
                                Areas Covered &#40;Has&#41;
                            </th>
                            <th>Volume of Catch/Year</th>

                            <th className="border-l">
                                Production Value &#40;In Pesos&#41;
                            </th>
                        </tr>
                    </thead>
                    <tbody className="font-normal text-center">
                        <tr className="border-t">
                            <td className="border-r">
                                <input
                                    name="fishFarm1Type"
                                    value={values?.fishFarm1Type}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm1Num"
                                    value={values?.fishFarm1Num}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="fishFarm1NumWorkers"
                                    value={values?.fishFarm1NumWorkers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm1AreasCovered"
                                    value={values?.fishFarm1AreasCovered}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="fishFarm1VolumeCatch"
                                    value={values?.fishFarm1VolumeCatch}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm1ProductionValue"
                                    value={values?.fishFarm1ProductionValue}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">
                                <input
                                    name="fishFarm2Type"
                                    value={values?.fishFarm2Type}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm2Num"
                                    value={values?.fishFarm2Num}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="fishFarm2NumWorkers"
                                    value={values?.fishFarm2NumWorkers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm2AreasCovered"
                                    value={values?.fishFarm2AreasCovered}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="fishFarm2VolumeCatch"
                                    value={values?.fishFarm2VolumeCatch}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm2ProductionValue"
                                    value={values?.fishFarm2ProductionValue}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="border-r">
                                <input
                                    name="fishFarm3Type"
                                    value={values?.fishFarm3Type}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm3Num"
                                    value={values?.fishFarm3Num}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="fishFarm3NumWorkers"
                                    value={values?.fishFarm3NumWorkers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm3AreasCovered"
                                    value={values?.fishFarm3AreasCovered}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="fishFarm3VolumeCatch"
                                    value={values?.fishFarm3VolumeCatch}
                                    type="text"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <input
                                    name="fishFarm3ProductionValue"
                                    value={values?.fishFarm3ProductionValue}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-between mt-4">
                    <div className="mr-4">
                        <p className="mb-2 font-bold">B.2.2 Fishery Products</p>
                        <table className="w-full max-w-xs text-xs border">
                            <thead className="font-bold">
                                <tr>
                                    <th>Type of Fishery Products</th>
                                    <th className="border-x">
                                        Volume of Catch/Year
                                    </th>
                                    <th>Production Value &#40;In Peso&#41;</th>
                                </tr>
                            </thead>
                            <tbody className="font-normal">
                                <tr className="text-center border-t">
                                    <td className="pl-2">Fish</td>
                                    <td className="border-x">
                                        <input
                                            name="fishVolume"
                                            value={values?.fishVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="fishProductionValue"
                                            value={values?.fishProductionValue}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="pl-2">Shrimp</td>
                                    <td className="border-x">
                                        <input
                                            name="shrimpVolume"
                                            value={values?.shrimpVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="shrimpProductionValue"
                                            value={
                                                values?.shrimpProductionValue
                                            }
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="pl-2">Shells</td>
                                    <td className="border-x">
                                        <input
                                            name="shellsVolume"
                                            value={values?.shellsVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="shellsProductionValue"
                                            value={
                                                values?.shellsProductionValue
                                            }
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="pl-2">Fish Fry</td>
                                    <td className="border-x">
                                        <input
                                            name="fishFryVolume"
                                            value={values?.fishFryVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="fishFryProductionValue"
                                            value={
                                                values?.fishFryProductionValue
                                            }
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="pl-2">Mussels</td>
                                    <td className="border-x">
                                        <input
                                            name="musselsVolume"
                                            value={values?.musselsVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="musselsProductionValue"
                                            value={
                                                values?.musselsProductionValue
                                            }
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="pl-2">Oysters</td>
                                    <td className="border-x">
                                        <input
                                            name="oystersVolume"
                                            value={values?.oystersVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="oystersProductionValue"
                                            value={
                                                values?.oystersProductionValue
                                            }
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="pl-2">
                                        Others &#40;specify&#41;
                                        <input
                                            name="fishOthersSpecify"
                                            value={values?.fishOthersSpecify}
                                            type="text"
                                            className="w-full focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td className="border-x">
                                        <input
                                            name="fishOthersVolume"
                                            value={values?.fishOthersVolume}
                                            type="number"
                                            className="w-full text-center focus:outline-none"
                                            onChange={handleChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            name="fishOthersProductionValue"
                                            value={
                                                values?.fishOthersProductionValue
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
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="mr-1 font-bold">
                                B.2.3 No. of Fisherman
                            </p>
                            <input
                                name="numFisherman"
                                value={values?.numFisherman}
                                type="number"
                                className="w-20 font-normal text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex items-center">
                            <p className="mr-1 font-bold">
                                B.2.4 Average Income of Fisherman
                            </p>
                            <input
                                name="averageIncomeFisherman"
                                value={values?.averageIncomeFisherman}
                                type="number"
                                className="w-20 font-normal text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <p className="mt-4 ">B.3 Poultry/Livestock Raising</p>
                <p className="mb-2 ml-4">B.3.1 Poultry/Livestock Population</p>

                <table className="w-full text-xs border">
                    <thead className="font-bold">
                        <tr className="text-center">
                            <th>Type</th>
                            <th className="border-x">Number</th>
                            <th>Type</th>
                            <th className="border-l">Number</th>
                        </tr>
                        <tr className="text-left border-t">
                            <th className="pl-2">A. Poultry:</th>
                            <th className="border-x"></th>
                            <th className="pl-2">B. Livestock:</th>
                            <th className="border-l"></th>
                        </tr>
                    </thead>
                    <tbody className="font-normal">
                        <tr className="border-t">
                            <td className="pl-6">Layers</td>
                            <td className="border-x">
                                <input
                                    name="livestockLayers"
                                    value={values?.livestockLayers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Cattles &#40;specify&#41;</td>
                            <td className="border-l">
                                <input
                                    name="livestockCattles"
                                    value={values?.livestockCattles}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Broilers</td>
                            <td className="border-x">
                                <input
                                    name="livestockBroilers"
                                    value={values?.livestockBroilers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Carabaos</td>
                            <td className="border-l">
                                <input
                                    name="livestockCarabaos"
                                    value={values?.livestockCarabaos}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Muscovy &#40;Ducks&#41;</td>
                            <td className="border-x">
                                <input
                                    name="livestockMuscovy"
                                    value={values?.livestockMuscovy}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Hogs </td>
                            <td className="border-l">
                                <input
                                    name="livestockHogs"
                                    value={values?.livestockHogs}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Geese</td>
                            <td className="border-x">
                                {" "}
                                <input
                                    name="livestockGeese"
                                    value={values?.livestockGeese}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Goats</td>
                            <td className="border-l">
                                <input
                                    name="livestockGoats"
                                    value={values?.livestockGoats}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Pigeons</td>
                            <td className="border-x">
                                {" "}
                                <input
                                    name="livestockPigeons"
                                    value={values?.livestockPigeons}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Horses</td>
                            <td className="border-l">
                                <input
                                    name="livestockHorses"
                                    value={values?.livestockHorses}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Quails</td>
                            <td className="border-x">
                                <input
                                    name="livestockQuails"
                                    value={values?.livestockQuails}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Dogs</td>
                            <td className="border-l">
                                <input
                                    name="livestockDogs"
                                    value={values?.livestockDogs}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">
                                Others: &#40;specify&#41;
                                <input
                                    name="livestockPoultryOthersSpecify"
                                    value={
                                        values?.livestockPoultryOthersSpecify
                                    }
                                    type="text"
                                    className="w-full focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="border-x">
                                <input
                                    name="livestockPoultryOthers"
                                    value={values?.livestockPoultryOthers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Others:</td>
                            <td className="border-l">
                                <input
                                    name="livestockOthers"
                                    value={values?.livestockOthers}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Turkey</td>
                            <td className="border-x">
                                <input
                                    name="livestockTurkey"
                                    value={values?.livestockTurkey}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Cats</td>
                            <td className="border-l">
                                <input
                                    name="livestockCats"
                                    value={values?.livestockCats}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Love Birds</td>
                            <td className="border-x">
                                <input
                                    name="livestockLoveBirds"
                                    value={values?.livestockLoveBirds}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Fighting Cocks</td>
                            <td className="border-l">
                                <input
                                    name="livestockFightingCocks"
                                    value={values?.livestockFightingCocks}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-6">Pig</td>
                            <td className="border-x">
                                <input
                                    name="livestockPig"
                                    value={values?.livestockPig}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-6">Chicken</td>
                            <td className="border-l">
                                <input
                                    name="livestockChicken"
                                    value={values?.livestockChicken}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4 mb-2">
                    B.4 Prescence of Agricultural and Extension Services
                    &#40;Pls. Check&#41;
                </p>
                <div className="flex ml-4 font-normal">
                    <div className="mr-4">
                        <div className="flex items-center">
                            &#40;
                            <input
                                name="prescenceAgricultural"
                                value={values?.prescenceAgricultural}
                                type="text"
                                className="w-4 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                            &#41;
                            <p className="ml-2">
                                Agricultural of Extension and Veterinary
                            </p>
                        </div>
                        <div className="flex items-center">
                            &#40;
                            <input
                                name="prescenceSeedCollection"
                                value={values?.prescenceSeedCollection}
                                type="text"
                                className="w-4 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                            &#41;
                            <p className="ml-2">
                                Seed collection distribution system
                                &#40;nurseries&#41;
                            </p>
                        </div>
                        <div className="flex items-center">
                            &#40;
                            <input
                                name="prescenceCreditAndCooperative"
                                value={values?.prescenceCreditAndCooperative}
                                type="text"
                                className="w-4 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                            &#41;
                            <p className="ml-2">Credit and Cooperative</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            &#40;
                            <input
                                name="prescenceWeeklyVisitation"
                                value={values?.prescenceWeeklyVisitation}
                                type="text"
                                className="w-4 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                            &#41;
                            <p className="ml-2">Weekly Visitation</p>
                        </div>
                        <div className="flex items-center">
                            &#40;
                            <input
                                name="prescenceStorageAndProcessing"
                                value={values?.prescenceStorageAndProcessing}
                                type="text"
                                className="w-4 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                            &#41;
                            <p className="ml-2">Storage and Processing</p>
                        </div>
                        <div className="flex items-center">
                            &#40;
                            <input
                                name="prescenceOthers"
                                value={values?.prescenceOthers}
                                type="text"
                                className="w-4 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                            &#41;
                            <p className="ml-2">
                                Others &#40;Pls. Specify&#41;
                            </p>
                            <input
                                name="prescenceOthersInput"
                                value={values?.prescenceOthersInput}
                                type="text"
                                className="w-32 ml-2 border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <p className="mt-4">C. Industry</p>
                <div className="flex items-center ml-4">
                    <p className="">C.1 Manufacturing Industry</p>
                    <p className="ml-32">C.2 Commercial Establishment</p>
                </div>
                <table className="w-full mt-2 text-xs border">
                    <thead>
                        <tr className="text-center">
                            <th className="w-[202.8px]">Manufacturing</th>
                            <th className="border-x">Number</th>
                            <th className="border-r w-[211.16px]"></th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody className="font-normal">
                        <tr className="border-t">
                            <td className="pl-2">Bakery/Bakeshop</td>
                            <td className="border-x">
                                <input
                                    name="numBakery"
                                    value={values?.numBakery}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Grocery</td>
                            <td>
                                <input
                                    name="numGrocery"
                                    value={values?.numGrocery}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Ice cream/Icedrops</td>
                            <td className="border-x">
                                <input
                                    name="numIceCream"
                                    value={values?.numIceCream}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Sari-sari store</td>
                            <td>
                                <input
                                    name="numSariSariStore"
                                    value={values?.numSariSariStore}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Native Delicacies</td>
                            <td className="border-x">
                                <input
                                    name="numNativeDelicacies"
                                    value={values?.numNativeDelicacies}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Hardware and Electrical Supplies
                            </td>
                            <td>
                                <input
                                    name="numHardwareElectrical"
                                    value={values?.numHardwareElectrical}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Sweet Preserves</td>
                            <td className="border-x">
                                <input
                                    name="numSweetPreserves"
                                    value={values?.numSweetPreserves}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Construction and Concrete Products
                            </td>
                            <td>
                                <input
                                    name="numConstructionConcrete"
                                    value={values?.numConstructionConcrete}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Sitcharon</td>
                            <td className="border-x">
                                <input
                                    name="numSitcharon"
                                    value={values?.numSitcharon}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Car/Jeep Parts and Supplies
                            </td>
                            <td>
                                <input
                                    name="numCarJeepPartsSupplies"
                                    value={values?.numCarJeepPartsSupplies}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Noodles</td>
                            <td className="border-x">
                                <input
                                    name="numNoodles"
                                    value={values?.numNoodles}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Motorcycles and Bicycles Supplies
                            </td>
                            <td>
                                <input
                                    name="numMotorcyclesBicyclesSupplies"
                                    value={
                                        values?.numMotorcyclesBicyclesSupplies
                                    }
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Balut</td>
                            <td className="border-x">
                                <input
                                    name="numBalut"
                                    value={values?.numBalut}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Agricultural Equipment and Suppplies
                            </td>
                            <td>
                                <input
                                    name="numAgriculturalEquipmentSupplies"
                                    value={
                                        values?.numAgriculturalEquipmentSupplies
                                    }
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Vinegar</td>
                            <td className="border-x">
                                <input
                                    name="numVinegar"
                                    value={values?.numVinegar}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                School and office Supplies
                            </td>
                            <td>
                                <input
                                    name="numSchoolOfficeSupplies"
                                    value={values?.numSchoolOfficeSupplies}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Fish Drying and Smoking</td>
                            <td className="border-x">
                                <input
                                    name="numFishDryingSmoking"
                                    value={values?.numFishDryingSmoking}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Photo Center and Supplies
                            </td>
                            <td>
                                <input
                                    name="numPhotoCenterSupplies"
                                    value={values?.numPhotoCenterSupplies}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Laboratories</td>
                            <td className="border-x">
                                <input
                                    name="numLaboratories"
                                    value={values?.numLaboratories}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Appliance</td>
                            <td>
                                <input
                                    name="numAppliance"
                                    value={values?.numAppliance}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Chemical Industries</td>
                            <td className="border-x">
                                <input
                                    name="numChemicalIndustries"
                                    value={values?.numChemicalIndustries}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Jewelry Shop and Store
                            </td>
                            <td>
                                <input
                                    name="numJewelryShopStore"
                                    value={values?.numJewelryShopStore}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Feedmills</td>
                            <td className="border-x">
                                <input
                                    name="numFeedmills"
                                    value={values?.numFeedmills}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Bags and Footwear Store
                            </td>
                            <td>
                                <input
                                    name="numBagsFootwearStore"
                                    value={values?.numBagsFootwearStore}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Garment Embroidery</td>
                            <td className="border-x">
                                <input
                                    name="numGarmentEmbroidery"
                                    value={values?.numGarmentEmbroidery}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Video, DVD Tapes Center/Internet Cafe
                            </td>
                            <td>
                                <input
                                    name="numVideoTapesCenter"
                                    value={values?.numVideoTapesCenter}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Footwear Factories</td>
                            <td className="border-x">
                                <input
                                    name="numFootwearFactories"
                                    value={values?.numFootwearFactories}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">
                                Bazaars and Gift Shop
                            </td>
                            <td>
                                <input
                                    name="numBazaars"
                                    value={values?.numBazaars}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Textile mills</td>
                            <td className="border-x">
                                <input
                                    name="numTextileMills"
                                    value={values?.numTextileMills}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Printing Press</td>
                            <td>
                                <input
                                    name="numPrintingPress"
                                    value={values?.numPrintingPress}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">Bags/wallet Factories</td>
                            <td className="border-x">
                                <input
                                    name="numBagsWalletFactories"
                                    value={values?.numBagsWalletFactories}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Pawnshop</td>
                            <td>
                                <input
                                    name="numPawnshop"
                                    value={values?.numPawnshop}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">
                                Furniture Factory &#40;Wooden&#41;
                            </td>
                            <td className="border-x">
                                <input
                                    name="numFurnitureWooden"
                                    value={values?.numFurnitureWooden}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Funeral Parlor</td>
                            <td>
                                <input
                                    name="numFuneralParlor"
                                    value={values?.numFuneralParlor}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">&#40;Rattan&#41;</td>
                            <td className="border-x">
                                <input
                                    name="numFurnitureRattan"
                                    value={values?.numFurnitureRattan}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Drug Store</td>
                            <td>
                                <input
                                    name="numDrugStore"
                                    value={values?.numDrugStore}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">&#40;Bamboo&#41;</td>
                            <td className="border-x">
                                <input
                                    name="numFurnitureBamboo"
                                    value={values?.numFurnitureBamboo}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Public Market</td>
                            <td>
                                <input
                                    name="numPublicMarket"
                                    value={values?.numPublicMarket}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2">&#40;Metal&#41;</td>
                            <td className="border-x">
                                <input
                                    name="numFurnitureMetal"
                                    value={values?.numFurnitureMetal}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                            <td className="pl-2 border-r">Talipapa</td>
                            <td>
                                <input
                                    name="numTalipapa"
                                    value={values?.numTalipapa}
                                    type="number"
                                    className="w-full text-center focus:outline-none"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="pl-2"></td>
                            <td className="border-x"></td>
                            <td className="pl-2 border-r">Cinema</td>
                            <td>
                                <input
                                    name="numCinema"
                                    value={values?.numCinema}
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
    );
}

export default SubmissionBarangayProfilePage3;
