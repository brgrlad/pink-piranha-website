import React from "react";
import Image from "next/image";
import LinkCard from "../link-card/LinkCard";
import logo from "../../../public/gradients/logo.png";

export default function WhatWeDo() {
  return (
    <section class="bg-pink-700 text-pink-200 p-10">
      <h2 class="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl mb-20">
        WHAT WE DO
      </h2>

      <div class="grid grid-cols-2 gap-y-1 gap-x-5">
        <LinkCard
          title={"Event Staffing"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laborios."
          }
          height="250px"
          width="full"
          marginBottom="0"
        />
        <LinkCard
          title={"Event Staffing"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laboriosam."
          }
          height={"250px"}
          width="full"
        />

        {/* <Image
          class="absolute top-1/2 left-1/2 "
          src={logo}
          width={100}
          height={100}
          alt="Pink Piranha logo"
        /> */}
        <LinkCard
          title={"Event Staffing"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laboriosam."
          }
          height={"250px"}
          width="full"
        />
        <LinkCard
          title={"Event Staffing"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laboriosam."
          }
          height={"250px"}
          width="full"
        />
      </div>
    </section>
  );
}
