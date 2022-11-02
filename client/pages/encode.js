import React, { useState } from "react";
import { useRouter } from "next/router";
import ClickAwayListener from "react-click-away-listener";

function encode() {
    const router = useRouter();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValue, setDropdownMenuValue] = useState("Select");
    const [barangayId, setBarangayId] = useState(null);
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">Encode</h2>
                {/* <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
                    <div
                        onClick={() => router.push("/encode/barangayProfile")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Barangay profile</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/sketch")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Sketch</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/programs")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Programs</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/fundingReq")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Funding requirements</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/encode/memorandumOfAgreement")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Memorandum of agreement</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/junkshop")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Junkshop</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/businessPermit")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Business permit</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/executiveOrder")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Executive order</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/barangayOrdinance")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Barangay ordinance</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/recyclableWastes")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Recyclable wastes</p>
                    </div>
                </div> */}
                <div className="my-4">
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
                                    <div className="max-h-60 overflow-y-auto absolute z-10 py-4 bg-white border border-t-0 top-[42px] w-56 dark:bg-gray-700">
                                        <ul className="text-gray-700 bg-white">
                                            <li
                                                onClick={() => {
                                                    router.push(
                                                        "/encode/barangayProfile"
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
                                                        "/encode/recyclableWastes"
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
                </div>
            </div>
        </div>
    );
}

export default encode;
