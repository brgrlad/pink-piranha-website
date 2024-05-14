import Hero from "@/components/hero/Hero";

import WelcomeCard from "@/components/welcome-card/WelcomeCard";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="bg-pink-700 py-5 px-1">
        <WelcomeCard />
      </main>
    </>
  );
}
