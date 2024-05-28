import LinkCard from "../link-card/LinkCard";

export default function WhatWeDo() {
  return (
    <section className="bg-pink-700 text-pink-200 sm:p-10 p-1">
      <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl mb-20">
        WHAT WE DO
      </h2>

      <p>
        We specialize in the art of assembling exceptional teams that bring your
        vision to life. From concept to execution, we handle the details,
        ensuring that every element of your event is curated with precision and
        care.
      </p>

      <p>
        At Pink Piranha, we understand that the success of any event lies in the
        people behind it. Our mission is to provide you with a diverse and
        skilled team that caters to your specific needs, whether it`s managing
        entries with efficiency, crafting engaging atmospheres, or adding a
        touch of creativity with unique talents like face painting and
        performances.
      </p>

      <p>
        No event is too big or too small for us. From corporate functions to
        lively festivals, intimate gatherings to grand celebrations, we have the
        expertise and passion to tailor our recruitment services to suit your
        unique requirements. Join us on a journey where events are more than
        just gatherings — they are immersive, memorable experiences crafted by
        the expert hands of Ireland’s event industry professionals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-3 sm-gap-x-0">
        <LinkCard
          title={"Entry management"}
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
