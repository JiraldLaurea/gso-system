const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { BarangayOrdinance } = require("../models");
const { ShortenedBarangayOrdinance } = require("../models");
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

const getBarangayOrdinanceYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const barangayOrdinance = await BarangayOrdinance.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(barangayOrdinance);
};

const createBarangayOrdinance = async (req, res) => {
    const { yearSubmitted, documentName, barangayOrdinanceUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const barangayOrdinance = await BarangayOrdinance.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        barangayOrdinanceUrl: barangayOrdinanceUrl,
    });

    return res.json(barangayOrdinance);
};

const getShortenedBarangayOrdinanceYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const barangayOrdinance = await ShortenedBarangayOrdinance.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(barangayOrdinance);
};

const createShortenedBarangayOrdinance = async (req, res) => {
    const { yearSubmitted, documentName, shortenedBarangayOrdinanceUrl } =
        req.body;
    const user = res.locals.user;

    const barangayOrdinance = await ShortenedBarangayOrdinance.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedBarangayOrdinanceUrl: shortenedBarangayOrdinanceUrl,
    });

    return res.json(barangayOrdinance);
};

router.post(
    "/getBarangayOrdinanceYear",
    validateUser,
    validate,
    getBarangayOrdinanceYear
);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post(
    "/createBarangayOrdinance",
    validateUser,
    validate,
    createBarangayOrdinance
);
router.post(
    "/getShortenedBarangayOrdinanceYear",
    validateUser,
    validate,
    getShortenedBarangayOrdinanceYear
);
router.post(
    "/createShortenedBarangayOrdinance",
    validateUser,
    validate,
    createShortenedBarangayOrdinance
);

module.exports = router;
