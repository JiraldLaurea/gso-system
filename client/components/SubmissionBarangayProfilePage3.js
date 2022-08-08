import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";

function SubmissionBarangayProfilePage3({ page3Data, values, handleChange }) {
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
                            <th className="w-[210.05px]">Manufacturing</th>
                            <th className="border-x">Number</th>
                            <th className="border-r w-[220.59px]"></th>
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
