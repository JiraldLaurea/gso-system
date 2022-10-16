import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import Axios from "axios";
import fileDownload from "js-file-download";
import { Document, Page } from "react-pdf";
import { getStorage, ref } from "firebase/storage";
import { storage } from "../../../firebase";
import useSWR from "swr";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

function barangayProfile() {
    const router = useRouter();
    const [yearSubmitted, setYearSubmitted] = useState(null);
    const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
    const [dropdownMenuValue, setDropdownMenuValue] = useState("Year");
    const [isViewed, setIsViewed] = useState(false);
    const [loadingDownload, setLoadingDownload] = useState(false);
    const [submissionBarangayProfileUrl, setSubmissionBarangayProfileUrl] =
        useState();
    const [dropdownMenuValueBarangay, setDropdownMenuValueBarangay] =
        useState("Barangay");
    const [dropdownMenuValueDistrict, setDropdownMenuValueDistrict] =
        useState("District");
    const [barangayId, setBarangayId] = useState(null);
    const storage = getStorage();

    const { data: encodedBarangayProfileUrl } = useSWR(
        "http://localhost:3001/shortenedSubmission/getEncodedBarangayProfleUrl"
    );

    // console.log(encodedBarangayProfileUrl?.submissionBarangayProfileUrl);

    const download = async () => {
        if (!loadingDownload) {
            setLoadingDownload(true);

            const documentName = encodedBarangayProfileUrl.documentName;
            Axios({
                url: "http://localhost:3001/download",
                method: "POST",
                responseType: "blob",
                data: {
                    submissionBarangayProfileUrl:
                        encodedBarangayProfileUrl.submissionBarangayProfileUrl,
                },
            }).then((res) => {
                console.log(res);
                fileDownload(res.data, documentName);
                setLoadingDownload(false);
            });
        }
    };

    return (
        <div className="flex flex-col w-full ">
            <div className="p-4 md:p-8">
                <div className="flex items-center mb-8">
                    <Icon
                        onClick={() => router.push("/user/encodedSubmissions")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-medium ">
                        View barangay profile
                    </h2>
                </div>
                <div className="my-4">
                    <div className="flex items-center">
                        <button
                            onClick={download}
                            className={`px-4 py-2 text-white bg-blue-500 border border-blue-500 select-none ${
                                loadingDownload && "cursor-not-allowed"
                            }`}
                        >
                            {!loadingDownload ? "Download" : "Processing..."}
                        </button>
                    </div>
                </div>

                {encodedBarangayProfileUrl ? (
                    <iframe
                        className="w-full h-[800px]"
                        src={`${encodedBarangayProfileUrl.submissionBarangayProfileUrl}`}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default barangayProfile;
