import React from "react";

const Register = () => {
    return (
        <div className="h-[595px] pt-10 bg-[#f3f1f1]">
            <section className="w-[50%] mx-auto mt-10 ">
                <h1 className="text-center capitalize font-bold text-xl md:text-2xl">
                    join kawolegal. sign up to get listed now!
                </h1>
                <form action="" className="md:ml-24 mt-10">
                    <div className="space-y-2">
                        <label htmlFor="" className="capitalize">
                            first name
                        </label>
                        <br />
                        <input
                            type="text"
                            className="md:w-[80%] rounded-sm p-1"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="capitalize">
                            email address
                        </label>
                        <br />
                        <input
                            type="text"
                            className="md:w-[80%] rounded-sm p-1"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="capitalize">
                            password
                        </label>
                        <br />
                        <input
                            type="text"
                            className="md:w-[80%] rounded-sm p-1"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="" className="capitalize">
                            confirm password
                        </label>
                        <br />
                        <input
                            type="text"
                            className="md:w-[80%] rounded-sm p-1"
                        />
                    </div>
                    <button className="p-2 my-4 rounded-sm px-5 bg-blue-500 text-white capitalize">
                        Sign up
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Register;
