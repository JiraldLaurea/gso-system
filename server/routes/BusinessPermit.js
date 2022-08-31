const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { BusinessPermit } = require("../models");
const { ShortenedBusinessPermit } = require("../models");
const { Submission } = require("../models");
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

const getBusinessPermitYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const businessPermit = await BusinessPermit.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(businessPermit);
};

const createBusinessPermit = async (req, res) => {
    const { yearSubmitted, dateIssued, documentName, businessPermitUrl } =
        req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const businessPermit = await BusinessPermit.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        dateIssued: dateIssued,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        businessPermitUrl: businessPermitUrl,
    });

    await Submission.findOne({
        where: {
            barangayId: selectedBarangay.barangayId,
        },
        order: [["createdAt", "DESC"]],
    }).then((data) => {
        data.update({
            businessPermit: true,
            businessPermitDate: dateIssued,
        });
    });

    return res.json(businessPermit);
};

const getShortenedBusinessPermitYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const businessPermit = await ShortenedBusinessPermit.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(businessPermit);
};

const createShortenedBusinessPermit = async (req, res) => {
    const { yearSubmitted, documentName, shortenedBusinessPermitUrl } =
        req.body;
    const user = res.locals.user;

    const businessPermit = await ShortenedBusinessPermit.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedBusinessPermitUrl: shortenedBusinessPermitUrl,
    });

    return res.json(businessPermit);
};

router.post(
    "/getBusinessPermitYear",
    validateUser,
    validate,
    getBusinessPermitYear
);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post(
    "/createBusinessPermit",
    validateUser,
    validate,
    createBusinessPermit
);
router.post(
    "/getShortenedBusinessPermitYear",
    validateUser,
    validate,
    getShortenedBusinessPermitYear
);
router.post(
    "/createShortenedBusinessPermit",
    validateUser,
    validate,
    createShortenedBusinessPermit
);

module.exports = router;
