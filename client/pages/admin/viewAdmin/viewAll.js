import Axios from "axios";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR from "swr";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import DocViewer from "react-doc-viewer";
import fileDownload from "js-file-download";
import { useAuthDispatch } from "../../../context/auth";
import ViewButton from "../../../components/ViewButton";
import DownloadButton from "../../../components/DownloadButton";
import SubmissionDetail from "../../../components/SubmissionDetail";
import ImageWrapper from "../../../components/ImageWrapper";

function viewAll() {
    const router = useRouter();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const [submissionBarangayProfileUrl, setSubmissionBarangayProfileUrl] =
        useState();
    const [loadingDownload, setLoadingDownload] = useState(false);
    const [sketchUrl, setSketchUrl] = useState(null);
    const [programsUrl, setProgramsUrl] = useState(null);
    const [fundingReqUrl, setFundingReqUrl] = useState(null);
    const [junkshopUrl, setJunkshopUrl] = useState(null);
    const [businessPermitUrl, setBusinessPermitUrl] = useState(null);
    const [executiveOrderUrl, setExecutiveOrderUrl] = useState(null);
    const [barangayOrdinanceUrl, setBarangayOrdinanceUrl] = useState(null);
    const [dateIssuedBusinessPermit, setDateIssuedBusinessPermit] =
        useState(null);
    const [dateIssuedExecutiveOrder, setDateIssuedExecutiveOrder] =
        useState(null);
    const [junkshopName, setJunkshopName] = useState(null);

    const [moaUrl, setMoaUrl] = useState(null);
    const [sketch, setSketch] = useState([]);
    const [collectionSchedule, setCollectionSchedule] = useState(null);
    const [dateOfCreation, setDateOfCreation] = useState(null);
    const [barangayYears, setBarangayYears] = useState([]);
    const [yearOfSubmission, setYearOfSubmission] =
        useState("Year of submission");
    const [documentExtensionSketch, setDocumentExtensionSketch] = useState("");
    const [documentExtensionPrograms, setDocumentExtensionPrograms] =
        useState("");
    const [documentExtensionFundingReq, setDocumentExtensionFundingReq] =
        useState("");
    const [documentExtensionMoa, setDocumentExtensionMoa] = useState("");
    const [documentExtensionJunkshop, setDocumentExtensionJunkshop] =
        useState("");
    const [
        documentExtensionBusinessPermit,
        setDocumentExtensionBusinessPermit,
    ] = useState("");
    const [
        documentExtensionExecutiveOrder,
        setDocumentExtensionExecutiveOrder,
    ] = useState("");
    const [
        documentExtensionBarangayOrdinance,
        setDocumentExtensionBarangayOrdinance,
    ] = useState("");
    const documentImageExtensions = ["png", "jpg", "jpeg"];
    const dispatch = useAuthDispatch();

    useEffect(() => {
        dispatch("CHANGE_TITLE", "View all");
        dispatch("HAS_BUTTON_TRUE");
        dispatch("CHANGE_PATH", "/admin/viewAdmin");
    }, []);

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/sketch/getAllUpdatedSketch"
    );

    const displayYearSubmitted = async () => {
        const data = {
            barangayId: barangayId,
        };

        await Axios.post(
            "http://localhost:3001/shortenedSubmission/getAllSubmission",
            data
        ).then((res) => {
            setBarangayYears(res.data);
        });
    };

    const editSelectedBarangay = async () => {
        const data = {
            barangayId: barangayId,
            selectedBarangay: dropdownMenuValueBarangay,
            selectedDistrict: dropdownMenuValueDistrict,
            yearSubmitted: yearOfSubmission,
        };

        const actionData = {
            action: "EditSubmission",
            barangayId: barangayId,
        };

        await Axios.post(
            "http://localhost:3001/barangay/postSelectedBarangayWithYearSubmitted",
            data
        );

        await Axios.put(
            "http://localhost:3001/submission/updateAction",
            actionData
        );

        await Axios.post(
            "http://localhost:3001/shortenedSubmission/getSubmissionWithYearSubmitted",
            { barangayId: barangayId, yearSubmitted: yearOfSubmission }
        ).then((res) => {
            const isShortened = res.data.isShortened;
            if (isShortened) {
                router.push("/admin/viewAdmin/viewAll/template");
            } else {
                router.push("/admin/viewAdmin/viewAll/templateEncoded");
            }
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
            "http://localhost:3001/shortenedSubmission/getUpdatedBarangayProfileUrl2",
            data
        ).then((res) => {
            if (res.data) {
                setSubmissionBarangayProfileUrl(
                    res.data.submissionBarangayProfileUrl
                );
            } else {
                setSubmissionBarangayProfileUrl(null);
            }
        });

        await Axios.post(
            "http://localhost:3001/sketch/getUpdatedSketch",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionSketch(
                    res.data.documentName.split(".").pop()
                );
                setSketchUrl(res.data.sketchUrl);
                setCollectionSchedule(res.data.collectionSchedule);
            } else {
                setDocumentExtensionSketch(null);
                setSketchUrl(null);
                setCollectionSchedule(null);
            }
        });

        await Axios.post(
            "http://localhost:3001/programs/getUpdatedPrograms",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionPrograms(
                    res.data.documentName.split(".").pop()
                );
                setProgramsUrl(res.data.programsUrl);
            } else {
                setDocumentExtensionPrograms(null);
                setProgramsUrl(null);
            }
        });

        await Axios.post(
            "http://localhost:3001/fundingReq/getUpdatedFundingReq",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionFundingReq(
                    res.data.documentName.split(".").pop()
                );
                setFundingReqUrl(res.data.fundingReqUrl);
            } else {
                setDocumentExtensionFundingReq(null);
                setFundingReqUrl(null);
            }
        });

        await Axios.post("http://localhost:3001/moa/getUpdatedMoa", data).then(
            (res) => {
                if (res.data) {
                    setDocumentExtensionMoa(
                        res.data.documentName.split(".").pop()
                    );
                    setDateOfCreation(res.data.dateOfCreation);
                    setMoaUrl(res.data.memorandumOfAgreementUrl);
                } else {
                    setDocumentExtensionMoa(null);
                    setDateOfCreation(null);
                    setMoaUrl(null);
                }
            }
        );

        await Axios.post(
            "http://localhost:3001/junkshop/getUpdatedJunkshop",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionJunkshop(
                    res.data.documentName.split(".").pop()
                );
                setJunkshopName(res.data.junkshopName);
                setJunkshopUrl(res.data.junkshopUrl);
            } else {
                setDocumentExtensionJunkshop(null);
                setJunkshopName(null);
                setJunkshopUrl(null);
            }
        });

        await Axios.post(
            "http://localhost:3001/businessPermit/getUpdatedBusinessPermit",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionBusinessPermit(
                    res.data.documentName.split(".").pop()
                );
                setDateIssuedBusinessPermit(res.data.dateIssued);
                setBusinessPermitUrl(res.data.businessPermitUrl);
            } else {
                setDocumentExtensionBusinessPermit(null);
                setDateIssuedBusinessPermit(null);
                setBusinessPermitUrl(null);
            }
        });

        await Axios.post(
            "http://localhost:3001/executiveOrder/getUpdatedExecutiveOrder",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionExecutiveOrder(
                    res.data.documentName.split(".").pop()
                );
                setDateIssuedExecutiveOrder(res.data.dateIssued);
                setExecutiveOrderUrl(res.data.executiveOrderUrl);
            } else {
                setDocumentExtensionExecutiveOrder(null);
                setDateIssuedExecutiveOrder(null);
                setExecutiveOrderUrl(null);
            }
        });

        await Axios.post(
            "http://localhost:3001/barangayOrdinance/getUpdatedBarangayOrdinance",
            data
        ).then((res) => {
            if (res.data) {
                setDocumentExtensionBarangayOrdinance(
                    res.data.documentName.split(".").pop()
                );
                setBarangayOrdinanceUrl(res.data.barangayOrdinanceUrl);
            } else {
                setDocumentExtensionBarangayOrdinance(null);
                setBarangayOrdinanceUrl(null);
            }
        });
    };

    const downloadBarangayProfile = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                selectedBarangay: dropdownMenuValueBarangay,
                selectedDistrict: dropdownMenuValueDistrict,
            };

            const dataYearOfSubmission = {
                yearOfSubmission: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/barangay/postSelectedBarangay",
                data
            );

            await Axios.post(
                "http://localhost:3001/shortenedSubmission/getUpdatedBarangayProfileUrl",
                dataYearOfSubmission
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.submissionBarangayProfileUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadSketch = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const dataYearOfSubmission = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/sketch/getUpdatedSketch",
                dataYearOfSubmission
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.sketchUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadPrograms = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/programs/getUpdatedPrograms",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.programsUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadFundingReq = async () => {
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

    const downloadMoa = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/moa/getUpdatedMoa",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.memorandumOfAgreementUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadJunkshop = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/junkshop/getUpdatedJunkshop",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.junkshopUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadBusinessPermit = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/businessPermit/getUpdatedBusinessPermit",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.businessPermitUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadExecutiveOrder = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/executiveOrder/getUpdatedExecutiveOrder",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.executiveOrderUrl,
                    },
                }).then((res) => {
                    fileDownload(res.data, documentName);
                    setLoadingDownload(false);
                });
            });
        }
    };

    const downloadBarangayOrdinance = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const data = {
                barangayId: barangayId,
                yearSubmitted: yearOfSubmission,
            };

            await Axios.post(
                "http://localhost:3001/barangayOrdinance/getUpdatedBarangayOrdinance",
                data
            ).then((res) => {
                const documentName = res.data.documentName;
                Axios({
                    url: "http://localhost:3001/download",
                    method: "POST",
                    responseType: "blob",
                    data: {
                        submissionUrl: res.data.barangayOrdinanceUrl,
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
                <div className="flex flex-col md:flex-row md:items-end">
                    <div>
                        <p className="mb-1 text-sm text-gray-600">
                            Barangay and district
                        </p>
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
                                                    (barangayYear, index) => {
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
                                {/* <DownloadButton
                                    download={download}
                                    loadingDownload={loadingDownload}
                                /> */}
                            </>
                        )}
                </div>
                <div className="mt-4">
                    {submissionBarangayProfileUrl && (
                        <>
                            <SubmissionDetail
                                title="Barangay profile"
                                editSelectedBarangay={editSelectedBarangay}
                                isBarangayProfile
                                firstChild
                                download={downloadBarangayProfile}
                                loadingDownload={loadingDownload}
                            />
                            <iframe
                                className="w-full h-[800px]"
                                // src={`../submissions/${viewDocumentName}`}
                                src={`${submissionBarangayProfileUrl}`}
                            ></iframe>
                        </>
                    )}

                    {sketchUrl && (
                        <>
                            <SubmissionDetail
                                title="Route sketch"
                                detailTitle="Collection schedule"
                                detail={collectionSchedule}
                                hasDetail
                                download={downloadSketch}
                                loadingDownload={loadingDownload}
                            />

                            {documentImageExtensions.includes(
                                documentExtensionSketch
                            ) && <ImageWrapper url={sketchUrl} />}
                            {documentExtensionSketch == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    // src={`../submissions/${viewDocumentName}`}
                                    src={`${sketchUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionSketch == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${sketchUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}
                    {programsUrl && (
                        <>
                            <SubmissionDetail
                                title="Programs"
                                download={downloadPrograms}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionPrograms
                            ) && <ImageWrapper url={programsUrl} />}
                            {documentExtensionPrograms == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${programsUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionPrograms == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${programsUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}
                    {fundingReqUrl && (
                        <>
                            <SubmissionDetail
                                title="Funding requirement"
                                download={downloadFundingReq}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionFundingReq
                            ) && <ImageWrapper url={fundingReqUrl} />}
                            {documentExtensionFundingReq == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${fundingReqUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionFundingReq == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${fundingReqUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}

                    {moaUrl && (
                        <>
                            <SubmissionDetail
                                title="Memorandum of agreement"
                                detailTitle="Date of creation"
                                detail={dateOfCreation}
                                hasDetail
                                download={downloadMoa}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionMoa
                            ) && <ImageWrapper url={moaUrl} />}
                            {documentExtensionMoa == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${moaUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionMoa == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${moaUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}

                    {junkshopUrl && (
                        <>
                            <SubmissionDetail
                                title="Junkshop"
                                detailTitle="Name of junkshop"
                                detail={junkshopName}
                                hasDetail
                                download={downloadJunkshop}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionJunkshop
                            ) && <ImageWrapper url={junkshopUrl} />}
                            {documentExtensionJunkshop == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${junkshopUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionJunkshop == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${junkshopUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}

                    {businessPermitUrl && (
                        <>
                            <SubmissionDetail
                                title="Business permit"
                                detailTitle="Date issued"
                                detail={dateIssuedBusinessPermit}
                                hasDetail
                                download={downloadBusinessPermit}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionBusinessPermit
                            ) && <ImageWrapper url={businessPermitUrl} />}
                            {documentExtensionBusinessPermit == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${businessPermitUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionBusinessPermit == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${businessPermitUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}

                    {executiveOrderUrl && (
                        <>
                            <SubmissionDetail
                                title="Executive order"
                                detailTitle="Date issued"
                                detail={dateIssuedExecutiveOrder}
                                hasDetail
                                download={downloadExecutiveOrder}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionExecutiveOrder
                            ) && <ImageWrapper url={executiveOrderUrl} />}
                            {documentExtensionExecutiveOrder == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${executiveOrderUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionExecutiveOrder == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${executiveOrderUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}

                    {barangayOrdinanceUrl && (
                        <>
                            <SubmissionDetail
                                title="Barangay ordinance"
                                download={downloadBarangayOrdinance}
                                loadingDownload={loadingDownload}
                            />
                            {documentImageExtensions.includes(
                                documentExtensionBarangayOrdinance
                            ) && (
                                <div className="relative w-full bg-black border h-96 ">
                                    <ImageWrapper url={barangayOrdinanceUrl} />
                                </div>
                            )}
                            {documentExtensionBarangayOrdinance == "pdf" && (
                                <iframe
                                    className="w-full h-[800px]"
                                    src={`${barangayOrdinanceUrl}`}
                                ></iframe>
                            )}
                            {documentExtensionBarangayOrdinance == "docx" && (
                                <iframe
                                    className="w-full h-[800px] border-r border-b hover:border-r-blue-500 hover:border-b-blue-500"
                                    src={`https://view.officeapps.live.com/op/embed.aspx?src=${barangayOrdinanceUrl}`}
                                ></iframe>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default viewAll;
