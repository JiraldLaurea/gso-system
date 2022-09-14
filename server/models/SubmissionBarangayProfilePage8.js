module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage8 = sequelize.define(
        "SubmissionBarangayProfilePage8",
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
            tricycleWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            tricycleWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            tricycleWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            trisikadWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            trisikadWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            trisikadWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            jeepneyWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            jeepneyWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            jeepneyWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            carWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            carWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            carWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            busWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            busWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            busWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            boatMotorizedWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            boatMotorizedWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            boatMotorizedWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            boatNonMotorizedWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            boatNonMotorizedWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            boatNonMotorizedWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            othersWithinBarangay: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            othersWithinDistrict: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            othersWithinCityProper: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            othersTransportFacilitySpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyNumHousehold1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyNumHousehold2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyNumHousehold3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyNumHousehold4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyNumHousehold5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyNumHousehold6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyNumHousehold7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyPercentHousehold1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyPercentHousehold2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyPercentHousehold3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyPercentHousehold4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyPercentHousehold5: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyPercentHousehold6: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyPercentHousehold7: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupply7Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            waterSupplyNumTotal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            waterSupplyPercentTotal: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryExistingPowerSupplyNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryExistingPowerSupplyPercent1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryExistingPowerSupplyNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryExistingPowerSupplyPercent2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryExistingPowerSupplySpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryExistingPowerSupplyNumTotal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryExistingPowerSupplyPercentTotal: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryFuelUsedNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryFuelUsedPercent1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryFuelUsedNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryFuelUsedPercent2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryFuelUsedNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryFuelUsedPercent3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryFuelUsedNum4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryFuelUsedPercent4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryFuelUsed4Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            inventoryFuelUsedNumTotal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            inventoryFuelUsedPercentTotal: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            sourceIncomeCY1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeCY2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount1CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount1CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount2CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount2CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount3CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount3CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount4CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount4CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount5CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount5CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount6CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount6CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount7CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount7CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount8CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount8CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount9CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount9CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount10CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmount10CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmountTotalCY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            sourceIncomeAmountTotalCY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage8;
};
