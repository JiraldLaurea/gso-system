const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Programs } = require("../models");
const { ShortenedPrograms } = require("../models");
const { Submission } = require("../models");
const { ActionSelectedBarangay } = require("../models");
const path = require("path");
const fs = require("fs").promises;

const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

const convertToPDF = async (req, res) => {
    const ext = ".pdf";
    const file = req.files.file;
    // const { documentName } = req.body;
    // console.log(documentName);
    const user = res.locals.user;
    const fileExtension = path.extname(req.files.file.name);

    // console.log(fileExtension);

    // console.log(file);

    // if (req.files === null) {
    //     return res.status(400).json({ msg: "No file uploaded" });
    // }

    // file.mv(`../client/public/submissions/${file.name}`, (err) => {
    //     if (err) {
    //         console.error(err);
    //         return res.status(500).send(err);
    //     }

    //     res.json({
    //         fileName: file.name,
    //         filePath: `/submissions/${file.name}`,
    //     });
    // });

    // const inputPath = path.join(
    //     __dirname,
    //     `../client/public/submissions/${file.name}`
    // );
    // const outputPath = path.join(
    //     __dirname,
    //     `../client/public/submissions/${path.parse(file.name).name}${ext}`
    // );

    // // Read file
    // const docxBuf = await fs.readFile(inputPath);

    // Convert it to pdf format with undefined filter (see Libreoffice docs about filter)

    let pdfBuf = await libre.convertAsync(file.data, ext, undefined);

    return res.json({
        file: `${path.parse(file.name).name}${ext}`,
        pdfBuf: pdfBuf,
    });

    // await fs.writeFile(outputPath, pdfBuf);
};

const getProgramsYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const programs = await Programs.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(programs);
};

const createPrograms = async (req, res) => {
    const { yearSubmitted, documentName, programsUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const programs = await Programs.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        programsUrl: programsUrl,
    });

    await Submission.findOne({
        where: {
            barangayId: selectedBarangay.barangayId,
        },
        order: [["createdAt", "DESC"]],
    }).then((data) => {
        data.update({
            programsDoc: true,
        });
    });

    return res.json(programs);
};

const getShortenedProgramsYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const programs = await ShortenedPrograms.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(programs);
};

const createShortenedPrograms = async (req, res) => {
    const { yearSubmitted, documentName, shortenedProgramsUrl } = req.body;
    const user = res.locals.user;

    const programs = await ShortenedPrograms.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedProgramsUrl: shortenedProgramsUrl,
    });

    return res.json(programs);
};

router.post("/getProgramsYear", validateUser, validate, getProgramsYear);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post("/createPrograms", validateUser, validate, createPrograms);
router.post(
    "/getShortenedProgramsYear",
    validateUser,
    validate,
    getShortenedProgramsYear
);
router.post(
    "/createShortenedPrograms",
    validateUser,
    validate,
    createShortenedPrograms
);

module.exports = router;
