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
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities2: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities3: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities4: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities5: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities6: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities7: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities8: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities8StateOwnership: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities9: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities9StateOwnership: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            governanceOwnedFacilities10: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities11: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            governanceOwnedFacilities12: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false,
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
