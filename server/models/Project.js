module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define(
        "Project",
        {
            barangayName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            actionPlan: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            objectives: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            activities: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            performanceIndicatorAndTerminal: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            baseline: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            assumption: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            meansOfVerification: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return Project;
};
