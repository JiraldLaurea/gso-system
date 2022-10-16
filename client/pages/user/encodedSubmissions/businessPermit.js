import Axios from "axios";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import useSWR from "swr";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";

function businessPermit() {
    const router = useRouter();

    const { data } = useSWR(
        "http://localhost:3001/businessPermit/getUserBusinessPermit"
    );

    return (
        <div className="flex flex-col w-full">
            <div className="p-4 md:p-8">
                <div className="flex items-center mb-8">
                    <Icon
                        onClick={() => router.push("/user/encodedSubmissions")}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-semibold ">
                        View business permit
                    </h2>
                </div>
                <hr className="my-6" />
                <div>
                    {data && (
                        <>
                            <p className="mb-4">
                                Date issued:
                                <span className="ml-1">{data.dateIssued}</span>
                            </p>
                            <p className="mb-2">Business permit: {}</p>
                            <div className="w-full max-w-lg bg-black border ">
                                <Image
                                    src={data.businessPermitUrl}
                                    alt="route image"
                                    width="100%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="contain"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default businessPermit;
