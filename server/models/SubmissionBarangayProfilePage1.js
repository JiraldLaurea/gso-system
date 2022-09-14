module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage1 = sequelize.define(
        "SubmissionBarangayProfilePage1",
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
            city: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            legalBasis: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            dateRatification: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            sitio1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            sitio2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            sitio3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            sitio4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            north: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            south: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            east: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            west: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            distanceFromCityHall: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            distanceFromPoblacion: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            distanceFromCapitol: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            distanceFromHighway: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
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
            dialectSpoken: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            ethnicGroups: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage1;
};
