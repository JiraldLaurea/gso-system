import React, { useEffect, useState } from "react";
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
    const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
    const [isViewed, setIsViewed] = useState(false);
    const [loadingDownload, setLoadingDownload] = useState(false);
    const [submissionBarangayProfileUrl, setSubmissionBarangayProfileUrl] =
        useState();
    const [yearOfSubmission, setYearOfSubmission] =
        useState("Year of submission");

    const { data } = useSWR(
        "http://localhost:3001/shortenedSubmission/getAllUpdatedUserBarangayProfileYearSubmitted"
    );

    const download = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const dataYearOfSubmission = {
                yearOfSubmission: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/shortenedSubmission/getUpdatedUserBarangayProfileUrl",
                dataYearOfSubmission
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
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const viewSubmission = async (e) => {
        const dataYearOfSubmission = {
            yearOfSubmission: yearOfSubmission,
        };

        await Axios.post(
            "http://localhost:3001/shortenedSubmission/getUpdatedUserBarangayProfileUrl",
            dataYearOfSubmission
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
                        onClick={() => router.push("/user/updatedSubmissions/")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-semibold">
                        View barangay profile
                    </h2>
                </div>
                <div className="my-4">
                    <div className="flex flex-col md:flex-row md:items-end">
                        <div>
                            <p className="mb-1 text-sm text-gray-600">
                                Select year of submission
                            </p>
                            <div className="relative">
                                <ClickAwayListener
                                    onClickAway={() =>
                                        setIsDropdownMenuOpen2(false)
                                    }
                                    className="relative"
                                >
                                    <div className="select-none w-fit">
                                        <div
                                            onClick={() =>
                                                setIsDropdownMenuOpen2(
                                                    !isDropdownMenuOpen2
                                                )
                                            }
                                            className={`flex items-center justify-between w-56 px-3 py-2 border cursor-pointer`}
                                        >
                                            <p
                                                className={`${
                                                    yearOfSubmission ==
                                                        "Year of submission" &&
                                                    "text-gray-400"
                                                }`}
                                            >
                                                {yearOfSubmission}
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
                                        {isDropdownMenuOpen2 && (
                                            <div className="max-h-60 overflow-y-auto absolute z-10 py-4 bg-white border border-t-0 top-[42px] w-56 dark:bg-gray-700">
                                                <ul className="text-gray-700 bg-white">
                                                    {data.map(
                                                        (
                                                            barangayYear,
                                                            index
                                                        ) => {
                                                            return (
                                                                <li
                                                                    key={index}
                                                                    onClick={() => {
                                                                        setYearOfSubmission(
                                                                            barangayYear.yearSubmitted
                                                                        );
                                                                        setIsDropdownMenuOpen2(
                                                                            false
                                                                        );
                                                                    }}
                                                                >
                                                                    <a
                                                                        href="#"
                                                                        className="block px-3 py-2 hover:bg-gray-100"
                                                                    >
                                                                        {
                                                                            barangayYear.yearSubmitted
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
                        </div>

                        {yearOfSubmission != "Year of submission" && (
                            <>
                                <button
                                    onClick={() => {
                                        setIsViewed(true);
                                        viewSubmission();
                                    }}
                                    className="px-4 my-4 md:my-0 py-2 md:ml-4 h-[42px] text-blue-600 border select-none"
                                >
                                    View submission
                                </button>

                                <button
                                    onClick={download}
                                    className={`px-4 py-2 md:ml-4 h-[42px] text-white bg-blue-500 border border-blue-500 select-none ${
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
                                // src={`../submissions/${viewDocumentName}`}
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
