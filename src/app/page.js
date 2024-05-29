import ServicesBento from "../components/services-bento/ServicesBento";

import WelcomeCard from "@/components/welcome-card/WelcomeCard";
import WhatWeDo from "@/components/what-we-do/WhatWeDo";

export default function Home() {
  return (
    <>
      <main className="bg-pink-700 py-5">
        <WelcomeCard />
        <ServicesBento />
        <WhatWeDo />
      </main>
    </>
  );
}
