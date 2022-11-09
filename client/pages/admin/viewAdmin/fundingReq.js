import Axios from "axios";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR from "swr";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import fileDownload from "js-file-download";
import { useAuthDispatch } from "../../../context/auth";
import ViewButton from "../../../components/ViewButton";
import DownloadButton from "../../../components/DownloadButton";

function fundingReq() {
    const router = useRouter();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const [fundingReqUrl, setFundingReqUrl] = useState(null);
    const [sketch, setSketch] = useState([]);
    const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
    const [yearOfSubmission, setYearOfSubmission] =
        useState("Year of submission");
    const [barangayYears, setBarangayYears] = useState([]);
    const [documentExtension, setDocumentExtension] = useState("");
    const documentImageExtensions = ["png", "jpg", "jpeg"];
    const [loadingDownload, setLoadingDownload] = useState(false);
    const dispatch = useAuthDispatch();

    useEffect(() => {
        dispatch("CHANGE_TITLE", "Funding requirements");
        dispatch("HAS_BUTTON_TRUE");
        dispatch("CHANGE_PATH", "/admin/viewAdmin");
    }, []);

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/fundingReq/getAllUpdatedFundingReq"
    );

    const displayYearSubmitted = async () => {
        const data = {
            barangayId: barangayId,
        };

        await Axios.post(
            "http://localhost:3001/fundingReq/getAllUpdatedFundingReqYearSubmitted",
            data
        ).then((res) => {
            setBarangayYears(res.data);
        });
    };

    useEffect(() => {
        if (barangayId != null) {
            displayYearSubmitted();
        }
    }, [barangayId]);

    const view = async (e) => {
        const data = {
            barangayId: barangayId,
            yearSubmitted: yearOfSubmission,
        };

        await Axios.post(
            "http://localhost:3001/fundingReq/getUpdatedFundingReq",
            data
        ).then((res) => {
            setDocumentExtension(res.data.documentName.split(".").pop());
            setFundingReqUrl(res.data.fundingReqUrl);
        });
    };

    const download = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/fundingReq/getUpdatedFundingReq",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.fundingReqUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 md:p-8">
                <div>
                    <div className="flex flex-col md:flex-row md:items-end">
                        <div>
                            <p className="mb-1 text-sm text-gray-600">
                                Barangay and district
                            </p>
                            <div className="relative">
                                <ClickAwayListener
                                    onClickAway={() =>
                                        setIsDropdownMenuOpen(false)
                                    }
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
                                            <div className="max-h-60 overflow-y-auto absolute z-10 py-4 bg-white border border-t-0 top-[42px] w-56 dark:bg-gray-700 shadow-lg">
                                                <ul className="text-gray-700 bg-white">
                                                    {barangaysEncode.map(
                                                        (barangay, index) => {
                                                            return (
                                                                <li
                                                                    key={index}
                                                                    onClick={() => {
                                                                        setYearOfSubmission(
                                                                            "Year of submission"
                                                                        );
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
                        </div>
                        <div className="my-4 md:ml-4 md:my-0">
                            <p className="mb-1 text-sm text-gray-600">
                                Year of submission
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
                                            <div className="max-h-60 overflow-y-auto absolute z-10 py-4 bg-white border border-t-0 top-[42px] w-56 dark:bg-gray-700 shadow-lg">
                                                <ul className="text-gray-700 bg-white">
                                                    {barangayYears.map(
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

                        {dropdownMenuValueBarangay != "Barangay" &&
                            yearOfSubmission != "Year of submission" && (
                                <>
                                    <ViewButton view={view} />
                                    <DownloadButton
                                        download={download}
                                        loadingDownload={loadingDownload}
                                    />
                                </>
                            )}
                    </div>
                </div>
                <hr className="my-6" />
                <div>
                    {fundingReqUrl && (
                        <>
                            <p className="mb-2">Funding requirement: </p>
                            {documentImageExtensions.includes(
                                documentExtension
                            ) && (
                                <div className="w-full max-w-lg bg-black border ">
                                    <Image
                                        src={fundingReqUrl}
                                        alt="route image"
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="contain"
                                    />
                                </div>
                            )}
                            {documentExtension == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${fundingReqUrl}`}
                                ></iframe>
                            )}
                            {documentExtension == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${fundingReqUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default fundingReq;
