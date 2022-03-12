import { FC, useState } from "react";
import { classNames } from "../utils/classNames";
import { navigation } from "../assets/data/sidebarData";
import SidebarMobile from "./SidebarMobile";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const SidebarWrapper: FC = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <SidebarMobile
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-56 md:flex-col">
                <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
                    <div className="mt-5 flex flex-grow flex-col">
                        <nav className="flex-1 space-y-2 px-2 pb-4">
                            {navigation.map(item => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        classNames(
                                            isActive
                                                ? "bg-gray-100 text-primary-black"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                            "group flex items-center rounded-md py-2 px-2 text-sm font-medium"
                                        )
                                    }
                                    end
                                >
                                    {({ isActive }) => (
                                        <>
                                            <item.icon
                                                className={classNames(
                                                    isActive
                                                        ? "text-primary-black"
                                                        : "text-gray-400 group-hover:text-gray-500",
                                                    "mr-3 h-6 w-6 flex-shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="md:pl-56">
                <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
                    <Navbar setSidebarOpen={setSidebarOpen} />

                    {children}
                </div>
            </div>
        </>
    );
};

export default SidebarWrapper;
