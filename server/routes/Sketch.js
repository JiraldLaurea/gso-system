const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Sketch } = require("../models");
const { ShortenedSketch } = require("../models");
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

const getSketchYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const sketch = await Sketch.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(sketch);
};

const createSketch = async (req, res) => {
    const { yearSubmitted, documentName, sketchUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const sketch = await Sketch.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        sketchUrl: sketchUrl,
    });

    return res.json(sketch);
};

const getShortenedSketchYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const sketch = await ShortenedSketch.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(sketch);
};

const createShortenedSketch = async (req, res) => {
    const { yearSubmitted, documentName, shortenedSketchUrl } = req.body;
    const user = res.locals.user;

    const sketch = await ShortenedSketch.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedSketchUrl: shortenedSketchUrl,
    });

    return res.json(sketch);
};

router.post("/getSketchYear", validateUser, validate, getSketchYear);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post("/createSketch", validateUser, validate, createSketch);
router.post(
    "/getShortenedSketchYear",
    validateUser,
    validate,
    getShortenedSketchYear
);
router.post(
    "/createShortenedSketch",
    validateUser,
    validate,
    createShortenedSketch
);

module.exports = router;
