import Axios from "axios";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR from "swr";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

function sketch() {
    const router = useRouter();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [sketch, setSketch] = useState([]);
    const [collectionSchedule, setCollectionSchedule] = useState(null);

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/sketch/getAllSketch"
    );

    const view = async (e) => {
        const data = {
            barangayId: barangayId,
        };

        await Axios.post("http://localhost:3001/sketch/getSketch", data).then(
            (res) => {
                setImageUrl(res.data.sketchUrl);
                setCollectionSchedule(res.data.collectionSchedule);
            }
        );
    };

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 md:p-8">
                <div className="flex items-center mb-8">
                    <Icon
                        onClick={() => router.push("/admin/encodedSubmissions")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-medium ">View sketch</h2>
                </div>
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
                                                                    barangayEncode.barangayId
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
                        <button
                            onClick={() => {
                                if (barangayId) {
                                    view();
                                }
                            }}
                            className={`px-4 w-full md:w-auto py-2 mt-4 md:mt-0 md:ml-4  border select-none ${
                                !barangayId
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "text-blue-600"
                            }`}
                        >
                            View
                        </button>
                    </div>
                </div>
                <hr className="my-6" />
                <div>
                    {imageUrl && (
                        <>
                            <p className="mb-4">
                                Collection schedule:
                                <span className="ml-1">
                                    {collectionSchedule}
                                </span>
                            </p>

                            <p className="mb-2">Sketch: {}</p>
                            <div className="w-full max-w-lg bg-black border ">
                                <Image
                                    src={imageUrl}
                                    alt="route image"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="contain"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default sketch;
