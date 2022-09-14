const express = require("express");
const { validate } = require("../middleware/auth");
const { validateUser } = require("../middleware/user");
const router = express.Router();
const { Barangay, Sequelize } = require("../models");
const { User } = require("../models");
const { ActionSelectedBarangay } = require("../models");

const Op = Sequelize.Op;

router.get("/", async (req, res) => {
    const barangays = await Barangay.findAll();
    res.json(barangays);
});

router.get("/user", async (req, res) => {
    const barangayUsers = await User.findAll({
        where: {
            barangayId: null,
        },
    });

    res.json(barangayUsers);
});

router.post("/barangay", async (req, res) => {
    const { userId } = req.body;
    const barangay = await Barangay.findOne({
        where: {
            userId: userId,
        },
    });
    res.json(barangay);
});

router.post("/", async (req, res) => {
    const { barangayName, districtName } = req.body;

    const barangay = await Barangay.create({
        barangayName: barangayName,
        districtName: districtName,
    });

    // await User.update(
    //     { barangayId: barangay.id, barangayName: barangayName },
    //     { where: { id: userId } }
    // );

    res.json(barangay);
});

const updateBarangayTotalPopulation = async (req, res) => {
    const { populationCount } = req.body;
    const user = res.locals.user;

    await Barangay.update(
        { populationCount: populationCount },
        { where: { userId: user.id } }
    );
    res.json("SUCCESS");
};

const getAllBarangayEncode = async (req, res) => {
    const barangays = await Barangay.findAll({
        where: {
            userId: {
                [Op.ne]: null,
            },
        },
        order: [["barangayName", "ASC"]],
    });
    return res.json(barangays);
};

const getSelectedBarangay = async (req, res) => {
    const user = res.locals.user;

    const selectedBarangay = await ActionSelectedBarangay.findOne({
        where: {
            userId: user.id,
        },
    });
    return res.json(selectedBarangay);
};

const postSelectedBarangay = async (req, res) => {
    const user = res.locals.user;
    const { barangayId, selectedBarangay, selectedDistrict } = req.body;

    const actionSelectedBarangay = await ActionSelectedBarangay.findOne({
        where: { userId: user.id },
    });

    if (!actionSelectedBarangay) {
        await ActionSelectedBarangay.create({
            userId: user.id,
            barangayId: barangayId,
            selectedBarangay: selectedBarangay,
            selectedDistrict: selectedDistrict,
        });
    } else {
        await ActionSelectedBarangay.update(
            {
                barangayId: barangayId,
                selectedBarangay: selectedBarangay,
                selectedDistrict: selectedDistrict,
            },
            { where: { userId: user.id } }
        );
    }

    return res.json("SUCCESS");
};

router.get(
    "/getAllBarangayEncode",
    validateUser,
    validate,
    getAllBarangayEncode
);
router.put("/update", validateUser, validate, updateBarangayTotalPopulation);
router.get("/getSelectedBarangay", validateUser, validate, getSelectedBarangay);
router.post(
    "/postSelectedBarangay",
    validateUser,
    validate,
    postSelectedBarangay
);

module.exports = router;
