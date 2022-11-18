import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import ClickAwayListener from "react-click-away-listener";
import { useAuthDispatch } from "../context/auth";
import { Icon } from "@iconify/react";

function submit() {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValue, setDropdownMenuValue] = useState("Select");
    const dispatch = useAuthDispatch();

    useEffect(() => {
        dispatch("CHANGE_TITLE", "Submit");
        dispatch("HAS_BUTTON_FALSE");
    }, []);

    const router = useRouter();

    const { data: encodedBarangayProfile } = useSWR(
        "http://localhost:3001/submission/getEncodedBarangayProfile"
    );

    // const { data: encodedSketch } = useSWR(
    //     "http://localhost:3001/submission/getEncodedSketch"
    // );

    // const { data: encodedProgramsDoc } = useSWR(
    //     "http://localhost:3001/submission/getEncodedProgramsDoc"
    // );

    // const { data: encodedFundingReq } = useSWR(
    //     "http://localhost:3001/submission/getEncodedFundingReq"
    // );

    // const { data: encodedMoa } = useSWR(
    //     "http://localhost:3001/submission/getEncodedMoa"
    // );

    // const { data: encodedJunkshop } = useSWR(
    //     "http://localhost:3001/submission/getEncodedJunkshop"
    // );

    // const { data: encodedBusinessPermit } = useSWR(
    //     "http://localhost:3001/submission/getEncodedBusinessPermit"
    // );

    // const { data: encodedExecutiveOrder } = useSWR(
    //     "http://localhost:3001/submission/getEncodedExecutiveOrder"
    // );

    // const { data: encodedBarangayOrdinance } = useSWR(
    //     "http://localhost:3001/submission/getEncodedBarangayOrdinance"
    // );

    // const { data: encodedRecyclableWastes } = useSWR(
    //     "http://localhost:3001/recyclableWastes/getEncodedRecyclableWastes"
    // );

    // const search = (arr, n, x) => {
    //     let i;
    //     for (i = 0; i < n; i++) if (arr[i] == x) return i;
    //     return -1;
    // };

    // let arr = [2, 3, 4, 10, 40];
    // let x = 10;
    // let n = arr.length;

    // let result = search(arr, n, x);
    // result == -1
    //     ? console.log("Element is not present in array")
    //     : console.log("Element is present at index " + result);

    return (
        <div className="flex-grow">
            <div className={`p-4 md:p-8`}>
                {encodedBarangayProfile ? (
                    <>
                        <p className="mb-1 text-sm text-gray-600">Select</p>
                        <div className="relative">
                            <ClickAwayListener
                                onClickAway={() => setIsDropdownMenuOpen(false)}
                                className="relative"
                            >
                                <div
                                    className="select-none w-fit"
                                    onMouseLeave={() =>
                                        setIsDropdownMenuOpen(false)
                                    }
                                >
                                    <div
                                        onMouseOver={() =>
                                            setIsDropdownMenuOpen(true)
                                        }
                                        className={`flex items-center justify-between w-56 px-3 py-2 border cursor-pointer`}
                                    >
                                        <p
                                            className={`${
                                                dropdownMenuValue == "Select" &&
                                                "text-gray-400"
                                            }`}
                                        >
                                            {dropdownMenuValue}
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
                                                <li
                                                    onClick={() => {
                                                        router.push(
                                                            "/submit/barangayProfile"
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
                                                        Barangay profile
                                                    </a>
                                                </li>
                                                <li
                                                    onClick={() => {
                                                        router.push(
                                                            "/submit/recyclableWastes"
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
                                                        Recyclable wastes
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </ClickAwayListener>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-600">
                        Your documents are not yet encoded by the GSO.
                    </p>
                )}
            </div>
        </div>
    );
}

export default submit;
