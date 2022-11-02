import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import numeral from "numeral";
import ClickAwayListener from "react-click-away-listener";
import moment from "moment";

function statistics() {
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [dropDownMenuValue, setDropDownMenuValue] = useState(null);
    const [fromDatePicker, setFromDatePicker] = useState("");
    const [toDatePicker, setToDatePicker] = useState("");

    const { data: barangays } = useSWR(
        "http://localhost:3001/barangay/getAllBarangay"
    );

    const {
        data: recyclableWastes,
        error,
        isValidating,
    } = useSWR("http://localhost:3001/recyclableWastes/getRecyclableWastes");

    return (
        <div className="flex flex-col w-full">
            <div className="p-8">
                <p className="mb-8 text-xl font-semibold">Statistics</p>

                <p className="mb-1 text-sm text-gray-600">Barangay</p>
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
                                        {barangays.map((barangays, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        setDropdownMenuValueBarangay(
                                                            barangays.barangayName
                                                        );
                                                        setDropdownMenuValueDistrict(
                                                            barangays.districtName
                                                        );
                                                        setIsDropdownMenuOpen(
                                                            false
                                                        );
                                                        setDropDownMenuValue(
                                                            barangays.id
                                                        );
                                                        setFromDatePicker("");
                                                        setToDatePicker("");
                                                    }}
                                                >
                                                    <a
                                                        href="#"
                                                        className="block px-3 py-2 hover:bg-gray-100"
                                                    >
                                                        {barangays.barangayName}
                                                        &nbsp; - &nbsp;
                                                        {barangays.districtName}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </ClickAwayListener>
                </div>

                <div className="flex items-center mt-6 mb-4">
                    <p className="mr-4 font-semibold">Barangay Wastes Report</p>
                </div>

                {dropdownMenuValueBarangay != "Barangay" ? (
                    <div className="overflow-auto border max-h-[500px]">
                        <div className="">
                            <table className="w-full text-sm text-left">
                                <thead className="sticky top-0 text-xs text-gray-700 uppercase border-b h-11 bg-gray-50">
                                    <tr className="removeBorderStyle">
                                        <th className="px-6">
                                            <p className="w-28">
                                                Barangay name
                                            </p>
                                        </th>
                                        <th className="px-6">
                                            <p className="w-28">
                                                District name
                                            </p>
                                        </th>
                                        <th className="px-6 ">
                                            <p className="text-right">
                                                Population count
                                            </p>
                                        </th>
                                        <th className="px-6 ">
                                            <p className="text-right">
                                                Waste generated
                                            </p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {barangays?.map((barangayWaste, index) => {
                                        const wasteGenerated =
                                            (
                                                barangayWaste.populationCount *
                                                0.68
                                            ).toFixed(2) + "kg";

                                        if (
                                            barangayWaste.id ==
                                            dropDownMenuValue
                                        ) {
                                            return (
                                                <tr
                                                    key={index}
                                                    className="removeBorderStyle h-11"
                                                >
                                                    <td className="px-6">
                                                        {
                                                            barangayWaste.barangayName
                                                        }
                                                    </td>
                                                    <td className="px-6">
                                                        {
                                                            barangayWaste.districtName
                                                        }
                                                    </td>
                                                    <td className="px-6 text-right">
                                                        {numeral(
                                                            barangayWaste.populationCount
                                                        ).format("0,0")}
                                                    </td>
                                                    <td className="px-6 text-right">
                                                        {numeral(
                                                            wasteGenerated
                                                        ).format("0,0.00")}{" "}
                                                        kg
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">No barangay selected.</p>
                )}

                <br></br>
                {/* <input
                        type="month"
                        id="fromDatePicker"
                        value={dateSubmitted}
                        onChange={(e) => setDateSubmitted(e.target.value)}
                        className="px-2 py-1 mb-4 border"
                    /> */}

                <div className="flex items-center mt-6 mb-4">
                    <p className="mr-4 font-semibold">
                        Recyclable Wastes Report
                    </p>
                </div>
                {dropdownMenuValueBarangay != "Barangay" ? (
                    <>
                        <div className="flex items-end mb-4 space-x-4">
                            <div>
                                <p className="mb-1 text-sm text-gray-600">
                                    From:
                                </p>
                                <input
                                    className="px-2 py-1 border"
                                    type="month"
                                    // id="fromDatePicker"
                                    value={fromDatePicker}
                                    onChange={(e) =>
                                        setFromDatePicker(e.target.value)
                                    }
                                ></input>
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-gray-600">
                                    To:
                                </p>
                                <input
                                    className="px-2 py-1 border"
                                    type="month"
                                    // id="toDatePicker"
                                    value={toDatePicker}
                                    onChange={(e) =>
                                        setToDatePicker(e.target.value)
                                    }
                                ></input>
                            </div>
                            {fromDatePicker && toDatePicker && (
                                <div
                                    onClick={() => {
                                        setFromDatePicker("");
                                        setToDatePicker("");
                                    }}
                                    className="flex items-center text-gray-600 h-9 hover:cursor-pointer group"
                                >
                                    <p className="group-hover:underline group-hover:text-black">
                                        Clear
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="overflow-auto border max-h-[500px]">
                            <div className="w-0">
                                <table className="text-sm text-left">
                                    <thead className="sticky top-0 w-full text-xs text-gray-700 uppercase border-b h-11 bg-gray-50">
                                        <tr className="removeBorderStyle">
                                            <th className="px-6 text-center">
                                                <div>
                                                    <p className="w-fit">
                                                        Date submitted
                                                    </p>
                                                </div>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Saway
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Lata
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Plastic
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Mineral
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Botelya
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Carton
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Aluminum
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Sin
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Scrap
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Kaldero
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Others
                                                </p>
                                            </th>
                                            <th className="px-6">
                                                <p className="text-right">
                                                    Total
                                                </p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recyclableWastes?.map(
                                            (recyclableWaste, index) => {
                                                if (
                                                    recyclableWaste.barangayId ==
                                                    dropDownMenuValue
                                                ) {
                                                    // var from = new Date(
                                                    //     document.getElementById(
                                                    //         "fromDatePicker"
                                                    //     ).value
                                                    // );
                                                    // var to = new Date(
                                                    //     document.getElementById(
                                                    //         "toDatePicker"
                                                    //     ).value
                                                    // );
                                                    let recyclableWasteDate =
                                                        moment(
                                                            recyclableWaste.dateSubmitted
                                                        ).format("yyyy-MM");

                                                    if (
                                                        (recyclableWasteDate >=
                                                            fromDatePicker &&
                                                            recyclableWasteDate <=
                                                                toDatePicker) ||
                                                        (fromDatePicker == "" &&
                                                            toDatePicker == "")
                                                    ) {
                                                        return (
                                                            <tr
                                                                key={index}
                                                                className="border-b removeBorderStyle h-11"
                                                            >
                                                                {/* <td className="px-6">
                                                                    {
                                                                        recyclableWaste.barangayName
                                                                    }
                                                                </td>
                                                                <td className="px-6">
                                                                    {
                                                                        recyclableWaste.districtName
                                                                    }
                                                                </td> */}
                                                                <td className="px-6 text-center">
                                                                    {moment(
                                                                        recyclableWaste.dateSubmitted
                                                                    ).format(
                                                                        "MMM YYYY"
                                                                    )}
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.saway
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.lata
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.plastic
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.mineral
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.botelya
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.carton
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.aluminum
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.sin
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.scrap
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.kaldero
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.others
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                                <td className="px-6 text-right">
                                                                    {numeral(
                                                                        recyclableWaste.totalWeightPerBarangay
                                                                    ).format(
                                                                        "0,0.00"
                                                                    )}
                                                                    kg
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                }
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500">No barangay selected.</p>
                )}
            </div>
        </div>
    );
}

export default statistics;
