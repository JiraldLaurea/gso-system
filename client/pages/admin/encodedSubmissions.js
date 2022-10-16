import React from "react";
import { useRouter } from "next/router";
import RequirementsButton from "../../components/RequirementsButton";

function encodedSubmissions() {
    const router = useRouter();
    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">
                    Encoded submissions
                </h2>
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
                    <RequirementsButton
                        path="/admin/encodedSubmissions/barangayProfile"
                        requirementName="Barangay profile"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/sketch"
                        requirementName="Sketch"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/programs"
                        requirementName="Programs"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/fundingReq"
                        requirementName="Funding requirements"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/memorandumOfAgreement"
                        requirementName="Memorandum of agreement"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/junkshop"
                        requirementName="Junkshop"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/businessPermit"
                        requirementName="Business permit"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/executiveOrder"
                        requirementName="Executive order"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/encodedSubmissions/barangayOrdinance"
                        requirementName="Barangay ordinance"
                        isAdmin
                    />
                </div>
            </div>
        </div>
    );
}

export default encodedSubmissions;
