const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Submission } = require("../models");
const { Barangay } = require("../models");
const sequelize = require("sequelize");
const { SubmissionBarangayProfilePage1 } = require("../models");
const { SubmissionBarangayProfilePage2 } = require("../models");
const { SubmissionBarangayProfilePage3 } = require("../models");
const { SubmissionBarangayProfilePage4 } = require("../models");
const { SubmissionBarangayProfilePage5 } = require("../models");
const { SubmissionBarangayProfilePage6 } = require("../models");
const { SubmissionBarangayProfilePage7 } = require("../models");
const { SubmissionBarangayProfilePage8 } = require("../models");
const { SubmissionBarangayProfilePage9 } = require("../models");

router.get("/", async (req, res) => {
    const submissions = await Submission.findAll({
        attributes: [
            "id",
            "barangayName",
            "documentName",
            "populationCount",
            "createdAt",
            [
                sequelize.literal(
                    "(RANK() OVER (PARTITION BY barangayName ORDER BY createdAt DESC))"
                ),
                "rank",
            ],
        ],
    });

    res.json(submissions);
});

router.get("/all", async (req, res) => {
    const submissions = await Submission.findAll();

    res.json(submissions);
});

// router.post("/", async (req, res) => {
//     const submission = req.body;
//     await Submission.create(submission);
//     res.json(submission);
// });

router.post("/submit", async (req, res) => {
    const { documentName, yearSubmitted, populationCount, userId } = req.body;

    const barangay = await Barangay.findOne({
        where: { userId: userId },
    });

    const submission = await Submission.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        populationCount: populationCount,
        userId: userId,
        barangayId: barangay.id,
        barangayName: barangay.barangayName,
        districtName: barangay.districtName,
    });

    // const barangay = await Barangay.create({barangayName,
    //     populationCount: 0,
    // });

    // barangay.populationCount = populationCount;

    // barangay = await barangay.save();

    // await Barangay.upsert({
    //     id: barangayId,
    //     populationCount: populationCount,
    // });

    res.json(submission);
});

router.post("/download", (req, res) => {
    const { fileName } = req.body;
    // res.json(fileName);
    res.download(`./public/submissions/${fileName}`);
});

// router.post("/", async (req, res) => {
//     const { firstName, lastName, username, email, password } = req.body;
//     bcrypt.hash(password, 10).then((hashedPassword) => {
//         User.create({
//             firstName: firstName,
//             lastName: lastName,
//             username: username,
//             email: email,
//             password: hashedPassword,
//         });
//         res.json("SUCCESS");
//     });
//     // const user = req.body;
//     // await User.create(user);
//     // res.json(user);
// });

const logout = (req, res) => {
    res.set(
        "Set-Cookie",
        cookie.serialize("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            expires: new Date(0),
            path: "/",
        })
    );

    return res.status(200).json({ success: true });
};

const getSubmissions = async (req, res) => {
    const user = res.locals.user;
    // console.log("USER ------>HEHE", user.id);

    const submissions = await Submission.findAll({
        where: {
            userId: user.id,
        },
    });

    res.json(submissions);
};

const getSubmissionBarangayProfilePages = async (req, res) => {
    const user = res.locals.user;

    const submissionBarangayProfilePage1 =
        await SubmissionBarangayProfilePage1.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage2 =
        await SubmissionBarangayProfilePage2.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage3 =
        await SubmissionBarangayProfilePage3.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage4 =
        await SubmissionBarangayProfilePage4.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage5 =
        await SubmissionBarangayProfilePage5.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage6 =
        await SubmissionBarangayProfilePage6.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage7 =
        await SubmissionBarangayProfilePage7.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage8 =
        await SubmissionBarangayProfilePage8.findOne({
            where: { barangayId: user.barangayId },
        });

    const submissionBarangayProfilePage9 =
        await SubmissionBarangayProfilePage9.findOne({
            where: { barangayId: user.barangayId },
        });

    res.json([
        submissionBarangayProfilePage1,
        submissionBarangayProfilePage2,
        submissionBarangayProfilePage3,
        submissionBarangayProfilePage4,
        submissionBarangayProfilePage5,
        submissionBarangayProfilePage6,
        submissionBarangayProfilePage7,
        submissionBarangayProfilePage8,
        submissionBarangayProfilePage9,
    ]);
};

const createSubmissionBarangayProfilePages = async (req, res) => {
    const user = res.locals.user;
    const { city } = req.body;

    await SubmissionBarangayProfilePage1.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage2.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage3.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage4.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage5.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage6.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage7.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage8.create({
        barangayId: user.barangayId,
    });

    await SubmissionBarangayProfilePage9.create({
        barangayId: user.barangayId,
    });

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage1 = async (req, res) => {
    const user = res.locals.user;
    const {
        city,
        legalBasis,
        dateRatification,
        sitio1,
        sitio2,
        sitio3,
        sitio4,
        north,
        south,
        east,
        west,
        distanceFromCityHall,
        distanceFromPoblacion,
        distanceFromCapitol,
        distanceFromHighway,
        totalLandArea,
        totalPopulation,
        totalPopulationMale,
        totalPopulationFemale,
        totalPopulationBoth,
        male1,
        male2,
        male3,
        male4,
        male5,
        male6,
        male7,
        male8,
        male9,
        male10,
        male11,
        male12,
        male13,
        male14,
        male15,
        male16,
        male17,
        male18,
        male19,
        male20,
        female1,
        female2,
        female3,
        female4,
        female5,
        female6,
        female7,
        female8,
        female9,
        female10,
        female11,
        female12,
        female13,
        female14,
        female15,
        female16,
        female17,
        female18,
        female19,
        female20,
        both1,
        both2,
        both3,
        both4,
        both5,
        both6,
        both7,
        both8,
        both9,
        both10,
        both11,
        both12,
        both13,
        both14,
        both15,
        both16,
        both17,
        both18,
        both19,
        both20,
        totalBoth,
        totalHouseholdsCY,
        totalHouseholds,
        dialectSpoken,
        ethnicGroups,
    } = req.body;

    const totalMale =
        Number(male1) +
        Number(male2) +
        Number(male3) +
        Number(male4) +
        Number(male5) +
        Number(male6) +
        Number(male7) +
        Number(male8) +
        Number(male9) +
        Number(male10) +
        Number(male11) +
        Number(male12) +
        Number(male13) +
        Number(male14) +
        Number(male15) +
        Number(male16) +
        Number(male17);

    const totalFemale =
        Number(female1) +
        Number(female2) +
        Number(female3) +
        Number(female4) +
        Number(female5) +
        Number(female6) +
        Number(female7) +
        Number(female8) +
        Number(female9) +
        Number(female10) +
        Number(female11) +
        Number(female12) +
        Number(female13) +
        Number(female14) +
        Number(female15) +
        Number(female16) +
        Number(female17);

    await SubmissionBarangayProfilePage1.update(
        {
            city: city,
            legalBasis: legalBasis,
            dateRatification: dateRatification,
            sitio1: sitio1,
            sitio2: sitio2,
            sitio3: sitio3,
            sitio4: sitio4,
            north: north,
            south: south,
            east: east,
            west: west,
            distanceFromCityHall: distanceFromCityHall,
            distanceFromPoblacion: distanceFromPoblacion,
            distanceFromCapitol: distanceFromCapitol,
            distanceFromHighway: distanceFromHighway,
            totalLandArea: totalLandArea,
            totalPopulation: totalPopulation,
            totalPopulationMale: totalPopulationMale,
            totalPopulationFemale: totalPopulationFemale,
            totalPopulationBoth:
                Number(totalPopulationMale) + Number(totalPopulationFemale),
            male1: male1,
            male2: male2,
            male3: male3,
            male4: male4,
            male5: male5,
            male6: male6,
            male7: male7,
            male8: male8,
            male9: male9,
            male10: male10,
            male11: male11,
            male12: male12,
            male13: male13,
            male14: male14,
            male15: male15,
            male16: male16,
            male17: male17,
            male18: male18,
            male19: male19,
            male20: male20,
            female1: female1,
            female2: female2,
            female3: female3,
            female4: female4,
            female5: female5,
            female6: female6,
            female7: female7,
            female8: female8,
            female9: female9,
            female10: female10,
            female11: female11,
            female12: female12,
            female13: female13,
            female14: female14,
            female15: female15,
            female16: female16,
            female17: female17,
            female18: female18,
            female19: female19,
            female20: female20,
            both1: both1,
            both2: both2,
            both3: both3,
            both4: both4,
            both5: both5,
            both6: both6,
            both7: both7,
            both8: both8,
            both9: both9,
            both10: both10,
            both11: both11,
            both12: both12,
            both13: both13,
            both14: both14,
            both15: both15,
            both16: both16,
            both17: both17,
            both18: both18,
            both19: both19,
            both20: both20,
            totalMale: totalMale,
            totalFemale: totalFemale,
            totalBoth: totalMale + totalFemale,
            totalHouseholdsCY: totalHouseholdsCY,
            totalHouseholds: totalHouseholds,
            dialectSpoken: dialectSpoken,
            ethnicGroups: ethnicGroups,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage2 = async (req, res) => {
    const user = res.locals.user;

    const {
        dateLastElection,
        numRegisteredVoters,
        numPredominantVoters,
        numPrecincts,
        majorSourcesLivelihood,
        totalSelfEmployed,
        totalDriver,
        totalEmployee,
        totalTrisikadDriver,
        totalTeacher,
        totalFishermanFarmer,
        totalOFWSeaman,
        totalVendor,
        totalMedicalProfession,
        totalDressmakerTailor,
        totalCarpenterPlumber,
        totalBarbersHairdresser,
        totalLaborerOddJobs,
        totalBusinessman,
        totalJanitorGardener,
        totalBeautician,
        totalSecretary,
        totalElectricianTechnician,
        totalSalesClerk,
        totalOthers,
        totalOthersSpecify,
        totalGrand,
        employmentMale1,
        employmentMale2,
        employmentMale3,
        employmentMale4,
        employmentMale5,
        employmentMale6,
        employmentMale7,
        employmentMale8,
        employmentMale9,
        employmentMale10,
        employmentMale11,
        employmentFemale1,
        employmentFemale2,
        employmentFemale3,
        employmentFemale4,
        employmentFemale5,
        employmentFemale6,
        employmentFemale7,
        employmentFemale8,
        employmentFemale9,
        employmentFemale10,
        employmentFemale11,
        monthlyIncome1,
        monthlyIncome2,
        monthlyIncome3,
        monthlyIncome4,
        monthlyIncome5,
        monthlyIncome6,
        monthlyIncome7,
        monthlyIncome8,
        monthlyIncome9,
        monthlyIncome10,
        monthlyIncome11,
        monthlyIncome12,
        monthlyIncome13,
        monthlyIncome14,
        monthlyIncome15,
        farmingTechnique,
        methodUsed,
        annualIncomeFarmerTenant,
        cropsRice,
        cropsVegetableCorn,
        cropsRiceYieldYearKg,
        cropsVegetableCornYieldYearKg,
        numFarmersTenantsRice,
        numFarmersTenantsVegetableCorn,
        cropsProduced1,
        cropsProduced1Number,
        cropsProduced1YieldYear,
        cropsProduced1FarmersTenants,
        agriFacilityRicemills,
        agriFacilityCono,
        agriFacilityKiskisan,
        agriFacilityWarehouse,
        agriFacilityBuyingStations,
        agriFacilityTractors,
        agriFacilityOthers,
        agriFacilityOthersSpecify,
        irrigationSystem1,
        irrigationSystem1ServicesArea,
        irrigationSystem1NumFarmers,
        irrigationSystem1ThrougoutTheYear,
        irrigationSystem1TwiceAYear,
        irrigationSystem1OnceAYear,
        irrigationSystem2,
        irrigationSystem2ServicesArea,
        irrigationSystem2NumFarmers,
        irrigationSystem2ThrougoutTheYear,
        irrigationSystem2TwiceAYear,
        irrigationSystem2OnceAYear,
        irrigationSystem3,
        irrigationSystem3ServicesArea,
        irrigationSystem3NumFarmers,
        irrigationSystem3ThrougoutTheYear,
        irrigationSystem3TwiceAYear,
        irrigationSystem3OnceAYear,
    } = req.body;

    const totalOneToTen =
        Number(totalSelfEmployed) +
        Number(totalEmployee) +
        Number(totalTeacher) +
        Number(totalOFWSeaman) +
        Number(totalMedicalProfession) +
        Number(totalCarpenterPlumber) +
        Number(totalLaborerOddJobs) +
        Number(totalJanitorGardener) +
        Number(totalSecretary) +
        Number(totalSalesClerk);

    const totalElevenToTwenty =
        Number(totalDriver) +
        Number(totalTrisikadDriver) +
        Number(totalFishermanFarmer) +
        Number(totalVendor) +
        Number(totalDressmakerTailor) +
        Number(totalBarbersHairdresser) +
        Number(totalBusinessman) +
        Number(totalBeautician) +
        Number(totalElectricianTechnician) +
        Number(totalOthers);

    const employmentTotalMale =
        Number(employmentMale1) +
        Number(employmentMale2) +
        Number(employmentMale3) +
        Number(employmentMale4) +
        Number(employmentMale5) +
        Number(employmentMale6) +
        Number(employmentMale7) +
        Number(employmentMale8) +
        Number(employmentMale9) +
        Number(employmentMale10) +
        Number(employmentMale11);

    const employmentTotalFemale =
        Number(employmentFemale1) +
        Number(employmentFemale2) +
        Number(employmentFemale3) +
        Number(employmentFemale4) +
        Number(employmentFemale5) +
        Number(employmentFemale6) +
        Number(employmentFemale7) +
        Number(employmentFemale8) +
        Number(employmentFemale9) +
        Number(employmentFemale10) +
        Number(employmentFemale11);

    const monthlyIncomeGrandTotal =
        Number(monthlyIncome1) +
        Number(monthlyIncome2) +
        Number(monthlyIncome3) +
        Number(monthlyIncome4) +
        Number(monthlyIncome5) +
        Number(monthlyIncome6) +
        Number(monthlyIncome7) +
        Number(monthlyIncome8) +
        Number(monthlyIncome9) +
        Number(monthlyIncome10) +
        Number(monthlyIncome11) +
        Number(monthlyIncome12) +
        Number(monthlyIncome13) +
        Number(monthlyIncome14) +
        Number(monthlyIncome15);

    await SubmissionBarangayProfilePage2.update(
        {
            dateLastElection: dateLastElection,
            numRegisteredVoters: numRegisteredVoters,
            numPredominantVoters: numPredominantVoters,
            numPrecincts: numPrecincts,
            majorSourcesLivelihood: majorSourcesLivelihood,
            totalSelfEmployed: totalSelfEmployed,
            totalDriver: totalDriver,
            totalEmployee: totalEmployee,
            totalTrisikadDriver: totalTrisikadDriver,
            totalTeacher: totalTeacher,
            totalFishermanFarmer: totalFishermanFarmer,
            totalOFWSeaman: totalOFWSeaman,
            totalVendor: totalVendor,
            totalMedicalProfession: totalMedicalProfession,
            totalDressmakerTailor: totalDressmakerTailor,
            totalCarpenterPlumber: totalCarpenterPlumber,
            totalBarbersHairdresser: totalBarbersHairdresser,
            totalLaborerOddJobs: totalLaborerOddJobs,
            totalBusinessman: totalBusinessman,
            totalJanitorGardener: totalJanitorGardener,
            totalBeautician: totalBeautician,
            totalSecretary: totalSecretary,
            totalElectricianTechnician: totalElectricianTechnician,
            totalSalesClerk: totalSalesClerk,
            totalOthers: totalOthers,
            totalOthersSpecify: totalOthersSpecify,
            totalOneToTen: totalOneToTen,
            totalElevenToTwenty: totalElevenToTwenty,
            totalGrand: totalOneToTen + totalElevenToTwenty,
            employmentMale1: employmentMale1,
            employmentMale2: employmentMale2,
            employmentMale3: employmentMale3,
            employmentMale4: employmentMale4,
            employmentMale5: employmentMale5,
            employmentMale6: employmentMale6,
            employmentMale7: employmentMale7,
            employmentMale8: employmentMale8,
            employmentMale9: employmentMale9,
            employmentMale10: employmentMale10,
            employmentMale11: employmentMale11,
            employmentFemale10: employmentFemale10,
            employmentFemale11: employmentFemale11,
            employmentFemale1: employmentFemale1,
            employmentFemale2: employmentFemale2,
            employmentFemale3: employmentFemale3,
            employmentFemale4: employmentFemale4,
            employmentFemale5: employmentFemale5,
            employmentFemale6: employmentFemale6,
            employmentFemale7: employmentFemale7,
            employmentFemale8: employmentFemale8,
            employmentFemale9: employmentFemale9,
            employmentFemale10: employmentFemale10,
            employmentFemale11: employmentFemale11,
            employmentTotalMale: employmentTotalMale,
            employmentTotalFemale: employmentTotalFemale,
            monthlyIncome1: monthlyIncome1,
            monthlyIncome2: monthlyIncome2,
            monthlyIncome3: monthlyIncome3,
            monthlyIncome4: monthlyIncome4,
            monthlyIncome5: monthlyIncome5,
            monthlyIncome6: monthlyIncome6,
            monthlyIncome7: monthlyIncome7,
            monthlyIncome8: monthlyIncome8,
            monthlyIncome9: monthlyIncome9,
            monthlyIncome10: monthlyIncome10,
            monthlyIncome11: monthlyIncome11,
            monthlyIncome12: monthlyIncome12,
            monthlyIncome13: monthlyIncome13,
            monthlyIncome14: monthlyIncome14,
            monthlyIncome15: monthlyIncome15,
            monthlyIncomeGrandTotal: monthlyIncomeGrandTotal,
            farmingTechnique: farmingTechnique,
            methodUsed: methodUsed,
            annualIncomeFarmerTenant: annualIncomeFarmerTenant,
            cropsRice: cropsRice,
            cropsVegetableCorn: cropsVegetableCorn,
            cropsRiceYieldYearKg: cropsRiceYieldYearKg,
            cropsVegetableCornYieldYearKg: cropsVegetableCornYieldYearKg,
            numFarmersTenantsRice: numFarmersTenantsRice,
            numFarmersTenantsVegetableCorn: numFarmersTenantsVegetableCorn,
            cropsProduced1: cropsProduced1,
            cropsProduced1Number: cropsProduced1Number,
            cropsProduced1YieldYear: cropsProduced1YieldYear,
            cropsProduced1FarmersTenants: cropsProduced1FarmersTenants,
            agriFacilityRicemills: agriFacilityRicemills,
            agriFacilityCono: agriFacilityCono,
            agriFacilityKiskisan: agriFacilityKiskisan,
            agriFacilityWarehouse: agriFacilityWarehouse,
            agriFacilityBuyingStations: agriFacilityBuyingStations,
            agriFacilityTractors: agriFacilityTractors,
            agriFacilityOthers: agriFacilityOthers,
            agriFacilityOthersSpecify: agriFacilityOthersSpecify,
            irrigationSystem1: irrigationSystem1,
            irrigationSystem1ServicesArea: irrigationSystem1ServicesArea,
            irrigationSystem1NumFarmers: irrigationSystem1NumFarmers,
            irrigationSystem1ThrougoutTheYear:
                irrigationSystem1ThrougoutTheYear,
            irrigationSystem1TwiceAYear: irrigationSystem1TwiceAYear,
            irrigationSystem1OnceAYear: irrigationSystem1OnceAYear,
            irrigationSystem2: irrigationSystem2,
            irrigationSystem2ServicesArea: irrigationSystem2ServicesArea,
            irrigationSystem2NumFarmers: irrigationSystem2NumFarmers,
            irrigationSystem2ThrougoutTheYear:
                irrigationSystem2ThrougoutTheYear,
            irrigationSystem2TwiceAYear: irrigationSystem2TwiceAYear,
            irrigationSystem2OnceAYear: irrigationSystem2OnceAYear,
            irrigationSystem3: irrigationSystem3,
            irrigationSystem3ServicesArea: irrigationSystem3ServicesArea,
            irrigationSystem3NumFarmers: irrigationSystem3NumFarmers,
            irrigationSystem3ThrougoutTheYear:
                irrigationSystem3ThrougoutTheYear,
            irrigationSystem3TwiceAYear: irrigationSystem3TwiceAYear,
            irrigationSystem3OnceAYear: irrigationSystem3OnceAYear,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage3 = async (req, res) => {
    const user = res.locals.user;

    const {
        fishFarm1Type,
        fishFarm1Num,
        fishFarm1NumWorkers,
        fishFarm1AreasCovered,
        fishFarm1VolumeCatch,
        fishFarm1ProductionValue,
        fishFarm2Type,
        fishFarm2Num,
        fishFarm2NumWorkers,
        fishFarm2AreasCovered,
        fishFarm2VolumeCatch,
        fishFarm2ProductionValue,
        fishFarm3Type,
        fishFarm3Num,
        fishFarm3NumWorkers,
        fishFarm3AreasCovered,
        fishFarm3VolumeCatch,
        fishFarm3ProductionValue,
        fishVolume,
        fishProductionValue,
        shrimpVolume,
        shrimpProductionValue,
        shellsVolume,
        shellsProductionValue,
        fishFryVolume,
        fishFryProductionValue,
        musselsVolume,
        musselsProductionValue,
        oystersVolume,
        oystersProductionValue,
        fishOthersVolume,
        fishOthersProductionValue,
        fishOthersSpecify,
        numFisherman,
        averageIncomeFisherman,
        livestockLayers,
        livestockCattles,
        livestockBroilers,
        livestockCarabaos,
        livestockMuscovy,
        livestockHogs,
        livestockGeese,
        livestockGoats,
        livestockPigeons,
        livestockHorses,
        livestockQuails,
        livestockDogs,
        livestockPoultryOthers,
        livestockPoultryOthersSpecify,
        livestockOthers,
        livestockTurkey,
        livestockCats,
        livestockLoveBirds,
        livestockFightingCocks,
        livestockPig,
        livestockChicken,
        prescenceAgricultural,
        prescenceWeeklyVisitation,
        prescenceSeedCollection,
        prescenceStorageAndProcessing,
        prescenceCreditAndCooperative,
        prescenceOthers,
        prescenceOthersInput,
        numBakery,
        numGrocery,
        numIceCream,
        numSariSariStore,
        numNativeDelicacies,
        numHardwareElectrical,
        numSweetPreserves,
        numConstructionConcrete,
        numSitcharon,
        numCarJeepPartsSupplies,
        numNoodles,
        numMotorcyclesBicyclesSupplies,
        numBalut,
        numAgriculturalEquipmentSupplies,
        numVinegar,
        numSchoolOfficeSupplies,
        numFishDryingSmoking,
        numPhotoCenterSupplies,
        numLaboratories,
        numAppliance,
        numChemicalIndustries,
        numJewelryShopStore,
        numFeedmills,
        numBagsFootwearStore,
        numGarmentEmbroidery,
        numVideoTapesCenter,
        numFootwearFactories,
        numBazaars,
        numTextileMills,
        numPrintingPress,
        numBagsWalletFactories,
        numPawnshop,
        numFurnitureWooden,
        numFurnitureRattan,
        numFurnitureBamboo,
        numFurnitureMetal,
        numFuneralParlor,
        numDrugStore,
        numPublicMarket,
        numTalipapa,
        numCinema,
    } = req.body;

    await SubmissionBarangayProfilePage3.update(
        {
            fishFarm1Type: fishFarm1Type,
            fishFarm1Num: fishFarm1Num,
            fishFarm1NumWorkers: fishFarm1NumWorkers,
            fishFarm1AreasCovered: fishFarm1AreasCovered,
            fishFarm1VolumeCatch: fishFarm1VolumeCatch,
            fishFarm1ProductionValue: fishFarm1ProductionValue,
            fishFarm2Type: fishFarm2Type,
            fishFarm2Num: fishFarm2Num,
            fishFarm2NumWorkers: fishFarm2NumWorkers,
            fishFarm2AreasCovered: fishFarm2AreasCovered,
            fishFarm2VolumeCatch: fishFarm2VolumeCatch,
            fishFarm2ProductionValue: fishFarm2ProductionValue,
            fishFarm3Type: fishFarm3Type,
            fishFarm3Num: fishFarm3Num,
            fishFarm3NumWorkers: fishFarm3NumWorkers,
            fishFarm3AreasCovered: fishFarm3AreasCovered,
            fishFarm3VolumeCatch: fishFarm3VolumeCatch,
            fishFarm3ProductionValue: fishFarm3ProductionValue,
            fishVolume: fishVolume,
            fishProductionValue: fishProductionValue,
            shrimpVolume: shrimpVolume,
            shrimpProductionValue: shrimpProductionValue,
            shellsVolume: shellsVolume,
            shellsProductionValue: shellsProductionValue,
            fishFryVolume: fishFryVolume,
            fishFryProductionValue: fishFryProductionValue,
            musselsVolume: musselsVolume,
            musselsProductionValue: musselsProductionValue,
            oystersVolume: oystersVolume,
            oystersProductionValue: oystersProductionValue,
            fishOthersVolume: fishOthersVolume,
            fishOthersProductionValue: fishOthersProductionValue,
            fishOthersSpecify: fishOthersSpecify,
            numFisherman: numFisherman,
            averageIncomeFisherman: averageIncomeFisherman,
            livestockLayers: livestockLayers,
            livestockCattles: livestockCattles,
            livestockBroilers: livestockBroilers,
            livestockCarabaos: livestockCarabaos,
            livestockMuscovy: livestockMuscovy,
            livestockHogs: livestockHogs,
            livestockGeese: livestockGeese,
            livestockGoats: livestockGoats,
            livestockPigeons: livestockPigeons,
            livestockHorses: livestockHorses,
            livestockQuails: livestockQuails,
            livestockDogs: livestockDogs,
            livestockPoultryOthers: livestockPoultryOthers,
            livestockPoultryOthersSpecify: livestockPoultryOthersSpecify,
            livestockOthers: livestockOthers,
            livestockTurkey: livestockTurkey,
            livestockCats: livestockCats,
            livestockLoveBirds: livestockLoveBirds,
            livestockFightingCocks: livestockFightingCocks,
            livestockPig: livestockPig,
            livestockChicken: livestockChicken,
            prescenceAgricultural: prescenceAgricultural,
            prescenceWeeklyVisitation: prescenceWeeklyVisitation,
            prescenceSeedCollection: prescenceSeedCollection,
            prescenceStorageAndProcessing: prescenceStorageAndProcessing,
            prescenceCreditAndCooperative: prescenceCreditAndCooperative,
            prescenceOthers: prescenceOthers,
            prescenceOthersInput: prescenceOthersInput,
            numBakery: numBakery,
            numGrocery: numGrocery,
            numIceCream: numIceCream,
            numSariSariStore: numSariSariStore,
            numNativeDelicacies: numNativeDelicacies,
            numHardwareElectrical: numHardwareElectrical,
            numSweetPreserves: numSweetPreserves,
            numConstructionConcrete: numConstructionConcrete,
            numSitcharon: numSitcharon,
            numCarJeepPartsSupplies: numCarJeepPartsSupplies,
            numNoodles: numNoodles,
            numMotorcyclesBicyclesSupplies: numMotorcyclesBicyclesSupplies,
            numBalut: numBalut,
            numAgriculturalEquipmentSupplies: numAgriculturalEquipmentSupplies,
            numVinegar: numVinegar,
            numSchoolOfficeSupplies: numSchoolOfficeSupplies,
            numFishDryingSmoking: numFishDryingSmoking,
            numPhotoCenterSupplies: numPhotoCenterSupplies,
            numLaboratories: numLaboratories,
            numAppliance: numAppliance,
            numChemicalIndustries: numChemicalIndustries,
            numJewelryShopStore: numJewelryShopStore,
            numFeedmills: numFeedmills,
            numBagsFootwearStore: numBagsFootwearStore,
            numGarmentEmbroidery: numGarmentEmbroidery,
            numVideoTapesCenter: numVideoTapesCenter,
            numFootwearFactories: numFootwearFactories,
            numBazaars: numBazaars,
            numTextileMills: numTextileMills,
            numPrintingPress: numPrintingPress,
            numBagsWalletFactories: numBagsWalletFactories,
            numPawnshop: numPawnshop,
            numFurnitureWooden: numFurnitureWooden,
            numFurnitureRattan: numFurnitureRattan,
            numFurnitureBamboo: numFurnitureBamboo,
            numFurnitureMetal: numFurnitureMetal,
            numFuneralParlor: numFuneralParlor,
            numDrugStore: numDrugStore,
            numPublicMarket: numPublicMarket,
            numTalipapa: numTalipapa,
            numCinema: numCinema,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage4 = async (req, res) => {
    const user = res.locals.user;

    const {
        numPaperManufacturing,
        numCockpit,
        numCementManufacturing,
        numFinancialInstitutions,
        numHallowBlocksMaking,
        numRestaurants,
        numMarbleCraft,
        numRealEstate,
        numBlacksmith,
        numNightClubBarMassage,
        numIronMetalCraft,
        numMemorialParks,
        numEngineeringWorkMachineShop,
        numInsurance,
        numJewelryManufacturingGoldsmith,
        numGasolineStation,
        numCeramicsPottery,
        numGeneralServiceContractors,
        numWoodcraft,
        numArrastreServices,
        numEngraving,
        numBodyWorkshop,
        numFashionAccessories,
        numFitnessGym,
        numOthersManufacturing,
        numOthersManufacturingSpecify,
        numBeautyParlorBarberShop,
        numCooperativeRiceGrowers,
        numOthersCommercial,
        numOthersCommercialSpecify,
        totalNumBirths,
        totalNumDeathsAllCauses,
        totalNumStillBirth,
        totalNumInfantDeaths,
        totalNumEarlyNeonatalDeaths,
        fiveLeadingCausesMortalityCY,
        fiveLeadingMorbidityCY,
        causeCardiovascularDisorder,
        causeCancer,
        causeOldAge,
        causeKidneyFailure,
        causeTB,
        causeFeverFlu,
        causeCough,
        causeAsthma,
        causeHypertension,
        causePTB,
        numMalnourishedChildrenCY,
        totalNumChildWeighted,
        childSUUnderOneYearNum,
        childSUUnderOneYearPercent,
        childSUOneToFourYearsNum,
        childSUOneToFourYearsPercent,
        childSUFiveToSixYearsNum,
        childSUFiveToSixYearsPercent,
        childSUTotalNum,
        childSUPercent,
        childModUUnderOneYearNum,
        childModUUnderOneYearPercent,
        childModUOneToFourYearsNum,
        childModUOneToFourYearsPercent,
        childModUFiveToSixYearsNum,
        childModUFiveToSixYearsPercent,
        childModUTotalNum,
        childModUPercent,
        childMildUUnderOneYearNum,
        childMildUUnderOneYearPercent,
        childMildUOneToFourYearsNum,
        childMildUOneToFourYearsPercent,
        childMildUFiveToSixYearsNum,
        childMildUFiveToSixYearsPercent,
        childMildUTotalNum,
        childMildUPercent,
        childTotalUnderOneYearNum,
        childTotalUnderOneYearPercent,
        childTotalOneToFourYearsNum,
        childTotalOneToFourYearsPercent,
        childTotalFiveToSixYearsNum,
        childTotalFiveToSixYearsPercent,
        childTotalTotalNum,
        childTotalPercent,
        infantLeadingCausesMortalityCY,
        infantLeadingCausesMorbidityCY,
        infantMortalityCause1,
        infantMortalityCause2,
        infantMortalityCause3,
        infantMortalityNum1,
        infantMortalityNum2,
        infantMortalityNum3,
        infantMorbidityFeverNum,
        infantMorbidityCoughNum,
        infantMorbidityMalnutritionNum,
        infantMorbidityDiarrheaNum,
        infantMorbidityTCPrimaryComplexNum,
    } = req.body;

    await SubmissionBarangayProfilePage4.update(
        {
            numPaperManufacturing: numPaperManufacturing,
            numCockpit: numCockpit,
            numCementManufacturing: numCementManufacturing,
            numFinancialInstitutions: numFinancialInstitutions,
            numHallowBlocksMaking: numHallowBlocksMaking,
            numRestaurants: numRestaurants,
            numMarbleCraft: numMarbleCraft,
            numRealEstate: numRealEstate,
            numBlacksmith: numBlacksmith,
            numNightClubBarMassage: numNightClubBarMassage,
            numIronMetalCraft: numIronMetalCraft,
            numMemorialParks: numMemorialParks,
            numEngineeringWorkMachineShop: numEngineeringWorkMachineShop,
            numInsurance: numInsurance,
            numJewelryManufacturingGoldsmith: numJewelryManufacturingGoldsmith,
            numGasolineStation: numGasolineStation,
            numCeramicsPottery: numCeramicsPottery,
            numGeneralServiceContractors: numGeneralServiceContractors,
            numWoodcraft: numWoodcraft,
            numArrastreServices: numArrastreServices,
            numEngraving: numEngraving,
            numBodyWorkshop: numBodyWorkshop,
            numFashionAccessories: numFashionAccessories,
            numFitnessGym: numFitnessGym,
            numOthersManufacturing: numOthersManufacturing,
            numOthersManufacturingSpecify: numOthersManufacturingSpecify,
            numBeautyParlorBarberShop: numBeautyParlorBarberShop,
            numCooperativeRiceGrowers: numCooperativeRiceGrowers,
            numOthersCommercial: numOthersCommercial,
            numOthersCommercialSpecify: numOthersCommercialSpecify,
            totalNumBirths: totalNumBirths,
            totalNumDeathsAllCauses: totalNumDeathsAllCauses,
            totalNumStillBirth: totalNumStillBirth,
            totalNumInfantDeaths: totalNumInfantDeaths,
            totalNumEarlyNeonatalDeaths: totalNumEarlyNeonatalDeaths,
            fiveLeadingCausesMortalityCY: fiveLeadingCausesMortalityCY,
            fiveLeadingMorbidityCY: fiveLeadingMorbidityCY,
            causeCardiovascularDisorder: causeCardiovascularDisorder,
            causeCancer: causeCancer,
            causeOldAge: causeOldAge,
            causeKidneyFailure: causeKidneyFailure,
            causeTB: causeTB,
            causeFeverFlu: causeFeverFlu,
            causeCough: causeCough,
            causeAsthma: causeAsthma,
            causeHypertension: causeHypertension,
            causePTB: causePTB,
            numMalnourishedChildrenCY: numMalnourishedChildrenCY,
            totalNumChildWeighted: totalNumChildWeighted,
            childSUUnderOneYearNum: childSUUnderOneYearNum,
            childSUUnderOneYearPercent: childSUUnderOneYearPercent,
            childSUOneToFourYearsNum: childSUOneToFourYearsNum,
            childSUOneToFourYearsPercent: childSUOneToFourYearsPercent,
            childSUFiveToSixYearsNum: childSUFiveToSixYearsNum,
            childSUFiveToSixYearsPercent: childSUFiveToSixYearsPercent,
            childSUTotalNum: childSUTotalNum,
            childSUPercent: childSUPercent,
            childModUUnderOneYearNum: childModUUnderOneYearNum,
            childModUUnderOneYearPercent: childModUUnderOneYearPercent,
            childModUOneToFourYearsNum: childModUOneToFourYearsNum,
            childModUOneToFourYearsPercent: childModUOneToFourYearsPercent,
            childModUFiveToSixYearsNum: childModUFiveToSixYearsNum,
            childModUFiveToSixYearsPercent: childModUFiveToSixYearsPercent,
            childModUTotalNum: childModUTotalNum,
            childModUPercent: childModUPercent,
            childMildUUnderOneYearNum: childMildUUnderOneYearNum,
            childMildUUnderOneYearPercent: childMildUUnderOneYearPercent,
            childMildUOneToFourYearsNum: childMildUOneToFourYearsNum,
            childMildUOneToFourYearsPercent: childMildUOneToFourYearsPercent,
            childMildUFiveToSixYearsNum: childMildUFiveToSixYearsNum,
            childMildUFiveToSixYearsPercent: childMildUFiveToSixYearsPercent,
            childMildUTotalNum: childMildUTotalNum,
            childMildUPercent: childMildUPercent,
            childTotalUnderOneYearNum: childTotalUnderOneYearNum,
            childTotalUnderOneYearPercent: childTotalUnderOneYearPercent,
            childTotalOneToFourYearsNum: childTotalOneToFourYearsNum,
            childTotalOneToFourYearsPercent: childTotalOneToFourYearsPercent,
            childTotalFiveToSixYearsNum: childTotalFiveToSixYearsNum,
            childTotalFiveToSixYearsPercent: childTotalFiveToSixYearsPercent,
            childTotalTotalNum: childTotalTotalNum,
            childTotalPercent: childTotalPercent,
            infantLeadingCausesMortalityCY: infantLeadingCausesMortalityCY,
            infantLeadingCausesMorbidityCY: infantLeadingCausesMorbidityCY,
            infantMortalityCause1: infantMortalityCause1,
            infantMortalityCause2: infantMortalityCause2,
            infantMortalityCause3: infantMortalityCause3,
            infantMortalityNum1: infantMortalityNum1,
            infantMortalityNum2: infantMortalityNum2,
            infantMortalityNum3: infantMortalityNum3,
            infantMorbidityFeverNum: infantMorbidityFeverNum,
            infantMorbidityCoughNum: infantMorbidityCoughNum,
            infantMorbidityMalnutritionNum: infantMorbidityMalnutritionNum,
            infantMorbidityDiarrheaNum: infantMorbidityDiarrheaNum,
            infantMorbidityTCPrimaryComplexNum:
                infantMorbidityTCPrimaryComplexNum,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage5 = async (req, res) => {
    const user = res.locals.user;

    const {
        causeEarlyNeonatalDeathsCY,
        causeEarlyNeonatalCause1,
        causeEarlyNeonatalCause2,
        causeEarlyNeonatalCause3,
        causeEarlyNeonatalNum1,
        causeEarlyNeonatalNum2,
        causeEarlyNeonatalNum3,
        causeMaternalDeathsCY,
        causeMaternalCause1,
        causeMaternalCause2,
        causeMaternalCause3,
        causeMaternalNum1,
        causeMaternalNum2,
        causeMaternalNum3,
        healthClinicsHospitalName1,
        healthClinicsHospitalName2,
        healthClinicsHospitalName3,
        healthClinicsHospitalName4,
        healthClinicsHospitalNumGov1,
        healthClinicsHospitalNumGov2,
        healthClinicsHospitalNumGov3,
        healthClinicsHospitalNumGov4,
        healthClinicsHospitalNumPrivate1,
        healthClinicsHospitalNumPrivate2,
        healthClinicsHospitalNumPrivate3,
        healthClinicsHospitalNumPrivate4,
        medicalHealthPersonnelDoctorNumGov,
        medicalHealthPersonnelNurseNumGov,
        medicalHealthPersonnelMidwifeNumGov,
        medicalHealthPersonnelBHWNumGov,
        medicalHealthPersonnelDoctorNumPrivate,
        medicalHealthPersonnelNurseNumPrivate,
        medicalHealthPersonnelMidwifeNumPrivate,
        medicalHealthPersonnelBHWNumPrivate,
        medicalServiceType1,
        medicalServiceType2,
        medicalServiceType3,
        medicalServiceType4,
        medicalServiceFrequency1,
        medicalServiceFrequency2,
        medicalServiceFrequency3,
        medicalServiceFrequency4,
        toiletAutoFlush,
        toiletWaterSealed,
        toiletAntipolo,
        toiletOthersSpecify,
        toiletOthers,
        toiletTotal,
        disposalTrucks,
        disposalOpenPit,
        disposalBurying,
        disposalBurning,
        disposalThrowAnywhere,
        disposalOthersSpecify,
        disposalOthers,
        householdOSYThirteenToTwentyOneMale,
        householdOSYThirteenToTwentyOneFemale,
        householdOSYThirteenToTwentyOneTotal,
        householdDisabilitiesMale,
        householdDisabilitiesFemale,
        householdDisabilitiesTotal,
        householdTotalFiveToSeventeen,
        householdTotalFiveToSeventeenHelping,
        householdFiveToSeventeenHelpingName1,
        householdFiveToSeventeenHelpingName2,
        householdFiveToSeventeenHelpingName3,
        householdFiveToSeventeenHelpingName4,
        householdFiveToSeventeenHelpingAge1,
        householdFiveToSeventeenHelpingAge2,
        householdFiveToSeventeenHelpingAge3,
        householdFiveToSeventeenHelpingAge4,
        householdFiveToSeventeenHelpingGradeSchool1,
        householdFiveToSeventeenHelpingGradeSchool2,
        householdFiveToSeventeenHelpingGradeSchool3,
        householdFiveToSeventeenHelpingGradeSchool4,
        householdFiveToSeventeenHelpingJobActivity1,
        householdFiveToSeventeenHelpingJobActivity2,
        householdFiveToSeventeenHelpingJobActivity3,
        householdFiveToSeventeenHelpingJobActivity4,
        householdFiveToSeventeenHelpingIncomeWeekly1,
        householdFiveToSeventeenHelpingIncomeWeekly2,
        householdFiveToSeventeenHelpingIncomeWeekly3,
        householdFiveToSeventeenHelpingIncomeWeekly4,
        householdFiveToSeventeenHelpingProgramsAvailed,
    } = req.body;

    await SubmissionBarangayProfilePage5.update(
        {
            causeEarlyNeonatalDeathsCY: causeEarlyNeonatalDeathsCY,
            causeEarlyNeonatalCause1: causeEarlyNeonatalCause1,
            causeEarlyNeonatalCause2: causeEarlyNeonatalCause2,
            causeEarlyNeonatalCause3: causeEarlyNeonatalCause3,
            causeEarlyNeonatalNum1: causeEarlyNeonatalNum1,
            causeEarlyNeonatalNum2: causeEarlyNeonatalNum2,
            causeEarlyNeonatalNum3: causeEarlyNeonatalNum3,
            causeMaternalDeathsCY: causeMaternalDeathsCY,
            causeMaternalCause1: causeMaternalCause1,
            causeMaternalCause2: causeMaternalCause2,
            causeMaternalCause3: causeMaternalCause3,
            causeMaternalNum1: causeMaternalNum1,
            causeMaternalNum2: causeMaternalNum2,
            causeMaternalNum3: causeMaternalNum3,
            healthClinicsHospitalName1: healthClinicsHospitalName1,
            healthClinicsHospitalName2: healthClinicsHospitalName2,
            healthClinicsHospitalName3: healthClinicsHospitalName3,
            healthClinicsHospitalName4: healthClinicsHospitalName4,
            healthClinicsHospitalNumGov1: healthClinicsHospitalNumGov1,
            healthClinicsHospitalNumGov2: healthClinicsHospitalNumGov2,
            healthClinicsHospitalNumGov3: healthClinicsHospitalNumGov3,
            healthClinicsHospitalNumGov4: healthClinicsHospitalNumGov4,
            healthClinicsHospitalNumPrivate1: healthClinicsHospitalNumPrivate1,
            healthClinicsHospitalNumPrivate2: healthClinicsHospitalNumPrivate2,
            healthClinicsHospitalNumPrivate3: healthClinicsHospitalNumPrivate3,
            healthClinicsHospitalNumPrivate4: healthClinicsHospitalNumPrivate4,
            medicalHealthPersonnelDoctorNumGov:
                medicalHealthPersonnelDoctorNumGov,
            medicalHealthPersonnelNurseNumGov:
                medicalHealthPersonnelNurseNumGov,
            medicalHealthPersonnelMidwifeNumGov:
                medicalHealthPersonnelMidwifeNumGov,
            medicalHealthPersonnelBHWNumGov: medicalHealthPersonnelBHWNumGov,
            medicalHealthPersonnelDoctorNumPrivate:
                medicalHealthPersonnelDoctorNumPrivate,
            medicalHealthPersonnelNurseNumPrivate:
                medicalHealthPersonnelNurseNumPrivate,
            medicalHealthPersonnelMidwifeNumPrivate:
                medicalHealthPersonnelMidwifeNumPrivate,
            medicalHealthPersonnelBHWNumPrivate:
                medicalHealthPersonnelBHWNumPrivate,
            medicalServiceType1: medicalServiceType1,
            medicalServiceType2: medicalServiceType2,
            medicalServiceType3: medicalServiceType3,
            medicalServiceType4: medicalServiceType4,
            medicalServiceFrequency1: medicalServiceFrequency1,
            medicalServiceFrequency2: medicalServiceFrequency2,
            medicalServiceFrequency3: medicalServiceFrequency3,
            medicalServiceFrequency4: medicalServiceFrequency4,
            toiletAutoFlush: toiletAutoFlush,
            toiletWaterSealed: toiletWaterSealed,
            toiletAntipolo: toiletAntipolo,
            toiletOthersSpecify: toiletOthersSpecify,
            toiletOthers: toiletOthers,
            toiletTotal: toiletTotal,
            disposalTrucks: disposalTrucks,
            disposalOpenPit: disposalOpenPit,
            disposalBurying: disposalBurying,
            disposalBurning: disposalBurning,
            disposalThrowAnywhere: disposalThrowAnywhere,
            disposalOthersSpecify: disposalOthersSpecify,
            disposalOthers: disposalOthers,
            householdOSYThirteenToTwentyOneMale:
                householdOSYThirteenToTwentyOneMale,
            householdOSYThirteenToTwentyOneFemale:
                householdOSYThirteenToTwentyOneFemale,
            householdOSYThirteenToTwentyOneTotal:
                householdOSYThirteenToTwentyOneTotal,
            householdDisabilitiesMale: householdDisabilitiesMale,
            householdDisabilitiesFemale: householdDisabilitiesFemale,
            householdDisabilitiesTotal: householdDisabilitiesTotal,
            householdTotalFiveToSeventeen: householdTotalFiveToSeventeen,
            householdTotalFiveToSeventeenHelping:
                householdTotalFiveToSeventeenHelping,
            householdFiveToSeventeenHelpingName1:
                householdFiveToSeventeenHelpingName1,
            householdFiveToSeventeenHelpingName2:
                householdFiveToSeventeenHelpingName2,
            householdFiveToSeventeenHelpingName3:
                householdFiveToSeventeenHelpingName3,
            householdFiveToSeventeenHelpingName4:
                householdFiveToSeventeenHelpingName4,
            householdFiveToSeventeenHelpingAge1:
                householdFiveToSeventeenHelpingAge1,
            householdFiveToSeventeenHelpingAge2:
                householdFiveToSeventeenHelpingAge2,
            householdFiveToSeventeenHelpingAge3:
                householdFiveToSeventeenHelpingAge3,
            householdFiveToSeventeenHelpingAge4:
                householdFiveToSeventeenHelpingAge4,
            householdFiveToSeventeenHelpingGradeSchool1:
                householdFiveToSeventeenHelpingGradeSchool1,
            householdFiveToSeventeenHelpingGradeSchool2:
                householdFiveToSeventeenHelpingGradeSchool2,
            householdFiveToSeventeenHelpingGradeSchool3:
                householdFiveToSeventeenHelpingGradeSchool3,
            householdFiveToSeventeenHelpingGradeSchool4:
                householdFiveToSeventeenHelpingGradeSchool4,
            householdFiveToSeventeenHelpingJobActivity1:
                householdFiveToSeventeenHelpingJobActivity1,
            householdFiveToSeventeenHelpingJobActivity2:
                householdFiveToSeventeenHelpingJobActivity2,
            householdFiveToSeventeenHelpingJobActivity3:
                householdFiveToSeventeenHelpingJobActivity3,
            householdFiveToSeventeenHelpingJobActivity4:
                householdFiveToSeventeenHelpingJobActivity4,
            householdFiveToSeventeenHelpingIncomeWeekly1:
                householdFiveToSeventeenHelpingIncomeWeekly1,
            householdFiveToSeventeenHelpingIncomeWeekly2:
                householdFiveToSeventeenHelpingIncomeWeekly2,
            householdFiveToSeventeenHelpingIncomeWeekly3:
                householdFiveToSeventeenHelpingIncomeWeekly3,
            householdFiveToSeventeenHelpingIncomeWeekly4:
                householdFiveToSeventeenHelpingIncomeWeekly4,
            householdFiveToSeventeenHelpingProgramsAvailed:
                householdFiveToSeventeenHelpingProgramsAvailed,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage6 = async (req, res) => {
    const user = res.locals.user;

    const {
        numGradeCompleted,
        nurseryPrepKinder,
        grade1,
        grade2,
        grade3,
        grade4,
        grade5,
        grade6,
        grade7,
        grade8,
        grade9,
        grade10,
        juniorHigh,
        seniorHigh,
        college1,
        college2,
        college3,
        college4,
        college5,
        baccalaureate,
        postBaccalaureate,
        aquacultureNum,
        aquacultureSponsoredBy,
        aquaculturePublic,
        aquaculturePrivate,
        sewingNum,
        sewingSponsoredBy,
        sewingPublic,
        sewingPrivate,
        flowerMakingNum,
        flowerMakingSponsoredBy,
        flowerMakingPublic,
        flowerMakingPrivate,
        backyardGardeningNum,
        backyardGardeningSponsoredBy,
        backyardGardeningPublic,
        backyardGardeningPrivate,
        handicraftNum,
        handicraftSponsoredBy,
        handicraftPublic,
        handicraftPrivate,
        beautyCulturalNum,
        beautyCulturalSponsoredBy,
        beautyCulturalPublic,
        beautyCulturalPrivate,
        livestockRaisingNum,
        livestockRaisingSponsoredBy,
        livestockRaisingPublic,
        livestockRaisingPrivate,
        carpentryNum,
        carpentrySponsoredBy,
        carpentryPublic,
        carpentryPrivate,
        cosmetologyNum,
        cosmetologySponsoredBy,
        cosmetologyPublic,
        cosmetologyPrivate,
        recyclingOfMaterialNum,
        recyclingOfMaterialSponsoredBy,
        recyclingOfMaterialPublic,
        recyclingOfMaterialPrivate,
        culinaryArtNum,
        culinaryArtSponsoredBy,
        culinaryArtPublic,
        culinaryArtPrivate,
        typingEncodingNum,
        typingEncodingSponsoredBy,
        typingEncodingPublic,
        typingEncodingPrivate,
        electronicsNum,
        electronicsSponsoredBy,
        electronicsPublic,
        electronicsPrivate,
        practicalElectricityNum,
        practicalElectricitySponsoredBy,
        practicalElectricityPublic,
        practicalElectricityPrivate,
        othersNumSpecify,
        othersNum,
        othersSponsoredBy,
        othersPublic,
        othersPrivate,
        educInstructionPublic1,
        educInstructionPrivate1,
        educInstructionDayCare1,
        educInstructionPreschoolKinder1,
        educInstructionElementary1,
        educInstructionSecondary1,
        educInstructionTertiaryCollege1,
        educInstructionPostGraduate1,
        educInstructionPublic2,
        educInstructionPrivate2,
        educInstructionDayCare2,
        educInstructionPreschoolKinder2,
        educInstructionElementary2,
        educInstructionSecondary2,
        educInstructionTertiaryCollege2,
        educInstructionPostGraduate2,
        educInstructionPublic3,
        educInstructionPrivate3,
        educInstructionDayCare3,
        educInstructionPreschoolKinder3,
        educInstructionElementary3,
        educInstructionSecondary3,
        educInstructionTertiaryCollege3,
        educInstructionPostGraduate3,
    } = req.body;

    await SubmissionBarangayProfilePage6.update(
        {
            numGradeCompleted: numGradeCompleted,
            nurseryPrepKinder: nurseryPrepKinder,
            grade1: grade1,
            grade2: grade2,
            grade3: grade3,
            grade4: grade4,
            grade5: grade5,
            grade6: grade6,
            grade7: grade7,
            grade8: grade8,
            grade9: grade9,
            grade10: grade10,
            juniorHigh: juniorHigh,
            seniorHigh: seniorHigh,
            college1: college1,
            college2: college2,
            college3: college3,
            college4: college4,
            college5: college5,
            baccalaureate: baccalaureate,
            postBaccalaureate: postBaccalaureate,
            aquacultureNum: aquacultureNum,
            aquacultureSponsoredBy: aquacultureSponsoredBy,
            aquaculturePublic: aquaculturePublic,
            aquaculturePrivate: aquaculturePrivate,
            sewingNum: sewingNum,
            sewingSponsoredBy: sewingSponsoredBy,
            sewingPublic: sewingPublic,
            sewingPrivate: sewingPrivate,
            flowerMakingNum: flowerMakingNum,
            flowerMakingSponsoredBy: flowerMakingSponsoredBy,
            flowerMakingPublic: flowerMakingPublic,
            flowerMakingPrivate: flowerMakingPrivate,
            backyardGardeningNum: backyardGardeningNum,
            backyardGardeningSponsoredBy: backyardGardeningSponsoredBy,
            backyardGardeningPublic: backyardGardeningPublic,
            backyardGardeningPrivate: backyardGardeningPrivate,
            handicraftNum: handicraftNum,
            handicraftSponsoredBy: handicraftSponsoredBy,
            handicraftPublic: handicraftPublic,
            handicraftPrivate: handicraftPrivate,
            beautyCulturalNum: beautyCulturalNum,
            beautyCulturalSponsoredBy: beautyCulturalSponsoredBy,
            beautyCulturalPublic: beautyCulturalPublic,
            beautyCulturalPrivate: beautyCulturalPrivate,
            livestockRaisingNum: livestockRaisingNum,
            livestockRaisingSponsoredBy: livestockRaisingSponsoredBy,
            livestockRaisingPublic: livestockRaisingPublic,
            livestockRaisingPrivate: livestockRaisingPrivate,
            carpentryNum: carpentryNum,
            carpentrySponsoredBy: carpentrySponsoredBy,
            carpentryPublic: carpentryPublic,
            carpentryPrivate: carpentryPrivate,
            cosmetologyNum: cosmetologyNum,
            cosmetologySponsoredBy: cosmetologySponsoredBy,
            cosmetologyPublic: cosmetologyPublic,
            cosmetologyPrivate: cosmetologyPrivate,
            recyclingOfMaterialNum: recyclingOfMaterialNum,
            recyclingOfMaterialSponsoredBy: recyclingOfMaterialSponsoredBy,
            recyclingOfMaterialPublic: recyclingOfMaterialPublic,
            recyclingOfMaterialPrivate: recyclingOfMaterialPrivate,
            culinaryArtNum: culinaryArtNum,
            culinaryArtSponsoredBy: culinaryArtSponsoredBy,
            culinaryArtPublic: culinaryArtPublic,
            culinaryArtPrivate: culinaryArtPrivate,
            typingEncodingNum: typingEncodingNum,
            typingEncodingSponsoredBy: typingEncodingSponsoredBy,
            typingEncodingPublic: typingEncodingPublic,
            typingEncodingPrivate: typingEncodingPrivate,
            electronicsNum: electronicsNum,
            electronicsSponsoredBy: electronicsSponsoredBy,
            electronicsPublic: electronicsPublic,
            electronicsPrivate: electronicsPrivate,
            practicalElectricityNum: practicalElectricityNum,
            practicalElectricitySponsoredBy: practicalElectricitySponsoredBy,
            practicalElectricityPublic: practicalElectricityPublic,
            practicalElectricityPrivate: practicalElectricityPrivate,
            othersNumSpecify: othersNumSpecify,
            othersNum: othersNum,
            othersSponsoredBy: othersSponsoredBy,
            othersPublic: othersPublic,
            othersPrivate: othersPrivate,
            educInstructionPublic1: educInstructionPublic1,
            educInstructionPrivate1: educInstructionPrivate1,
            educInstructionDayCare1: educInstructionDayCare1,
            educInstructionPreschoolKinder1: educInstructionPreschoolKinder1,
            educInstructionElementary1: educInstructionElementary1,
            educInstructionSecondary1: educInstructionSecondary1,
            educInstructionTertiaryCollege1: educInstructionTertiaryCollege1,
            educInstructionPostGraduate1: educInstructionPostGraduate1,
            educInstructionPublic2: educInstructionPublic2,
            educInstructionPrivate2: educInstructionPrivate2,
            educInstructionDayCare2: educInstructionDayCare2,
            educInstructionPreschoolKinder2: educInstructionPreschoolKinder2,
            educInstructionElementary2: educInstructionElementary2,
            educInstructionSecondary2: educInstructionSecondary2,
            educInstructionTertiaryCollege2: educInstructionTertiaryCollege2,
            educInstructionPostGraduate2: educInstructionPostGraduate2,
            educInstructionPublic3: educInstructionPublic3,
            educInstructionPrivate3: educInstructionPrivate3,
            educInstructionDayCare3: educInstructionDayCare3,
            educInstructionPreschoolKinder3: educInstructionPreschoolKinder3,
            educInstructionElementary3: educInstructionElementary3,
            educInstructionSecondary3: educInstructionSecondary3,
            educInstructionTertiaryCollege3: educInstructionTertiaryCollege3,
            educInstructionPostGraduate3: educInstructionPostGraduate3,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage7 = async (req, res) => {
    const user = res.locals.user;

    const {
        typeOfBuildingNum1,
        typeOfBuildingNum2,
        typeOfBuildingNum3,
        typeOfBuildingNum4,
        typeOfBuildingNum5,
        typeOfBuildingNum6,
        typeOfBuildingNum6Specify,
        typeOfConstructionMats1,
        typeOfConstructionMats2,
        typeOfConstructionMats3,
        typeOfConstructionMats4,
        typeOfConstructionMats5,
        typeOfConstructionMats5Specify,
        numInformalSettler1,
        numInformalSettler2,
        numInformalSettler3,
        numInformalSettler4,
        numInformalSettler5,
        numInformalSettlerLocation1,
        numInformalSettlerLocation2,
        numInformalSettlerLocation3,
        numInformalSettlerLocation4,
        numInformalSettlerLocation5,
        numHeritageStructure1,
        numHeritageStructure2,
        numHeritageStructure3,
        numHeritageStructure4,
        numHeritageStructure5,
        numHeritageStructure6,
        heritageStructureLocation1,
        heritageStructureLocation2,
        heritageStructureLocation3,
        heritageStructureLocation4,
        heritageStructureLocation5,
        heritageStructureLocation6,
        presenceProtectiveService1,
        presenceProtectiveService2,
        presenceProtectiveService3,
        presenceProtectiveService4,
        presenceProtectiveService5,
        presenceProtectiveService5Specify,
        presenceNumPersonnel1,
        presenceNumPersonnel2,
        presenceNumPersonnel3,
        presenceNumPersonnel4,
        presenceNumPersonnel5,
        sportsFacilitiesPublic1,
        sportsFacilitiesPublic2,
        sportsFacilitiesPublic3,
        sportsFacilitiesPublic4,
        sportsFacilitiesPublic5,
        sportsFacilitiesPublic6,
        sportsFacilitiesPublic7,
        sportsFacilitiesPublic8,
        sportsFacilitiesPrivate1,
        sportsFacilitiesPrivate2,
        sportsFacilitiesPrivate3,
        sportsFacilitiesPrivate4,
        sportsFacilitiesPrivate5,
        sportsFacilitiesPrivate6,
        sportsFacilitiesPrivate7,
        sportsFacilitiesPrivate8,
        sportsFacilities8Specify,
        recreationalPublic1,
        recreationalPublic2,
        recreationalPublic3,
        recreationalPublic4,
        recreationalPublic5,
        recreationalPublic6,
        recreationalPublic7,
        recreationalPublic8,
        recreationalPrivate1,
        recreationalPrivate2,
        recreationalPrivate3,
        recreationalPrivate4,
        recreationalPrivate5,
        recreationalPrivate6,
        recreationalPrivate7,
        recreationalPrivate8,
        recreational8Specify,
    } = req.body;

    await SubmissionBarangayProfilePage7.update(
        {
            typeOfBuildingNum1: typeOfBuildingNum1,
            typeOfBuildingNum2: typeOfBuildingNum2,
            typeOfBuildingNum3: typeOfBuildingNum3,
            typeOfBuildingNum4: typeOfBuildingNum4,
            typeOfBuildingNum5: typeOfBuildingNum5,
            typeOfBuildingNum6: typeOfBuildingNum6,
            typeOfBuildingNum6Specify: typeOfBuildingNum6Specify,
            typeOfConstructionMats1: typeOfConstructionMats1,
            typeOfConstructionMats2: typeOfConstructionMats2,
            typeOfConstructionMats3: typeOfConstructionMats3,
            typeOfConstructionMats4: typeOfConstructionMats4,
            typeOfConstructionMats5: typeOfConstructionMats5,
            typeOfConstructionMats5Specify: typeOfConstructionMats5Specify,
            numInformalSettler1: numInformalSettler1,
            numInformalSettler2: numInformalSettler2,
            numInformalSettler3: numInformalSettler3,
            numInformalSettler4: numInformalSettler4,
            numInformalSettler5: numInformalSettler5,
            numInformalSettlerLocation1: numInformalSettlerLocation1,
            numInformalSettlerLocation2: numInformalSettlerLocation2,
            numInformalSettlerLocation3: numInformalSettlerLocation3,
            numInformalSettlerLocation4: numInformalSettlerLocation4,
            numInformalSettlerLocation5: numInformalSettlerLocation5,
            numHeritageStructure1: numHeritageStructure1,
            numHeritageStructure2: numHeritageStructure2,
            numHeritageStructure3: numHeritageStructure3,
            numHeritageStructure4: numHeritageStructure4,
            numHeritageStructure5: numHeritageStructure5,
            numHeritageStructure6: numHeritageStructure6,
            heritageStructureLocation1: heritageStructureLocation1,
            heritageStructureLocation2: heritageStructureLocation2,
            heritageStructureLocation3: heritageStructureLocation3,
            heritageStructureLocation4: heritageStructureLocation4,
            heritageStructureLocation5: heritageStructureLocation5,
            heritageStructureLocation6: heritageStructureLocation6,
            presenceProtectiveService1: presenceProtectiveService1,
            presenceProtectiveService2: presenceProtectiveService2,
            presenceProtectiveService3: presenceProtectiveService3,
            presenceProtectiveService4: presenceProtectiveService4,
            presenceProtectiveService5: presenceProtectiveService5,
            presenceProtectiveService5Specify:
                presenceProtectiveService5Specify,
            presenceNumPersonnel1: presenceNumPersonnel1,
            presenceNumPersonnel2: presenceNumPersonnel2,
            presenceNumPersonnel3: presenceNumPersonnel3,
            presenceNumPersonnel4: presenceNumPersonnel4,
            presenceNumPersonnel5: presenceNumPersonnel5,
            sportsFacilitiesPublic1: sportsFacilitiesPublic1,
            sportsFacilitiesPublic2: sportsFacilitiesPublic2,
            sportsFacilitiesPublic3: sportsFacilitiesPublic3,
            sportsFacilitiesPublic4: sportsFacilitiesPublic4,
            sportsFacilitiesPublic5: sportsFacilitiesPublic5,
            sportsFacilitiesPublic6: sportsFacilitiesPublic6,
            sportsFacilitiesPublic7: sportsFacilitiesPublic7,
            sportsFacilitiesPublic8: sportsFacilitiesPublic8,
            sportsFacilitiesPrivate1: sportsFacilitiesPrivate1,
            sportsFacilitiesPrivate2: sportsFacilitiesPrivate2,
            sportsFacilitiesPrivate3: sportsFacilitiesPrivate3,
            sportsFacilitiesPrivate4: sportsFacilitiesPrivate4,
            sportsFacilitiesPrivate5: sportsFacilitiesPrivate5,
            sportsFacilitiesPrivate6: sportsFacilitiesPrivate6,
            sportsFacilitiesPrivate7: sportsFacilitiesPrivate7,
            sportsFacilitiesPrivate8: sportsFacilitiesPrivate8,
            sportsFacilities8Specify: sportsFacilities8Specify,
            recreationalPublic1: recreationalPublic1,
            recreationalPublic2: recreationalPublic2,
            recreationalPublic3: recreationalPublic3,
            recreationalPublic4: recreationalPublic4,
            recreationalPublic5: recreationalPublic5,
            recreationalPublic6: recreationalPublic6,
            recreationalPublic7: recreationalPublic7,
            recreationalPublic8: recreationalPublic8,
            recreationalPrivate1: recreationalPrivate1,
            recreationalPrivate2: recreationalPrivate2,
            recreationalPrivate3: recreationalPrivate3,
            recreationalPrivate4: recreationalPrivate4,
            recreationalPrivate5: recreationalPrivate5,
            recreationalPrivate6: recreationalPrivate6,
            recreationalPrivate7: recreationalPrivate7,
            recreationalPrivate8: recreationalPrivate8,
            recreational8Specify: recreational8Specify,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage8 = async (req, res) => {
    const user = res.locals.user;

    const {
        tricycleWithinBarangay,
        tricycleWithinDistrict,
        tricycleWithinCityProper,
        trisikadWithinBarangay,
        trisikadWithinDistrict,
        trisikadWithinCityProper,
        jeepneyWithinBarangay,
        jeepneyWithinDistrict,
        jeepneyWithinCityProper,
        carWithinBarangay,
        carWithinDistrict,
        carWithinCityProper,
        busWithinBarangay,
        busWithinDistrict,
        busWithinCityProper,
        boatMotorizedWithinBarangay,
        boatMotorizedWithinDistrict,
        boatMotorizedWithinCityProper,
        boatNonMotorizedWithinBarangay,
        boatNonMotorizedWithinDistrict,
        boatNonMotorizedWithinCityProper,
        othersWithinBarangay,
        othersWithinDistrict,
        othersWithinCityProper,
        othersTransportFacilitySpecify,
        waterSupplyNumHousehold1,
        waterSupplyNumHousehold2,
        waterSupplyNumHousehold3,
        waterSupplyNumHousehold4,
        waterSupplyNumHousehold5,
        waterSupplyNumHousehold6,
        waterSupplyNumHousehold7,
        waterSupplyPercentHousehold1,
        waterSupplyPercentHousehold2,
        waterSupplyPercentHousehold3,
        waterSupplyPercentHousehold4,
        waterSupplyPercentHousehold5,
        waterSupplyPercentHousehold6,
        waterSupplyPercentHousehold7,
        waterSupply7Specify,
        waterSupplyNumTotal,
        waterSupplyPercentTotal,
        inventoryExistingPowerSupplyNum1,
        inventoryExistingPowerSupplyPercent1,
        inventoryExistingPowerSupplyNum2,
        inventoryExistingPowerSupplyPercent2,
        inventoryExistingPowerSupplySpecify,
        inventoryExistingPowerSupplyNumTotal,
        inventoryExistingPowerSupplyPercentTotal,
        inventoryFuelUsedNum1,
        inventoryFuelUsedPercent1,
        inventoryFuelUsedNum2,
        inventoryFuelUsedPercent2,
        inventoryFuelUsedNum3,
        inventoryFuelUsedPercent3,
        inventoryFuelUsedNum4,
        inventoryFuelUsedPercent4,
        inventoryFuelUsed4Specify,
        inventoryFuelUsedNumTotal,
        inventoryFuelUsedPercentTotal,
        sourceIncomeCY1,
        sourceIncomeCY2,
        sourceIncomeAmount1CY1,
        sourceIncomeAmount1CY2,
        sourceIncomeAmount2CY1,
        sourceIncomeAmount2CY2,
        sourceIncomeAmount3CY1,
        sourceIncomeAmount3CY2,
        sourceIncomeAmount4CY1,
        sourceIncomeAmount4CY2,
        sourceIncomeAmount5CY1,
        sourceIncomeAmount5CY2,
        sourceIncomeAmount6CY1,
        sourceIncomeAmount6CY2,
        sourceIncomeAmount7CY1,
        sourceIncomeAmount7CY2,
        sourceIncomeAmount8CY1,
        sourceIncomeAmount8CY2,
        sourceIncomeAmount9CY1,
        sourceIncomeAmount9CY2,
        sourceIncomeAmount10CY1,
        sourceIncomeAmount10CY2,
        sourceIncomeAmountTotalCY1,
        sourceIncomeAmountTotalCY2,
    } = req.body;

    await SubmissionBarangayProfilePage8.update(
        {
            tricycleWithinBarangay: tricycleWithinBarangay,
            tricycleWithinDistrict: tricycleWithinDistrict,
            tricycleWithinCityProper: tricycleWithinCityProper,
            trisikadWithinBarangay: trisikadWithinBarangay,
            trisikadWithinDistrict: trisikadWithinDistrict,
            trisikadWithinCityProper: trisikadWithinCityProper,
            jeepneyWithinBarangay: jeepneyWithinBarangay,
            jeepneyWithinDistrict: jeepneyWithinDistrict,
            jeepneyWithinCityProper: jeepneyWithinCityProper,
            carWithinBarangay: carWithinBarangay,
            carWithinDistrict: carWithinDistrict,
            carWithinCityProper: carWithinCityProper,
            busWithinBarangay: busWithinBarangay,
            busWithinDistrict: busWithinDistrict,
            busWithinCityProper: busWithinCityProper,
            boatMotorizedWithinBarangay: boatMotorizedWithinBarangay,
            boatMotorizedWithinDistrict: boatMotorizedWithinDistrict,
            boatMotorizedWithinCityProper: boatMotorizedWithinCityProper,
            boatNonMotorizedWithinBarangay: boatNonMotorizedWithinBarangay,
            boatNonMotorizedWithinDistrict: boatNonMotorizedWithinDistrict,
            boatNonMotorizedWithinCityProper: boatNonMotorizedWithinCityProper,
            othersWithinBarangay: othersWithinBarangay,
            othersWithinDistrict: othersWithinDistrict,
            othersWithinCityProper: othersWithinCityProper,
            othersTransportFacilitySpecify: othersTransportFacilitySpecify,
            waterSupplyNumHousehold1: waterSupplyNumHousehold1,
            waterSupplyNumHousehold2: waterSupplyNumHousehold2,
            waterSupplyNumHousehold3: waterSupplyNumHousehold3,
            waterSupplyNumHousehold4: waterSupplyNumHousehold4,
            waterSupplyNumHousehold5: waterSupplyNumHousehold5,
            waterSupplyNumHousehold6: waterSupplyNumHousehold6,
            waterSupplyNumHousehold7: waterSupplyNumHousehold7,
            waterSupplyPercentHousehold1: waterSupplyPercentHousehold1,
            waterSupplyPercentHousehold2: waterSupplyPercentHousehold2,
            waterSupplyPercentHousehold3: waterSupplyPercentHousehold3,
            waterSupplyPercentHousehold4: waterSupplyPercentHousehold4,
            waterSupplyPercentHousehold5: waterSupplyPercentHousehold5,
            waterSupplyPercentHousehold6: waterSupplyPercentHousehold6,
            waterSupplyPercentHousehold7: waterSupplyPercentHousehold7,
            waterSupply7Specify: waterSupply7Specify,
            waterSupplyNumTotal: waterSupplyNumTotal,
            waterSupplyPercentTotal: waterSupplyPercentTotal,
            inventoryExistingPowerSupplyNum1: inventoryExistingPowerSupplyNum1,
            inventoryExistingPowerSupplyPercent1:
                inventoryExistingPowerSupplyPercent1,
            inventoryExistingPowerSupplyNum2: inventoryExistingPowerSupplyNum2,
            inventoryExistingPowerSupplyPercent2:
                inventoryExistingPowerSupplyPercent2,
            inventoryExistingPowerSupplySpecify:
                inventoryExistingPowerSupplySpecify,
            inventoryExistingPowerSupplyNumTotal:
                inventoryExistingPowerSupplyNumTotal,
            inventoryExistingPowerSupplyPercentTotal:
                inventoryExistingPowerSupplyPercentTotal,
            inventoryFuelUsedNum1: inventoryFuelUsedNum1,
            inventoryFuelUsedPercent1: inventoryFuelUsedPercent1,
            inventoryFuelUsedNum2: inventoryFuelUsedNum2,
            inventoryFuelUsedPercent2: inventoryFuelUsedPercent2,
            inventoryFuelUsedNum3: inventoryFuelUsedNum3,
            inventoryFuelUsedPercent3: inventoryFuelUsedPercent3,
            inventoryFuelUsedNum4: inventoryFuelUsedNum4,
            inventoryFuelUsedPercent4: inventoryFuelUsedPercent4,
            inventoryFuelUsed4Specify: inventoryFuelUsed4Specify,
            inventoryFuelUsedNumTotal: inventoryFuelUsedNumTotal,
            inventoryFuelUsedPercentTotal: inventoryFuelUsedPercentTotal,
            sourceIncomeCY1: sourceIncomeCY1,
            sourceIncomeCY2: sourceIncomeCY2,
            sourceIncomeAmount1CY1: sourceIncomeAmount1CY1,
            sourceIncomeAmount1CY2: sourceIncomeAmount1CY2,
            sourceIncomeAmount2CY1: sourceIncomeAmount2CY1,
            sourceIncomeAmount2CY2: sourceIncomeAmount2CY2,
            sourceIncomeAmount3CY1: sourceIncomeAmount3CY1,
            sourceIncomeAmount3CY2: sourceIncomeAmount3CY2,
            sourceIncomeAmount4CY1: sourceIncomeAmount4CY1,
            sourceIncomeAmount4CY2: sourceIncomeAmount4CY2,
            sourceIncomeAmount5CY1: sourceIncomeAmount5CY1,
            sourceIncomeAmount5CY2: sourceIncomeAmount5CY2,
            sourceIncomeAmount6CY1: sourceIncomeAmount6CY1,
            sourceIncomeAmount6CY2: sourceIncomeAmount6CY2,
            sourceIncomeAmount7CY1: sourceIncomeAmount7CY1,
            sourceIncomeAmount7CY2: sourceIncomeAmount7CY2,
            sourceIncomeAmount8CY1: sourceIncomeAmount8CY1,
            sourceIncomeAmount8CY2: sourceIncomeAmount8CY2,
            sourceIncomeAmount9CY1: sourceIncomeAmount9CY1,
            sourceIncomeAmount9CY2: sourceIncomeAmount9CY2,
            sourceIncomeAmount10CY1: sourceIncomeAmount10CY1,
            sourceIncomeAmount10CY2: sourceIncomeAmount10CY2,
            sourceIncomeAmountTotalCY1: sourceIncomeAmountTotalCY1,
            sourceIncomeAmountTotalCY2: sourceIncomeAmountTotalCY2,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

const updateSubmissionBarangayProfilePage9 = async (req, res) => {
    const user = res.locals.user;

    const {
        actualExpendituresCY1,
        actualExpendituresCY2,
        actualExpendituresAmount1CY1,
        actualExpendituresAmount1CY2,
        actualExpendituresAmount2CY1,
        actualExpendituresAmount2CY2,
        actualExpendituresAmount3CY1,
        actualExpendituresAmount3CY2,
        actualExpendituresAmountTotalCY1,
        actualExpendituresAmountTotalCY2,
        governanceOwnedFacilities1,
        governanceOwnedFacilities2,
        governanceOwnedFacilities3,
        governanceOwnedFacilities4,
        governanceOwnedFacilities5,
        governanceOwnedFacilities6,
        governanceOwnedFacilities7,
        governanceOwnedFacilities8,
        governanceOwnedFacilities8StateOwnership,
        governanceOwnedFacilities9,
        governanceOwnedFacilities9StateOwnership,
        governanceOwnedFacilities10,
        governanceOwnedFacilities11,
        governanceOwnedFacilities12,
        governanceOwnedFacilities12Specify,
        barangayGovSupportOrgNum1,
        barangayGovSupportOrgNum2,
        barangayGovSupportOrgNum3,
        barangayGovSupportOrgNum4,
        barangayGovSupportOrgNum5,
        barangayGovSupportOrgNum6,
        barangayGovSupportOrgNum7,
        barangayGovSupportOrgNum7Specify,
        barangayGovSupportOrgNum8,
        barangayGovSupportOrgNum8Specify,
        barangayGovSupportOrgNum9,
        barangayGovSupportOrgNum10,
        barangayGovSupportOrgNum11,
        barangayGovSupportOrgNum12,
        signatureOverPrintedName,
        position,
        date1,
        barangayCaptain,
        date2,
    } = req.body;

    await SubmissionBarangayProfilePage9.update(
        {
            actualExpendituresCY1: actualExpendituresCY1,
            actualExpendituresCY2: actualExpendituresCY2,
            actualExpendituresAmount1CY1: actualExpendituresAmount1CY1,
            actualExpendituresAmount1CY2: actualExpendituresAmount1CY2,
            actualExpendituresAmount2CY1: actualExpendituresAmount2CY1,
            actualExpendituresAmount2CY2: actualExpendituresAmount2CY2,
            actualExpendituresAmount3CY1: actualExpendituresAmount3CY1,
            actualExpendituresAmount3CY2: actualExpendituresAmount3CY2,
            actualExpendituresAmountTotalCY1: actualExpendituresAmountTotalCY1,
            actualExpendituresAmountTotalCY2: actualExpendituresAmountTotalCY2,
            governanceOwnedFacilities1: governanceOwnedFacilities1,
            governanceOwnedFacilities2: governanceOwnedFacilities2,
            governanceOwnedFacilities3: governanceOwnedFacilities3,
            governanceOwnedFacilities4: governanceOwnedFacilities4,
            governanceOwnedFacilities5: governanceOwnedFacilities5,
            governanceOwnedFacilities6: governanceOwnedFacilities6,
            governanceOwnedFacilities7: governanceOwnedFacilities7,
            governanceOwnedFacilities8: governanceOwnedFacilities8,
            governanceOwnedFacilities8StateOwnership:
                governanceOwnedFacilities8StateOwnership,
            governanceOwnedFacilities9: governanceOwnedFacilities9,
            governanceOwnedFacilities9StateOwnership:
                governanceOwnedFacilities9StateOwnership,
            governanceOwnedFacilities10: governanceOwnedFacilities10,
            governanceOwnedFacilities11: governanceOwnedFacilities11,
            governanceOwnedFacilities12: governanceOwnedFacilities12,
            governanceOwnedFacilities12Specify:
                governanceOwnedFacilities12Specify,
            barangayGovSupportOrgNum1: barangayGovSupportOrgNum1,
            barangayGovSupportOrgNum2: barangayGovSupportOrgNum2,
            barangayGovSupportOrgNum3: barangayGovSupportOrgNum3,
            barangayGovSupportOrgNum4: barangayGovSupportOrgNum4,
            barangayGovSupportOrgNum5: barangayGovSupportOrgNum5,
            barangayGovSupportOrgNum6: barangayGovSupportOrgNum6,
            barangayGovSupportOrgNum7: barangayGovSupportOrgNum7,
            barangayGovSupportOrgNum7Specify: barangayGovSupportOrgNum7Specify,
            barangayGovSupportOrgNum8: barangayGovSupportOrgNum8,
            barangayGovSupportOrgNum8Specify: barangayGovSupportOrgNum8Specify,
            barangayGovSupportOrgNum9: barangayGovSupportOrgNum9,
            barangayGovSupportOrgNum10: barangayGovSupportOrgNum10,
            barangayGovSupportOrgNum11: barangayGovSupportOrgNum11,
            barangayGovSupportOrgNum12: barangayGovSupportOrgNum12,
            signatureOverPrintedName: signatureOverPrintedName,
            position: position,
            date1: date1,
            barangayCaptain: barangayCaptain,
            date2: date2,
        },
        { where: { barangayId: user.barangayId } }
    );

    res.json("SUCCESS");
};

router.get("/submissions", validateUser, validate, getSubmissions);
router.get(
    "/brgyProfilePages",
    validateUser,
    validate,
    getSubmissionBarangayProfilePages
);
router.post(
    "/brgyProfilePages",
    validateUser,
    validate,
    createSubmissionBarangayProfilePages
);
router.put(
    "/brgyProfilePage1",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage1
);
router.put(
    "/brgyProfilePage2",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage2
);
router.put(
    "/brgyProfilePage3",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage3
);
router.put(
    "/brgyProfilePage4",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage4
);
router.put(
    "/brgyProfilePage5",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage5
);
router.put(
    "/brgyProfilePage6",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage6
);
router.put(
    "/brgyProfilePage7",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage7
);
router.put(
    "/brgyProfilePage8",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage8
);
router.put(
    "/brgyProfilePage9",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage9
);

module.exports = router;
