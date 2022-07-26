import React from "react";
import Axios from "axios";
import { useRouter } from "next/router";

function barangayProfile({ savedData, submittedData }) {
    const router = useRouter();
    console.log(savedData);
    const handleClick = async (e, action) => {
        e.preventDefault();

        // console.log(action);

        const data = {
            action: action,
        };

        await Axios.put("http://localhost:3001/submission/updateAction", data);

        console.log(action);
        if (action == "CreateNewDocument") {
            await Axios.post(
                "http://localhost:3001/submission/brgyProfilePages"
            ).then(() => {
                router.push("/submissionBarangayProfile");
            });
        }

        if (action == "LoadDocument" || action == "UpdateSubmission") {
            router.push("/submissionBarangayProfile");
        }

        // if (barangayName != "") {
        //     const data = {
        //         barangayName: barangayName,
        //         districtName: districtName,
        //     };
        //     await Axios.post("http://localhost:3001/barangay", data).then(
        //         (res) => {
        //             console.log(res);
        //             alert("Successfully added barangay");
        //         }
        //     );
        //     setBarangayName("");
        //     setDistrictName("");
        //     mutate("http://localhost:3001/barangay");
        //     mutate("http://localhost:3001/user/barangay");
        // } else {
        //     alert("Please fill in all the forms");
        // }
    };

    return (
        <div className="flex flex-col w-full max-w-5xl">
            <div className="p-8">
                <p className="mb-8 text-xl font-medium">Barangay profile</p>
                <div className="flex space-x-4">
                    <div
                        onClick={(e) => handleClick(e, "CreateNewDocument")}
                        className="flex flex-col items-center w-48 py-2 border rounded-sm cursor-pointer select-none hover:border-blue-400"
                    >
                        <p className="">Create new document</p>
                    </div>
                    <div
                        onClick={(e) => {
                            if (savedData) {
                                handleClick(e, "LoadDocument");
                            }
                        }}
                        className={`flex select-none flex-col items-center  w-48 py-2 border rounded-sm cursor-pointer border-gray-300 hover:border-blue-400 ${
                            !savedData &&
                            "hover:cursor-not-allowed bg-gray-300 hover:border-gray-300 text-gray-500"
                        }`}
                    >
                        <p className="">Load document</p>
                    </div>
                    <div
                        onClick={(e) => {
                            if (submittedData) {
                                handleClick(e, "UpdateSubmission");
                            }
                        }}
                        className={`flex select-none flex-col items-center  w-48 py-2 border rounded-sm cursor-pointer border-gray-300 hover:border-blue-400 ${
                            !submittedData &&
                            "hover:cursor-not-allowed bg-gray-300 hover:border-gray-300 text-gray-500"
                        }`}
                    >
                        <p className="">Update submission</p>
                    </div>
                    <div
                        onClick={() => {
                            if (submittedData) {
                                router.push("/viewSubmissions");
                            }
                        }}
                        className={`flex select-none flex-col items-center  w-48 py-2 border rounded-sm cursor-pointer border-gray-300 hover:border-blue-400 ${
                            !submittedData &&
                            "hover:cursor-not-allowed bg-gray-300 hover:border-gray-300 text-gray-500"
                        }`}
                    >
                        <p className="">View submissions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default barangayProfile;

export const getServerSideProps = async (context) => {
    const me = await fetch("http://localhost:3001/user/me", {
        headers: { Cookie: context.req.headers.cookie },
    }).then((res) => res.json());

    if (me.isAdmin == true) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    const documentData = await fetch(
        "http://localhost:3001/submission/allBrgyProfilePages",
        {
            headers: { Cookie: context.req.headers.cookie },
        }
    ).then((res) => res.json());

    return {
        props: {
            savedData: documentData[0],
            submittedData: documentData[1],
        },
    };
};
