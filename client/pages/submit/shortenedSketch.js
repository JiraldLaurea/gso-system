import Axios from "axios";
import {
    getDownloadURL,
    ref,
    uploadBytes,
    uploadString,
} from "firebase/storage";
import React, { useState, useRef } from "react";
import useSWR from "swr";
import { storage } from "../../firebase";

function shortenedSketch() {
    const date = new Date();

    const {
        data: meData,
        error,
        isValidating,
    } = useSWR("http://localhost:3001/user/me");

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [collectionSchedule, setCollectionSchedule] = useState("");
    const [yearSubmitted, setYearSubmitted] = useState(date.getFullYear());
    const inputFileRef = useRef();

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0]?.name);
    };

    const submitDocument = async () => {
        if (file && collectionSchedule != "") {
            const extension = fileName.substring(fileName.lastIndexOf(".") + 1);

            const formData = new FormData();
            formData.append("file", file);

            const data = {
                yearSubmitted: yearSubmitted,
            };

            await Axios.post(
                "http://localhost:3001/sketch/getShortenedSketchYear",
                data
            ).then(async (res) => {
                if (!res.data) {
                    setLoading(true);

                    if (extension == "doc" || extension == "docx") {
                        const documentName = `ShortenedSketch${meData.barangayName}${meData.districtName}${yearSubmitted}.pdf`;

                        await Axios.post(
                            "http://localhost:3001/sketch/convertToPDF",
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }
                        ).then(async (res) => {
                            const base64File = Buffer.from(
                                res.data.pdfBuf.data
                            ).toString("base64");

                            const covertToPDFRef = ref(
                                storage,
                                `shortenedSubmission/shortenedSketch/${documentName}`
                            );

                            await uploadString(
                                covertToPDFRef,
                                base64File,
                                "base64",
                                {
                                    contentType: "application/pdf",
                                }
                            );

                            const shortenedSketchUrl = await getDownloadURL(
                                covertToPDFRef
                            );

                            const postData = {
                                yearSubmitted: yearSubmitted,
                                collectionSchedule: collectionSchedule,
                                documentName: documentName,
                                shortenedSketchUrl: shortenedSketchUrl,
                            };

                            await Axios.post(
                                "http://localhost:3001/sketch/createShortenedSketch",
                                postData
                            );

                            alert("Document successfully submitted.");

                            setFile(null);
                            inputFileRef.current.value = null;
                            setLoading(false);
                        });
                    } else {
                        const documentName = `ShortenedSketch${meData.barangayName}${meData.districtName}${yearSubmitted}.${extension}`;

                        const fileRef = ref(
                            storage,
                            `shortenedSubmission/shortenedSketch/${documentName}`
                        );

                        await uploadBytes(fileRef, file);

                        const shortenedSketchUrl = await getDownloadURL(
                            fileRef
                        );

                        const postData = {
                            yearSubmitted: yearSubmitted,
                            collectionSchedule: collectionSchedule,
                            documentName: documentName,
                            shortenedSketchUrl: shortenedSketchUrl,
                        };

                        await Axios.post(
                            "http://localhost:3001/sketch/createShortenedSketch",
                            postData
                        );

                        alert("Document successfully submitted.");

                        setFile(null);
                        inputFileRef.current.value = null;
                        setLoading(false);
                    }
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
                <h2 className="mb-8 text-xl font-medium">Sketch</h2>
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
                    <p className="mb-2 text-sm text-gray-700">
                        Collection schedule:
                    </p>
                    <input
                        value={collectionSchedule}
                        placeholder="Collection schedule"
                        onChange={(e) => setCollectionSchedule(e.target.value)}
                        type="text"
                        className="w-full max-w-sm px-2 py-1 mb-4 border focus:outline-none"
                    />
                    <p className="mb-2 text-sm text-gray-700">Select file:</p>
                    <input
                        ref={inputFileRef}
                        onChange={onChange}
                        className="w-full max-w-sm border"
                        type="file"
                        name="file"
                        id=""
                    />

                    <button
                        onClick={() => {
                            if (!loading) {
                                submitDocument();
                            }
                        }}
                        className={`px-3 py-2 mt-8 mb-4 text-white bg-blue-500 rounded-sm w-28 ${
                            loading && "cursor-not-allowed"
                        } `}
                    >
                        {!loading ? "Submit" : "Processing..."}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default shortenedSketch;
