import LinkCard from "../link-card/LinkCard";
import ServicesCard from "../services-card/ServicesCard";

export default function WhatWeDo() {
  return (
    <section className="bg-pink-700 text-pink-200 sm:p-10 p-1">
      <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl my-5">
        WHAT WE DO
      </h2>
      <p>
        No event is too big or too small for us. From corporate functions to
        lively festivals, intimate gatherings to grand celebrations, we have the
        expertise and passion to tailor our recruitment services to suit your
        unique requirements.
      </p>
      <p>
        Join us on a journey where events are more than just gatherings — they
        are immersive, memorable experiences crafted by the expert hands of
        Ireland’s event industry professionals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-3 gap-x-3 sm-gap-x-0 py-5">
        <ServicesCard
          title={"ENTRY MANAGEMENT"}
          content={[
            "Ticket Scanners ",
            "Customer Service",
            "Box Office",
            "Stewards",
          ]}
        />
        <ServicesCard
          title={"ENTERTAINMENT"}
          content={[
            "DJ'S",
            "Vocalists",
            "Rollerskaters",
            "Fire Breathers",
            "Face Painting",
          ]}
        />
        <ServicesCard
          title={"EVENT MANAGEMENT"}
          content={[
            "Event Assistants",
            "Artist Liaison",
            "Event Managers",
            "Brand Ambassadors",
            "Dressing Room Management",
          ]}
        />
        <ServicesCard
          title={"OPERATIONAL STAFF"}
          content={[
            "Cleaning team",
            "Bar Staff",
            "Bar Management",
            "Ticketing",
          ]}
        />
      </div>
    </section>
  );
}
