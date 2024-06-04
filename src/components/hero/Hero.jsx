import React from "react";
import Header from "../header/Header";
import arrowSVG from "../../../public/img/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

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
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl mt-5">
            From concept to execution, we handle the details, ensuring that
            every element of your event is curated with precision and care.
          </p>

          <Link href="/#contact-us">
            <button className="whitespace-nowrap shadow-3xl mt-5 h-[40px] bg-dark-pink text-light-pink hover:opacity-70 rounded-full text-sm px-8 py-2 text-center mb-2 z-50 flex">
              Book a consultation now!{" "}
              <Image
                src={arrowSVG}
                alt={"Forward arrow icon"}
                className="ml-2 fill-dark-pink"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
