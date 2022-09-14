import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import { async } from "@firebase/util";
import { storage } from "../../firebase";
import {
    ref,
    uploadBytes,
    listAll,
    getDownloadURL,
    uploadString,
} from "firebase/storage";
import useSWR from "swr";
import ClickAwayListener from "react-click-away-listener";

function encodeJunkshop() {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const date = new Date();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [junkshopName, setJunkshopName] = useState("");
    const [yearSubmitted, setYearSubmitted] = useState(date.getFullYear());
    const inputFileRef = useRef();

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/barangay/getAllBarangayEncode"
    );

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0]?.name);
    };

    const submitDocument = async () => {
        if (
            file &&
            dropdownMenuValueBarangay != "Barangay" &&
            junkshopName != ""
        ) {
            const selectedBarangayData = {
                barangayId: barangayId,
                selectedBarangay: dropdownMenuValueBarangay,
                selectedDistrict: dropdownMenuValueDistrict,
            };

            await Axios.post(
                "http://localhost:3001/barangay/postSelectedBarangay",
                selectedBarangayData
            );

            const response = await Axios.get(
                "http://localhost:3001/barangay/getSelectedBarangay"
            ).then((res) => {
                return res.data;
            });

            const extension = fileName.substring(fileName.lastIndexOf(".") + 1);

            const formData = new FormData();
            formData.append("file", file);

            const data = {
                yearSubmitted: yearSubmitted,
            };

            await Axios.post(
                "http://localhost:3001/junkshop/getJunkshopYear",
                data
            ).then(async (res) => {
                if (!res.data) {
                    setLoading(true);

                    if (extension == "doc" || extension == "docx") {
                        const documentName = `Junkshop${response.selectedBarangay}${response.selectedDistrict}${yearSubmitted}.pdf`;

                        await Axios.post(
                            "http://localhost:3001/junkshop/convertToPDF",
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
                                `submission/junkshop/${documentName}`
                            );

                            await uploadString(
                                covertToPDFRef,
                                base64File,
                                "base64",
                                {
                                    contentType: "application/pdf",
                                }
                            );

                            const junkshopUrl = await getDownloadURL(
                                covertToPDFRef
                            );

                            const postData = {
                                yearSubmitted: yearSubmitted,
                                junkshopName: junkshopName,
                                documentName: documentName,
                                junkshopUrl: junkshopUrl,
                            };

                            await Axios.post(
                                "http://localhost:3001/junkshop/createJunkshop",
                                postData
                            );

                            alert("Document successfully submitted.");

                            setFile(null);
                            inputFileRef.current.value = null;
                            setLoading(false);
                        });
                    } else {
                        const documentName = `Junkshop${response.selectedBarangay}${response.selectedDistrict}${yearSubmitted}.${extension}`;

                        const fileRef = ref(
                            storage,
                            `submission/junkshop/${documentName}`
                        );

                        await uploadBytes(fileRef, file);
                        const junkshopUrl = await getDownloadURL(fileRef);

                        const postData = {
                            yearSubmitted: yearSubmitted,
                            junkshopName: junkshopName,
                            documentName: documentName,
                            junkshopUrl: junkshopUrl,
                        };

                        await Axios.post(
                            "http://localhost:3001/junkshop/createJunkshop",
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
                <h2 className="mb-8 text-xl font-medium">Junkshop</h2>
                <p className="mb-1 text-sm text-gray-600">
                    Select barangay and district
                </p>
                <div className="relative mb-4">
                    <ClickAwayListener
                        onClickAway={() => setIsDropdownMenuOpen(false)}
                        className="relative"
                    >
                        <div className="select-none w-fit">
                            <div
                                onClick={() =>
                                    setIsDropdownMenuOpen(!isDropdownMenuOpen)
                                }
                                className={`flex items-center justify-between w-56 px-3 py-2 border cursor-pointer`}
                            >
                                <p
                                    className={`${
                                        dropdownMenuValueBarangay ==
                                            "Barangay" &&
                                        dropdownMenuValueDistrict ==
                                            "District" &&
                                        "text-gray-400"
                                    }`}
                                >
                                    {dropdownMenuValueBarangay}
                                    &nbsp;-&nbsp;
                                    {dropdownMenuValueDistrict}
                                </p>
                                <svg
                                    className="w-4 h-4 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </div>
                            {isDropdownMenuOpen && (
                                <div className="max-h-60 overflow-y-auto absolute z-10 py-4 bg-white border border-t-0 top-[42px] w-56 dark:bg-gray-700">
                                    <ul className="text-gray-700 bg-white">
                                        {barangaysEncode.map(
                                            (barangayEncode, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        onClick={() => {
                                                            setDropdownMenuValueBarangay(
                                                                barangayEncode.barangayName
                                                            );
                                                            setDropdownMenuValueDistrict(
                                                                barangayEncode.districtName
                                                            );
                                                            setBarangayId(
                                                                barangayEncode.id
                                                            );
                                                            setIsDropdownMenuOpen(
                                                                false
                                                            );

                                                            // setIsDropdownMenuOpen(
                                                            //     !isDropdownMenuOpen
                                                            // );
                                                        }}
                                                    >
                                                        <a
                                                            href="#"
                                                            className="block px-3 py-2 hover:bg-gray-100"
                                                        >
                                                            {
                                                                barangayEncode.barangayName
                                                            }
                                                            &nbsp; - &nbsp;
                                                            {
                                                                barangayEncode.districtName
                                                            }
                                                        </a>
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </ClickAwayListener>
                </div>
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
                        Name of junkshop:
                    </p>
                    <input
                        value={junkshopName}
                        placeholder="Name of junkshop"
                        onChange={(e) => setJunkshopName(e.target.value)}
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
                        {!loading ? "Encode" : "Processing..."}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default encodeJunkshop;