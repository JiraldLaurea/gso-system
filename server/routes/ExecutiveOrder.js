const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { ExecutiveOrder } = require("../models");
const { ShortenedExecutiveOrder } = require("../models");
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

const getExecutiveOrderYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const executiveOrder = await ExecutiveOrder.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(executiveOrder);
};

const createExecutiveOrder = async (req, res) => {
    const { yearSubmitted, documentName, executiveOrderUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const executiveOrder = await ExecutiveOrder.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        executiveOrderUrl: executiveOrderUrl,
    });

    return res.json(executiveOrder);
};

const getShortenedExecutiveOrderYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const executiveOrder = await ShortenedExecutiveOrder.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(executiveOrder);
};

const createShortenedExecutiveOrder = async (req, res) => {
    const { yearSubmitted, documentName, shortenedExecutiveOrderUrl } =
        req.body;
    const user = res.locals.user;

    const executiveOrder = await ShortenedExecutiveOrder.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedExecutiveOrderUrl: shortenedExecutiveOrderUrl,
    });

    return res.json(executiveOrder);
};

router.post(
    "/getExecutiveOrderYear",
    validateUser,
    validate,
    getExecutiveOrderYear
);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post(
    "/createExecutiveOrder",
    validateUser,
    validate,
    createExecutiveOrder
);
router.post(
    "/getShortenedExecutiveOrderYear",
    validateUser,
    validate,
    getShortenedExecutiveOrderYear
);
router.post(
    "/createShortenedExecutiveOrder",
    validateUser,
    validate,
    createShortenedExecutiveOrder
);

module.exports = router;
