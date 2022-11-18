import React from "react";
import DownloadButton from "./DownloadButton";
import EditButton from "./EditButton";

function SubmissionDetail({
    title,
    detailTitle,
    detail,
    hasDetail,
    firstChild,
    hasNoTitle,
    editSelectedBarangay,
    isBarangayProfile,
    download,
    loadingDownload,
}) {
    return (
        <div
            className={`border border-b-0 border-gray-300 bg-gray-50 ${
                firstChild ? "mt-0" : "mt-4"
            }`}
        >
            {!hasNoTitle && (
                <div className="flex items-center justify-between p-4">
                    <p className={`text-lg font-semibold ${hasDetail && ""}`}>
                        {title}
                    </p>
                    <div className="flex items-center">
                        {isBarangayProfile && (
                            <EditButton
                                editSelectedBarangay={editSelectedBarangay}
                            />
                        )}
                        <DownloadButton
                            download={download}
                            loadingDownload={loadingDownload}
                        />
                    </div>
                </div>
            )}
            {hasDetail && (
                <div
                    className={`flex items-center p-4 border-t border-gray-300 ${
                        hasNoTitle && "border-t-0"
                    }`}
                >
                    <p className="mr-4 text-gray-500">{detailTitle}</p>
                    <p className="font-medium">{detail}</p>
                </div>
            )}
        </div>
    );
}

export default SubmissionDetail;
