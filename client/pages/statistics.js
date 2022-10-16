import Axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import numeral from "numeral";

function statistics() {
    const { data: barangays } = useSWR(
        "http://localhost:3001/barangay/getAllBarangay"
    );

    const { data: barangayWastes } = useSWR(
        "http://localhost:3001/barangay/getBarangayWastes"
    );

    const {
        data: recyclableWastes,
        error,
        isValidating,
    } = useSWR("http://localhost:3001/recyclableWastes/getRecyclableWastes");

    // const sort = () => {
    //     const dataArray = recyclableWastes?.map((data) => {
    //         return [data.barangayName, data.id];
    //     });

    //     const dataArray2 = dataArray.map((data) => {
    //         return data[0];
    //     });

    //     // console.log("DATA ARRAY", dataArray2);

    //     const swap = (arr, xp, yp) => {
    //         let temp = arr[xp];
    //         arr[xp] = arr[yp];
    //         arr[yp] = temp;
    //     };

    //     const selectionSort = (arr, n) => {
    //         let i, j, min_idx;

    //         // One by one move boundary of unsorted subarray
    //         for (i = 0; i < n - 1; i++) {
    //             // Find the minimum element in unsorted array
    //             min_idx = i;
    //             for (j = i + 1; j < n; j++)
    //                 if (arr[j] < arr[min_idx]) min_idx = j;

    //             // Swap the found minimum element with the first element
    //             swap(arr, min_idx, i);
    //         }
    //     };

    //     const printArray = (arr, size) => {
    //         let i;
    //         console.log("TESTTETEA", arr);
    //         for (i = 0; i < size; i++) console.log(arr[i] + "");
    //     };

    //     let arr = dataArray2;
    //     let length = dataArray2.length;
    //     selectionSort(arr, length);
    //     console.log("Sorted array \n");
    //     printArray(arr, length);
    // };

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 md:p-8">
                <p className="mb-8 text-xl font-semibold">Statistics</p>

                <div className="flex items-center mt-6 mb-4">
                    <p className="mr-4 font-semibold">Barangay Wastes Report</p>
                </div>

                <div
                    className={`overflow-auto border max-h-[500px] ${
                        barangays && "border-x border-t border-b-0"
                    }`}
                >
                    <div className="w-0 md:w-full">
                        <table className="md:w-full text-sm text-left">
                            <thead className="sticky top-0 text-xs text-gray-700 uppercase border-b h-11 bg-gray-50">
                                <tr className="removeBorderStyle">
                                    <th className="px-6">
                                        <p className="w-fit">No</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="w-28">Barangay name</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="w-28">District name</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right w-32 md:w-auto">
                                            Population count
                                        </p>
                                    </th>
                                    <th className="px-6 ">
                                        <p className="text-right w-32 md:w-auto">
                                            Waste generated
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {barangays?.map((barangayWaste, index) => {
                                    const wasteGenerated =
                                        (
                                            barangayWaste.populationCount * 0.68
                                        ).toFixed(2) + "kg";
                                    return (
                                        <tr
                                            key={index}
                                            className="border-b removeBorderStyle h-11"
                                        >
                                            <td className="px-6">
                                                {index + 1}
                                            </td>
                                            <td className="px-6">
                                                {barangayWaste.barangayName}
                                            </td>
                                            <td className="px-6">
                                                {barangayWaste.districtName}
                                            </td>
                                            <td className="px-6 text-right">
                                                {numeral(
                                                    barangayWaste.populationCount
                                                ).format("0,0")}
                                            </td>
                                            <td className="px-6 text-right">
                                                {numeral(wasteGenerated).format(
                                                    "0,0.00"
                                                )}{" "}
                                                kg
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex items-center mt-6 mb-4">
                    <p className="mr-4 font-semibold">
                        Recyclable Wastes Report
                    </p>
                </div>

                <div
                    className={`overflow-auto border max-h-[500px] ${
                        recyclableWastes && "border-x border-t border-b-0"
                    }`}
                >
                    <div className="w-0">
                        <table className="text-sm text-left">
                            <thead className="sticky top-0 text-xs text-gray-700 uppercase border-b h-11 bg-gray-50">
                                <tr className="removeBorderStyle">
                                    <th className="px-6">
                                        <div>
                                            <p className="w-fit">No</p>
                                        </div>
                                    </th>
                                    <th className="px-6">
                                        <div>
                                            <p className="w-28">
                                                Barangay name
                                            </p>
                                        </div>
                                    </th>
                                    <th className="px-6">
                                        <div>
                                            <p className="w-28">
                                                District name
                                            </p>
                                        </div>
                                    </th>
                                    <th className="px-6 text-center">
                                        <div>
                                            <p className="w-fit">
                                                Year submitted
                                            </p>
                                        </div>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Saway</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Lata</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Plastic</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Mineral</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Botelya</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Carton</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Aluminum</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Sin</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Scrap</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Kaldero</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Others</p>
                                    </th>
                                    <th className="px-6">
                                        <p className="text-right">Total</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {recyclableWastes?.map(
                                    (recyclableWaste, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="border-b removeBorderStyle h-11"
                                            >
                                                <td className="px-6">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6">
                                                    {
                                                        recyclableWaste.barangayName
                                                    }
                                                </td>
                                                <td className="px-6">
                                                    {
                                                        recyclableWaste.districtName
                                                    }
                                                </td>
                                                <td className="px-6 text-center">
                                                    {
                                                        recyclableWaste.yearSubmitted
                                                    }
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.saway
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.lata
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.plastic
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.mineral
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.botelya
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.carton
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.aluminum
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.sin
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.scrap
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.kaldero
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.others
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                                <td className="px-6 text-right">
                                                    {numeral(
                                                        recyclableWaste.totalWeightPerBarangay
                                                    ).format("0,0.00")}
                                                    kg
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default statistics;
