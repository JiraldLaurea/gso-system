const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Junkshop } = require("../models");
const { ShortenedJunkshop } = require("../models");
const { ActionSelectedBarangay } = require("../models");
const path = require("path");
const fs = require("fs").promises;

const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

const convertToPDF = async (req, res) => {
    const ext = ".pdf";
    const file = req.files.file;

    let pdfBuf = await libre.convertAsync(file.data, ext, undefined);

    return res.json({
        file: `${path.parse(file.name).name}${ext}`,
        pdfBuf: pdfBuf,
    });
};

const getJunkshopYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const junkshop = await Junkshop.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(junkshop);
};

const createJunkshop = async (req, res) => {
    const { yearSubmitted, documentName, junkshopUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const junkshop = await Junkshop.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        junkshopUrl: junkshopUrl,
    });

    return res.json(junkshop);
};

const getShortenedJunkshopYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const junkshop = await ShortenedJunkshop.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(junkshop);
};

const createShortenedJunkshop = async (req, res) => {
    const { yearSubmitted, documentName, shortenedJunkshopUrl } = req.body;
    const user = res.locals.user;

    const junkshop = await ShortenedJunkshop.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedJunkshopUrl: shortenedJunkshopUrl,
    });

    return res.json(junkshop);
};

router.post("/getJunkshopYear", validateUser, validate, getJunkshopYear);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post("/createJunkshop", validateUser, validate, createJunkshop);
router.post(
    "/getShortenedJunkshopYear",
    validateUser,
    validate,
    getShortenedJunkshopYear
);
router.post(
    "/createShortenedJunkshop",
    validateUser,
    validate,
    createShortenedJunkshop
);

module.exports = router;
