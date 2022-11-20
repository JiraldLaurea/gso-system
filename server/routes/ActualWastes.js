const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Barangay, Sequelize } = require("../models");
const { User } = require("../models");
const { ActionSelectedBarangay } = require("../models");
const { RecyclableWastes } = require("../models");
const { ActualWastes } = require("../models");

const Op = Sequelize.Op;

const getActualWastes = async (req, res) => {
    const { barangayId } = req.body;

    const actualWastes = await ActualWastes.findAll({
        order: [["yearSubmitted", "ASC"]],
        where: {
            barangayId: barangayId,
        },
    });

    res.json(actualWastes);
};

const getActualWastesUser = async (req, res) => {
    const user = res.locals.user;

    const actualWastes = await ActualWastes.findAll({
        order: [["yearSubmitted", "ASC"]],
        where: {
            barangayId: user.barangayId,
        },
    });

    res.json(actualWastes);
};

const getEncodedRecyclableWastes = async (req, res) => {
    const user = res.locals.user;

    const recyclableWaste = await RecyclableWastes.findOne({
        where: {
            barangayId: user.barangayId,
        },
    });

    return res.json(recyclableWaste);
};

const getRecyclableWastesYear = async (req, res) => {
    const user = res.locals.user;

    const { yearSubmitted, barangayId } = req.body;

    if (user.isAdmin) {
        const recyclableWaste = await RecyclableWastes.findOne({
            where: {
                yearSubmitted: yearSubmitted,
                barangayId: barangayId,
            },
        });
        return res.json(recyclableWaste);
    } else {
        const recyclableWaste = await RecyclableWastes.findOne({
            where: {
                yearSubmitted: yearSubmitted,
                barangayId: user.barangayId,
            },
        });
        return res.json(recyclableWaste);
    }
};

const getSubmittedActualWastes = async (req, res) => {
    const { barangayId, yearSubmitted } = req.body;

    const actualWastes = await ActualWastes.findAll({
        where: { barangayId: barangayId, yearSubmitted: yearSubmitted },
    });
    return res.json(actualWastes);
};

const getSubmittedRecyclableWastesUser = async (req, res) => {
    const { dateSubmitted } = req.body;
    const user = res.locals.user;

    const recyclableWastes = await RecyclableWastes.findAll({
        where: { barangayId: user.barangayId, dateSubmitted: dateSubmitted },
    });
    return res.json(recyclableWastes);
};

const createActualWastes = async (req, res) => {
    const {
        yearSubmitted,
        barangayId,
        barangayName,
        districtName,
        actualWastes,
        populationCount,
    } = req.body;

    await ActualWastes.create({
        yearSubmitted: yearSubmitted,
        barangayId: barangayId,
        barangayName: barangayName,
        districtName: districtName,
        actualWastes: actualWastes,
        populationCount: populationCount,
    });

    res.json("SUCCESS");
};

router.post("/getActualWastes", getActualWastes);
router.get("/getActualWastesUser", validateUser, validate, getActualWastesUser);
router.get(
    "/getEncodedRecyclableWastes",
    validateUser,
    validate,
    getEncodedRecyclableWastes
);
router.post(
    "/getRecyclableWastesYear",
    validateUser,
    validate,
    getRecyclableWastesYear
);
router.post(
    "/getSubmittedActualWastes",
    validateUser,
    validate,
    getSubmittedActualWastes
);
router.post(
    "/getSubmittedRecyclableWastesUser",
    validateUser,
    validate,
    getSubmittedRecyclableWastesUser
);
router.post("/createActualWastes", validateUser, validate, createActualWastes);

module.exports = router;
