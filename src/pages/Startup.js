import React from "react";
import image1 from "../images/image_3.png";
import image2 from "../images/image_4.png";
import image3 from "../images/image_5.png";

const Startup = () => {
    return (
        <div className="bg-[#f3f1f1] ">
            <section className="pt-12">
                <div className="text-center">
                    <input
                        type="text"
                        className="border p-1 w-[60%]"
                        placeholder="Search a startup"
                    />{" "}
                    <button className="bg-[blue] text-white px-3 py-1 capitalize font-bold">
                        search
                    </button>
                </div>

                <article className="w-[75%] md:w-[65%] mx-auto  mt-7 pb-2 space-y-10">
                    <section className="grid sm:grid-flow-col gap-7">
                        <div className="border border-gray-400 w-[100px]  md:w-[150px] h-30">
                            <img
                                src={image1}
                                alt=""
                                className="w-full aspect-square "
                            />
                        </div>
                        <div className="border-b  border-gray-400 space-y-2">
                            <h2 className="capitalize text-[blue] text-lg md:text-xl">
                                think and zoom
                            </h2>
                            <h5 className="md:text-base text-sm">
                                providing isuals for visually impaired, such as
                                mind control zooming andwearable controlled
                                zooming{" "}
                            </h5>
                            <button className="border p-2 border-gray-400 capitalize rounded-md md:text-base text-sm">
                                see full details
                            </button>
                        </div>
                    </section>

                    <section className="grid sm:grid-flow-col gap-7">
                        <div className="border border-gray-400 w-[100px]  md:w-[150px] h-30 ">
                            <img
                                src={image2}
                                alt=""
                                className="w-full aspect-square"
                            />
                        </div>
                        <div className="border-b  border-gray-400 space-y-2">
                            <h2 className="capitalize text-[blue] text-lg md:text-xl">
                                slatecube
                            </h2>
                            <h5 className="md:text-base text-sm">
                                slatecube helps job seekers develop job relevant
                                skills gain work experience and land well paying
                                jobs through world class-class up skillng and
                                vrtual intenship.
                            </h5>
                            <button className="border p-2 border-gray-400 capitalize rounded-md text-sm md:text-base">
                                see full details
                            </button>
                        </div>
                    </section>

                    <section className="grid sm:grid-flow-col gap-7">
                        <div className="border border-gray-400 w-[100px] md:w-[150px] h-30 ">
                            <img
                                src={image3}
                                alt=""
                                className="w-full aspect-square"
                            />
                        </div>
                        <div className="border-b  border-gray-400 space-y-2">
                            <h2 className="capitalize text-[blue] text-lg md:text-xl">
                                sleekjob
                            </h2>
                            <h5 className="text-sm md:text-base">
                                train world class developers in ghana and
                                matches them to employment opportunities.job
                                seekers develop job relevant skills gain work
                                experience
                            </h5>
                            <button className="border p-2 border-gray-400 capitalize rounded-md text-sm md:text-base">
                                see full details
                            </button>
                        </div>
                    </section>
                </article>
            </section>
        </div>
    );
};

export default Startup;
