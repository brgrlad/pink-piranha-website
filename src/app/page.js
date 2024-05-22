import Hero from "@/components/hero/Hero";
import ServicesBento from "../components/services-bento/ServicesBento";

import WelcomeCard from "@/components/welcome-card/WelcomeCard";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="bg-pink-700 py-5 px-1">
        <WelcomeCard />
        <ServicesBento />
        <WhatWeDo />
      </main>

      <Footer />
    </>
  );
}
