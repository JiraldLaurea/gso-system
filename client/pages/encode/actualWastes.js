import { Icon } from "@iconify/react";
import Axios from "axios";
import {
    getDownloadURL,
    ref,
    uploadBytes,
    uploadString,
} from "firebase/storage";
import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR, { mutate } from "swr";
import { storage } from "../../firebase";
import { useRouter } from "next/router";
import RecyclableWastesInput from "../../components/RecyclableWastesInput";
import moment from "moment";
import { useAuthDispatch } from "../../context/auth";

function actualWastes() {
    const router = useRouter();
    const [barangayYears, setBarangayYears] = useState([]);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [isDropdownMenuOpen2, setIsDropdownMenuOpen2] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const date = new Date();
    const [actualWastes, setActualWastes] = useState(0);
    const [populationCount, setPopulationCount] = useState(0);
    const [yearOfSubmission, setYearOfSubmission] =
        useState("Year of submission");

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [loading, setLoading] = useState(false);
    const [yearSubmitted, setYearSubmitted] = useState(date.getFullYear());
    const inputFileRef = useRef();
    const [dateSubmitted, setDateSubmitted] = useState(
        moment().format("yyyy-MM")
    );
    const dispatch = useAuthDispatch();

    useEffect(() => {
        dispatch("HAS_BUTTON_TRUE");
        dispatch("CHANGE_TITLE", "Actual wastes");
        dispatch("CHANGE_PATH", "/encode");
    }, []);

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/barangay/getAllBarangayRecyclableWastes"
    );

    const { data: barangays } = useSWR(
        "http://localhost:3001/shortenedSubmission/getAllUpdatedBarangayProfile"
    );

    const displayYearSubmitted = async () => {
        const data = {
            barangayId: barangayId,
        };

        await Axios.post(
            "http://localhost:3001/shortenedSubmission/getAllSubmissionYearSubmitted",
            data
        ).then((res) => {
            setBarangayYears(res.data.filteredYearSubmitted);
        });
    };

    const displayPopulationCount = async () => {
        const data = {
            barangayId: barangayId,
            yearSubmitted: yearOfSubmission,
        };

        await Axios.post(
            "http://localhost:3001/shortenedSubmission/getPopulationCount",
            data
        ).then((res) => {
            setPopulationCount(res.data.populationCount);
        });
    };

    useEffect(() => {
        if (barangayId != null) {
            displayYearSubmitted();
        }
    }, [barangayId]);

    useEffect(() => {
        if (barangayId != null && yearOfSubmission != "Year of submission") {
            displayPopulationCount();
        }
    }, [yearOfSubmission]);

    const submit = async () => {
        const isEncoded = await Axios.post(
            "http://localhost:3001/actualWastes/getSubmittedActualWastes",
            { barangayId: barangayId, yearSubmitted: yearOfSubmission }
        ).then(async (res) => {
            return res.data;
        });

        if (isEncoded.length > 0) {
            return alert(
                "You have already encoded a document from your chosen date."
            );
        }

        setLoading(true);
        if (dropdownMenuValueBarangay != "Barangay") {
            const data = {
                yearSubmitted: yearOfSubmission,
                barangayId: barangayId,
                barangayName: dropdownMenuValueBarangay,
                districtName: dropdownMenuValueDistrict,
                actualWastes: actualWastes,
                populationCount: populationCount,
            };

            await Axios.post(
                "http://localhost:3001/actualWastes/createActualWastes",
                data
            ).then(() => {
                alert("Actual wastes report successfully submitted.");
                setLoading(false);
                displayYearSubmitted();
            });
        } else {
            alert("Please fill in all the forms");
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 md:p-8">
                <div className="flex flex-col mb-4 md:flex-row md:items-end">
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
                                                {barangays.map(
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
                                                                        barangayYear
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
                                                                        barangayYear
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
                </div>

                {/* <p className="mb-2 text-sm text-gray-700">Year of submission</p>
                <input
                    value={yearSubmitted}
                    placeholder="Year"
                    onChange={(e) => setYearSubmitted(e.target.value)}
                    type="number"
                    className="w-20 px-2 py-1 mb-4 text-center border restoreNumberArrows focus:outline-none"
                /> */}

                <p className="mb-1 text-sm text-gray-600">
                    Actual wastes &#40;kg&#41;
                </p>

                <div className="flex mb-3 removeInputNumberArrows">
                    <input
                        value={actualWastes}
                        onChange={(e) => setActualWastes(e.target.value)}
                        type="number"
                        className={`appearance-none px-2 h-[36px] w-[176.4px] border focus:outline-none text-left`}
                        placeholder="Actual wastes"
                    />
                </div>

                <button
                    onClick={() => {
                        if (!loading) {
                            submit();
                        }
                    }}
                    className={`px-3 hover:bg-blue-600 flex items-center justify-center w-36 transition-colors py-2 mt-8 mb-4 text-white bg-blue-500 rounded-sm ${
                        loading && "cursor-not-allowed"
                    } `}
                >
                    {!loading ? (
                        <>
                            <Icon
                                icon="fluent:document-arrow-up-20-filled"
                                className="w-6 h-6 mr-2"
                            />
                            Encode
                        </>
                    ) : (
                        <>
                            <Icon
                                icon="eos-icons:loading"
                                className="w-6 h-6 mr-2"
                            />
                            Processing...
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

export default actualWastes;
