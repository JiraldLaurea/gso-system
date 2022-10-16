import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import Avatar from "react-avatar";
import { useAuthDispatch, useAuthState } from "../context/auth";
import SidebarMobile from "./SidebarMobile";

function Navbar({ userData }) {
    const { user, authenticated, loading, isSidebarOpen } = useAuthState();
    const router = useRouter();
    const dispatch = useAuthDispatch();
    const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);

    return (
        <>
            {authenticated && !loading && (
                <>
                    <div
                        className={`sticky top-0 hidden md:flex items-center pl-4 pr-6 border-b z-10 h-14 bg-gray-50 select-none ${
                            isSidebarOpen ? "justify-end" : "justify-between"
                        }`}
                    >
                        {!isSidebarOpen && (
                            <div
                                onClick={() => dispatch("OPEN_SIDEBAR")}
                                className="p-2 mr-[9px] hidden md:block rounded-full cursor-pointer active:bg-gray-200"
                            >
                                <Icon
                                    icon="mdi-light:menu"
                                    className="w-6 h-6"
                                />
                            </div>
                        )}

                        <div className="flex items-center py-1 pl-1 pr-4 border rounded-full cursor-pointer select-none">
                            <Avatar
                                name={user?.username}
                                size={32}
                                textSizeRatio={2}
                                className="mr-2 rounded-full "
                            />
                            <p className="">{user?.username}</p>
                            <p>
                                &nbsp;|&nbsp;
                                {user?.barangayName
                                    ? user?.barangayName
                                    : "GSO"}
                            </p>
                        </div>
                    </div>

                    <div
                        className={`sticky top-0 flex md:hidden items-center px-2 border-b z-10 h-14 bg-gray-50 select-none justify-between`}
                    >
                        <div
                            onClick={() => setIsSidebarMobileOpen(true)}
                            className="p-2 mr-[9px] md:hidden rounded-full cursor-pointer active:bg-gray-200"
                        >
                            <Icon icon="mdi-light:menu" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center py-1 pl-1 pr-4 border rounded-full cursor-pointer select-none">
                            <Avatar
                                name={user?.username}
                                size={32}
                                textSizeRatio={2}
                                className="mr-2 rounded-full "
                            />
                            <p className="">{user?.username}</p>
                            <p>
                                &nbsp;|&nbsp;
                                {user?.barangayName
                                    ? user?.barangayName
                                    : "GSO"}
                            </p>
                        </div>
                    </div>
                </>
            )}
            {isSidebarMobileOpen && (
                <SidebarMobile
                    setIsSidebarMobileOpen={() => setIsSidebarMobileOpen(false)}
                />
            )}
        </>
    );
}

export default Navbar;
