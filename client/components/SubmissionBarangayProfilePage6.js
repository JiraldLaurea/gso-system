import React, { useEffect, useState } from "react";
import Axios from "axios";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage6");
        if (!storedValues)
            return {
                numGradeCompleted: 0,
                nurseryPrepKinder: 0,
                grade1: 0,
                grade2: 0,
                grade3: 0,
                grade4: 0,
                grade5: 0,
                grade6: 0,
                grade7: 0,
                grade8: 0,
                grade9: 0,
                grade10: 0,
                juniorHigh: 0,
                seniorHigh: 0,
                college1: 0,
                college2: 0,
                college3: 0,
                college4: 0,
                college5: 0,
                baccalaureate: 0,
                postBaccalaureate: 0,
                aquacultureNum: 0,
                aquacultureSponsoredBy: "",
                aquaculturePublic: "",
                aquaculturePrivate: "",
                sewingNum: 0,
                sewingSponsoredBy: "",
                sewingPublic: "",
                sewingPrivate: "",
                flowerMakingNum: 0,
                flowerMakingSponsoredBy: "",
                flowerMakingPublic: "",
                flowerMakingPrivate: "",
                backyardGardeningNum: 0,
                backyardGardeningSponsoredBy: "",
                backyardGardeningPublic: "",
                backyardGardeningPrivate: "",
                handicraftNum: 0,
                handicraftSponsoredBy: "",
                handicraftPublic: "",
                handicraftPrivate: "",
                beautyCulturalNum: 0,
                beautyCulturalSponsoredBy: "",
                beautyCulturalPublic: "",
                beautyCulturalPrivate: "",
                livestockRaisingNum: 0,
                livestockRaisingSponsoredBy: "",
                livestockRaisingPublic: "",
                livestockRaisingPrivate: "",
                carpentryNum: 0,
                carpentrySponsoredBy: "",
                carpentryPublic: "",
                carpentryPrivate: "",
                cosmetologyNum: 0,
                cosmetologySponsoredBy: "",
                cosmetologyPublic: "",
                cosmetologyPrivate: "",
                recyclingOfMaterialNum: 0,
                recyclingOfMaterialSponsoredBy: "",
                recyclingOfMaterialPublic: "",
                recyclingOfMaterialPrivate: "",
                culinaryArtNum: 0,
                culinaryArtSponsoredBy: "",
                culinaryArtPublic: "",
                culinaryArtPrivate: "",
                typingEncodingNum: 0,
                typingEncodingSponsoredBy: "",
                typingEncodingPublic: "",
                typingEncodingPrivate: "",
                electronicsNum: 0,
                electronicsSponsoredBy: "",
                electronicsPublic: "",
                electronicsPrivate: "",
                practicalElectricityNum: 0,
                practicalElectricitySponsoredBy: "",
                practicalElectricityPublic: "",
                practicalElectricityPrivate: "",
                othersNumSpecify: "",
                othersNum: 0,
                othersSponsoredBy: "",
                othersPublic: "",
                othersPrivate: "",
                educInstructionPublic1: "",
                educInstructionPrivate1: "",
                educInstructionDayCare1: "",
                educInstructionPreschoolKinder1: "",
                educInstructionElementary1: "",
                educInstructionSecondary1: "",
                educInstructionTertiaryCollege1: "",
                educInstructionPostGraduate1: "",
                educInstructionPublic2: "",
                educInstructionPrivate2: "",
                educInstructionDayCare2: "",
                educInstructionPreschoolKinder2: "",
                educInstructionElementary2: "",
                educInstructionSecondary2: "",
                educInstructionTertiaryCollege2: "",
                educInstructionPostGraduate2: "",
                educInstructionPublic3: "",
                educInstructionPrivate3: "",
                educInstructionDayCare3: "",
                educInstructionPreschoolKinder3: "",
                educInstructionElementary3: "",
                educInstructionSecondary3: "",
                educInstructionTertiaryCollege3: "",
                educInstructionPostGraduate3: "",
            };
        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage6({ page6Data }) {
    // const [values, setValues] = useState(getFormValues);

    const [values, setValues] = useState({
        numGradeCompleted: page6Data.numGradeCompleted,
        nurseryPrepKinder: page6Data.nurseryPrepKinder,
        grade1: page6Data.grade1,
        grade2: page6Data.grade2,
        grade3: page6Data.grade3,
        grade4: page6Data.grade4,
        grade5: page6Data.grade5,
        grade6: page6Data.grade6,
        grade7: page6Data.grade7,
        grade8: page6Data.grade8,
        grade9: page6Data.grade9,
        grade10: page6Data.grade10,
        juniorHigh: page6Data.juniorHigh,
        seniorHigh: page6Data.seniorHigh,
        college1: page6Data.college1,
        college2: page6Data.college2,
        college3: page6Data.college3,
        college4: page6Data.college4,
        college5: page6Data.college5,
        baccalaureate: page6Data.baccalaureate,
        postBaccalaureate: page6Data.postBaccalaureate,
        aquacultureNum: page6Data.aquacultureNum,
        aquacultureSponsoredBy: page6Data.aquacultureSponsoredBy,
        aquaculturePublic: page6Data.aquaculturePublic,
        aquaculturePrivate: page6Data.aquaculturePrivate,
        sewingNum: page6Data.sewingNum,
        sewingSponsoredBy: page6Data.sewingSponsoredBy,
        sewingPublic: page6Data.sewingPublic,
        sewingPrivate: page6Data.sewingPrivate,
        flowerMakingNum: page6Data.flowerMakingNum,
        flowerMakingSponsoredBy: page6Data.flowerMakingSponsoredBy,
        flowerMakingPublic: page6Data.flowerMakingPublic,
        flowerMakingPrivate: page6Data.flowerMakingPrivate,
        backyardGardeningNum: page6Data.backyardGardeningNum,
        backyardGardeningSponsoredBy: page6Data.backyardGardeningSponsoredBy,
        backyardGardeningPublic: page6Data.backyardGardeningPublic,
        backyardGardeningPrivate: page6Data.backyardGardeningPrivate,
        handicraftNum: page6Data.handicraftNum,
        handicraftSponsoredBy: page6Data.handicraftSponsoredBy,
        handicraftPublic: page6Data.handicraftPublic,
        handicraftPrivate: page6Data.handicraftPrivate,
        beautyCulturalNum: page6Data.beautyCulturalNum,
        beautyCulturalSponsoredBy: page6Data.beautyCulturalSponsoredBy,
        beautyCulturalPublic: page6Data.beautyCulturalPublic,
        beautyCulturalPrivate: page6Data.beautyCulturalPrivate,
        livestockRaisingNum: page6Data.livestockRaisingNum,
        livestockRaisingSponsoredBy: page6Data.livestockRaisingSponsoredBy,
        livestockRaisingPublic: page6Data.livestockRaisingPublic,
        livestockRaisingPrivate: page6Data.livestockRaisingPrivate,
        carpentryNum: page6Data.carpentryNum,
        carpentrySponsoredBy: page6Data.carpentrySponsoredBy,
        carpentryPublic: page6Data.carpentryPublic,
        carpentryPrivate: page6Data.carpentryPrivate,
        cosmetologyNum: page6Data.cosmetologyNum,
        cosmetologySponsoredBy: page6Data.cosmetologySponsoredBy,
        cosmetologyPublic: page6Data.cosmetologyPublic,
        cosmetologyPrivate: page6Data.cosmetologyPrivate,
        recyclingOfMaterialNum: page6Data.recyclingOfMaterialNum,
        recyclingOfMaterialSponsoredBy:
            page6Data.recyclingOfMaterialSponsoredBy,
        recyclingOfMaterialPublic: page6Data.recyclingOfMaterialPublic,
        recyclingOfMaterialPrivate: page6Data.recyclingOfMaterialPrivate,
        culinaryArtNum: page6Data.culinaryArtNum,
        culinaryArtSponsoredBy: page6Data.culinaryArtSponsoredBy,
        culinaryArtPublic: page6Data.culinaryArtPublic,
        culinaryArtPrivate: page6Data.culinaryArtPrivate,
        typingEncodingNum: page6Data.typingEncodingNum,
        typingEncodingSponsoredBy: page6Data.typingEncodingSponsoredBy,
        typingEncodingPublic: page6Data.typingEncodingPublic,
        typingEncodingPrivate: page6Data.typingEncodingPrivate,
        electronicsNum: page6Data.electronicsNum,
        electronicsSponsoredBy: page6Data.electronicsSponsoredBy,
        electronicsPublic: page6Data.electronicsPublic,
        electronicsPrivate: page6Data.electronicsPrivate,
        practicalElectricityNum: page6Data.practicalElectricityNum,
        practicalElectricitySponsoredBy:
            page6Data.practicalElectricitySponsoredBy,
        practicalElectricityPublic: page6Data.practicalElectricityPublic,
        practicalElectricityPrivate: page6Data.practicalElectricityPrivate,
        othersNumSpecify: page6Data.othersNumSpecify,
        othersNum: page6Data.othersNum,
        othersSponsoredBy: page6Data.othersSponsoredBy,
        othersPublic: page6Data.othersPublic,
        othersPrivate: page6Data.othersPrivate,
        educInstructionPublic1: page6Data.educInstructionPublic1,
        educInstructionPrivate1: page6Data.educInstructionPrivate1,
        educInstructionDayCare1: page6Data.educInstructionDayCare1,
        educInstructionPreschoolKinder1:
            page6Data.educInstructionPreschoolKinder1,
        educInstructionElementary1: page6Data.educInstructionElementary1,
        educInstructionSecondary1: page6Data.educInstructionSecondary1,
        educInstructionTertiaryCollege1:
            page6Data.educInstructionTertiaryCollege1,
        educInstructionPostGraduate1: page6Data.educInstructionPostGraduate1,
        educInstructionPublic2: page6Data.educInstructionPublic2,
        educInstructionPrivate2: page6Data.educInstructionPrivate2,
        educInstructionDayCare2: page6Data.educInstructionDayCare2,
        educInstructionPreschoolKinder2:
            page6Data.educInstructionPreschoolKinder2,
        educInstructionElementary2: page6Data.educInstructionElementary2,
        educInstructionSecondary2: page6Data.educInstructionSecondary2,
        educInstructionTertiaryCollege2:
            page6Data.educInstructionTertiaryCollege2,
        educInstructionPostGraduate2: page6Data.educInstructionPostGraduate2,
        educInstructionPublic3: page6Data.educInstructionPublic3,
        educInstructionPrivate3: page6Data.educInstructionPrivate3,
        educInstructionDayCare3: page6Data.educInstructionDayCare3,
        educInstructionPreschoolKinder3:
            page6Data.educInstructionPreschoolKinder3,
        educInstructionElementary3: page6Data.educInstructionElementary3,
        educInstructionSecondary3: page6Data.educInstructionSecondary3,
        educInstructionTertiaryCollege3:
            page6Data.educInstructionTertiaryCollege3,
        educInstructionPostGraduate3: page6Data.educInstructionPostGraduate3,
    });

    useEffect(() => {
        const updateSubmissionBarangayProfilePage6 = async () => {
            const data = {
                numGradeCompleted: values.numGradeCompleted,
                nurseryPrepKinder: values.nurseryPrepKinder,
                grade1: values.grade1,
                grade2: values.grade2,
                grade3: values.grade3,
                grade4: values.grade4,
                grade5: values.grade5,
                grade6: values.grade6,
                grade7: values.grade7,
                grade8: values.grade8,
                grade9: values.grade9,
                grade10: values.grade10,
                juniorHigh: values.juniorHigh,
                seniorHigh: values.seniorHigh,
                college1: values.college1,
                college2: values.college2,
                college3: values.college3,
                college4: values.college4,
                college5: values.college5,
                baccalaureate: values.baccalaureate,
                postBaccalaureate: values.postBaccalaureate,
                aquacultureNum: values.aquacultureNum,
                aquacultureSponsoredBy: values.aquacultureSponsoredBy,
                aquaculturePublic: values.aquaculturePublic,
                aquaculturePrivate: values.aquaculturePrivate,
                sewingNum: values.sewingNum,
                sewingSponsoredBy: values.sewingSponsoredBy,
                sewingPublic: values.sewingPublic,
                sewingPrivate: values.sewingPrivate,
                flowerMakingNum: values.flowerMakingNum,
                flowerMakingSponsoredBy: values.flowerMakingSponsoredBy,
                flowerMakingPublic: values.flowerMakingPublic,
                flowerMakingPrivate: values.flowerMakingPrivate,
                backyardGardeningNum: values.backyardGardeningNum,
                backyardGardeningSponsoredBy:
                    values.backyardGardeningSponsoredBy,
                backyardGardeningPublic: values.backyardGardeningPublic,
                backyardGardeningPrivate: values.backyardGardeningPrivate,
                handicraftNum: values.handicraftNum,
                handicraftSponsoredBy: values.handicraftSponsoredBy,
                handicraftPublic: values.handicraftPublic,
                handicraftPrivate: values.handicraftPrivate,
                beautyCulturalNum: values.beautyCulturalNum,
                beautyCulturalSponsoredBy: values.beautyCulturalSponsoredBy,
                beautyCulturalPublic: values.beautyCulturalPublic,
                beautyCulturalPrivate: values.beautyCulturalPrivate,
                livestockRaisingNum: values.livestockRaisingNum,
                livestockRaisingSponsoredBy: values.livestockRaisingSponsoredBy,
                livestockRaisingPublic: values.livestockRaisingPublic,
                livestockRaisingPrivate: values.livestockRaisingPrivate,
                carpentryNum: values.carpentryNum,
                carpentrySponsoredBy: values.carpentrySponsoredBy,
                carpentryPublic: values.carpentryPublic,
                carpentryPrivate: values.carpentryPrivate,
                cosmetologyNum: values.cosmetologyNum,
                cosmetologySponsoredBy: values.cosmetologySponsoredBy,
                cosmetologyPublic: values.cosmetologyPublic,
                cosmetologyPrivate: values.cosmetologyPrivate,
                recyclingOfMaterialNum: values.recyclingOfMaterialNum,
                recyclingOfMaterialSponsoredBy:
                    values.recyclingOfMaterialSponsoredBy,
                recyclingOfMaterialPublic: values.recyclingOfMaterialPublic,
                recyclingOfMaterialPrivate: values.recyclingOfMaterialPrivate,
                culinaryArtNum: values.culinaryArtNum,
                culinaryArtSponsoredBy: values.culinaryArtSponsoredBy,
                culinaryArtPublic: values.culinaryArtPublic,
                culinaryArtPrivate: values.culinaryArtPrivate,
                typingEncodingNum: values.typingEncodingNum,
                typingEncodingSponsoredBy: values.typingEncodingSponsoredBy,
                typingEncodingPublic: values.typingEncodingPublic,
                typingEncodingPrivate: values.typingEncodingPrivate,
                electronicsNum: values.electronicsNum,
                electronicsSponsoredBy: values.electronicsSponsoredBy,
                electronicsPublic: values.electronicsPublic,
                electronicsPrivate: values.electronicsPrivate,
                practicalElectricityNum: values.practicalElectricityNum,
                practicalElectricitySponsoredBy:
                    values.practicalElectricitySponsoredBy,
                practicalElectricityPublic: values.practicalElectricityPublic,
                practicalElectricityPrivate: values.practicalElectricityPrivate,
                othersNumSpecify: values.othersNumSpecify,
                othersNum: values.othersNum,
                othersSponsoredBy: values.othersSponsoredBy,
                othersPublic: values.othersPublic,
                othersPrivate: values.othersPrivate,
                educInstructionPublic1: values.educInstructionPublic1,
                educInstructionPrivate1: values.educInstructionPrivate1,
                educInstructionDayCare1: values.educInstructionDayCare1,
                educInstructionPreschoolKinder1:
                    values.educInstructionPreschoolKinder1,
                educInstructionElementary1: values.educInstructionElementary1,
                educInstructionSecondary1: values.educInstructionSecondary1,
                educInstructionTertiaryCollege1:
                    values.educInstructionTertiaryCollege1,
                educInstructionPostGraduate1:
                    values.educInstructionPostGraduate1,
                educInstructionPublic2: values.educInstructionPublic2,
                educInstructionPrivate2: values.educInstructionPrivate2,
                educInstructionDayCare2: values.educInstructionDayCare2,
                educInstructionPreschoolKinder2:
                    values.educInstructionPreschoolKinder2,
                educInstructionElementary2: values.educInstructionElementary2,
                educInstructionSecondary2: values.educInstructionSecondary2,
                educInstructionTertiaryCollege2:
                    values.educInstructionTertiaryCollege2,
                educInstructionPostGraduate2:
                    values.educInstructionPostGraduate2,
                educInstructionPublic3: values.educInstructionPublic3,
                educInstructionPrivate3: values.educInstructionPrivate3,
                educInstructionDayCare3: values.educInstructionDayCare3,
                educInstructionPreschoolKinder3:
                    values.educInstructionPreschoolKinder3,
                educInstructionElementary3: values.educInstructionElementary3,
                educInstructionSecondary3: values.educInstructionSecondary3,
                educInstructionTertiaryCollege3:
                    values.educInstructionTertiaryCollege3,
                educInstructionPostGraduate3:
                    values.educInstructionPostGraduate3,
            };

            await Axios.put(
                "http://localhost:3001/submission/brgyProfilePage6",
                data
            );
        };

        updateSubmissionBarangayProfilePage6();
    }, [values]);

    // useEffect(() => {
    //     localStorage.setItem("brgyProfilePage6", JSON.stringify(values));
    // }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <p className="font-bold">C. Education</p>
            <p className="mb-2 ml-4 font-bold">C.1 Formal Education</p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th className="border-r">Educational Attainment</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2 border-r">No. Grade Completed</td>
                        <td>
                            <input
                                name="numGradeCompleted"
                                value={values?.numGradeCompleted}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold border-r">
                            Nursery/Prep/Kinder
                        </td>
                        <td>
                            <input
                                name="nurseryPrepKinder"
                                value={values?.nurseryPrepKinder}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold border-r">Elementary</td>
                        <td></td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade I</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade1"
                                value={values?.grade1}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade II</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade2"
                                value={values?.grade2}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade III</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade3"
                                value={values?.grade3}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade IV</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade4"
                                value={values?.grade4}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade V</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade5"
                                value={values?.grade5}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade VI</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade6"
                                value={values?.grade6}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold border-r ">
                            High School
                        </td>
                        <td></td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade VII</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade7"
                                value={values?.grade7}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade VIII</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade8"
                                value={values?.grade8}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade IX</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade9"
                                value={values?.grade9}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Grade X</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="grade10"
                                value={values?.grade10}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Junior High</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="juniorHigh"
                                value={values?.juniorHigh}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>Senior High</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="seniorHigh"
                                value={values?.seniorHigh}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold border-r ">College</td>
                        <td></td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>1st Year</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="college1"
                                value={values?.college1}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>2nd Year</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="college2"
                                value={values?.college2}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>3rd Year</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="college3"
                                value={values?.college3}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>4th Year</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="college4"
                                value={values?.college4}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="font-bold border-r pl-11 ">
                            <ul className="list-disc">
                                <li>5th Year</li>
                            </ul>
                        </td>
                        <td>
                            <input
                                name="college5"
                                value={values?.college5}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold border-r ">
                            Baccalaureate Degree &#40;BSE, BSC, etc.&#41;
                        </td>
                        <td>
                            <input
                                name="baccalaureate"
                                value={values?.baccalaureate}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold border-r ">
                            Post Baccalaureate &#40;M.a, Ph. D&#41;
                        </td>
                        <td>
                            <input
                                name="postBaccalaureate"
                                value={values?.postBaccalaureate}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-4 mb-2 ml-4 font-bold">C.2 Non-Formal Education</p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th rowSpan={2} className="w-64">
                            Non-Formal/Vocational Course/Training Attend
                        </th>
                        <th className="border-x" rowSpan={2}>
                            Number
                        </th>
                        <th className="border-r" rowSpan={2}>
                            Sponsored/Conducted By
                        </th>
                        <th className="border-b" colSpan={2}>
                            Type &#40;Pls. Check&#41;
                        </th>
                    </tr>
                    <tr>
                        <th className="border-r">Public</th>
                        <th>Private</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Aquaculture</td>
                        <td className="border-x">
                            <input
                                name="aquacultureNum"
                                value={values?.aquacultureNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="aquacultureSponsoredBy"
                                value={values?.aquacultureSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="aquaculturePublic"
                                value={values?.aquaculturePublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="aquaculturePrivate"
                                value={values?.aquaculturePrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Sewing</td>
                        <td className="border-x">
                            <input
                                name="sewingNum"
                                value={values?.sewingNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sewingSponsoredBy"
                                value={values?.sewingSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="sewingPublic"
                                value={values?.sewingPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sewingPrivate"
                                value={values?.sewingPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Flower Making</td>
                        <td className="border-x">
                            <input
                                name="flowerMakingNum"
                                value={values?.flowerMakingNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="flowerMakingSponsoredBy"
                                value={values?.flowerMakingSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="flowerMakingPublic"
                                value={values?.flowerMakingPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="flowerMakingPrivate"
                                value={values?.flowerMakingPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Backyard Gardening</td>
                        <td className="border-x">
                            <input
                                name="backyardGardeningNum"
                                value={values?.backyardGardeningNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="backyardGardeningSponsoredBy"
                                value={values?.backyardGardeningSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="backyardGardeningPublic"
                                value={values?.backyardGardeningPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="backyardGardeningPrivate"
                                value={values?.backyardGardeningPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            Handicraft &#40;Basket Making, Weaving&#41;
                        </td>
                        <td className="border-x">
                            <input
                                name="handicraftNum"
                                value={values?.handicraftNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="handicraftSponsoredBy"
                                value={values?.handicraftSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="handicraftPublic"
                                value={values?.handicraftPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="handicraftPrivate"
                                value={values?.handicraftPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Beauty Cultural</td>
                        <td className="border-x">
                            <input
                                name="beautyCulturalNum"
                                value={values?.beautyCulturalNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="beautyCulturalSponsoredBy"
                                value={values?.beautyCulturalSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="beautyCulturalPublic"
                                value={values?.beautyCulturalPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="beautyCulturalPrivate"
                                value={values?.beautyCulturalPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Livestock Raising</td>
                        <td className="border-x">
                            <input
                                name="livestockRaisingNum"
                                value={values?.livestockRaisingNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="livestockRaisingSponsoredBy"
                                value={values?.livestockRaisingSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="livestockRaisingPublic"
                                value={values?.livestockRaisingPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="livestockRaisingPrivate"
                                value={values?.livestockRaisingPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            Carpentry &#40;Furniture Making&#41;
                        </td>
                        <td className="border-x">
                            <input
                                name="carpentryNum"
                                value={values?.carpentryNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="carpentrySponsoredBy"
                                value={values?.carpentrySponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="carpentryPublic"
                                value={values?.carpentryPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="carpentryPrivate"
                                value={values?.carpentryPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Cosmetology</td>
                        <td className="border-x">
                            <input
                                name="cosmetologyNum"
                                value={values?.cosmetologyNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="cosmetologySponsoredBy"
                                value={values?.cosmetologySponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="cosmetologyPublic"
                                value={values?.cosmetologyPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="cosmetologyPrivate"
                                value={values?.cosmetologyPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            Recycling of Material
                        </td>
                        <td className="border-x">
                            <input
                                name="recyclingOfMaterialNum"
                                value={values?.recyclingOfMaterialNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recyclingOfMaterialSponsoredBy"
                                value={values?.recyclingOfMaterialSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="recyclingOfMaterialPublic"
                                value={values?.recyclingOfMaterialPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="recyclingOfMaterialPrivate"
                                value={values?.recyclingOfMaterialPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            Culinary Art &#40;Cooking, Banking, Food
                            Preservation&#41;
                        </td>
                        <td className="border-x">
                            <input
                                name="culinaryArtNum"
                                value={values?.culinaryArtNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="culinaryArtSponsoredBy"
                                value={values?.culinaryArtSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="culinaryArtPublic"
                                value={values?.culinaryArtPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="culinaryArtPrivate"
                                value={values?.culinaryArtPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Typing/Encoding</td>
                        <td className="border-x">
                            <input
                                name="typingEncodingNum"
                                value={values?.typingEncodingNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="typingEncodingSponsoredBy"
                                value={values?.typingEncodingSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="typingEncodingPublic"
                                value={values?.typingEncodingPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="typingEncodingPrivate"
                                value={values?.typingEncodingPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">Electronics</td>
                        <td className="border-x">
                            <input
                                name="electronicsNum"
                                value={values?.electronicsNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="electronicsSponsoredBy"
                                value={values?.electronicsSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="electronicsPublic"
                                value={values?.electronicsPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="electronicsPrivate"
                                value={values?.electronicsPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            Practical Electricity
                        </td>
                        <td className="border-x">
                            <input
                                name="practicalElectricityNum"
                                value={values?.practicalElectricityNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="practicalElectricitySponsoredBy"
                                value={values?.practicalElectricitySponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="practicalElectricityPublic"
                                value={values?.practicalElectricityPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="practicalElectricityPrivate"
                                value={values?.practicalElectricityPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 font-bold">
                            Others &#40;Pls. Specify&#41;
                            <input
                                name="othersNumSpecify"
                                value={values?.othersNumSpecify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="othersNum"
                                value={values?.othersNum}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="othersSponsoredBy"
                                value={values?.othersSponsoredBy}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="othersPublic"
                                value={values?.othersPublic}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="othersPrivate"
                                value={values?.othersPrivate}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-4 mb-2 ml-4 font-bold">
                C.3 Educational Facilities
            </p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th className="w-28">
                            Name of Educational Instruction
                        </th>
                        <th colSpan={2} className="border-x">
                            Type
                        </th>
                        <th colSpan={6}>
                            Level of Education Offered &#40;Pls. Check&#41;
                        </th>
                    </tr>
                    <tr className="border-t">
                        <th></th>
                        <th className="border-x">Public</th>
                        <th>Private</th>
                        <th className="border-x">Day Care</th>
                        <th>Pre-School/Kinder</th>
                        <th className="border-x">Elementary</th>
                        <th>Secondary</th>
                        <th className="border-x">Tertiary/College</th>
                        <th>Post Graduate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">BTES</td>
                        <td className="border-x">
                            <input
                                name="educInstructionPublic1"
                                value={values?.educInstructionPublic1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPrivate1"
                                value={values?.educInstructionPrivate1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionDayCare1"
                                value={values?.educInstructionDayCare1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPreschoolKinder1"
                                value={values?.educInstructionPreschoolKinder1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionElementary1"
                                value={values?.educInstructionElementary1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionSecondary1"
                                value={values?.educInstructionSecondary1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionTertiaryCollege1"
                                value={values?.educInstructionTertiaryCollege1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPostGraduate1"
                                value={values?.educInstructionPostGraduate1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">BDC</td>
                        <td className="border-x">
                            <input
                                name="educInstructionPublic2"
                                value={values?.educInstructionPublic2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPrivate2"
                                value={values?.educInstructionPrivate2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionDayCare2"
                                value={values?.educInstructionDayCare2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPreschoolKinder2"
                                value={values?.educInstructionPreschoolKinder2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionElementary2"
                                value={values?.educInstructionElementary2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionSecondary2"
                                value={values?.educInstructionSecondary2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionTertiaryCollege2"
                                value={values?.educInstructionTertiaryCollege2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPostGraduate2"
                                value={values?.educInstructionPostGraduate2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">BNHS</td>
                        <td className="border-x">
                            <input
                                name="educInstructionPublic3"
                                value={values?.educInstructionPublic3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPrivate3"
                                value={values?.educInstructionPrivate3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionDayCare3"
                                value={values?.educInstructionDayCare3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPreschoolKinder3"
                                value={values?.educInstructionPreschoolKinder3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionElementary3"
                                value={values?.educInstructionElementary3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionSecondary3"
                                value={values?.educInstructionSecondary3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="educInstructionTertiaryCollege3"
                                value={values?.educInstructionTertiaryCollege3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="educInstructionPostGraduate3"
                                value={values?.educInstructionPostGraduate3}
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

export default SubmissionBarangayProfilePage6;
