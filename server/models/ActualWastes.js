module.exports = (sequelize, DataTypes) => {
    const ActualWastes = sequelize.define(
        "ActualWastes",
        {
            yearSubmitted: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            barangayName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            districtName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            actualWastes: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            populationCount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return ActualWastes;
};
