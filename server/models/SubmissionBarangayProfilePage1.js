module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage1 = sequelize.define(
        "SubmissionBarangayProfilePage1",
        {
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            legalBasis: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            dateRatification: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            sitio1: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            sitio2: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            sitio3: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            sitio4: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            north: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            south: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            east: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            west: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            distanceFromCityHall: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            distanceFromPoblacion: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            distanceFromCapitol: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            distanceFromHighway: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            totalLandArea: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            totalPopulation: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            totalPopulationMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalPopulationFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalPopulationBoth: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male1: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male2: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male3: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male4: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male5: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male6: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male7: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male8: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male9: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male10: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male11: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male12: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male13: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male14: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male15: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male16: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male17: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male18: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male19: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            male20: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female1: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female2: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female3: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female4: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female5: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female6: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female7: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female8: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female9: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female10: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female11: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female12: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female13: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female14: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female15: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female16: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female17: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female18: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female19: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            female20: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalBoth: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalHouseholdsCY: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            totalHouseholds: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            dialectSpoken: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            ethnicGroups: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage1;
};
