module.exports = (sequelize, DataTypes) => {
    const SubmissionBarangayProfilePage5 = sequelize.define(
        "SubmissionBarangayProfilePage5",
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
            causeEarlyNeonatalDeathsCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeEarlyNeonatalCause1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeEarlyNeonatalCause2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeEarlyNeonatalCause3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeEarlyNeonatalNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeEarlyNeonatalNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeEarlyNeonatalNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalDeathsCY: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalCause1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeMaternalCause2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeMaternalCause3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            causeMaternalNum1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalNum2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            causeMaternalNum3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalName1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalName2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalName3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalName4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            healthClinicsHospitalNumGov1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumGov2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumGov3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumGov4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            healthClinicsHospitalNumPrivate4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelDoctorNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelNurseNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelMidwifeNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelBHWNumGov: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelDoctorNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelNurseNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelMidwifeNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalHealthPersonnelBHWNumPrivate: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            medicalServiceType1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceType2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceType3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceType4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            medicalServiceFrequency4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            toiletAutoFlush: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            toiletWaterSealed: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            toiletAntipolo: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            toiletOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            toiletOthers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            toiletTotal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalTrucks: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalOpenPit: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalBurying: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalBurning: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalThrowAnywhere: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            disposalOthersSpecify: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            disposalOthers: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdOSYThirteenToTwentyOneMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdOSYThirteenToTwentyOneFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdOSYThirteenToTwentyOneTotal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdDisabilitiesMale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdDisabilitiesFemale: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdDisabilitiesTotal: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdTotalFiveToSeventeen: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdTotalFiveToSeventeenHelping: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingName1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingName2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingName3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingName4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingAge1: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingAge2: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingAge3: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingAge4: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingGradeSchool1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingGradeSchool2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingGradeSchool3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingGradeSchool4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingJobActivity1: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingJobActivity2: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingJobActivity3: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingJobActivity4: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
            householdFiveToSeventeenHelpingIncomeWeekly1: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingIncomeWeekly2: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingIncomeWeekly3: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingIncomeWeekly4: {
                type: DataTypes.FLOAT,
                allowNull: true,
                defaultValue: 0,
            },
            householdFiveToSeventeenHelpingProgramsAvailed: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
            },
        },
        {
            freezeTableName: true,
        }
    );
    return SubmissionBarangayProfilePage5;
};
