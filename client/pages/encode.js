import React from "react";
import { useRouter } from "next/router";

function encode() {
    const router = useRouter();
    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">Encode</h2>
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
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
                </div>
            </div>
        </div>
    );
}

export default encode;
