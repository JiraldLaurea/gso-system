import React from "react";
import useSWR from "swr";
import RequirementsButton from "../../components/RequirementsButton";

function updatedSubmissions() {
    const { data: updatedBarangayProfile } = useSWR(
        "http://localhost:3001/shortenedSubmission/getAllUpdatedUserBarangayProfileYearSubmitted"
    );

    const { data: updatedSketch } = useSWR(
        "http://localhost:3001/sketch/getAllUpdatedUserSketchYearSubmitted"
    );

    const { data: updatedProgram } = useSWR(
        "http://localhost:3001/programs/getAllUpdatedUserProgramsYearSubmitted"
    );

    const { data: updatedFundingReq } = useSWR(
        "http://localhost:3001/fundingReq/getAllUpdatedUserFundingReqYearSubmitted"
    );

    const { data: updatedMoa } = useSWR(
        "http://localhost:3001/moa/getAllUpdatedUserMoaYearSubmitted"
    );

    const { data: updatedJunkshop } = useSWR(
        "http://localhost:3001/junkshop/getAllUpdatedUserJunkshopYearSubmitted"
    );

    const { data: updatedBusinessPermit } = useSWR(
        "http://localhost:3001/businessPermit/getAllUpdatedUserBusinessPermitYearSubmitted"
    );

    const { data: updatedExecutiveOrder } = useSWR(
        "http://localhost:3001/executiveOrder/getAllUpdatedUserExecutiveOrderYearSubmitted"
    );

    const { data: updatedBarangayOrdinance } = useSWR(
        "http://localhost:3001/barangayOrdinance/getAllUpdatedUserBarangayOrdinanceYearSubmitted"
    );

    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">
                    Updated submissions
                </h2>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
                    <RequirementsButton
                        requirement={
                            updatedBarangayProfile &&
                            updatedBarangayProfile[0].yearSubmitted != null
                        }
                        path="/user/updatedSubmissions/barangayProfile"
                        requirementName="Barangay profile"
                    />
                    <RequirementsButton
                        requirement={updatedSketch?.length != 0}
                        path="/user/updatedSubmissions/sketch"
                        requirementName="Sketch"
                    />
                    <RequirementsButton
                        requirement={updatedProgram?.length != 0}
                        path="/user/updatedSubmissions/programs"
                        requirementName="Programs"
                    />
                    <RequirementsButton
                        requirement={updatedFundingReq?.length != 0}
                        path="/user/updatedSubmissions/fundingReq"
                        requirementName="Funding requirements"
                    />
                    <RequirementsButton
                        requirement={updatedMoa?.length != 0}
                        path="/user/updatedSubmissions/memorandumOfAgreement"
                        requirementName="Memorandum of agreement"
                    />
                    <RequirementsButton
                        requirement={updatedJunkshop?.length != 0}
                        path="/user/updatedSubmissions/junkshop"
                        requirementName="Junkshop"
                    />
                    <RequirementsButton
                        requirement={updatedBusinessPermit?.length != 0}
                        path="/user/updatedSubmissions/businessPermit"
                        requirementName="Business permit"
                    />
                    <RequirementsButton
                        requirement={updatedExecutiveOrder?.length != 0}
                        path="/user/updatedSubmissions/executiveOrder"
                        requirementName="Executive order"
                    />
                    <RequirementsButton
                        requirement={updatedBarangayOrdinance?.length != 0}
                        path="/user/updatedSubmissions/barangayOrdinance"
                        requirementName="Barangay ordinance"
                    />
                </div>
            </div>
        </div>
    );
}

export default updatedSubmissions;
