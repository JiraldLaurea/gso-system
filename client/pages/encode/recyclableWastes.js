import { Icon } from "@iconify/react";
import Axios from "axios";
import {
    getDownloadURL,
    ref,
    uploadBytes,
    uploadString,
} from "firebase/storage";
import React, { useRef, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR, { mutate } from "swr";
import { storage } from "../../firebase";
import { useRouter } from "next/router";
import RecyclableWastesInput from "../../components/RecyclableWastesInput";

function recyclableWastes() {
    const router = useRouter();
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
    const [yearSubmitted, setYearSubmitted] = useState(date.getFullYear());
    const inputFileRef = useRef();
    const [saway, setSaway] = useState(0);
    const [lata, setLata] = useState(0);
    const [plastic, setPlastic] = useState(0);
    const [mineral, setMineral] = useState(0);
    const [botelya, setBotelya] = useState(0);
    const [carton, setCarton] = useState(0);
    const [aluminum, setAluminum] = useState(0);
    const [sin, setSin] = useState(0);
    const [scrap, setScrap] = useState(0);
    const [kaldero, setKaldero] = useState(0);
    const [others, setOthers] = useState(0);

    const { data: barangaysEncode } = useSWR(
        "http://localhost:3001/barangay/getAllBarangayEncode"
    );

    // Recursive Binary Search
    // It returns location of x in given array arr[l..r] is present, otherwise -1
    const binarySearch = (arr, l, r, x) => {
        if (r >= l) {
            let mid = l + Math.floor((r - l) / 2);

            console.log("MID", mid);

            // If the element is present at the middle itself
            if (arr[mid] == x) return mid;

            // If element is smaller than mid, then it can only be present in left subarray
            if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

            // Else the element can only be present in right subarray
            return binarySearch(arr, mid + 1, r, x);
        }

        // We reach here when element is not present in array
        return -1;
    };

    const submit = async () => {
        setLoading(true);
        if (dropdownMenuValueBarangay != "Barangay") {
            const data = {
                yearSubmitted: yearSubmitted,
                barangayId: barangayId,
                barangayName: dropdownMenuValueBarangay,
                districtName: dropdownMenuValueDistrict,
                saway: saway,
                lata: lata,
                plastic: plastic,
                mineral: mineral,
                botelya: botelya,
                carton: carton,
                aluminum: aluminum,
                sin: sin,
                scrap: scrap,
                kaldero: kaldero,
                others: others,
            };

            await Axios.post(
                "http://localhost:3001/recyclableWastes/getSubmittedRecyclableWastes",
                { yearSubmitted: yearSubmitted }
            ).then(async (res) => {
                const barangayIdArray = res.data.map((data) => {
                    return data.barangayId;
                });

                console.log("Array", barangayIdArray);

                let arr = barangayIdArray;
                let x = barangayId;
                let n = barangayIdArray.length;
                let result = binarySearch(arr, 0, n - 1, x);

                if (result == -1) {
                    await Axios.post(
                        "http://localhost:3001/recyclableWastes/createRecyclableWastes",
                        data
                    ).then(() => {
                        alert(
                            "Recyclable wastes report successfully submitted."
                        );
                        setLoading(false);
                    });
                } else {
                    console.log("Element is present at index " + result);
                    alert(
                        "You have already submitted a document from your chosen year."
                    );
                    setLoading(false);
                }
            });
        } else {
            alert("Please fill in all the forms");
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 md:p-8">
                <div className="flex items-center mb-8">
                    <Icon
                        onClick={() => router.push("/encode")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-medium ">
                        Encode recyclable wastes
                    </h2>
                </div>

                <p className="mb-1 text-sm text-gray-600">
                    Select barangay and district
                </p>
                <div className="relative">
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
                    <p className="mt-4 mb-2 text-sm text-gray-700">
                        Year of submission:
                    </p>
                    <input
                        value={yearSubmitted}
                        placeholder="Year"
                        onChange={(e) => setYearSubmitted(e.target.value)}
                        type="number"
                        className="w-20 px-2 py-1 mb-4 text-center border restoreNumberArrows focus:outline-none"
                    />
                </div>

                <div className="grid max-w-4xl grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <RecyclableWastesInput
                        category="Saway:"
                        state={saway}
                        setState={(e) => setSaway(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Lata:"
                        state={lata}
                        setState={(e) => setLata(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Plastic:"
                        state={plastic}
                        setState={(e) => setPlastic(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Mineral:"
                        state={mineral}
                        setState={(e) => setMineral(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Botelya:"
                        state={botelya}
                        setState={(e) => setBotelya(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Carton:"
                        state={carton}
                        setState={(e) => setCarton(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Aluminum:"
                        state={aluminum}
                        setState={(e) => setAluminum(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Sin:"
                        state={sin}
                        setState={(e) => setSin(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Scrap:"
                        state={scrap}
                        setState={(e) => setScrap(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Kaldero:"
                        state={kaldero}
                        setState={(e) => setKaldero(e.target.value)}
                    />
                    <RecyclableWastesInput
                        category="Others:"
                        state={others}
                        setState={(e) => setOthers(e.target.value)}
                    />
                </div>

                <button
                    onClick={() => {
                        if (!loading) {
                            submit();
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
    );
}

export default recyclableWastes;
