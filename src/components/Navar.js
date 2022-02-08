import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/kawo-legal-logo.png";
const Navar = () => {
    return (
        <div className="fixed top-0 w-full text-sm md:text-lg">
            <div className="flex justify-between  ">
                <div className="">
                    <img
                        src={logo}
                        alt=""
                        className="w-full aspect-auto md:h-11 h-8"
                    />
                </div>
                <section className="flex space-x-3 md:space-x-10 pr-2 md:pr-10 items-center text-red-500">
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-4 border-red-500 p-1 rounded-sm px-3"
                                    : ""
                            }
                        >
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="startup"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-4 border-red-500 p-1 rounded-sm px-3"
                                    : ""
                            }
                        >
                            Startup
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="register"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-4 border-red-500 p-1 rounded-sm px-3"
                                    : ""
                            }
                        >
                            Register
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="login"
                            className={({ isActive }) =>
                                isActive
                                    ? "border-4 border-red-500 p-1 rounded-sm px-3"
                                    : ""
                            }
                        >
                            Login
                        </NavLink>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Navar;
