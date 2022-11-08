import React, { useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import BackButton from "../../components/BackButton";
import { Icon } from "@iconify/react";
import { useAuthDispatch } from "../../context/auth";

function barangayProfile({ savedData, submittedData }) {
    const router = useRouter();
    const dispatch = useAuthDispatch();

    useEffect(() => {
        dispatch("HAS_BUTTON_TRUE");
        dispatch("CHANGE_TITLE", "Barangay profile");
        dispatch("CHANGE_PATH", "/submit");
    }, []);

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
                <div className="flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                    <button
                        onClick={(e) => handleClick(e, "CreateNewDocument")}
                        className="flex items-center justify-center text-white transition-colors bg-blue-500 border border-blue-500 rounded-sm hover:bg-blue-600 w-36"
                    >
                        <Icon
                            icon="ic:baseline-add-circle"
                            className="w-6 h-6 mr-2"
                        />
                        Create new
                    </button>
                    <button
                        onClick={(e) => {
                            if (savedData) {
                                handleClick(e, "LoadDocument");
                            }
                        }}
                        className={`flex items-center justify-center w-36 py-2 border rounded-sm border-gray-300  ${
                            !savedData
                                ? "hover:cursor-not-allowed bg-gray-300 text-gray-500"
                                : "border-gray-300 text-blue-600 hover:border-blue-400"
                        }`}
                    >
                        <Icon
                            icon="ic:sharp-upload-file"
                            className="w-6 h-6 mr-2"
                        />
                        Load
                    </button>
                    <div
                        onClick={(e) => {
                            if (submittedData) {
                                handleClick(e, "UpdateSubmission");
                            }
                        }}
                        className={`flex items-center justify-center w-36 border rounded-sm cursor-pointer border-gray-300 ${
                            !submittedData
                                ? "hover:cursor-not-allowed bg-gray-300 text-gray-500"
                                : "border-gray-300 text-blue-600 hover:border-blue-400"
                        }`}
                    >
                        <Icon
                            icon="ic:baseline-update"
                            className="w-6 h-6 mr-2"
                        />
                        Update
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
