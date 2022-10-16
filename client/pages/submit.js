import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

function submit() {
    const router = useRouter();
    const { data: encodedBarangayProfile } = useSWR(
        "http://localhost:3001/submission/getEncodedBarangayProfile"
    );

    const { data: encodedSketch } = useSWR(
        "http://localhost:3001/submission/getEncodedSketch"
    );

    const { data: encodedProgramsDoc } = useSWR(
        "http://localhost:3001/submission/getEncodedProgramsDoc"
    );

    const { data: encodedFundingReq } = useSWR(
        "http://localhost:3001/submission/getEncodedFundingReq"
    );

    const { data: encodedMoa } = useSWR(
        "http://localhost:3001/submission/getEncodedMoa"
    );

    const { data: encodedJunkshop } = useSWR(
        "http://localhost:3001/submission/getEncodedJunkshop"
    );

    const { data: encodedBusinessPermit } = useSWR(
        "http://localhost:3001/submission/getEncodedBusinessPermit"
    );

    const { data: encodedExecutiveOrder } = useSWR(
        "http://localhost:3001/submission/getEncodedExecutiveOrder"
    );

    const { data: encodedBarangayOrdinance } = useSWR(
        "http://localhost:3001/submission/getEncodedBarangayOrdinance"
    );

    const { data: encodedRecyclableWastes } = useSWR(
        "http://localhost:3001/recyclableWastes/getEncodedRecyclableWastes"
    );

    const search = (arr, n, x) => {
        let i;
        for (i = 0; i < n; i++) if (arr[i] == x) return i;
        return -1;
    };

    let arr = [2, 3, 4, 10, 40];
    let x = 10;
    let n = arr.length;

    let result = search(arr, n, x);
    result == -1
        ? console.log("Element is not present in array")
        : console.log("Element is present at index " + result);

    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">Submit</h2>
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
                    <div
                        onClick={() => {
                            if (encodedBarangayProfile) {
                                router.push("/submit/barangayProfile");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedBarangayProfile
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Barangay profile</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedSketch) {
                                router.push("/submit/sketch");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedSketch
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Sketch</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedProgramsDoc) {
                                router.push("/submit/programs");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedProgramsDoc
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Programs</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedFundingReq) {
                                router.push("/submit/fundingReq");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedFundingReq
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Funding requirements</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedMoa) {
                                router.push("/submit/memorandumOfAgreement");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedMoa
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Memorandum of agreement</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedJunkshop) {
                                router.push("/submit/junkshop");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedJunkshop
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Junkshop</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedBusinessPermit) {
                                router.push("/submit/businessPermit");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedBusinessPermit
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Business permit</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedExecutiveOrder) {
                                router.push("/submit/executiveOrder");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedExecutiveOrder
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Executive order</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedBarangayOrdinance) {
                                router.push("/submit/barangayOrdinance");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedBarangayOrdinance
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Barangay ordinance</p>
                    </div>
                    <div
                        onClick={() => {
                            if (encodedRecyclableWastes) {
                                router.push("/submit/recyclableWastes");
                            }
                        }}
                        className={`flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                            !encodedRecyclableWastes
                                ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                                : "hover:border-blue-500"
                        }`}
                    >
                        <p>Recyclable wastes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default submit;
