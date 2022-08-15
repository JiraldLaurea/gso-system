module.exports = (sequelize, DataTypes) => {
    const TypeOfDocument = sequelize.define(
        "TypeOfDocument",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            typeOfDocument: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return TypeOfDocument;
};
