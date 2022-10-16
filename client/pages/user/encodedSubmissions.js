import React from "react";
import useSWR from "swr";
import RequirementsButton from "../../components/RequirementsButton";

function encodedSubmissions() {
    const { data: encodedBarangayProfile } = useSWR(
        "http://localhost:3001/submission/getEncodedBarangayProfile"
    );

    const { data: encodedSketch } = useSWR(
        "http://localhost:3001/submission/getEncodedSketch"
    );

    const { data: encodedPrograms } = useSWR(
        "http://localhost:3001/submission/getEncodedProgramsDoc"
    );

    const { data: encodedFundingReq } = useSWR(
        "http://localhost:3001/submission/getEncodedFundingReq"
    );

    const { data: encodedMoa } = useSWR(
        "http://localhost:3001/submission/getEncodedMoa"
    );

    const { data: encodedJunkshop } = useSWR(
        "http://localhost:3001/submission/getEncodedJunkshop"
    );

    const { data: encodedBusinessPermit } = useSWR(
        "http://localhost:3001/submission/getEncodedBusinessPermit"
    );

    const { data: encodedExecutiveOrder } = useSWR(
        "http://localhost:3001/submission/getEncodedExecutiveOrder"
    );

    const { data: encodedBarangayOrdinance } = useSWR(
        "http://localhost:3001/submission/getEncodedBarangayOrdinance"
    );

    return (
        <div className="">
            <div className="p-4 md:p-8">
                <h2 className="mb-8 text-xl font-semibold">
                    Encoded submissions
                </h2>
                <div className="flex flex-col md:grid md:grid-cols-4 gap-4">
                    <RequirementsButton
                        requirement={encodedBarangayProfile}
                        path="/user/encodedSubmissions/barangayProfile"
                        requirementName="Barangay profile"
                    />
                    <RequirementsButton
                        requirement={encodedSketch}
                        path="/user/encodedSubmissions/sketch"
                        requirementName="Sketch"
                    />
                    <RequirementsButton
                        requirement={encodedPrograms}
                        path="/user/encodedSubmissions/programs"
                        requirementName="Programs"
                    />
                    <RequirementsButton
                        requirement={encodedFundingReq}
                        path="/user/encodedSubmissions/fundingReq"
                        requirementName="Funding requirements"
                    />
                    <RequirementsButton
                        requirement={encodedMoa}
                        path="/user/encodedSubmissions/memorandumOfAgreement"
                        requirementName="Memorandum of agreement"
                    />
                    <RequirementsButton
                        requirement={encodedJunkshop}
                        path="/user/encodedSubmissions/junkshop"
                        requirementName="Junkshop"
                    />
                    <RequirementsButton
                        requirement={encodedBusinessPermit}
                        path="/user/encodedSubmissions/businessPermit"
                        requirementName="Business permit"
                    />
                    <RequirementsButton
                        requirement={encodedExecutiveOrder}
                        path="/user/encodedSubmissions/executiveOrder"
                        requirementName="Executive order"
                    />
                    <RequirementsButton
                        requirement={encodedBarangayOrdinance}
                        path="/user/encodedSubmissions/barangayOrdinance"
                        requirementName="Barangay ordinance"
                    />
                </div>
            </div>
        </div>
    );
}

export default encodedSubmissions;
