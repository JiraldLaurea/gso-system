module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage3 = sequelize.define(
        "SubmissionBarangayProfilePage3",
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
            fishFarm1Type: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm1Num: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm1NumWorkers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm1AreasCovered: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm1VolumeCatch: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm1ProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm2Type: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm2Num: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm2NumWorkers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm2AreasCovered: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm2VolumeCatch: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm2ProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm3Type: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm3Num: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm3NumWorkers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            fishFarm3AreasCovered: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm3VolumeCatch: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            fishFarm3ProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            shrimpVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            shrimpProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            shellsVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            shellsProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishFryVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishFryProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            musselsVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            musselsProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            oystersVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            oystersProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishOthersVolume: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishOthersProductionValue: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            fishOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            numFisherman: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            averageIncomeFisherman: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            livestockLayers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockCattles: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockBroilers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockCarabaos: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockMuscovy: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockHogs: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockGeese: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockGoats: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockPigeons: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockHorses: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockQuails: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockDogs: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockPoultryOthers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockPoultryOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            livestockOthers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockTurkey: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockCats: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockLoveBirds: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockFightingCocks: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockPig: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            livestockChicken: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            prescenceAgricultural: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            prescenceWeeklyVisitation: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            prescenceSeedCollection: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            prescenceStorageAndProcessing: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            prescenceCreditAndCooperative: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            prescenceOthers: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            prescenceOthersInput: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
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
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage3;
};
