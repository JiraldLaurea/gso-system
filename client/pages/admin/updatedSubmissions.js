import React from "react";
import { useRouter } from "next/router";
import RequirementsButton from "../../components/RequirementsButton";

function updatedSubmissions() {
    const router = useRouter();
    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">View SWM plan</h2>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
                    <RequirementsButton
                        path="/admin/updatedSubmissions/barangayProfile"
                        requirementName="Barangay profile"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/sketch"
                        requirementName="Sketch"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/programs"
                        requirementName="Programs"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/fundingReq"
                        requirementName="Funding requirements"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/memorandumOfAgreement"
                        requirementName="Memorandum of agreement"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/junkshop"
                        requirementName="Junkshop"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/businessPermit"
                        requirementName="Business permit"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/executiveOrder"
                        requirementName="Executive order"
                        isAdmin
                    />
                    <RequirementsButton
                        path="/admin/updatedSubmissions/barangayOrdinance"
                        requirementName="Barangay ordinance"
                        isAdmin
                    />
                </div>
            </div>
        </div>
    );
}

export default updatedSubmissions;
