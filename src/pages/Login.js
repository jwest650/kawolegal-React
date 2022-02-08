import React from "react";

const Login = () => {
    return (
        <div className="h-[595px] pt-10">
            <section className="w-[50%]  mx-auto mt-24">
                <h1 className="text-center capitalize font-bold text-2xl">
                    already a member? login to add your startup
                </h1>
                <form action="" className="sm:ml-20 mt-5">
                    <div className="space-y-4">
                        <label htmlFor="">Email</label>
                        <br />
                        <input
                            type="text"
                            className="border md:w-[80%] w-[100%] rounded-sm"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="">Password</label>
                        <br />
                        <input
                            type="text"
                            className="border md:w-[80%] w-[100%] rounded-sm"
                        />
                    </div>
                    <button className="bg-blue-500 capitalize p-1 px-3 my-5 rounded-sm text-white">
                        Sign in
                    </button>
                </form>
            </section>
        </div>
    );
};

export default Login;
