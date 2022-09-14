module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage7 = sequelize.define(
        "SubmissionBarangayProfilePage7",
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
            typeOfBuildingNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfBuildingNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfBuildingNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfBuildingNum4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfBuildingNum5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfBuildingNum6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfBuildingNum6Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            typeOfConstructionMats1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfConstructionMats2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfConstructionMats3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfConstructionMats4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfConstructionMats5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            typeOfConstructionMats5Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numInformalSettler1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numInformalSettler2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numInformalSettler3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numInformalSettler4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numInformalSettler5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numInformalSettlerLocation1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numInformalSettlerLocation2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numInformalSettlerLocation3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numInformalSettlerLocation4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numInformalSettlerLocation5: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numHeritageStructure1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHeritageStructure2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHeritageStructure3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHeritageStructure4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHeritageStructure5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHeritageStructure6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            heritageStructureLocation1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            heritageStructureLocation2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            heritageStructureLocation3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            heritageStructureLocation4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            heritageStructureLocation5: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            heritageStructureLocation6: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceProtectiveService1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceProtectiveService2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceProtectiveService3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceProtectiveService4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceProtectiveService5: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceProtectiveService5Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            presenceNumPersonnel1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            presenceNumPersonnel2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            presenceNumPersonnel3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            presenceNumPersonnel4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            presenceNumPersonnel5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPublic8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilitiesPrivate8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sportsFacilities8Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            recreationalPublic1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPublic8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreationalPrivate8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            recreational8Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage7;
};
