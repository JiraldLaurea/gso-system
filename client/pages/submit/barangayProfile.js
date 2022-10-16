import React from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";

function barangayProfile({ savedData, submittedData }) {
    const router = useRouter();

    const handleClick = async (e, action) => {
        e.preventDefault();

        // console.log(action);

        const data = {
            action: action,
        };

        await Axios.put(
            "http://localhost:3001/shortenedSubmission/updateAction",
            data
        );

        // console.log(action);
        if (action == "CreateNewDocument") {
            await Axios.post(
                "http://localhost:3001/shortenedSubmission/createShortenedBarangayProfile"
            ).then(() => {
                router.push("/submit/barangayProfile/template");
            });
        }

        if (action == "LoadDocument" || action == "UpdateSubmission") {
            router.push("/submit/barangayProfile/template");
        }
    };

    return (
        <div className="flex flex-col w-full max-w-5xl">
            <div className="p-4 md:p-8">
                <BackButton path="/submit" title="Barangay profile" />
                <div className="flex flex-col md:space-x-4 space-y-4 md:space-y-0 md:flex-row">
                    <div
                        onClick={(e) => handleClick(e, "CreateNewDocument")}
                        className="flex flex-col items-center w-full md:w-48 py-4 border rounded-sm cursor-pointer select-none hover:border-blue-400"
                    >
                        <p className="">Create new document</p>
                    </div>
                    <div
                        onClick={(e) => {
                            if (savedData) {
                                handleClick(e, "LoadDocument");
                            }
                        }}
                        className={`flex select-none flex-col items-center w-full md:w-48 py-4 border rounded-sm cursor-pointer border-gray-300 hover:border-blue-400 ${
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
                        className={`flex select-none flex-col items-center w-full md:w-48 py-4 border rounded-sm cursor-pointer border-gray-300 hover:border-blue-400 ${
                            !submittedData &&
                            "hover:cursor-not-allowed bg-gray-300 hover:border-gray-300 text-gray-500"
                        }`}
                    >
                        <p className="">Update submission</p>
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
        "http://localhost:3001/shortenedSubmission/getAllShortenedBarangayProfile",
        {
            headers: { Cookie: context.req.headers.cookie },
        }
    ).then((res) => res.json());

    const encodedDocument = await fetch(
        "http://localhost:3001/submission/getEncodedDocument",
        {
            headers: { Cookie: context.req.headers.cookie },
        }
    ).then((res) => res.json());

    if (!encodedDocument) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    return {
        props: {
            savedData: documentData[0],
            submittedData: documentData[1],
        },
    };
};
