import React from "react";
import { useRouter } from "next/router";

function requirementsButton({ requirement, path, requirementName, isAdmin }) {
    const router = useRouter();

    return (
        <div
            onClick={() => {
                if (requirement || isAdmin) {
                    router.push(path);
                }
            }}
            className={`flex select-none items-center justify-center w-full p-4 text-center border rounded-sm cursor-pointer  ${
                !requirement && !isAdmin
                    ? "bg-gray-300 border-gray-300 text-gray-500 hover:cursor-not-allowed"
                    : "hover:border-blue-500"
            }`}
        >
            <p>{requirementName}</p>
        </div>
    );
}

export default requirementsButton;
