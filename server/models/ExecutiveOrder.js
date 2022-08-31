module.exports = (sequelize, DataTypes) => {
    const ExecutiveOrder = sequelize.define(
        "ExecutiveOrder",
        {
            documentName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            yearSubmitted: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            dateIssued: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            userId: {
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
            executiveOrderUrl: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return ExecutiveOrder;
};
