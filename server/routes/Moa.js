const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { MemorandumOfAgreement } = require("../models");
const { ShortenedMemorandumOfAgreement } = require("../models");
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

const getMoaYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const moa = await MemorandumOfAgreement.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(moa);
};

const createMoa = async (req, res) => {
    const { yearSubmitted, documentName, memorandumOfAgreementUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const moa = await MemorandumOfAgreement.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        memorandumOfAgreementUrl: memorandumOfAgreementUrl,
    });

    return res.json(moa);
};

const getShortenedMoaYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const moa = await ShortenedMemorandumOfAgreement.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(moa);
};

const createShortenedMoa = async (req, res) => {
    const { yearSubmitted, documentName, shortenedMemorandumOfAgreementUrl } =
        req.body;
    const user = res.locals.user;

    const moa = await ShortenedMemorandumOfAgreement.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedMemorandumOfAgreementUrl: shortenedMemorandumOfAgreementUrl,
    });

    return res.json(moa);
};

router.post("/getMoaYear", validateUser, validate, getMoaYear);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post("/createMoa", validateUser, validate, createMoa);
router.post(
    "/getShortenedMoaYear",
    validateUser,
    validate,
    getShortenedMoaYear
);
router.post("/createShortenedMoa", validateUser, validate, createShortenedMoa);

module.exports = router;
