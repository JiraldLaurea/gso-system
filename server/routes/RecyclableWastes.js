const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Barangay, Sequelize } = require("../models");
const { User } = require("../models");
const { ActionSelectedBarangay } = require("../models");
const { RecyclableWastes } = require("../models");

const Op = Sequelize.Op;

const getRecyclableWastes = async (req, res) => {
    const recyclableWastes = await RecyclableWastes.findAll({
        order: [["barangayName", "ASC"]],
    });

    res.json(recyclableWastes);
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

const getSubmittedRecyclableWastes = async (req, res) => {
    const { yearSubmitted } = req.body;

    const recyclableWaste = await RecyclableWastes.findAll({
        attributes: ["barangayId"],
        where: {
            yearSubmitted: yearSubmitted,
        },
        order: [["barangayId", "ASC"]],
    });
    return res.json(recyclableWaste);
};

const createRecyclableWastes = async (req, res) => {
    const user = res.locals.user;

    const {
        yearSubmitted,
        barangayId,
        barangayName,
        districtName,
        saway,
        lata,
        plastic,
        mineral,
        botelya,
        carton,
        aluminum,
        sin,
        scrap,
        kaldero,
        others,
    } = req.body;

    const totalWeightPerBarangay =
        Number(saway) +
        Number(lata) +
        Number(plastic) +
        Number(mineral) +
        Number(botelya) +
        Number(carton) +
        Number(aluminum) +
        Number(sin) +
        Number(scrap) +
        Number(kaldero) +
        Number(others);

    if (user.isAdmin) {
        await RecyclableWastes.create({
            yearSubmitted: yearSubmitted,
            barangayId: barangayId,
            barangayName: barangayName,
            districtName: districtName,
            saway: saway,
            lata: lata,
            plastic: plastic,
            mineral: mineral,
            botelya: botelya,
            carton: carton,
            aluminum: aluminum,
            sin: sin,
            scrap: scrap,
            kaldero: kaldero,
            others: others,
            totalWeightPerBarangay: totalWeightPerBarangay,
        });
    } else {
        await RecyclableWastes.create({
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
            barangayName: user.barangayName,
            districtName: user.districtName,
            saway: saway,
            lata: lata,
            plastic: plastic,
            mineral: mineral,
            botelya: botelya,
            carton: carton,
            aluminum: aluminum,
            sin: sin,
            scrap: scrap,
            kaldero: kaldero,
            others: others,
            totalWeightPerBarangay: totalWeightPerBarangay,
        });
    }

    res.json("SUCCESS");
};

router.get("/getRecyclableWastes", getRecyclableWastes);
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
    "/getSubmittedRecyclableWastes",
    validateUser,
    validate,
    getSubmittedRecyclableWastes
);
router.post(
    "/createRecyclableWastes",
    validateUser,
    validate,
    createRecyclableWastes
);

module.exports = router;
