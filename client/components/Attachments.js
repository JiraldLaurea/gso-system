import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Axios from "axios";
import {
    getDownloadURL,
    ref,
    uploadBytes,
    uploadString,
} from "firebase/storage";
import { storage } from "../firebase";
import useSWR from "swr";

function Attachments({
    isMenuOpen,
    setIsMenuOpen,
    isEncoded,
    isSubmitted,
    setIsEncoded,
    setIsSubmitted,
    isSubmittedAttachments,
    setIsSubmittedAttachments,
    selectedBarangayData,
    yearSubmitted,
    setIsLoading,
    createPDF,
}) {
    const inputFileRefSketch = useRef();
    const inputFileRefPrograms = useRef();
    const inputFileRefFundingReq = useRef();
    const inputFileRefMoa = useRef();
    const inputFileRefJunkshop = useRef();
    const inputFileRefBusinessPermit = useRef();
    const inputFileRefExecutiveOrder = useRef();
    const inputFileRefBarangayOrdinance = useRef();
    const [collectionSchedule, setCollectionSchedule] = useState("");
    const [fileSketch, setFileSketch] = useState(null);
    const [filePrograms, setFilePrograms] = useState(null);
    const [fileFundingReq, setFileFundingReq] = useState(null);
    const [fileMoa, setFileMoa] = useState(null);
    const [fileJunkshop, setFileJunkshop] = useState(null);
    const [fileBusinessPermit, setFileBusinessPermit] = useState(null);
    const [fileExecutiveOrder, setFileExecutiveOrder] = useState(null);
    const [fileBarangayOrdinance, setFileBarangayOrdinance] = useState(null);

    const [fileNameSketch, setFileNameSketch] = useState("");
    const [fileNamePrograms, setFileNamePrograms] = useState("");
    const [fileNameFundingReq, setFileNameFundingReq] = useState("");
    const [fileNameMoa, setFileNameMoa] = useState("");
    const [fileNameJunkshop, setFileNameJunkshop] = useState("");
    const [fileNameBusinessPermit, setFileNameBusinessPermit] = useState("");
    const [fileNameExecutiveOrder, setFileNameExecutiveOrder] = useState("");
    const [fileNameBarangayOrdinance, setFileNameBarangayOrdinance] =
        useState("");
    const [dateOfCreation, setDateOfCreation] = useState("");
    const [junkshopName, setJunkshopName] = useState("");
    const [dateIssuedBusinessPermit, setDateIssuedBusinessPermit] =
        useState("");
    const [dateIssuedExecutiveOrder, setDateIssuedExecutiveOrder] =
        useState("");

    const { data: user } = useSWR("http://localhost:3001/user/me");

    // console.log("SKETCH", fileNameSketch);
    // console.log("PROGRAMS", fileNamePrograms);

    const onChange = (e, setFile, setFileName) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0]?.name);
    };

    const SubmitAttachments = async () => {
        const isSubmitted = await Axios.get(
            "http://localhost:3001/submission/getSubmittedBarangayProfilePage"
        ).then((res) => res.data);

        console.log(isSubmitted);
        if (isSubmitted.length > 0) {
            setIsEncoded(false);
            return alert(
                "You have already encoded a document from this barangay."
            );
        }

        if (
            isSubmitted.length == 0 &&
            collectionSchedule != "" &&
            dateOfCreation != "" &&
            junkshopName != "" &&
            dateIssuedBusinessPermit != "" &&
            dateIssuedExecutiveOrder != "" &&
            fileNameSketch != "" &&
            fileNamePrograms != "" &&
            fileNameFundingReq != "" &&
            fileNameMoa != "" &&
            fileNameJunkshop != "" &&
            fileNameBusinessPermit != "" &&
            fileNameExecutiveOrder != ""
        ) {
            createPDF();

            const extensionSketch = fileNameSketch.substring(
                fileNameSketch.lastIndexOf(".") + 1
            );
            const extensionPrograms = fileNamePrograms.substring(
                fileNamePrograms.lastIndexOf(".") + 1
            );
            const extensionFundingReq = fileNameFundingReq.substring(
                fileNameFundingReq.lastIndexOf(".") + 1
            );
            const extensionMoa = fileNameMoa.substring(
                fileNameMoa.lastIndexOf(".") + 1
            );
            const extensionJunkshop = fileNameJunkshop.substring(
                fileNameJunkshop.lastIndexOf(".") + 1
            );
            const extensionBusinessPermit = fileNameBusinessPermit.substring(
                fileNameBusinessPermit.lastIndexOf(".") + 1
            );
            const extensionExecutiveOrder = fileNameExecutiveOrder.substring(
                fileNameExecutiveOrder.lastIndexOf(".") + 1
            );
            const extensionBarangayOrdinance =
                fileNameBarangayOrdinance.substring(
                    fileNameBarangayOrdinance.lastIndexOf(".") + 1
                );

            const formDataSketch = new FormData();
            formDataSketch.append("file", fileSketch);

            const formDataPrograms = new FormData();
            formDataPrograms.append("file", filePrograms);

            const formDataFundingReq = new FormData();
            formDataFundingReq.append("file", fileFundingReq);

            const formDataMoa = new FormData();
            formDataMoa.append("file", fileMoa);

            const formDataJunkshop = new FormData();
            formDataJunkshop.append("file", fileJunkshop);

            const formDataBusinessPermit = new FormData();
            formDataBusinessPermit.append("file", fileBusinessPermit);

            const formDataExecutiveOrder = new FormData();
            formDataExecutiveOrder.append("file", fileExecutiveOrder);

            const formDataBarangayOrdinance = new FormData();
            formDataBarangayOrdinance.append("file", fileBarangayOrdinance);

            const documentNameSketch = `Sketch${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionSketch}`;

            const documentNamePrograms = `Programs${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionPrograms}`;

            const documentNameFundingReq = `FundingReq${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionFundingReq}`;

            const documentNameMoa = `Moa${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionMoa}`;

            const documentNameJunkshop = `Junkshop${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionJunkshop}`;

            const documentNameBusinessPermit = `BusinessPermit${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionBusinessPermit}`;

            const documentNameExecutiveOrder = `ExecutiveOrder${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionExecutiveOrder}`;

            const documentNameBarangayOrdinance = `BarangayOrdinance${selectedBarangayData.selectedBarangay}${selectedBarangayData.selectedDistrict}${yearSubmitted}.${extensionBarangayOrdinance}`;

            let fileRefSketch = null;
            let fileRefPrograms = null;
            let fileRefFundingReq = null;
            let fileRefMoa = null;
            let fileRefJunkshop = null;
            let fileRefBusinessPermit = null;
            let fileRefExecutiveOrder = null;
            let fileRefBarangayOrdinance = null;

            if (extensionSketch == "doc" || extensionSketch == "docx") {
                fileRefSketch = ref(storage, `${documentNameSketch}`);
            } else {
                fileRefSketch = ref(
                    storage,
                    `submission/sketch/${documentNameSketch}`
                );
            }

            if (extensionPrograms == "doc" || extensionPrograms == "docx") {
                fileRefPrograms = ref(storage, `${documentNamePrograms}`);
            } else {
                fileRefPrograms = ref(
                    storage,
                    `submission/programs/${documentNamePrograms}`
                );
            }

            if (extensionFundingReq == "doc" || extensionFundingReq == "docx") {
                fileRefFundingReq = ref(storage, `${documentNameFundingReq}`);
            } else {
                fileRefFundingReq = ref(
                    storage,
                    `submission/fundingReq/${documentNameFundingReq}`
                );
            }

            if (extensionMoa == "doc" || extensionMoa == "docx") {
                fileRefMoa = ref(storage, `${documentNameMoa}`);
            } else {
                fileRefMoa = ref(
                    storage,
                    `submission/memorandumOfAgreement/${documentNameMoa}`
                );
            }

            if (extensionJunkshop == "doc" || extensionJunkshop == "docx") {
                fileRefJunkshop = ref(storage, `${documentNameJunkshop}`);
            } else {
                fileRefJunkshop = ref(
                    storage,
                    `submission/junkshop/${documentNameJunkshop}`
                );
            }

            if (
                extensionBusinessPermit == "doc" ||
                extensionBusinessPermit == "docx"
            ) {
                fileRefBusinessPermit = ref(
                    storage,
                    `${documentNameBusinessPermit}`
                );
            } else {
                fileRefBusinessPermit = ref(
                    storage,
                    `submission/businessPermit/${documentNameBusinessPermit}`
                );
            }

            if (
                extensionExecutiveOrder == "doc" ||
                extensionExecutiveOrder == "docx"
            ) {
                fileRefExecutiveOrder = ref(
                    storage,
                    `${documentNameExecutiveOrder}`
                );
            } else {
                fileRefExecutiveOrder = ref(
                    storage,
                    `submission/executiveOrder/${documentNameExecutiveOrder}`
                );
            }

            if (
                extensionBarangayOrdinance == "doc" ||
                extensionBarangayOrdinance == "docx"
            ) {
                fileRefBarangayOrdinance = ref(
                    storage,
                    `${documentNameBarangayOrdinance}`
                );
            } else {
                fileRefBarangayOrdinance = ref(
                    storage,
                    `submission/barangayOrdinance/${documentNameBarangayOrdinance}`
                );
            }

            await uploadBytes(fileRefSketch, fileSketch);
            await uploadBytes(fileRefPrograms, filePrograms);
            await uploadBytes(fileRefFundingReq, fileFundingReq);
            await uploadBytes(fileRefMoa, fileMoa);
            await uploadBytes(fileRefJunkshop, fileJunkshop);
            await uploadBytes(fileRefBusinessPermit, fileBusinessPermit);
            await uploadBytes(fileRefExecutiveOrder, fileExecutiveOrder);
            await uploadBytes(fileRefBarangayOrdinance, fileBarangayOrdinance);

            const sketchUrl = await getDownloadURL(fileRefSketch);
            const programsUrl = await getDownloadURL(fileRefPrograms);
            const fundingReqUrl = await getDownloadURL(fileRefFundingReq);
            const moaUrl = await getDownloadURL(fileRefMoa);
            const junkshopUrl = await getDownloadURL(fileRefJunkshop);
            const businessPermitUrl = await getDownloadURL(
                fileRefBusinessPermit
            );
            const executiveOrderUrl = await getDownloadURL(
                fileRefExecutiveOrder
            );
            const barangayOrdinanceUrl = await getDownloadURL(
                fileRefBarangayOrdinance
            );

            const postDataSketch = {
                yearSubmitted: yearSubmitted,
                collectionSchedule: collectionSchedule,
                documentName: documentNameSketch,
                sketchUrl: sketchUrl,
            };

            const postDataPrograms = {
                yearSubmitted: yearSubmitted,
                documentName: documentNamePrograms,
                programsUrl: programsUrl,
            };

            const postDataFundingReq = {
                yearSubmitted: yearSubmitted,
                documentName: documentNameFundingReq,
                fundingReqUrl: fundingReqUrl,
            };

            const postDataMoa = {
                yearSubmitted: yearSubmitted,
                dateOfCreation: dateOfCreation,
                documentName: documentNameMoa,
                memorandumOfAgreementUrl: moaUrl,
            };

            const postDataJunkshop = {
                yearSubmitted: yearSubmitted,
                junkshopName: junkshopName,
                documentName: documentNameJunkshop,
                junkshopUrl: junkshopUrl,
            };

            const postDataBusinessPermit = {
                yearSubmitted: yearSubmitted,
                dateIssued: dateIssuedBusinessPermit,
                documentName: documentNameBusinessPermit,
                businessPermitUrl: businessPermitUrl,
            };

            const postDataExecutiveOrder = {
                yearSubmitted: yearSubmitted,
                dateIssued: dateIssuedExecutiveOrder,
                documentName: documentNameExecutiveOrder,
                executiveOrderUrl: executiveOrderUrl,
            };

            const postDataBarangayOrdinance = {
                yearSubmitted: yearSubmitted,
                documentName: documentNameBarangayOrdinance,
                barangayOrdinanceUrl: barangayOrdinanceUrl,
            };

            await Axios.post(
                "http://localhost:3001/sketch/createSketch",
                postDataSketch
            );

            await Axios.post(
                "http://localhost:3001/programs/createPrograms",
                postDataPrograms
            );

            await Axios.post(
                "http://localhost:3001/fundingReq/createFundingReq",
                postDataFundingReq
            );

            await Axios.post(
                "http://localhost:3001/moa/createMoa",
                postDataMoa
            );

            await Axios.post(
                "http://localhost:3001/junkshop/createJunkshop",
                postDataJunkshop
            );

            await Axios.post(
                "http://localhost:3001/businessPermit/createBusinessPermit",
                postDataBusinessPermit
            );

            await Axios.post(
                "http://localhost:3001/executiveOrder/createExecutiveOrder",
                postDataExecutiveOrder
            );

            await Axios.post(
                "http://localhost:3001/barangayOrdinance/createBarangayOrdinance",
                postDataBarangayOrdinance
            );

            alert("Document successfully submitted.");

            setIsLoading(false);
        } else {
            alert("Please fill in all the attachments.");
        }
        setIsEncoded(false);
    };

    const SubmitUpdatedBarangayProfile = async () => {
        const isEncoded = await Axios.post(
            "http://localhost:3001/submission/getSubmittedBarangayProfilePageUser",
            { yearSubmitted: yearSubmitted }
        ).then((res) => res.data);

        const isSubmitted = await Axios.post(
            "http://localhost:3001/shortenedSubmission/getSubmittedBarangayProfilePageYear",
            { yearSubmitted: yearSubmitted }
        ).then((res) => res.data);

        if (isSubmitted || isEncoded) {
            setIsSubmitted(false);
            return alert(
                "You have already submitted a document from your chosen year."
            );
        }

        if (
            !isSubmitted &&
            !isEncoded &&
            dateIssuedBusinessPermit != "" &&
            fileNameBusinessPermit != ""
        ) {
            createPDF();
        } else {
            alert("Please fill in the business permit attachment.");
        }
        setIsSubmitted(false);
    };

    const SubmitUpdatedAttachments = async () => {
        const extensionSketch = fileNameSketch.substring(
            fileNameSketch.lastIndexOf(".") + 1
        );
        const extensionPrograms = fileNamePrograms.substring(
            fileNamePrograms.lastIndexOf(".") + 1
        );
        const extensionFundingReq = fileNameFundingReq.substring(
            fileNameFundingReq.lastIndexOf(".") + 1
        );
        const extensionMoa = fileNameMoa.substring(
            fileNameMoa.lastIndexOf(".") + 1
        );
        const extensionJunkshop = fileNameJunkshop.substring(
            fileNameJunkshop.lastIndexOf(".") + 1
        );
        const extensionBusinessPermit = fileNameBusinessPermit.substring(
            fileNameBusinessPermit.lastIndexOf(".") + 1
        );
        const extensionExecutiveOrder = fileNameExecutiveOrder.substring(
            fileNameExecutiveOrder.lastIndexOf(".") + 1
        );
        const extensionBarangayOrdinance = fileNameBarangayOrdinance.substring(
            fileNameBarangayOrdinance.lastIndexOf(".") + 1
        );

        const formDataSketch = new FormData();
        formDataSketch.append("file", fileSketch);

        const formDataPrograms = new FormData();
        formDataPrograms.append("file", filePrograms);

        const formDataFundingReq = new FormData();
        formDataFundingReq.append("file", fileFundingReq);

        const formDataMoa = new FormData();
        formDataMoa.append("file", fileMoa);

        const formDataJunkshop = new FormData();
        formDataJunkshop.append("file", fileJunkshop);

        const formDataBusinessPermit = new FormData();
        formDataBusinessPermit.append("file", fileBusinessPermit);

        const formDataExecutiveOrder = new FormData();
        formDataExecutiveOrder.append("file", fileExecutiveOrder);

        const formDataBarangayOrdinance = new FormData();
        formDataBarangayOrdinance.append("file", fileBarangayOrdinance);

        const documentNameSketch = `Sketch${user.barangayName}${user.districtName}${yearSubmitted}.${extensionSketch}`;

        const documentNamePrograms = `Programs${user.barangayName}${user.districtName}${yearSubmitted}.${extensionPrograms}`;

        const documentNameFundingReq = `FundingReq${user.barangayName}${user.districtName}${yearSubmitted}.${extensionFundingReq}`;

        const documentNameMoa = `Moa${user.barangayName}${user.districtName}${yearSubmitted}.${extensionMoa}`;

        const documentNameJunkshop = `Junkshop${user.barangayName}${user.districtName}${yearSubmitted}.${extensionJunkshop}`;

        const documentNameBusinessPermit = `BusinessPermit${user.barangayName}${user.districtName}${yearSubmitted}.${extensionBusinessPermit}`;

        const documentNameExecutiveOrder = `ExecutiveOrder${user.barangayName}${user.districtName}${yearSubmitted}.${extensionExecutiveOrder}`;

        const documentNameBarangayOrdinance = `BarangayOrdinance${user.barangayName}${user.districtName}${yearSubmitted}.${extensionBarangayOrdinance}`;

        let fileRefSketch = null;
        let fileRefPrograms = null;
        let fileRefFundingReq = null;
        let fileRefMoa = null;
        let fileRefJunkshop = null;
        let fileRefBusinessPermit = null;
        let fileRefExecutiveOrder = null;
        let fileRefBarangayOrdinance = null;

        if (extensionSketch == "doc" || extensionSketch == "docx") {
            fileRefSketch = ref(storage, `${documentNameSketch}`);
        } else {
            fileRefSketch = ref(
                storage,
                `submission/sketch/${documentNameSketch}`
            );
        }

        if (extensionPrograms == "doc" || extensionPrograms == "docx") {
            fileRefPrograms = ref(storage, `${documentNamePrograms}`);
        } else {
            fileRefPrograms = ref(
                storage,
                `submission/programs/${documentNamePrograms}`
            );
        }

        if (extensionFundingReq == "doc" || extensionFundingReq == "docx") {
            fileRefFundingReq = ref(storage, `${documentNameFundingReq}`);
        } else {
            fileRefFundingReq = ref(
                storage,
                `submission/fundingReq/${documentNameFundingReq}`
            );
        }

        if (extensionMoa == "doc" || extensionMoa == "docx") {
            fileRefMoa = ref(storage, `${documentNameMoa}`);
        } else {
            fileRefMoa = ref(
                storage,
                `submission/memorandumOfAgreement/${documentNameMoa}`
            );
        }

        if (extensionJunkshop == "doc" || extensionJunkshop == "docx") {
            fileRefJunkshop = ref(storage, `${documentNameJunkshop}`);
        } else {
            fileRefJunkshop = ref(
                storage,
                `submission/junkshop/${documentNameJunkshop}`
            );
        }

        if (
            extensionBusinessPermit == "doc" ||
            extensionBusinessPermit == "docx"
        ) {
            fileRefBusinessPermit = ref(
                storage,
                `${documentNameBusinessPermit}`
            );
        } else {
            fileRefBusinessPermit = ref(
                storage,
                `submission/businessPermit/${documentNameBusinessPermit}`
            );
        }

        if (
            extensionExecutiveOrder == "doc" ||
            extensionExecutiveOrder == "docx"
        ) {
            fileRefExecutiveOrder = ref(
                storage,
                `${documentNameExecutiveOrder}`
            );
        } else {
            fileRefExecutiveOrder = ref(
                storage,
                `submission/executiveOrder/${documentNameExecutiveOrder}`
            );
        }

        if (
            extensionBarangayOrdinance == "doc" ||
            extensionBarangayOrdinance == "docx"
        ) {
            fileRefBarangayOrdinance = ref(
                storage,
                `${documentNameBarangayOrdinance}`
            );
        } else {
            fileRefBarangayOrdinance = ref(
                storage,
                `submission/barangayOrdinance/${documentNameBarangayOrdinance}`
            );
        }

        if (fileNameSketch) {
            await uploadBytes(fileRefSketch, fileSketch);
            const sketchUrl = await getDownloadURL(fileRefSketch);
            const postDataSketch = {
                yearSubmitted: yearSubmitted,
                collectionSchedule: collectionSchedule,
                documentName: documentNameSketch,
                sketchUrl: sketchUrl,
            };
            await Axios.post(
                "http://localhost:3001/sketch/createShortenedSketch",
                postDataSketch
            );
        }

        if (fileNamePrograms) {
            await uploadBytes(fileRefPrograms, filePrograms);
            const programsUrl = await getDownloadURL(fileRefPrograms);
            const postDataPrograms = {
                yearSubmitted: yearSubmitted,
                documentName: documentNamePrograms,
                programsUrl: programsUrl,
            };
            await Axios.post(
                "http://localhost:3001/programs/createShortenedPrograms",
                postDataPrograms
            );
        }

        if (fileNameFundingReq) {
            await uploadBytes(fileRefFundingReq, fileFundingReq);
            const fundingReqUrl = await getDownloadURL(fileRefFundingReq);
            const postDataFundingReq = {
                yearSubmitted: yearSubmitted,
                documentName: documentNameFundingReq,
                fundingReqUrl: fundingReqUrl,
            };
            await Axios.post(
                "http://localhost:3001/fundingReq/createShortenedFundingReq",
                postDataFundingReq
            );
        }

        if (fileNameMoa) {
            await uploadBytes(fileRefMoa, fileMoa);
            const moaUrl = await getDownloadURL(fileRefMoa);
            const postDataMoa = {
                yearSubmitted: yearSubmitted,
                dateOfCreation: dateOfCreation,
                documentName: documentNameMoa,
                memorandumOfAgreementUrl: moaUrl,
            };
            await Axios.post(
                "http://localhost:3001/moa/createShortenedMoa",
                postDataMoa
            );
        }

        if (fileNameJunkshop) {
            await uploadBytes(fileRefJunkshop, fileJunkshop);
            const junkshopUrl = await getDownloadURL(fileRefJunkshop);
            const postDataJunkshop = {
                yearSubmitted: yearSubmitted,
                junkshopName: junkshopName,
                documentName: documentNameJunkshop,
                junkshopUrl: junkshopUrl,
            };
            await Axios.post(
                "http://localhost:3001/junkshop/createShortenedJunkshop",
                postDataJunkshop
            );
        }

        if (fileNameBusinessPermit) {
            await uploadBytes(fileRefBusinessPermit, fileBusinessPermit);
            const businessPermitUrl = await getDownloadURL(
                fileRefBusinessPermit
            );
            const postDataBusinessPermit = {
                yearSubmitted: yearSubmitted,
                dateIssued: dateIssuedBusinessPermit,
                documentName: documentNameBusinessPermit,
                businessPermitUrl: businessPermitUrl,
            };
            await Axios.post(
                "http://localhost:3001/businessPermit/createShortenedBusinessPermit",
                postDataBusinessPermit
            );
        }

        if (fileNameExecutiveOrder) {
            await uploadBytes(fileRefExecutiveOrder, fileExecutiveOrder);
            const executiveOrderUrl = await getDownloadURL(
                fileRefExecutiveOrder
            );
            const postDataExecutiveOrder = {
                yearSubmitted: yearSubmitted,
                dateIssued: dateIssuedExecutiveOrder,
                documentName: documentNameExecutiveOrder,
                executiveOrderUrl: executiveOrderUrl,
            };
            await Axios.post(
                "http://localhost:3001/executiveOrder/createShortenedExecutiveOrder",
                postDataExecutiveOrder
            );
        }

        if (fileNameBarangayOrdinance) {
            await uploadBytes(fileRefBarangayOrdinance, fileBarangayOrdinance);
            const barangayOrdinanceUrl = await getDownloadURL(
                fileRefBarangayOrdinance
            );
            const postDataBarangayOrdinance = {
                yearSubmitted: yearSubmitted,
                documentName: documentNameBarangayOrdinance,
                barangayOrdinanceUrl: barangayOrdinanceUrl,
            };
            await Axios.post(
                "http://localhost:3001/barangayOrdinance/createShortenedBarangayOrdinance",
                postDataBarangayOrdinance
            );
        }

        alert("Document successfully submitted.");

        setIsSubmittedAttachments(false);
        setIsLoading(false);
    };

    useEffect(() => {
        if (isEncoded) {
            SubmitAttachments();
        }
    }, [isEncoded]);

    useEffect(() => {
        if (isSubmitted) {
            SubmitUpdatedBarangayProfile();
        }
    }, [isSubmitted]);

    useEffect(() => {
        if (isSubmittedAttachments) {
            SubmitUpdatedAttachments();
        }
    }, [isSubmittedAttachments]);

    return (
        <div className={`${!isMenuOpen && "invisible"}`}>
            <div
                onClick={() => setIsMenuOpen(false)}
                className="fixed top-0 left-0 z-20 w-screen h-screen bg-gray-700/30"
            />
            <form className="fixed inset-x-0 z-30 w-full max-w-2xl p-4 md:p-6 mx-auto overflow-y-auto bg-white top-0 md:top-24 h-screen md:max-h-[600px]">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold">Attachments</p>
                    <Icon
                        onClick={() => setIsMenuOpen(false)}
                        className="p-1 text-gray-600 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 w-9 h-9"
                        icon="clarity:close-line"
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors
                    ${
                        collectionSchedule && fileNameSketch
                            ? "bg-green-100"
                            : "bg-gray-100"
                    } }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">Route sketch</p>
                        {collectionSchedule && fileNameSketch && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>

                    <p className="mb-1 text-sm text-gray-700 ">
                        Collection schedule
                    </p>
                    <input
                        value={collectionSchedule}
                        placeholder="Collection schedule"
                        onChange={(e) => setCollectionSchedule(e.target.value)}
                        type="text"
                        className="w-full px-2 py-1 mb-2 border focus:outline-none"
                    />
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefSketch}
                        onChange={(e) =>
                            onChange(e, setFileSketch, setFileNameSketch)
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        fileNamePrograms ? "bg-green-100" : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">Programs</p>
                        {fileNamePrograms && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefPrograms}
                        onChange={(e) =>
                            onChange(e, setFilePrograms, setFileNamePrograms)
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        fileNameFundingReq ? "bg-green-100" : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">
                            Funding requirements
                        </p>
                        {fileNameFundingReq && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefFundingReq}
                        onChange={(e) =>
                            onChange(
                                e,
                                setFileFundingReq,
                                setFileNameFundingReq
                            )
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        dateOfCreation && fileNameMoa
                            ? "bg-green-100"
                            : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">
                            Memorandum of agreement
                        </p>
                        {dateOfCreation && fileNameMoa && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">
                        Date of creation
                    </p>
                    <input
                        value={dateOfCreation}
                        placeholder="Date of creation"
                        onChange={(e) => setDateOfCreation(e.target.value)}
                        type="text"
                        className="w-full px-2 py-1 mb-2 border focus:outline-none"
                    />
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefMoa}
                        onChange={(e) =>
                            onChange(e, setFileMoa, setFileNameMoa)
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        junkshopName && fileNameJunkshop
                            ? "bg-green-100"
                            : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">Junkshop</p>
                        {junkshopName && fileNameJunkshop && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">
                        Name of junkshop
                    </p>
                    <input
                        value={junkshopName}
                        placeholder="Name of junkshop"
                        onChange={(e) => setJunkshopName(e.target.value)}
                        type="text"
                        className="w-full px-2 py-1 mb-2 border focus:outline-none"
                    />
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefJunkshop}
                        onChange={(e) =>
                            onChange(e, setFileJunkshop, setFileNameJunkshop)
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        dateIssuedBusinessPermit && fileNameBusinessPermit
                            ? "bg-green-100"
                            : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">Business permit</p>
                        {dateIssuedBusinessPermit && fileNameBusinessPermit && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">Date issued</p>
                    <input
                        value={dateIssuedBusinessPermit}
                        placeholder="Date issued"
                        onChange={(e) =>
                            setDateIssuedBusinessPermit(e.target.value)
                        }
                        type="text"
                        className="w-full px-2 py-1 mb-2 border focus:outline-none"
                    />
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefBusinessPermit}
                        onChange={(e) =>
                            onChange(
                                e,
                                setFileBusinessPermit,
                                setFileNameBusinessPermit
                            )
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        dateIssuedExecutiveOrder && fileNameExecutiveOrder
                            ? "bg-green-100"
                            : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">Executive order</p>
                        {dateIssuedExecutiveOrder && fileNameExecutiveOrder && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">Date issued</p>
                    <input
                        value={dateIssuedExecutiveOrder}
                        placeholder="Date issued"
                        onChange={(e) =>
                            setDateIssuedExecutiveOrder(e.target.value)
                        }
                        type="text"
                        className="w-full px-2 py-1 mb-2 border focus:outline-none"
                    />
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefExecutiveOrder}
                        onChange={(e) =>
                            onChange(
                                e,
                                setFileExecutiveOrder,
                                setFileNameExecutiveOrder
                            )
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>
                <div
                    className={`px-4 pt-4 pb-6 my-6 rounded-[3px] transition-colors  ${
                        fileNameBarangayOrdinance
                            ? "bg-green-100"
                            : "bg-gray-100"
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-medium ">
                            Barangay ordinance
                        </p>
                        {fileNameBarangayOrdinance && (
                            <Icon
                                className="w-6 h-6 text-green-500"
                                icon="ic:round-check-circle"
                            />
                        )}
                    </div>
                    <p className="mb-1 text-sm text-gray-700">Select file</p>
                    <input
                        ref={inputFileRefBarangayOrdinance}
                        onChange={(e) =>
                            onChange(
                                e,
                                setFileBarangayOrdinance,
                                setFileNameBarangayOrdinance
                            )
                        }
                        className="w-full bg-white border"
                        type="file"
                        name="file"
                        id=""
                    />
                </div>

                {/* <button
                    type="submit"
                    className={`px-6 py-1 w-full text-white bg-blue-500 active:ring `}
                >
                    Save
                </button> */}
            </form>
        </div>
    );
}

export default Attachments;
