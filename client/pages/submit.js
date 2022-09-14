import React from "react";
import { useRouter } from "next/router";

function submit() {
    const router = useRouter();
    return (
        <div className="">
            <div className="p-8">
                <h2 className="mb-8 text-xl font-medium">Submit</h2>
                <div className="grid grid-cols-4 gap-4">
                    <div
                        onClick={() =>
                            router.push("/submit/barangayProfileShortened")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Barangay profile</p>
                    </div>
                    <div
                        onClick={() => router.push("/submit/shortenedSketch")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Sketch</p>
                    </div>
                    <div
                        onClick={() => router.push("/submit/shortenedPrograms")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Programs</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/submit/shortenedFundingReq")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Funding requirements</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push(
                                "/submit/shortenedMemorandumOfAgreement"
                            )
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Memorandum of agreement</p>
                    </div>
                    <div
                        onClick={() => router.push("/submit/shortenedJunkshop")}
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Junkshop</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/submit/shortenedBusinessPermit")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Business permit</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/submit/shortenedExecutiveOrder")
                        }
                        className="flex items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer hover:border-blue-500"
                    >
                        <p>Executive order</p>
                    </div>
                    <div
                        onClick={() =>
                            router.push("/submit/shortenedBarangayOrdinance")
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

export default submit;
