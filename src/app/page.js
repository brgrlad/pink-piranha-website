import ServicesBento from "../components/services-bento/ServicesBento";

import WelcomeCard from "@/components/welcome-card/WelcomeCard";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";
import ContactUs from "@/components/contact-us/ContactUs";

export default function Home() {
  return (
    <>
      <main className="bg-pink-700 py-5">
        <WelcomeCard />
        <ServicesBento />
        <WhatWeDo />
        <ContactUs />
      </main>
    </>
  );
}
