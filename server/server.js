const express = require("express");
const multer = require("multer");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const https = require("https");

const path = require("path");
const fs = require("fs").promises;

dotenv.config();

// Routers
const userRouter = require("./routes/User");
const barangayRouter = require("./routes/Barangay");
const submissionRouter = require("./routes/Submission");
const announcementRouter = require("./routes/Announcement");
const programsRouter = require("./routes/Programs");
const shortenedSubmissionRouter = require("./routes/ShortenedSubmission");

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: process.env.ORIGIN,
        optionsSuccessStatus: 200,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const { Programs } = require("./models/Programs");

// Upload Endpoint
app.post("/upload", (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;

    file.mv(`../client/public/submissions/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({
            fileName: file.name,
            filePath: `/submissions/${file.name}`,
        });
    });
});

// Download Endpoint
app.post("/download", (req, res) => {
    const { submissionBarangayProfileUrl } = req.body;
    // res.download(`../client/public/submissions/${fileName}`);
    // console.log("SUBMISSION URL", submissionBarangayProfileUrl);
    https.get(submissionBarangayProfileUrl, function (file) {
        file.pipe(res);
    });
    // res.redirect(`${submissionBarangayProfileUrl}`);
});

// Convert doc/docx to PDF

app.use("/user", userRouter);
app.use("/barangay", barangayRouter);
app.use("/submission", submissionRouter);
app.use("/announcement", announcementRouter);
app.use("/programs", programsRouter);
app.use("/shortenedSubmission", shortenedSubmissionRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
