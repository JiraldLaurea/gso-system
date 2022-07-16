const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Submission } = require("../models");
const { Barangay } = require("../models");
const { SubmissionBarangayProfilePage1 } = require("../models");
const sequelize = require("sequelize");

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
    const submissions = await Submission.findAll({
        // group: "barangayName",
        // order: [["createdAt", "ASC"]],
    });

    res.json(submissions);
});

// router.post("/", async (req, res) => {
//     const submission = req.body;
//     await Submission.create(submission);
//     res.json(submission);
// });

router.post("/submit", async (req, res) => {
    const { documentName, populationCount, userId } = req.body;

    const barangay = await Barangay.findOne({
        where: { userId: userId },
    });

    const submission = await Submission.create({
        documentName: documentName,
        populationCount: populationCount,
        userId: userId,
        barangayId: barangay.id,
        barangayName: barangay.barangayName,
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

const getSubmissionBarangayProfilePage1 = async (req, res) => {
    const user = res.locals.user;

    const submissionBarangayProfilePage1 =
        await SubmissionBarangayProfilePage1.findOne({
            where: { barangayId: user.barangayId },
        });

    res.json(submissionBarangayProfilePage1);
};

const createSubmissionBarangayProfilePage1 = async (req, res) => {
    const user = res.locals.user;
    const { city } = req.body;

    const submissionBarangayProfilePage1 =
        await SubmissionBarangayProfilePage1.create({
            barangayId: user.barangayId,
            city: city,
        });

    res.json(submissionBarangayProfilePage1);
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
        totalMale,
        totalFemale,
        totalBoth,
        totalHouseholdsCY,
        totalHouseholds,
        dialectSpoken,
        ethnicGroups,
    } = req.body;

    const submissionBarangayProfilePage1 =
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
                totalBoth: totalBoth,
                totalHouseholdsCY: totalHouseholdsCY,
                totalHouseholds: totalHouseholds,
                dialectSpoken: dialectSpoken,
                ethnicGroups: ethnicGroups,
            },
            { where: { barangayId: user.barangayId } }
        );

    res.json("SUCCESS");
};

// router.post("/submissions", async (req, res) => {
//     const { userId } = req.body;

//     const submissions = await Submission.findAll({
//         where: {
//             userId: userId,
//         },
//     });

//     res.json(submissions);
// });

router.get("/submissions", validateUser, validate, getSubmissions);
router.get(
    "/brgyProfilePage1",
    validateUser,
    validate,
    getSubmissionBarangayProfilePage1
);
router.post(
    "/brgyProfilePage1",
    validateUser,
    validate,
    createSubmissionBarangayProfilePage1
);
router.put(
    "/brgyProfilePage1",
    validateUser,
    validate,
    updateSubmissionBarangayProfilePage1
);

module.exports = router;
