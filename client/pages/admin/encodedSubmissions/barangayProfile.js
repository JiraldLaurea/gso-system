import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Axios from "axios";
import fileDownload from "js-file-download";
import { Document, Page } from "react-pdf";
import { getStorage, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import useSWR from "swr";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

function barangayProfile() {
    const router = useRouter();
    const [yearSubmitted, setYearSubmitted] = useState(null);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValue, setDropdownMenuValue] = useState("Year");
    const [isViewed, setIsViewed] = useState(false);
    const [loadingDownload, setLoadingDownload] = useState(false);
    const [submissionBarangayProfileUrl, setSubmissionBarangayProfileUrl] =
        useState();
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const storage = getStorage();

    const {
        data: barangays,
        error: errorUserBarangays,
        isValidating: isValidatingUserBarangays,
    } = useSWR("http://localhost:3001/submission/getAllEncodedBarangayProfile");

    const editSelectedBarangay = async () => {
        const actionData = {
            action: "EditSubmission",
            barangayId: barangayId,
        };

        const data = {
            barangayId: barangayId,
            selectedBarangay: dropdownMenuValueBarangay,
            selectedDistrict: dropdownMenuValueDistrict,
        };

        await Axios.post(
            "http://localhost:3001/barangay/postSelectedBarangay",
            data
        );

        await Axios.put(
            "http://localhost:3001/submission/updateAction",
            actionData
        );

        router.push("/admin/encodedSubmissions/barangayProfile/template");
    };

    const download = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                selectedBarangay: dropdownMenuValueBarangay,
                selectedDistrict: dropdownMenuValueDistrict,
            };

            await Axios.post(
                "http://localhost:3001/barangay/postSelectedBarangay",
                data
            );

            await Axios.get(
                "http://localhost:3001/submission/getEncodedBarangayProfileUrl"
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionBarangayProfileUrl:
                            res.data.submissionBarangayProfileUrl,
                    },
                }).then((res) => {
                    console.log(res);
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const viewSubmission = async (e) => {
        const data = {
            barangayId: barangayId,
            selectedBarangay: dropdownMenuValueBarangay,
            selectedDistrict: dropdownMenuValueDistrict,
        };

        await Axios.post(
            "http://localhost:3001/barangay/postSelectedBarangay",
            data
        );

        await Axios.get(
            "http://localhost:3001/submission/getEncodedBarangayProfileUrl"
        ).then((res) => {
            console.log(res.data);
            // documentName = res.data.documentName;
            setSubmissionBarangayProfileUrl(
                res.data.submissionBarangayProfileUrl
            );
        });
    };

    return (
        <div className="flex flex-col w-full ">
            <div className="p-4 md:p-8">
                <div className="flex items-center mb-8">
                    <Icon
                        onClick={() => router.push("/admin/encodedSubmissions")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-medium ">
                        View barangay profile
                    </h2>
                </div>
                <div className="my-4">
                    <p className="mb-1 text-sm text-gray-600">
                        Select barangay and district
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center">
                        <div className="relative">
                            <ClickAwayListener
                                onClickAway={() => setIsDropdownMenuOpen(false)}
                                className="relative"
                            >
                                <div className="select-none w-fit">
                                    <div
                                        onClick={() =>
                                            setIsDropdownMenuOpen(
                                                !isDropdownMenuOpen
                                            )
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
                                                {barangays.map(
                                                    (barangay, index) => {
                                                        return (
                                                            <li
                                                                key={index}
                                                                onClick={() => {
                                                                    setDropdownMenuValueBarangay(
                                                                        barangay.barangayName
                                                                    );
                                                                    setDropdownMenuValueDistrict(
                                                                        barangay.districtName
                                                                    );
                                                                    setBarangayId(
                                                                        barangay.barangayId
                                                                    );
                                                                    setIsDropdownMenuOpen(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                <a
                                                                    href="#"
                                                                    className="block px-3 py-2 hover:bg-gray-100"
                                                                >
                                                                    {
                                                                        barangay.barangayName
                                                                    }
                                                                    &nbsp; -
                                                                    &nbsp;
                                                                    {
                                                                        barangay.districtName
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
                        {dropdownMenuValueBarangay != "Barangay" && (
                            <>
                                <button
                                    onClick={() => {
                                        setIsViewed(true);
                                        viewSubmission();
                                    }}
                                    className="px-4 py-2 my-4 md:my-0 md:ml-4 text-blue-600 border select-none"
                                >
                                    View submission
                                </button>

                                <button
                                    onClick={editSelectedBarangay}
                                    className="px-4 py-2 mb-4 md:mb-0 md:ml-4 text-blue-600 border select-none"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={download}
                                    className={`px-4 py-2 md:ml-4 text-white bg-blue-500 border border-blue-500 select-none ${
                                        loadingDownload && "cursor-not-allowed"
                                    }`}
                                >
                                    {!loadingDownload
                                        ? "Download"
                                        : "Processing..."}
                                </button>
                            </>
                        )}
                    </div>
                </div>
                {isViewed && (
                    <>
                        {submissionBarangayProfileUrl && (
                            <iframe
                                className="w-full h-[800px]"
                                src={`${submissionBarangayProfileUrl}`}
                            ></iframe>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default barangayProfile;
