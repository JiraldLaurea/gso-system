module.exports = (sequelize, DataTypes) => {
    const ActionSelectedBarangay = sequelize.define(
        "ActionSelectedBarangay",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            selectedBarangay: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            selectedDistrict: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            yearSubmitted: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return ActionSelectedBarangay;
};
