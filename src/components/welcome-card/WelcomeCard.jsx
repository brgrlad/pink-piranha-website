import Image from "next/image";
import logo from "../../../public/img/pink-piranha-logo.png";

export default function WelcomeCard() {
  return (
    <section className="bg-light-pink text-dark-pink px-5 md:px-10 rounded-3xl  relative mt-[-50px] z-10 shadow-lg">
      <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-auto">
        <div className="place-self-center lg:col-span-12 2xl:col-span-6 2xl:ml-10">
          <h2 className="text-3xl text-nowrap md:text-4xl lg:text-6xl xl:text-7xl">
            WELCOME TO PINK PIRANHA
          </h2>

          <h3 className="lg:text-nowrap text-2xl line lg:text-5xl leading-tight mt-5">
            Where events come alive with the perfect team
          </h3>

          <p className="md:text-lg lg:text-xl mt-5 w-[100%] md:w-[65%] lg:w-[60%] xl:w-[60%] 2xl:w-[100%]">
            We specialize in providing you with talented and dynamic individuals
            who will assist in bringing your vision to life.
          </p>

          <p className="md:text-lg lg:text-xl mt-5 w-[100%] md:w-[45%] lg:w-[60%] xl:w-[60%] 2xl:w-[100%]">
            Whether you`re planning a corporate affair, a festival, or an
            intimate gathering, we`ve got the expertise to ensure your venture
            is successful.
          </p>

          <p className="md:text-lg lg:text-xl mt-5 w-[100%] md:w-[40%] lg:w-[60%] xl:w-[80%]">
            Let`s make your next event unforgettable together!
          </p>
        </div>

        <Image
          src={logo}
          alt="Pink Piranha Logo"
          className="md:absolute md:right-[10px] w-[400px] mx-auto mt-5 xl:w-[600px] md:top-[35%] xl:top-[100px] -rotate-12 2xl:right-[150px]"
        />
      </div>
    </section>
  );
}
