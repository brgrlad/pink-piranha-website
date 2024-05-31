import React from "react";
import Header from "../header/Header";

export default function Hero() {
  return (
    <section
      className="hero bg-dark-pink text-pink-200 md:px-10 px-5 py-10 flex "
      id="home"
    >
      <Header />

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center col-span-12 xl:col-span-7">
          <h2 className="max-w-2xl mb-4 mt-20 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl border-0">
            We specialize in the art of assembling exceptional teams that bring
            your vision to life.
          </h2>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl mt-10">
            From concept to execution, we handle the details, ensuring that
            every element of your event is curated with precision and care.
          </p>
        </div>
      </div>
    </section>
  );
}
