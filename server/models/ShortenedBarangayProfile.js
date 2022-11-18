module.exports = (sequelize, DataTypes) => {
    const ShortenedBarangayProfile = sequelize.define(
        "ShortenedBarangayProfile",
        {
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            typeOfDocumentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            typeOfDocument: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            yearSubmitted: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalLandArea: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            totalPopulation: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            totalPopulationMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalPopulationFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalPopulationBoth: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male12: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male13: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male14: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male15: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male16: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male17: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male18: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male19: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            male20: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female12: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female13: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female14: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female15: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female16: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female17: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female18: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female19: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            female20: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalBoth: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalHouseholdsCY: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            totalHouseholds: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBakery: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numGrocery: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numIceCream: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numSariSariStore: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numNativeDelicacies: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numHardwareElectrical: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numSweetPreserves: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numConstructionConcrete: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numSitcharon: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numCarJeepPartsSupplies: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numNoodles: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numMotorcyclesBicyclesSupplies: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBalut: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numAgriculturalEquipmentSupplies: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numVinegar: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numSchoolOfficeSupplies: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFishDryingSmoking: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numPhotoCenterSupplies: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numLaboratories: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numAppliance: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numChemicalIndustries: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numJewelryShopStore: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFeedmills: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBagsFootwearStore: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numGarmentEmbroidery: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numVideoTapesCenter: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFootwearFactories: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBazaars: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numTextileMills: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numPrintingPress: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numBagsWalletFactories: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numPawnshop: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFurnitureWooden: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFurnitureRattan: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFurnitureBamboo: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFurnitureMetal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numFuneralParlor: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numDrugStore: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numPublicMarket: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numTalipapa: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            numCinema: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
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
            // Page 2
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
            causeEarlyNeonatalDeathsCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeEarlyNeonatalCause1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeEarlyNeonatalCause2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeEarlyNeonatalCause3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeEarlyNeonatalNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeEarlyNeonatalNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeEarlyNeonatalNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalDeathsCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalCause1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeMaternalCause2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeMaternalCause3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeMaternalNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalName1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalName2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalName3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalName4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalNumGov1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumGov2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumGov3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumGov4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelDoctorNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelNurseNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelMidwifeNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelBHWNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelDoctorNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelNurseNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelMidwifeNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelBHWNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalServiceType1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceType2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceType3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceType4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            disposalTrucks: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalOpenPit: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalBurying: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalBurning: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalThrowAnywhere: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            disposalOthers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeCY1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeCY2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount1CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount1CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount2CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount2CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount3CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount3CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount4CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount4CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount5CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount5CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount6CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount6CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount7CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount7CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount8CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount8CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount9CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount9CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount10CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount10CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmountTotalCY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmountTotalCY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresCY1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresCY2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount1CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount1CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount2CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount2CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount3CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount3CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmountTotalCY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmountTotalCY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            governanceOwnedFacilities1: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities2: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities3: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities4: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities5: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities6: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities7: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities8: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities8StateOwnership: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities9: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities9StateOwnership: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities10: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities11: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities12: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities12Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayGovSupportOrgNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum7Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayGovSupportOrgNum8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum8Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayGovSupportOrgNum9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum12: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            signatureOverPrintedName: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            position: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            date1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayCaptain: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            date2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return ShortenedBarangayProfile;
};
