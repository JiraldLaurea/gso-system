const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { FundingReq } = require("../models");
const { ShortenedFundingReq } = require("../models");
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

const getFundingReqYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const fundingReq = await FundingReq.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: selectedBarangay.barangayId,
        },
    });

    return res.json(fundingReq);
};

const createFundingReq = async (req, res) => {
    const { yearSubmitted, documentName, fundingReqUrl } = req.body;
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    const fundingReq = await FundingReq.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: selectedBarangay.barangayId,
        barangayName: selectedBarangay.selectedBarangay,
        districtName: selectedBarangay.selectedDistrict,
        fundingReqUrl: fundingReqUrl,
    });

    return res.json(fundingReq);
};

const getShortenedFundingReqYear = async (req, res) => {
    const { yearSubmitted } = req.body;
    const user = res.locals.user;

    const fundingReq = await ShortenedFundingReq.findOne({
        where: {
            yearSubmitted: yearSubmitted,
            barangayId: user.barangayId,
        },
    });

    return res.json(fundingReq);
};

const createShortenedFundingReq = async (req, res) => {
    const { yearSubmitted, documentName, shortenedFundingReqUrl } = req.body;
    const user = res.locals.user;

    const fundingReq = await ShortenedFundingReq.create({
        documentName: documentName,
        yearSubmitted: yearSubmitted,
        userId: user.id,
        barangayId: user.barangayId,
        barangayName: user.barangayName,
        districtName: user.districtName,
        shortenedFundingReqUrl: shortenedFundingReqUrl,
    });

    return res.json(fundingReq);
};

router.post("/getFundingReqYear", validateUser, validate, getFundingReqYear);
router.post("/convertToPDF", validateUser, validate, convertToPDF);
router.post("/createFundingReq", validateUser, validate, createFundingReq);
router.post(
    "/getShortenedFundingReqYear",
    validateUser,
    validate,
    getShortenedFundingReqYear
);
router.post(
    "/createShortenedFundingReq",
    validateUser,
    validate,
    createShortenedFundingReq
);

module.exports = router;
