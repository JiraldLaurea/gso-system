module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage4 = sequelize.define(
        "SubmissionBarangayProfilePage4",
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
            numPaperManufacturing: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numCockpit: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numCementManufacturing: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFinancialInstitutions: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHallowBlocksMaking: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numRestaurants: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numMarbleCraft: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numRealEstate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBlacksmith: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numNightClubBarMassage: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numIronMetalCraft: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numMemorialParks: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numEngineeringWorkMachineShop: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numInsurance: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numJewelryManufacturingGoldsmith: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numGasolineStation: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numCeramicsPottery: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numGeneralServiceContractors: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numWoodcraft: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numArrastreServices: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numEngraving: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBodyWorkshop: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFashionAccessories: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFitnessGym: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numOthersManufacturing: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numOthersManufacturingSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numBeautyParlorBarberShop: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numCooperativeRiceGrowers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numOthersCommercial: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numOthersCommercialSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            totalNumBirths: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalNumDeathsAllCauses: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalNumStillBirth: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalNumInfantDeaths: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalNumEarlyNeonatalDeaths: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fiveLeadingCausesMortalityCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fiveLeadingMorbidityCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeCardiovascularDisorder: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeCancer: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeOldAge: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeKidneyFailure: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeTB: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeFeverFlu: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeCough: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeAsthma: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeHypertension: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causePTB: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numMalnourishedChildrenCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalNumChildWeighted: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childSUUnderOneYearNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childSUUnderOneYearPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childSUOneToFourYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childSUOneToFourYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childSUFiveToSixYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childSUFiveToSixYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childSUTotalNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childSUPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childModUUnderOneYearNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childModUUnderOneYearPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childModUOneToFourYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childModUOneToFourYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childModUFiveToSixYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childModUFiveToSixYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childModUTotalNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childModUPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childMildUUnderOneYearNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childMildUUnderOneYearPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childMildUOneToFourYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childMildUOneToFourYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childMildUFiveToSixYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childMildUFiveToSixYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childMildUTotalNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childMildUPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childTotalUnderOneYearNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childTotalUnderOneYearPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childTotalOneToFourYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childTotalOneToFourYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childTotalFiveToSixYearsNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childTotalFiveToSixYearsPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            childTotalTotalNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            childTotalPercent: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            infantLeadingCausesMortalityCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantLeadingCausesMorbidityCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMortalityCause1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            infantMortalityCause2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            infantMortalityCause3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            infantMortalityNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMortalityNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMortalityNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMorbidityFeverNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMorbidityCoughNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMorbidityMalnutritionNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMorbidityDiarrheaNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            infantMorbidityTCPrimaryComplexNum: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage4;
};
