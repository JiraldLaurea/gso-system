module.exports = (sequelize, DataTypes) => {
    const TypeOfDocument = sequelize.define(
        "TypeOfDocument",
        {
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
