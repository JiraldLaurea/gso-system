import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";
import { Icon } from "@iconify/react";
import ClickAwayListener from "react-click-away-listener";
import arraySort from "array-sort";
import { useSWRConfig } from "swr";

function BarangayTable({
    filteredBarangays,
    fetchBarangays,
    fetchUserBarangays,
}) {
    const [barangayName, setBarangayName] = useState("");
    const [districtName, setDistrictName] = useState("");
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValue, setDropdownMenuValue] = useState("User id");
    const [barangayUsers, setBarangayUsers] = useState([]);
    const dropdownRef = useRef();
    const [columnName, setColumnName] = useState("id");
    const [boolean, setBoolean] = useState(false);
    const { mutate } = useSWRConfig();

    const sort = (columnName) => {
        setColumnName(columnName);
        setBoolean(!boolean);
    };

    // useEffect(() => {
    //     fetchBarangayUsers();
    // }, []);

    // const fetchBarangayUsers = () => {
    //     Axios.get("http://localhost:3001/barangay/user").then((res) => {
    //         setBarangayUsers(res.data);
    //     });
    // };

    const addBarangay = async (e) => {
        e.preventDefault();
        if (barangayName != "") {
            const data = {
                barangayName: barangayName,
                districtName: districtName,
            };
            await Axios.post("http://localhost:3001/barangay", data).then(
                (res) => {
                    console.log(res);
                    alert("Successfully added barangay");
                }
            );
            setBarangayName("");
            setDistrictName("");
            mutate("http://localhost:3001/barangay");
            mutate("http://localhost:3001/user/barangay");
        } else {
            alert("Please fill in all the forms");
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <form
                spellCheck="false"
                onSubmit={addBarangay}
                className="w-full mr-6 md:max-w-xs"
            >
                <p className="text-lg font-medium">Add barangay</p>
                <div className="mt-6 mb-4">
                    <p className="mb-1 text-sm text-gray-600">Barangay name</p>
                    <input
                        value={barangayName}
                        onChange={(e) => setBarangayName(e.target.value)}
                        className="w-full px-3 py-2 border"
                        type="text"
                        placeholder="Barangay name"
                    />
                </div>

                <div className="mt-6 mb-8">
                    <p className="mb-1 text-sm text-gray-600">District name</p>
                    <input
                        value={districtName}
                        onChange={(e) => setDistrictName(e.target.value)}
                        className="w-full px-3 py-2 border"
                        type="text"
                        placeholder="District name"
                    />
                </div>

                <div className="flex items-center justify-end mb-4">
                    <button
                        type="submit"
                        className="flex items-center justify-center px-4 py-2 text-white transition-colors bg-blue-500 border border-blue-500 rounded-sm hover:bg-blue-600"
                    >
                        <Icon
                            icon="ic:baseline-add-circle"
                            className="w-6 h-6 mr-2"
                        />
                        Add
                    </button>
                </div>
            </form>
            <div
                className={`overflow-auto border h-fit max-h-[500px] flex-grow ${
                    filteredBarangays && "border-x border-t border-b-0"
                }`}
            >
                <div className="w-0 md:w-full">
                    <table className="text-sm text-left md:w-full">
                        <thead className="sticky top-0 text-xs text-gray-700 uppercase border-b h-11 bg-gray-50">
                            <tr className="select-none removeBorderStyle">
                                <th className="px-6">
                                    <div
                                        onClick={() => sort("id")}
                                        className="flex items-center cursor-pointer group w-fit"
                                    >
                                        <p className="w-fit">No.</p>
                                        <Icon
                                            className={`w-5 h-5 invisible group-hover:visible `}
                                            icon={`${
                                                boolean == true
                                                    ? "eva:arrow-ios-downward-fill"
                                                    : "eva:arrow-ios-upward-fill"
                                            }`}
                                        />
                                    </div>
                                </th>
                                <th className="px-6">
                                    <div
                                        onClick={() => sort("barangayName")}
                                        className="flex items-center cursor-pointer group w-fit"
                                    >
                                        <p className="w-fit">Barangay Name</p>
                                        <Icon
                                            className={`w-5 h-5 invisible group-hover:visible `}
                                            icon={`${
                                                boolean == true
                                                    ? "eva:arrow-ios-downward-fill"
                                                    : "eva:arrow-ios-upward-fill"
                                            }`}
                                        />
                                    </div>
                                </th>
                                <th className="px-6">
                                    <div
                                        onClick={() => sort("districtName")}
                                        className="flex items-center cursor-pointer group w-fit"
                                    >
                                        <p className="w-fit">District Name</p>
                                        <Icon
                                            className={`w-5 h-5 invisible group-hover:visible `}
                                            icon={`${
                                                boolean == true
                                                    ? "eva:arrow-ios-downward-fill"
                                                    : "eva:arrow-ios-upward-fill"
                                            }`}
                                        />
                                    </div>
                                </th>
                                <th className="px-6">
                                    <div
                                        onClick={() => sort("userId")}
                                        className="flex items-center cursor-pointer group w-fit"
                                    >
                                        <p className="w-fit">User ID</p>
                                        <Icon
                                            className={`w-5 h-5 invisible group-hover:visible `}
                                            icon={`${
                                                boolean == true
                                                    ? "eva:arrow-ios-downward-fill"
                                                    : "eva:arrow-ios-upward-fill"
                                            }`}
                                        />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {arraySort(filteredBarangays, columnName, {
                                reverse: boolean,
                            }).map((barangay, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className="border-b removeBorderStyle h-11"
                                    >
                                        <td className="px-6">{index + 1}</td>
                                        <td className="px-6">
                                            {barangay.barangayName}
                                        </td>
                                        <td className="px-6">
                                            {barangay.districtName}
                                        </td>
                                        <td className="px-6">
                                            {barangay.userId != null
                                                ? [barangay.userId]
                                                : "-"}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BarangayTable;
