module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage9 = sequelize.define(
        "SubmissionBarangayProfilePage9",
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
            actualExpendituresCY1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresCY2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount1CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount1CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount2CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount2CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount3CY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmount3CY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmountTotalCY1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            actualExpendituresAmountTotalCY2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            governanceOwnedFacilities1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities5: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities6: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities7: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities8: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities8StateOwnership: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities9: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities9StateOwnership: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities10: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities11: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities12: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities12Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayGovSupportOrgNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum5: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum6: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum7: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum7Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayGovSupportOrgNum8: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum8Specify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayGovSupportOrgNum9: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum10: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum11: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            barangayGovSupportOrgNum12: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            signatureOverPrintedName: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            position: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            date1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            barangayCaptain: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            date2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage9;
};
