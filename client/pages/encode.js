import React from "react";
import { useRouter } from "next/router";

function encode() {
    const router = useRouter();
    return (
        <div className="">
            <div className="p-8">
                <h2 className="mb-8 text-xl font-medium">Encode</h2>
                <div className="grid grid-cols-4 gap-4">
                    <div
                        onClick={() =>
                            router.push("/encode/encodeBarangayProfile")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Barangay profile</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/encodeSketch")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Sketch</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/encodePrograms")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Programs</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/encodeFundingReq")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Funding requirements</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/encode/encodeMemorandumOfAgreement")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Memorandum of agreement</p>
                    </div>
                    <div
                        onClick={() => router.push("/encode/encodeJunkshop")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Junkshop</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/encode/encodeBusinessPermit")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Business permit</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/encode/encodeExecutiveOrder")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Executive order</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/encode/encodeBarangayOrdinance")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Barangay ordinance</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default encode;
