module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage2 = sequelize.define(
        "SubmissionBarangayProfilePage2",
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
            dateLastElection: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numRegisteredVoters: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numPredominantVoters: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numPrecincts: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            majorSourcesLivelihood: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            totalSelfEmployed: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalDriver: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalEmployee: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalTrisikadDriver: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalTeacher: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalFishermanFarmer: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalOFWSeaman: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalVendor: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalMedicalProfession: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalDressmakerTailor: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalCarpenterPlumber: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalBarbersHairdresser: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalLaborerOddJobs: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalBusinessman: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalJanitorGardener: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalBeautician: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalSecretary: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalElectricianTechnician: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalSalesClerk: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalOthers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            totalOneToTen: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalElevenToTwenty: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalGrand: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentMale11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentFemale11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentTotalMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            employmentTotalFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome1: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome2: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome3: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome4: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome5: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome6: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome7: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome8: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome9: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome10: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome11: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome12: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome13: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome14: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncome15: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            monthlyIncomeGrandTotal: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            farmingTechnique: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            methodUsed: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            annualIncomeFarmerTenant: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsRice: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsVegetableCorn: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsRiceYieldYearKg: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsVegetableCornYieldYearKg: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            numFarmersTenantsRice: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            numFarmersTenantsVegetableCorn: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsProduced1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            cropsProduced1Number: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsProduced1YieldYear: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            cropsProduced1FarmersTenants: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityRicemills: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityCono: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityKiskisan: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityWarehouse: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityBuyingStations: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityTractors: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityOthers: {
                type: DataTypes.DOUBLE,
                allowNull: true,
                defaultValue: 0,
            },
            agriFacilityOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem1ServicesArea: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem1NumFarmers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            irrigationSystem1ThrougoutTheYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem1TwiceAYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem1OnceAYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem2ServicesArea: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem2NumFarmers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            irrigationSystem2ThrougoutTheYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem2TwiceAYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem2OnceAYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem3ServicesArea: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem3NumFarmers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            irrigationSystem3ThrougoutTheYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem3TwiceAYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            irrigationSystem3OnceAYear: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage2;
};
