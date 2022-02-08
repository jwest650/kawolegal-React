import React from "react";

const Home = () => {
    return (
        <main className="h-[595px] ">
            <section className="pt-40 ">
                <article className="text-white w-1/3 mx-auto text-center">
                    <h1 className="text-3xl md:text-6xl uppercase ">
                        kawolegal
                    </h1>
                    <h3 className="md:text-2xl p-3">
                        A collaborative ecosystem for problem solvers and
                        support for startups.{" "}
                    </h3>
                    <button className="bg-[#8FD3E8] p-2 px-5 rounded capitalize text-white">
                        register now
                    </button>
                </article>
            </section>
        </main>
    );
};

export default Home;
