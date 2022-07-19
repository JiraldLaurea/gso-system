import React, { useEffect, useState } from "react";
import Axios from "axios";

const getFormValues = () => {
    if (typeof window !== "undefined") {
        const storedValues = localStorage.getItem("brgyProfilePage8");
        if (!storedValues)
            return {
                tricycleWithinBarangay: "",
                tricycleWithinDistrict: "",
                tricycleWithinCityProper: "",
                trisikadWithinBarangay: "",
                trisikadWithinDistrict: "",
                trisikadWithinCityProper: "",
                jeepneyWithinBarangay: "",
                jeepneyWithinDistrict: "",
                jeepneyWithinCityProper: "",
                carWithinBarangay: "",
                carWithinDistrict: "",
                carWithinCityProper: "",
                busWithinBarangay: "",
                busWithinDistrict: "",
                busWithinCityProper: "",
                boatMotorizedWithinBarangay: "",
                boatMotorizedWithinDistrict: "",
                boatMotorizedWithinCityProper: "",
                boatNonMotorizedWithinBarangay: "",
                boatNonMotorizedWithinDistrict: "",
                boatNonMotorizedWithinCityProper: "",
                othersWithinBarangay: "",
                othersWithinDistrict: "",
                othersWithinCityProper: "",
                othersTransportFacilitySpecify: "",
                waterSupplyNumHousehold1: 0,
                waterSupplyNumHousehold2: 0,
                waterSupplyNumHousehold3: 0,
                waterSupplyNumHousehold4: 0,
                waterSupplyNumHousehold5: 0,
                waterSupplyNumHousehold6: 0,
                waterSupplyNumHousehold7: 0,
                waterSupplyPercentHousehold1: 0,
                waterSupplyPercentHousehold2: 0,
                waterSupplyPercentHousehold3: 0,
                waterSupplyPercentHousehold4: 0,
                waterSupplyPercentHousehold5: 0,
                waterSupplyPercentHousehold6: 0,
                waterSupplyPercentHousehold7: 0,
                waterSupply7Specify: "",
                waterSupplyNumTotal: 0,
                waterSupplyPercentTotal: 0,
                inventoryExistingPowerSupplyNum1: 0,
                inventoryExistingPowerSupplyPercent1: 0,
                inventoryExistingPowerSupplyNum2: 0,
                inventoryExistingPowerSupplyPercent2: 0,
                inventoryExistingPowerSupplySpecify: "",
                inventoryExistingPowerSupplyNumTotal: 0,
                inventoryExistingPowerSupplyPercentTotal: 0,
                inventoryFuelUsedNum1: 0,
                inventoryFuelUsedPercent1: 0,
                inventoryFuelUsedNum2: 0,
                inventoryFuelUsedPercent2: 0,
                inventoryFuelUsedNum3: 0,
                inventoryFuelUsedPercent3: 0,
                inventoryFuelUsedNum4: 0,
                inventoryFuelUsedPercent4: 0,
                inventoryFuelUsed4Specify: "",
                inventoryFuelUsedNumTotal: 0,
                inventoryFuelUsedPercentTotal: 0,
                sourceIncomeCY1: 0,
                sourceIncomeCY2: 0,
                sourceIncomeAmount1CY1: 0,
                sourceIncomeAmount1CY2: 0,
                sourceIncomeAmount2CY1: 0,
                sourceIncomeAmount2CY2: 0,
                sourceIncomeAmount3CY1: 0,
                sourceIncomeAmount3CY2: 0,
                sourceIncomeAmount4CY1: 0,
                sourceIncomeAmount4CY2: 0,
                sourceIncomeAmount5CY1: 0,
                sourceIncomeAmount5CY2: 0,
                sourceIncomeAmount6CY1: 0,
                sourceIncomeAmount6CY2: 0,
                sourceIncomeAmount7CY1: 0,
                sourceIncomeAmount7CY2: 0,
                sourceIncomeAmount7CY1: 0,
                sourceIncomeAmount7CY2: 0,
                sourceIncomeAmount8CY1: 0,
                sourceIncomeAmount8CY2: 0,
                sourceIncomeAmount9CY1: 0,
                sourceIncomeAmount9CY2: 0,
                sourceIncomeAmount10CY1: 0,
                sourceIncomeAmount10CY2: 0,
                sourceIncomeAmountTotalCY1: 0,
                sourceIncomeAmountTotalCY2: 0,
            };
        return JSON.parse(storedValues);
    }
};

function SubmissionBarangayProfilePage8({ page8Data }) {
    // const [values, setValues] = useState(getFormValues);

    const [values, setValues] = useState({
        tricycleWithinBarangay: page8Data.tricycleWithinBarangay,
        tricycleWithinDistrict: page8Data.tricycleWithinDistrict,
        tricycleWithinCityProper: page8Data.tricycleWithinCityProper,
        trisikadWithinBarangay: page8Data.trisikadWithinBarangay,
        trisikadWithinDistrict: page8Data.trisikadWithinDistrict,
        trisikadWithinCityProper: page8Data.trisikadWithinCityProper,
        jeepneyWithinBarangay: page8Data.jeepneyWithinBarangay,
        jeepneyWithinDistrict: page8Data.jeepneyWithinDistrict,
        jeepneyWithinCityProper: page8Data.jeepneyWithinCityProper,
        carWithinBarangay: page8Data.carWithinBarangay,
        carWithinDistrict: page8Data.carWithinDistrict,
        carWithinCityProper: page8Data.carWithinCityProper,
        busWithinBarangay: page8Data.busWithinBarangay,
        busWithinDistrict: page8Data.busWithinDistrict,
        busWithinCityProper: page8Data.busWithinCityProper,
        boatMotorizedWithinBarangay: page8Data.boatMotorizedWithinBarangay,
        boatMotorizedWithinDistrict: page8Data.boatMotorizedWithinDistrict,
        boatMotorizedWithinCityProper: page8Data.boatMotorizedWithinCityProper,
        boatNonMotorizedWithinBarangay:
            page8Data.boatNonMotorizedWithinBarangay,
        boatNonMotorizedWithinDistrict:
            page8Data.boatNonMotorizedWithinDistrict,
        boatNonMotorizedWithinCityProper:
            page8Data.boatNonMotorizedWithinCityProper,
        othersWithinBarangay: page8Data.othersWithinBarangay,
        othersWithinDistrict: page8Data.othersWithinDistrict,
        othersWithinCityProper: page8Data.othersWithinCityProper,
        othersTransportFacilitySpecify:
            page8Data.othersTransportFacilitySpecify,
        waterSupplyNumHousehold1: page8Data.waterSupplyNumHousehold1,
        waterSupplyNumHousehold2: page8Data.waterSupplyNumHousehold2,
        waterSupplyNumHousehold3: page8Data.waterSupplyNumHousehold3,
        waterSupplyNumHousehold4: page8Data.waterSupplyNumHousehold4,
        waterSupplyNumHousehold5: page8Data.waterSupplyNumHousehold5,
        waterSupplyNumHousehold6: page8Data.waterSupplyNumHousehold6,
        waterSupplyNumHousehold7: page8Data.waterSupplyNumHousehold7,
        waterSupplyPercentHousehold1: page8Data.waterSupplyPercentHousehold1,
        waterSupplyPercentHousehold2: page8Data.waterSupplyPercentHousehold2,
        waterSupplyPercentHousehold3: page8Data.waterSupplyPercentHousehold3,
        waterSupplyPercentHousehold4: page8Data.waterSupplyPercentHousehold4,
        waterSupplyPercentHousehold5: page8Data.waterSupplyPercentHousehold5,
        waterSupplyPercentHousehold6: page8Data.waterSupplyPercentHousehold6,
        waterSupplyPercentHousehold7: page8Data.waterSupplyPercentHousehold7,
        waterSupply7Specify: page8Data.waterSupply7Specify,
        waterSupplyNumTotal: page8Data.waterSupplyNumTotal,
        waterSupplyPercentTotal: page8Data.waterSupplyPercentTotal,
        inventoryExistingPowerSupplyNum1:
            page8Data.inventoryExistingPowerSupplyNum1,
        inventoryExistingPowerSupplyPercent1:
            page8Data.inventoryExistingPowerSupplyPercent1,
        inventoryExistingPowerSupplyNum2:
            page8Data.inventoryExistingPowerSupplyNum2,
        inventoryExistingPowerSupplyPercent2:
            page8Data.inventoryExistingPowerSupplyPercent2,
        inventoryExistingPowerSupplySpecify:
            page8Data.inventoryExistingPowerSupplySpecify,
        inventoryExistingPowerSupplyNumTotal:
            page8Data.inventoryExistingPowerSupplyNumTotal,
        inventoryExistingPowerSupplyPercentTotal:
            page8Data.inventoryExistingPowerSupplyPercentTotal,
        inventoryFuelUsedNum1: page8Data.inventoryFuelUsedNum1,
        inventoryFuelUsedPercent1: page8Data.inventoryFuelUsedPercent1,
        inventoryFuelUsedNum2: page8Data.inventoryFuelUsedNum2,
        inventoryFuelUsedPercent2: page8Data.inventoryFuelUsedPercent2,
        inventoryFuelUsedNum3: page8Data.inventoryFuelUsedNum3,
        inventoryFuelUsedPercent3: page8Data.inventoryFuelUsedPercent3,
        inventoryFuelUsedNum4: page8Data.inventoryFuelUsedNum4,
        inventoryFuelUsedPercent4: page8Data.inventoryFuelUsedPercent4,
        inventoryFuelUsed4Specify: page8Data.inventoryFuelUsed4Specify,
        inventoryFuelUsedNumTotal: page8Data.inventoryFuelUsedNumTotal,
        inventoryFuelUsedPercentTotal: page8Data.inventoryFuelUsedPercentTotal,
        sourceIncomeCY1: page8Data.sourceIncomeCY1,
        sourceIncomeCY2: page8Data.sourceIncomeCY2,
        sourceIncomeAmount1CY1: page8Data.sourceIncomeAmount1CY1,
        sourceIncomeAmount1CY2: page8Data.sourceIncomeAmount1CY2,
        sourceIncomeAmount2CY1: page8Data.sourceIncomeAmount2CY1,
        sourceIncomeAmount2CY2: page8Data.sourceIncomeAmount2CY2,
        sourceIncomeAmount3CY1: page8Data.sourceIncomeAmount3CY1,
        sourceIncomeAmount3CY2: page8Data.sourceIncomeAmount3CY2,
        sourceIncomeAmount4CY1: page8Data.sourceIncomeAmount4CY1,
        sourceIncomeAmount4CY2: page8Data.sourceIncomeAmount4CY2,
        sourceIncomeAmount5CY1: page8Data.sourceIncomeAmount5CY1,
        sourceIncomeAmount5CY2: page8Data.sourceIncomeAmount5CY2,
        sourceIncomeAmount6CY1: page8Data.sourceIncomeAmount6CY1,
        sourceIncomeAmount6CY2: page8Data.sourceIncomeAmount6CY2,
        sourceIncomeAmount7CY1: page8Data.sourceIncomeAmount7CY1,
        sourceIncomeAmount7CY2: page8Data.sourceIncomeAmount7CY2,
        sourceIncomeAmount7CY1: page8Data.sourceIncomeAmount7CY1,
        sourceIncomeAmount7CY2: page8Data.sourceIncomeAmount7CY2,
        sourceIncomeAmount8CY1: page8Data.sourceIncomeAmount8CY1,
        sourceIncomeAmount8CY2: page8Data.sourceIncomeAmount8CY2,
        sourceIncomeAmount9CY1: page8Data.sourceIncomeAmount9CY1,
        sourceIncomeAmount9CY2: page8Data.sourceIncomeAmount9CY2,
        sourceIncomeAmount10CY1: page8Data.sourceIncomeAmount10CY1,
        sourceIncomeAmount10CY2: page8Data.sourceIncomeAmount10CY2,
        sourceIncomeAmountTotalCY1: page8Data.sourceIncomeAmountTotalCY1,
        sourceIncomeAmountTotalCY2: page8Data.sourceIncomeAmountTotalCY2,
    });

    useEffect(() => {
        const updateSubmissionBarangayProfilePage8 = async () => {
            const data = {
                tricycleWithinBarangay: values.tricycleWithinBarangay,
                tricycleWithinDistrict: values.tricycleWithinDistrict,
                tricycleWithinCityProper: values.tricycleWithinCityProper,
                trisikadWithinBarangay: values.trisikadWithinBarangay,
                trisikadWithinDistrict: values.trisikadWithinDistrict,
                trisikadWithinCityProper: values.trisikadWithinCityProper,
                jeepneyWithinBarangay: values.jeepneyWithinBarangay,
                jeepneyWithinDistrict: values.jeepneyWithinDistrict,
                jeepneyWithinCityProper: values.jeepneyWithinCityProper,
                carWithinBarangay: values.carWithinBarangay,
                carWithinDistrict: values.carWithinDistrict,
                carWithinCityProper: values.carWithinCityProper,
                busWithinBarangay: values.busWithinBarangay,
                busWithinDistrict: values.busWithinDistrict,
                busWithinCityProper: values.busWithinCityProper,
                boatMotorizedWithinBarangay: values.boatMotorizedWithinBarangay,
                boatMotorizedWithinDistrict: values.boatMotorizedWithinDistrict,
                boatMotorizedWithinCityProper:
                    values.boatMotorizedWithinCityProper,
                boatNonMotorizedWithinBarangay:
                    values.boatNonMotorizedWithinBarangay,
                boatNonMotorizedWithinDistrict:
                    values.boatNonMotorizedWithinDistrict,
                boatNonMotorizedWithinCityProper:
                    values.boatNonMotorizedWithinCityProper,
                othersWithinBarangay: values.othersWithinBarangay,
                othersWithinDistrict: values.othersWithinDistrict,
                othersWithinCityProper: values.othersWithinCityProper,
                othersTransportFacilitySpecify:
                    values.othersTransportFacilitySpecify,
                waterSupplyNumHousehold1: values.waterSupplyNumHousehold1,
                waterSupplyNumHousehold2: values.waterSupplyNumHousehold2,
                waterSupplyNumHousehold3: values.waterSupplyNumHousehold3,
                waterSupplyNumHousehold4: values.waterSupplyNumHousehold4,
                waterSupplyNumHousehold5: values.waterSupplyNumHousehold5,
                waterSupplyNumHousehold6: values.waterSupplyNumHousehold6,
                waterSupplyNumHousehold7: values.waterSupplyNumHousehold7,
                waterSupplyPercentHousehold1:
                    values.waterSupplyPercentHousehold1,
                waterSupplyPercentHousehold2:
                    values.waterSupplyPercentHousehold2,
                waterSupplyPercentHousehold3:
                    values.waterSupplyPercentHousehold3,
                waterSupplyPercentHousehold4:
                    values.waterSupplyPercentHousehold4,
                waterSupplyPercentHousehold5:
                    values.waterSupplyPercentHousehold5,
                waterSupplyPercentHousehold6:
                    values.waterSupplyPercentHousehold6,
                waterSupplyPercentHousehold7:
                    values.waterSupplyPercentHousehold7,
                waterSupply7Specify: values.waterSupply7Specify,
                waterSupplyNumTotal: values.waterSupplyNumTotal,
                waterSupplyPercentTotal: values.waterSupplyPercentTotal,
                inventoryExistingPowerSupplyNum1:
                    values.inventoryExistingPowerSupplyNum1,
                inventoryExistingPowerSupplyPercent1:
                    values.inventoryExistingPowerSupplyPercent1,
                inventoryExistingPowerSupplyNum2:
                    values.inventoryExistingPowerSupplyNum2,
                inventoryExistingPowerSupplyPercent2:
                    values.inventoryExistingPowerSupplyPercent2,
                inventoryExistingPowerSupplySpecify:
                    values.inventoryExistingPowerSupplySpecify,
                inventoryExistingPowerSupplyNumTotal:
                    values.inventoryExistingPowerSupplyNumTotal,
                inventoryExistingPowerSupplyPercentTotal:
                    values.inventoryExistingPowerSupplyPercentTotal,
                inventoryFuelUsedNum1: values.inventoryFuelUsedNum1,
                inventoryFuelUsedPercent1: values.inventoryFuelUsedPercent1,
                inventoryFuelUsedNum2: values.inventoryFuelUsedNum2,
                inventoryFuelUsedPercent2: values.inventoryFuelUsedPercent2,
                inventoryFuelUsedNum3: values.inventoryFuelUsedNum3,
                inventoryFuelUsedPercent3: values.inventoryFuelUsedPercent3,
                inventoryFuelUsedNum4: values.inventoryFuelUsedNum4,
                inventoryFuelUsedPercent4: values.inventoryFuelUsedPercent4,
                inventoryFuelUsed4Specify: values.inventoryFuelUsed4Specify,
                inventoryFuelUsedNumTotal: values.inventoryFuelUsedNumTotal,
                inventoryFuelUsedPercentTotal:
                    values.inventoryFuelUsedPercentTotal,
                sourceIncomeCY1: values.sourceIncomeCY1,
                sourceIncomeCY2: values.sourceIncomeCY2,
                sourceIncomeAmount1CY1: values.sourceIncomeAmount1CY1,
                sourceIncomeAmount1CY2: values.sourceIncomeAmount1CY2,
                sourceIncomeAmount2CY1: values.sourceIncomeAmount2CY1,
                sourceIncomeAmount2CY2: values.sourceIncomeAmount2CY2,
                sourceIncomeAmount3CY1: values.sourceIncomeAmount3CY1,
                sourceIncomeAmount3CY2: values.sourceIncomeAmount3CY2,
                sourceIncomeAmount4CY1: values.sourceIncomeAmount4CY1,
                sourceIncomeAmount4CY2: values.sourceIncomeAmount4CY2,
                sourceIncomeAmount5CY1: values.sourceIncomeAmount5CY1,
                sourceIncomeAmount5CY2: values.sourceIncomeAmount5CY2,
                sourceIncomeAmount6CY1: values.sourceIncomeAmount6CY1,
                sourceIncomeAmount6CY2: values.sourceIncomeAmount6CY2,
                sourceIncomeAmount7CY1: values.sourceIncomeAmount7CY1,
                sourceIncomeAmount7CY2: values.sourceIncomeAmount7CY2,
                sourceIncomeAmount7CY1: values.sourceIncomeAmount7CY1,
                sourceIncomeAmount7CY2: values.sourceIncomeAmount7CY2,
                sourceIncomeAmount8CY1: values.sourceIncomeAmount8CY1,
                sourceIncomeAmount8CY2: values.sourceIncomeAmount8CY2,
                sourceIncomeAmount9CY1: values.sourceIncomeAmount9CY1,
                sourceIncomeAmount9CY2: values.sourceIncomeAmount9CY2,
                sourceIncomeAmount10CY1: values.sourceIncomeAmount10CY1,
                sourceIncomeAmount10CY2: values.sourceIncomeAmount10CY2,
                sourceIncomeAmountTotalCY1: values.sourceIncomeAmountTotalCY1,
                sourceIncomeAmountTotalCY2: values.sourceIncomeAmountTotalCY2,
            };

            await Axios.put(
                "http://localhost:3001/submission/brgyProfilePage8",
                data
            );
        };

        updateSubmissionBarangayProfilePage8();
    }, [values]);

    const waterSupplyNumTotal =
        Number(values?.waterSupplyNumHousehold1) +
        Number(values?.waterSupplyNumHousehold2) +
        Number(values?.waterSupplyNumHousehold3) +
        Number(values?.waterSupplyNumHousehold4) +
        Number(values?.waterSupplyNumHousehold5) +
        Number(values?.waterSupplyNumHousehold6) +
        Number(values?.waterSupplyNumHousehold7);

    const waterSupplyPercentTotal =
        Number(
            values?.waterSupplyPercentHousehold1.toString().replace(/%/g, "")
        ) +
        Number(
            values?.waterSupplyPercentHousehold2.toString().replace(/%/g, "")
        ) +
        Number(
            values?.waterSupplyPercentHousehold3.toString().replace(/%/g, "")
        ) +
        Number(
            values?.waterSupplyPercentHousehold4.toString().replace(/%/g, "")
        ) +
        Number(
            values?.waterSupplyPercentHousehold5.toString().replace(/%/g, "")
        ) +
        Number(
            values?.waterSupplyPercentHousehold6.toString().replace(/%/g, "")
        ) +
        Number(
            values?.waterSupplyPercentHousehold7.toString().replace(/%/g, "")
        );

    const inventoryExistingPowerSupplyNumTotal =
        Number(values?.inventoryExistingPowerSupplyNum1) +
        Number(values?.inventoryExistingPowerSupplyNum2);

    const inventoryExistingPowerSupplyPercentTotal =
        Number(
            values?.inventoryExistingPowerSupplyPercent1
                .toString()
                .replace(/%/g, "")
        ) +
        Number(
            values?.inventoryExistingPowerSupplyPercent2
                .toString()
                .replace(/%/g, "")
        );

    const inventoryFuelUsedNumTotal =
        Number(values?.inventoryFuelUsedNum1) +
        Number(values?.inventoryFuelUsedNum2) +
        Number(values?.inventoryFuelUsedNum3) +
        Number(values?.inventoryFuelUsedNum4);

    const inventoryFuelUsedPercentTotal =
        Number(values?.inventoryFuelUsedPercent1.toString().replace(/%/g, "")) +
        Number(values?.inventoryFuelUsedPercent2.toString().replace(/%/g, "")) +
        Number(values?.inventoryFuelUsedPercent3.toString().replace(/%/g, "")) +
        Number(values?.inventoryFuelUsedPercent4.toString().replace(/%/g, ""));

    const sourceIncomeAmountTotalCY1 =
        Number(values?.sourceIncomeAmount1CY1) +
        Number(values?.sourceIncomeAmount2CY1) +
        Number(values?.sourceIncomeAmount3CY1) +
        Number(values?.sourceIncomeAmount4CY1) +
        Number(values?.sourceIncomeAmount5CY1) +
        Number(values?.sourceIncomeAmount6CY1) +
        Number(values?.sourceIncomeAmount7CY1) +
        Number(values?.sourceIncomeAmount8CY1) +
        Number(values?.sourceIncomeAmount9CY1) +
        Number(values?.sourceIncomeAmount10CY1);

    const sourceIncomeAmountTotalCY2 =
        Number(values?.sourceIncomeAmount1CY2) +
        Number(values?.sourceIncomeAmount2CY2) +
        Number(values?.sourceIncomeAmount3CY2) +
        Number(values?.sourceIncomeAmount4CY2) +
        Number(values?.sourceIncomeAmount5CY2) +
        Number(values?.sourceIncomeAmount6CY2) +
        Number(values?.sourceIncomeAmount7CY2) +
        Number(values?.sourceIncomeAmount8CY2) +
        Number(values?.sourceIncomeAmount9CY2) +
        Number(values?.sourceIncomeAmount10CY2);

    // useEffect(() => {
    //     localStorage.setItem("brgyProfilePage8", JSON.stringify(values));
    // }, [values]);

    const handleChange = (e) => {
        setValues((previousValues) => ({
            ...previousValues,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            <p className="font-bold">A. Transportation Facilities</p>
            <p className="mb-2 ml-4 font-bold">A.1 Means of Transportation</p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th rowSpan={2} className="border-r">
                            Transportation Facilities
                        </th>
                        <th colSpan={3} className="border-b">
                            Destination &#40;Please Check&#41;
                        </th>
                    </tr>
                    <tr>
                        <th>Within Barangay</th>
                        <th className="border-x">Within District</th>
                        <th>Within City Proper</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Tricycle</td>
                        <td>
                            <input
                                name="tricycleWithinBarangay"
                                value={values?.tricycleWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="tricycleWithinDistrict"
                                value={values?.tricycleWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="tricycleWithinCityProper"
                                value={values?.tricycleWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Trisikad</td>
                        <td>
                            <input
                                name="trisikadWithinBarangay"
                                value={values?.trisikadWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="trisikadWithinDistrict"
                                value={values?.trisikadWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="trisikadWithinCityProper"
                                value={values?.trisikadWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Jeepney</td>
                        <td>
                            <input
                                name="jeepneyWithinBarangay"
                                value={values?.jeepneyWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="jeepneyWithinDistrict"
                                value={values?.jeepneyWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="jeepneyWithinCityProper"
                                value={values?.jeepneyWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Car</td>
                        <td>
                            <input
                                name="carWithinBarangay"
                                value={values?.carWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="carWithinDistrict"
                                value={values?.carWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="carWithinCityProper"
                                value={values?.carWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Bus</td>
                        <td>
                            <input
                                name="busWithinBarangay"
                                value={values?.busWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="busWithinDistrict"
                                value={values?.busWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="busWithinCityProper"
                                value={values?.busWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">Boat</td>
                        <td></td>
                        <td className="border-x"></td>
                        <td></td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8 border-r">a. Motorized</td>
                        <td>
                            <input
                                name="boatMotorizedWithinBarangay"
                                value={values?.boatMotorizedWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="boatMotorizedWithinDistrict"
                                value={values?.boatMotorizedWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="boatMotorizedWithinCityProper"
                                value={values?.boatMotorizedWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8 border-r">b. Non-Motorized</td>
                        <td>
                            <input
                                name="boatNonMotorizedWithinBarangay"
                                value={values?.boatNonMotorizedWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="boatNonMotorizedWithinDistrict"
                                value={values?.boatNonMotorizedWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="boatNonMotorizedWithinCityProper"
                                value={values?.boatNonMotorizedWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2 border-r">
                            Others &#40;specify&#41;
                            <input
                                name="othersTransportFacilitySpecify"
                                value={values?.othersTransportFacilitySpecify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="othersWithinBarangay"
                                value={values?.othersWithinBarangay}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="othersWithinDistrict"
                                value={values?.othersWithinDistrict}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="othersWithinCityProper"
                                value={values?.othersWithinCityProper}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-4 font-bold">B. Water Supply</p>
            <p className="mb-2 ml-4 font-bold">
                B.1 Inventory of Existing Water Supply
            </p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center">
                    <tr>
                        <th className="w-72">Water Supply</th>
                        <th className="border-x">
                            Number of Households Served
                        </th>
                        <th>&#x25; of Total Households Served</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">
                            1. Communal Water Point Source &#40;Level 1&#41;
                            <span className="font-bold">*</span>
                        </td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold1"
                                value={values?.waterSupplyNumHousehold1}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold1"
                                value={values?.waterSupplyPercentHousehold1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            2. Communal Faucet System &#40;MIWD Level II&#41;
                            <span className="font-bold">**</span>
                        </td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold2"
                                value={values?.waterSupplyNumHousehold2}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold2"
                                value={values?.waterSupplyPercentHousehold2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            3. Water Supply System &#40;MIWD Level III&#41;
                            <span className="font-bold">***</span>
                        </td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold3"
                                value={values?.waterSupplyNumHousehold3}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold3"
                                value={values?.waterSupplyPercentHousehold3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            4. Rain harvesting &#40;use of cisterns, tangke,
                            etc.&#41;
                        </td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold4"
                                value={values?.waterSupplyNumHousehold4}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold4"
                                value={values?.waterSupplyPercentHousehold4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">5. Purchased, delivered</td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold5"
                                value={values?.waterSupplyNumHousehold5}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold5"
                                value={values?.waterSupplyPercentHousehold5}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            6. Individual shallow well, tasok, etc.
                        </td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold6"
                                value={values?.waterSupplyNumHousehold6}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold6"
                                value={values?.waterSupplyPercentHousehold6}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            7. Others &#40;specify&#41;
                            <input
                                name="waterSupply7Specify"
                                value={values?.waterSupply7Specify}
                                type="text"
                                className="w-full focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="waterSupplyNumHousehold7"
                                value={values?.waterSupplyNumHousehold7}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="waterSupplyPercentHousehold7"
                                value={values?.waterSupplyPercentHousehold7}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="font-bold border-t">
                        <td className="pl-2">TOTAL</td>
                        <td className="border-x">
                            <input
                                readOnly
                                name="waterSupplyNumTotal"
                                value={waterSupplyNumTotal}
                                type="number"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                readOnly
                                name="waterSupplyPercentTotal"
                                value={
                                    Math.round(waterSupplyPercentTotal) + "%"
                                }
                                type="text"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-2">
                <div className="flex items-center">
                    <p className="w-10 mr-4 font-bold">*</p>
                    <p>- Communal Deep Well</p>
                </div>
                <div className="flex items-center">
                    <p className="w-10 mr-4 font-bold">**</p>
                    <p>- MIWD Communal Faucet</p>
                </div>
                <div className="flex items-center">
                    <p className="w-10 mr-4 font-bold">***</p>
                    <p>- MIWD Individual Connection</p>
                </div>
            </div>
            <p className="mt-4 font-bold">C. Power Supply</p>
            <p className="mb-2 ml-4 font-bold">
                C.1 Inventory of Existing Power Supply
            </p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center ">
                    <tr>
                        <th className="w-60">Type</th>
                        <th className="border-x">Number of Household Served</th>
                        <th>&#37; of Total Household Served</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">1. Electrical Supply</td>
                        <td className="border-x">
                            <input
                                name="inventoryExistingPowerSupplyNum1"
                                value={values?.inventoryExistingPowerSupplyNum1}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="inventoryExistingPowerSupplyPercent1"
                                value={
                                    values?.inventoryExistingPowerSupplyPercent1
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            2. Others &#40;specify&#41;
                            <input
                                name="inventoryExistingPowerSupplySpecify"
                                value={
                                    values?.inventoryExistingPowerSupplySpecify
                                }
                                type="text"
                                className="w-20 pl-2 focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="inventoryExistingPowerSupplyNum2"
                                value={values?.inventoryExistingPowerSupplyNum2}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="inventoryExistingPowerSupplyPercent2"
                                value={
                                    values?.inventoryExistingPowerSupplyPercent2
                                }
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="font-bold border-t">
                        <td className="pl-2">TOTAL</td>
                        <td className="border-x">
                            <input
                                readOnly
                                name="inventoryExistingPowerSupplyNumTotal"
                                value={inventoryExistingPowerSupplyNumTotal}
                                type="number"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                readOnly
                                name="inventoryExistingPowerSupplyPercentTotal"
                                value={
                                    Math.round(
                                        inventoryExistingPowerSupplyPercentTotal
                                    ) + "%"
                                }
                                type="text"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="mt-4 mb-2 ml-4 font-bold">
                C.2 Inventory of Fuel Used
            </p>
            <table className="w-full text-xs border">
                <thead className="font-bold text-center ">
                    <tr>
                        <th className="w-60">Type</th>
                        <th className="border-x">Number of Household Served</th>
                        <th>&#37; of Total Household Served</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">1. Electricity</td>
                        <td className="border-x">
                            <input
                                name="inventoryFuelUsedNum1"
                                value={values?.inventoryFuelUsedNum1}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="inventoryFuelUsedPercent1"
                                value={values?.inventoryFuelUsedPercent1}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">2. LPG</td>
                        <td className="border-x">
                            <input
                                name="inventoryFuelUsedNum2"
                                value={values?.inventoryFuelUsedNum2}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="inventoryFuelUsedPercent2"
                                value={values?.inventoryFuelUsedPercent2}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">3. Kerosene</td>
                        <td className="border-x">
                            <input
                                name="inventoryFuelUsedNum3"
                                value={values?.inventoryFuelUsedNum3}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="inventoryFuelUsedPercent3"
                                value={values?.inventoryFuelUsedPercent3}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">
                            4. Others &#40;specify&#41;
                            <input
                                name="inventoryFuelUsed4Specify"
                                value={values?.inventoryFuelUsed4Specify}
                                type="text"
                                className="w-20 pl-2 focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td className="border-x">
                            <input
                                name="inventoryFuelUsedNum4"
                                value={values?.inventoryFuelUsedNum4}
                                type="number"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="inventoryFuelUsedPercent4"
                                value={values?.inventoryFuelUsedPercent4}
                                type="text"
                                className="w-full text-center focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="font-bold border-t">
                        <td className="pl-2">TOTAL</td>
                        <td className="border-x">
                            <input
                                readOnly
                                name="inventoryFuelUsedNumTotal"
                                value={inventoryFuelUsedNumTotal}
                                type="number"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                readOnly
                                name="inventoryFuelUsedPercentTotal"
                                value={
                                    Math.round(inventoryFuelUsedPercentTotal) +
                                    "%"
                                }
                                type="text"
                                className="w-full text-center cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className="my-4 font-bold">V. LOCAL ADMINISTRATION DATA</p>
            <p className="mb-2 font-bold">A. Barangay Income</p>

            <table className="w-full text-xs border">
                <thead className="font-bold text-center ">
                    <tr>
                        <th rowSpan={2}>Source of Income</th>
                        <th colSpan={2} className="w-32 border-b border-l">
                            Amount
                        </th>
                    </tr>
                    <tr>
                        <th className="border-x">
                            CY
                            <input
                                name="sourceIncomeCY1"
                                value={values?.sourceIncomeCY1}
                                type="text"
                                className="w-10 ml-1 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </th>
                        <th>
                            CY
                            <input
                                name="sourceIncomeCY2"
                                value={values?.sourceIncomeCY2}
                                type="text"
                                className="w-10 ml-1 text-center border-b border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="pl-2">1. 10&#37; RPTs</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount1CY1"
                                value={values?.sourceIncomeAmount1CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount1CY2"
                                value={values?.sourceIncomeAmount1CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">2. Revenue</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount2CY1"
                                value={values?.sourceIncomeAmount2CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount2CY2"
                                value={values?.sourceIncomeAmount2CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">3. Aid to Barangay</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount3CY1"
                                value={values?.sourceIncomeAmount3CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount3CY2"
                                value={values?.sourceIncomeAmount3CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">a. Municipal/City</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount4CY1"
                                value={values?.sourceIncomeAmount4CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount4CY2"
                                value={values?.sourceIncomeAmount4CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">b. Provincial</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount5CY1"
                                value={values?.sourceIncomeAmount5CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount5CY2"
                                value={values?.sourceIncomeAmount5CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-8">c. National</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount6CY1"
                                value={values?.sourceIncomeAmount6CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount6CY2"
                                value={values?.sourceIncomeAmount6CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">4. Interest Income</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount7CY1"
                                value={values?.sourceIncomeAmount7CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount7CY2"
                                value={values?.sourceIncomeAmount7CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">5. Contribution</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount8CY1"
                                value={values?.sourceIncomeAmount8CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount8CY2"
                                value={values?.sourceIncomeAmount8CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">6. Others - Collection</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount9CY1"
                                value={values?.sourceIncomeAmount9CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount9CY2"
                                value={values?.sourceIncomeAmount9CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="border-t">
                        <td className="pl-2">7. Others - Rent Income</td>
                        <td className="border-x">
                            <input
                                name="sourceIncomeAmount10CY1"
                                value={values?.sourceIncomeAmount10CY1}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                name="sourceIncomeAmount10CY2"
                                value={values?.sourceIncomeAmount10CY2}
                                type="number"
                                className="w-full pr-2 text-right border-black focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr className="font-bold border-t">
                        <td className="pl-8 text-center">TOTAL</td>
                        <td className="border-x">
                            <input
                                readOnly
                                name="sourceIncomeAmountTotalCY1"
                                value={sourceIncomeAmountTotalCY1}
                                type="number"
                                className="w-full pr-2 text-right border-black cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <input
                                readOnly
                                name="sourceIncomeAmountTotalCY2"
                                value={sourceIncomeAmountTotalCY2}
                                type="number"
                                className="w-full pr-2 text-right border-black cursor-default focus:outline-none"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default SubmissionBarangayProfilePage8;
