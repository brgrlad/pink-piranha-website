import ServicesBento from "../components/photo-gallery/PhotoGallery";

import WelcomeCard from "@/components/welcome-card/WelcomeCard";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";
import ContactUs from "@/components/contact-us/ContactUs";
import SectionDivider from "@/components/section-divider/SectionDivider";

export default function Home() {
  return (
    <>
      <main className="bg-pink-300 py-5">
        <WelcomeCard />
        <ServicesBento />
        <SectionDivider />
        <WhatWeDo />
        <ContactUs />
      </main>
    </>
  );
}
