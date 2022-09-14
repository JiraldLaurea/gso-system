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
        },
        {
            freezeTableName: true,
        }
    );
    return ActionSelectedBarangay;
};
