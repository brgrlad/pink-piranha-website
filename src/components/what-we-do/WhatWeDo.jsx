import LinkCard from "../link-card/LinkCard";

export default function WhatWeDo() {
  return (
    <section class="bg-pink-700 text-pink-200 sm:p-10 p-1 ">
      <h2 class="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl mb-20">
        WHAT WE DO
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 sm-gap-x-0">
        <LinkCard
          title={"Event Staffing"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laborios."
          }
          width="full"
          height="250px"
          marginBottom="0"
        />
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
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laborios."
          }
          height="250px"
          width="full"
          marginBottom="0"
        />
        <LinkCard
          title={"Event Staffing"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam earum? Officiis ducimus ipsum laborios."
          }
          height="250px"
          width="full"
          marginBottom="0"
        />
      </div>
    </section>
  );
}
