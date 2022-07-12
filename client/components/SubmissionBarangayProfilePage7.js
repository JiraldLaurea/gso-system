import React, { useEffect, useState } from "react";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage7");
        if (!storedValues)
            return {
                typeOfBuildingNum1: 0,
                typeOfBuildingNum2: 0,
                typeOfBuildingNum3: 0,
                typeOfBuildingNum4: 0,
                typeOfBuildingNum5: 0,
                typeOfBuildingNum6: 0,
                typeOfBuildingNum6Specify: "",
                typeOfConstructionMats1: 0,
                typeOfConstructionMats2: 0,
                typeOfConstructionMats3: 0,
                typeOfConstructionMats4: 0,
                typeOfConstructionMats5: 0,
                typeOfConstructionMats5Specify: "",
                numInformalSettler1: 0,
                numInformalSettler2: 0,
                numInformalSettler3: 0,
                numInformalSettler4: 0,
                numInformalSettler5: 0,
                numInformalSettlerLocation1: "",
                numInformalSettlerLocation2: "",
                numInformalSettlerLocation3: "",
                numInformalSettlerLocation4: "",
                numInformalSettlerLocation5: "",
                numHeritageStructure1: 0,
                numHeritageStructure2: 0,
                numHeritageStructure3: 0,
                numHeritageStructure4: 0,
                numHeritageStructure5: 0,
                numHeritageStructure6: 0,
                heritageStructureLocation1: "",
                heritageStructureLocation2: "",
                heritageStructureLocation3: "",
                heritageStructureLocation4: "",
                heritageStructureLocation5: "",
                heritageStructureLocation6: "",
                presenceProtectiveService1: "",
                presenceProtectiveService2: "",
                presenceProtectiveService3: "",
                presenceProtectiveService4: "",
                presenceProtectiveService5: "",
                presenceProtectiveService5Specify: "",
                presenceNumPersonnel1: 0,
                presenceNumPersonnel2: 0,
                presenceNumPersonnel3: 0,
                presenceNumPersonnel4: 0,
                presenceNumPersonnel5: 0,
                sportsFacilitiesPublic1: 0,
                sportsFacilitiesPublic2: 0,
                sportsFacilitiesPublic3: 0,
                sportsFacilitiesPublic4: 0,
                sportsFacilitiesPublic5: 0,
                sportsFacilitiesPublic6: 0,
                sportsFacilitiesPublic7: 0,
                sportsFacilitiesPublic8: 0,
                sportsFacilitiesPrivate1: 0,
                sportsFacilitiesPrivate2: 0,
                sportsFacilitiesPrivate3: 0,
                sportsFacilitiesPrivate4: 0,
                sportsFacilitiesPrivate5: 0,
                sportsFacilitiesPrivate6: 0,
                sportsFacilitiesPrivate7: 0,
                sportsFacilitiesPrivate8: 0,
                sportsFacilities8Specify: "",
                recreationalPublic1: 0,
                recreationalPublic2: 0,
                recreationalPublic3: 0,
                recreationalPublic4: 0,
                recreationalPublic5: 0,
                recreationalPublic6: 0,
                recreationalPublic7: 0,
                recreationalPublic8: 0,
                recreationalPrivate1: 0,
                recreationalPrivate2: 0,
                recreationalPrivate3: 0,
                recreationalPrivate4: 0,
                recreationalPrivate5: 0,
                recreationalPrivate6: 0,
                recreationalPrivate7: 0,
                recreationalPrivate8: 0,
                recreational8Specify: "",
            };
        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage7() {
    const [values, setValues] = useState(getFormValues);

    useEffect(() => {
        localStorage.setItem("brgyProfilePage7", JSON.stringify(values));
    }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <p className="font-bold">D. Housing</p>
            <div className="flex justify-between">
                <div className="max-w-xs">
                    <p className="ml-4 font-bold mb-7">
                        D.1 Number/Type of Building/Dwelling Units
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold">
                            <tr>
                                <th className="w-64 border-r">
                                    Type of Building/Dwelling Units
                                </th>
                                <th className="">No. Of Building / Dwelling</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    1. Single house
                                </td>
                                <td>
                                    <input
                                        name="typeOfBuildingNum1"
                                        value={values?.typeOfBuildingNum1}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    2. Duplex
                                </td>
                                <td>
                                    <input
                                        name="typeOfBuildingNum2"
                                        value={values?.typeOfBuildingNum2}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    3. 2-Storey house
                                </td>
                                <td>
                                    <input
                                        name="typeOfBuildingNum3"
                                        value={values?.typeOfBuildingNum3}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    4. Apartment / Condominium / Townhouse /
                                    Commercial / Industrial / Agricultural Bldg.
                                    / house
                                </td>
                                <td>
                                    <input
                                        name="typeOfBuildingNum4"
                                        value={values?.typeOfBuildingNum4}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    5. Improvised house
                                </td>
                                <td>
                                    <input
                                        name="typeOfBuildingNum5"
                                        value={values?.typeOfBuildingNum5}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    6. Others &#40;Pls. specify&#41;
                                    <input
                                        name="typeOfBuildingNum6Specify"
                                        value={
                                            values?.typeOfBuildingNum6Specify
                                        }
                                        type="text"
                                        className="w-full font-normal focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="typeOfBuildingNum6"
                                        value={values?.typeOfBuildingNum6}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="max-w-xs">
                    <p className="mb-2 font-bold">
                        D.2 Number of Dwelling Units by type of Construction
                        Materials
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold">
                            <tr>
                                <th className="border-r">
                                    Building/Dwelling Units by Type of
                                    Construction Materials
                                </th>
                                <th>No. Of Building/Dwelling Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    1. Strong Materials
                                </td>
                                <td>
                                    <input
                                        name="typeOfConstructionMats1"
                                        value={values?.typeOfConstructionMats1}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    2. Light Materials
                                </td>
                                <td>
                                    <input
                                        name="typeOfConstructionMats2"
                                        value={values?.typeOfConstructionMats2}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    3. Mixed Materials
                                </td>
                                <td>
                                    <input
                                        name="typeOfConstructionMats3"
                                        value={values?.typeOfConstructionMats3}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    4. Salvaged/Makeshift materials
                                </td>
                                <td>
                                    <input
                                        name="typeOfConstructionMats4"
                                        value={values?.typeOfConstructionMats4}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="pl-2 font-bold border-r">
                                    5. Others &#40;specify&#41;
                                    <input
                                        name="typeOfConstructionMats5Specify"
                                        value={
                                            values?.typeOfConstructionMats5Specify
                                        }
                                        type="text"
                                        className="w-full font-normal focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="typeOfConstructionMats5"
                                        value={values?.typeOfConstructionMats5}
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

            <div className="flex justify-between">
                <div className="w-full max-w-xs">
                    <p className="mt-4 ml-4 font-bold mb-7">
                        D.3 Informal Settlers
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td className="border-r">
                                    Number of Informal Settlers
                                </td>
                                <td className="w-28">
                                    <p>Location</p>
                                    <p>&#40;ex. Zone 1&#41;</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numInformalSettler1"
                                        value={values?.numInformalSettler1}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="numInformalSettlerLocation1"
                                        value={
                                            values?.numInformalSettlerLocation1
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numInformalSettler2"
                                        value={values?.numInformalSettler2}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="numInformalSettlerLocation2"
                                        value={
                                            values?.numInformalSettlerLocation2
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numInformalSettler3"
                                        value={values?.numInformalSettler3}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="numInformalSettlerLocation3"
                                        value={
                                            values?.numInformalSettlerLocation3
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numInformalSettler4"
                                        value={values?.numInformalSettler4}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="numInformalSettlerLocation4"
                                        value={
                                            values?.numInformalSettlerLocation4
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numInformalSettler5"
                                        value={values?.numInformalSettler5}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="numInformalSettlerLocation5"
                                        value={
                                            values?.numInformalSettlerLocation5
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="max-w-xs">
                    <p className="mt-4 mb-2 font-bold">
                        D.4 List of Heritage Buildings / Sites / Monuments /
                        Markers / Sites
                    </p>
                    <table className="w-full text-xs border">
                        <thead className="font-bold text-center">
                            <tr>
                                <td className="border-r">
                                    Number of Heritage Structures
                                </td>
                                <td className="w-28">
                                    <p>Location</p>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numHeritageStructure1"
                                        value={values?.numHeritageStructure1}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="heritageStructureLocation1"
                                        value={
                                            values?.heritageStructureLocation1
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numHeritageStructure2"
                                        value={values?.numHeritageStructure2}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="heritageStructureLocation2"
                                        value={
                                            values?.heritageStructureLocation2
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numHeritageStructure3"
                                        value={values?.numHeritageStructure3}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="heritageStructureLocation3"
                                        value={
                                            values?.heritageStructureLocation3
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numHeritageStructure4"
                                        value={values?.numHeritageStructure4}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="heritageStructureLocation4"
                                        value={
                                            values?.heritageStructureLocation4
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numHeritageStructure5"
                                        value={values?.numHeritageStructure5}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="heritageStructureLocation5"
                                        value={
                                            values?.heritageStructureLocation5
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="border-r">
                                    <input
                                        name="numHeritageStructure6"
                                        value={values?.numHeritageStructure6}
                                        type="text"
                                        className="w-full text-center focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        name="heritageStructureLocation6"
                                        value={
                                            values?.heritageStructureLocation6
                                        }
                                        type="text"
                                        className="w-full pl-2 focus:outline-none"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-4 mb-2 ml-4 font-bold">E. Protective Services</p>

            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th className="border-r">
                            Presence of Protective Service/Facilities
                        </th>
                        <th>No. of Personnel/Members</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-8 border-r">1. Barangay Brigade</td>
                        <td>
                            <input
                                name="presenceNumPersonnel1"
                                value={values?.presenceNumPersonnel1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8 border-r">
                            2. Barangay Tanod Brigade
                        </td>
                        <td>
                            <input
                                name="presenceNumPersonnel2"
                                value={values?.presenceNumPersonnel2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8 border-r">
                            3. Manned Fire Station
                        </td>
                        <td>
                            <input
                                name="presenceNumPersonnel3"
                                value={values?.presenceNumPersonnel3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8 border-r">
                            4. Manned Police Station
                        </td>
                        <td>
                            <input
                                name="presenceNumPersonnel4"
                                value={values?.presenceNumPersonnel4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8 border-r">
                            5. Others &#40;specify&#41;
                            <input
                                name="presenceProtectiveService5Specify"
                                value={
                                    values?.presenceProtectiveService5Specify
                                }
                                type="text"
                                className="pl-2 w-80 focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="presenceNumPersonnel5"
                                value={values?.presenceNumPersonnel5}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="mt-4 font-bold">F. Sports and Recreational</p>
            <p className="mb-2 ml-4 font-bold">
                F.1 Number of Existing Public/Private Sports/Recreational
                Facilities by Type
            </p>

            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th rowSpan={2} className="border-r w-96">
                            Facilities
                        </th>
                        <th colSpan={2} className="border-b">
                            Number
                        </th>
                    </tr>
                    <tr>
                        <th className="border-r">Public</th>
                        <th>Private</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-4 font-bold">A. Sports/Facilities</td>
                        <td className="border-x"></td>
                        <td></td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">1. Gymnasium/Stadium/Coliseum</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic1"
                                value={values?.sportsFacilitiesPublic1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate1"
                                value={values?.sportsFacilitiesPrivate1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">2. Basketball/Court</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic2"
                                value={values?.sportsFacilitiesPublic2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate2"
                                value={values?.sportsFacilitiesPrivate2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">3. Baseball/Softball Field</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic3"
                                value={values?.sportsFacilitiesPublic3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate3"
                                value={values?.sportsFacilitiesPrivate3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">4. Tennis Court</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic4"
                                value={values?.sportsFacilitiesPublic4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate4"
                                value={values?.sportsFacilitiesPrivate4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">5. Swimming Pool</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic5"
                                value={values?.sportsFacilitiesPublic5}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate5"
                                value={values?.sportsFacilitiesPrivate5}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">6. Volleyball Court</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic6"
                                value={values?.sportsFacilitiesPublic6}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate6"
                                value={values?.sportsFacilitiesPrivate6}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">7. Brgy. Covered</td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic7"
                                value={values?.sportsFacilitiesPublic7}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate7"
                                value={values?.sportsFacilitiesPrivate7}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">
                            8. Others &#40;specify&#41;
                            <input
                                name="sportsFacilities8Specify"
                                value={values?.sportsFacilities8Specify}
                                type="text"
                                className="w-40 pl-2 focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="sportsFacilitiesPublic8"
                                value={values?.sportsFacilitiesPublic8}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sportsFacilitiesPrivate8"
                                value={values?.sportsFacilitiesPrivate8}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-4 font-bold">B. Recreational</td>
                        <td className="border-x"></td>
                        <td></td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">1. Playground</td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic1"
                                value={values?.recreationalPublic1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate1"
                                value={values?.recreationalPrivate1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">2. Parks</td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic2"
                                value={values?.recreationalPublic2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate2"
                                value={values?.recreationalPrivate2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">3. Library/Reading Center</td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic3"
                                value={values?.recreationalPublic3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate3"
                                value={values?.recreationalPrivate3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">4. Movie Houses/Theaters</td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic4"
                                value={values?.recreationalPublic4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate4"
                                value={values?.recreationalPrivate4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">5. Beach Areas</td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic5"
                                value={values?.recreationalPublic5}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate5"
                                value={values?.recreationalPrivate5}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">
                            6. Scenic Views/Historical Landmarks
                        </td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic6"
                                value={values?.recreationalPublic6}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate6"
                                value={values?.recreationalPrivate6}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">
                            7. Games &#40;Video K, Billiard, Computer, etc.&#41;
                        </td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic7"
                                value={values?.recreationalPublic7}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate7"
                                value={values?.recreationalPrivate7}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">
                            8. Others &#40;specify&#41;{" "}
                            <input
                                name="recreational8Specify"
                                value={values?.recreational8Specify}
                                type="text"
                                className="w-40 pl-2 focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="recreationalPublic8"
                                value={values?.recreationalPublic8}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recreationalPrivate8"
                                value={values?.recreationalPrivate8}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SubmissionBarangayProfilePage7;
