import React from "react";
import Header from "../header/Header";
import LinkCard from "../link-card/LinkCard";
import Menu from "../menu/Menu";

export default function Hero() {
  return (
    <section className="hero bg-pink-900 text-pink-200 px-10 py-10">
      <Header />
      <Menu />

      <div class="grid max-w-screen-xl px-4 py-8 mx-auto mt-10 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl border-0">
            We specialize in the art of assembling exceptional teams that bring
            your vision to life.
          </h2>
          <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl mt-10">
            From concept to execution, we handle the details, ensuring that
            every element of your event is curated with precision and care.
          </p>
        </div>
      </div>
    </section>
  );
}
