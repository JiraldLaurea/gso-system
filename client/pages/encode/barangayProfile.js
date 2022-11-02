import { Icon } from "@iconify/react";
import Axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR from "swr";

function barangayProfile({ savedData }) {
    const router = useRouter();
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const [isSaved, setIsSaved] = useState(false);

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/barangay/getAllBarangayEncode"
    );

    console.log("ALL BARANGAYS ENCODE", barangaysEncode);

    const handleClick = async () => {
        const data = { barangayId: barangayId };

        await Axios.post(
            "http://localhost:3001/submission/allBrgyProfilePages",
            data
        ).then((res) => {
            if (res.data) {
                setIsSaved(true);
            } else {
                setIsSaved(false);
            }
        });

        // const documentData = await fetch(
        //     "http://localhost:3001/submission/allBrgyProfilePages",
        //     {
        //         headers: { Cookie: context.req.headers.cookie },
        //     }
        // ).then((res) => res.json());
    };

    useEffect(() => {
        if (barangayId != null) {
            handleClick();
        }
    }, [barangayId]);

    const postSelectedBarangay = async (action) => {
        const actionData = {
            action: action,
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

        if (action == "CreateNewDocument") {
            await Axios.post(
                "http://localhost:3001/submission/createSubmissionBarangayProfilePages"
            ).then(async () => {
                router.push("/encode/barangayProfile/template");
            });
        }

        if (action == "LoadDocument") {
            router.push("/encode/barangayProfile/template");
        }
    };

    return (
        <div className="flex flex-col w-full max-w-5xl">
            <div className="p-4 md:p-8">
                <div className="flex items-center mb-8">
                    <Icon
                        onClick={() => router.push("/encode")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-semibold ">Barangay profile</h2>
                </div>

                <div className="my-4">
                    <p className="mb-1 text-sm text-gray-600">Barangay</p>
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
                    <div className="flex items-center mt-8">
                        <button
                            onClick={() => {
                                if (dropdownMenuValueBarangay != "Barangay") {
                                    postSelectedBarangay("CreateNewDocument");
                                } else {
                                    alert("Please choose a barangay");
                                }
                            }}
                            className="flex items-center justify-center py-2 mb-4 mr-4 text-white bg-blue-500 border border-blue-500 rounded-sm w-36"
                        >
                            <Icon
                                icon="material-symbols:create-new-folder"
                                className="w-6 h-6 mr-2"
                            />
                            Create new
                        </button>
                        <button
                            onClick={() => {
                                if (isSaved) {
                                    postSelectedBarangay("LoadDocument");
                                }
                            }}
                            className={`w-36 flex items-center justify-center py-2 mb-4 border rounded-sm ${
                                !isSaved
                                    ? "hover:cursor-not-allowed bg-gray-300 text-gray-500"
                                    : "border-gray-300 text-blue-600"
                            }`}
                        >
                            <Icon
                                icon="ic:sharp-upload-file"
                                className="w-6 h-6 mr-2"
                            />
                            Load
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default barangayProfile;

// export const getServerSideProps = async (context) => {
//     const me = await fetch("http://localhost:3001/user/me", {
//         headers: { Cookie: context.req.headers.cookie },
//     }).then((res) => res.json());

//     if (me.isAdmin == false) {
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: "/",
//             },
//         };
//     }

//     // const documentData = await fetch(
//     //     "http://localhost:3001/submission/allBrgyProfilePages",
//     //     {
//     //         headers: { Cookie: context.req.headers.cookie },
//     //     }
//     // ).then((res) => res.json());

//     // return {
//     //     props: {
//     //         savedData: documentData[0],
//     //     },
//     // };
// };
