module.exports = (sequelize, DataTypes) => {
    const Action = sequelize.define(
        "Action",
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            barangayId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            action: {
                type: DataTypes.STRING,
                allowNull: true,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return Action;
};
