import React, { useState } from "react";
import Axios from "axios";
import { async } from "@firebase/util";
import { storage } from "../firebase";
import {
    ref,
    uploadBytes,
    listAll,
    getDownloadURL,
    uploadString,
} from "firebase/storage";
import useSWR from "swr";

function programs() {
    const date = new Date();

    const {
        data: meData,
        error,
        isValidating,
    } = useSWR("http://localhost:3001/user/me");

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [yearSubmitted, setYearSubmitted] = useState(date.getFullYear());

    // Upload file to server
    // const formData = new FormData();
    // formData.append("file", pdfAttachment);

    // await Axios.post("http://localhost:3001/upload", formData, {
    //     headers: {
    // "Content-Type": "multipart/form-data",
    //     },
    // });

    const onChange = (e) => {
        // console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0]?.name);

        // return new Promise((resolve, reject) => {
        //     const reader = new FileReader();

        //     reader.onload = (e) => {
        //         resolve(e.target.result);
        //     };

        //     reader.onerror = (err) => {
        //         reject(err);
        //     };

        //     reader.readAsBinaryString(file);
        // });
    };

    const submitDocument = async () => {
        if (file) {
            const documentName = `Programs${meData.barangayName}${meData.districtName}${yearSubmitted}.pdf`;

            const formData = new FormData();
            formData.append("file", file);
            const data = {
                yearSubmitted: yearSubmitted,
            };

            await Axios.post(
                "http://localhost:3001/programs/getProgramsYear",
                data
            ).then(async (res) => {
                if (!res.data) {
                    setLoading(true);
                    await Axios.post(
                        "http://localhost:3001/programs/convertToPDF",
                        formData,
                        {
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        }
                    ).then(async (res) => {
                        // console.log(res.data.file);
                        // console.log(res.data.pdfBuf);
                        // console.log(res.data);4

                        // const blob = new Blob(res.data.pdfBuf.data, {
                        //     type: "application/pdf",
                        // });
                        const base64File = Buffer.from(
                            res.data.pdfBuf.data
                        ).toString("base64");

                        const covertToPDFRef = ref(
                            storage,
                            `submission/programs/${documentName}`
                        );

                        await uploadString(
                            covertToPDFRef,
                            base64File,
                            "base64",
                            {
                                contentType: "application/pdf",
                            }
                        );

                        const programsUrl = await getDownloadURL(
                            covertToPDFRef
                        );

                        const postData = {
                            yearSubmitted: yearSubmitted,
                            documentName: documentName,
                            programsUrl: programsUrl,
                        };

                        await Axios.post(
                            "http://localhost:3001/programs/createPrograms",
                            postData
                        );

                        alert("Document successfully submitted.");

                        setLoading(false);

                        // await uploadBytes(covertToPDFRef, fileBuffer);
                        // const programsUrl = await getDownloadURL(covertToPDFRef);
                    });
                } else {
                    alert(
                        "You have already submitted a document from your chosen year."
                    );
                }
            });
        } else {
            alert("Please fill in all the forms");
        }
    };

    return (
        <div className="flex flex-col w-full max-w-5xl">
            <div className="p-8">
                <h2 className="mb-8 text-xl font-medium">Programs</h2>
                <div className="flex flex-col">
                    <p className="mb-2 text-sm text-gray-700">
                        Year of submission:
                    </p>
                    <input
                        value={yearSubmitted}
                        placeholder="Year"
                        onChange={(e) => setYearSubmitted(e.target.value)}
                        type="number"
                        className="w-20 px-2 py-1 mb-4 text-center border restoreNumberArrows focus:outline-none"
                    />
                    <p className="mb-2 text-sm text-gray-700">Select file:</p>
                    <input
                        onChange={onChange}
                        className="w-full max-w-sm border"
                        type="file"
                        name="file"
                        id=""
                    />

                    <button
                        onClick={submitDocument}
                        className="px-3 py-2 mt-8 mb-4 text-white bg-blue-500 rounded-sm w-28 "
                    >
                        {!loading ? "Submit" : "Processing..."}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default programs;
