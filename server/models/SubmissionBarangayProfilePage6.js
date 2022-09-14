module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage6 = sequelize.define(
        "SubmissionBarangayProfilePage6",
        {
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            typeOfDocumentId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            typeOfDocument: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            yearSubmitted: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            numGradeCompleted: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            nurseryPrepKinder: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            grade10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            juniorHigh: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            seniorHigh: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            college1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            college2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            college3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            college4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            college5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            baccalaureate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            postBaccalaureate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            aquacultureNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            aquacultureSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            aquaculturePublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            aquaculturePrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            sewingNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sewingSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            sewingPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            sewingPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            flowerMakingNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            flowerMakingSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            flowerMakingPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            flowerMakingPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            backyardGardeningNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            backyardGardeningSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            backyardGardeningPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            backyardGardeningPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            handicraftNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            handicraftSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            handicraftPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            handicraftPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            beautyCulturalNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            beautyCulturalSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            beautyCulturalPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            beautyCulturalPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            livestockRaisingNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockRaisingSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            livestockRaisingPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            livestockRaisingPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            carpentryNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            carpentrySponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            carpentryPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            carpentryPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            cosmetologyNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            cosmetologySponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            cosmetologyPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            cosmetologyPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            recyclingOfMaterialNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recyclingOfMaterialSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            recyclingOfMaterialPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            recyclingOfMaterialPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            culinaryArtNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            culinaryArtSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            culinaryArtPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            culinaryArtPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            typingEncodingNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typingEncodingSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            typingEncodingPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            typingEncodingPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            electronicsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            electronicsSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            electronicsPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            electronicsPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            practicalElectricityNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            practicalElectricitySponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            practicalElectricityPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            practicalElectricityPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            othersNumSpecify: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            othersNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            othersSponsoredBy: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            othersPublic: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            othersPrivate: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPublic1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPrivate1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionDayCare1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPreschoolKinder1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionElementary1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionSecondary1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionTertiaryCollege1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPostGraduate1: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPublic2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPrivate2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionDayCare2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPreschoolKinder2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionElementary2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionSecondary2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionTertiaryCollege2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPostGraduate2: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPublic3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPrivate3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionDayCare3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPreschoolKinder3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionElementary3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionSecondary3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionTertiaryCollege3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
            educInstructionPostGraduate3: {
                type: DataTypes.TEXT,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage6;
};
