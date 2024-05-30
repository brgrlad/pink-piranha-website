import logo from "../../../public/img/pink-piranha-logo.png";
import Image from "next/image";

export default function WelcomeCard() {
  return (
    <section className="bg-light-pink text-dark-pink md:px-10 px-5 rounded-3xl relative z-10">
      <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-auto">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h2 className=" text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl">
            WELCOME TO <span className="sm:inline block"> PINK PIRANHA </span>
          </h2>

          <h3 className="lg:text-nowrap text-1xl line lg:text-5xl leading-tight mt-5">
            Where events come alive with the perfect team
          </h3>

          <p className="md:text-lg lg:text-xl mt-5 w-[100%] md:w-[65%] lg:w-[60%] xl:w-[80%]">
            We specialize in providing you with talented and dynamic individuals
            who will assist in bringing your vision to life.
          </p>

          <p className="md:text-lg lg:text-xl mt-5 w-[100%] md:w-[45%] lg:w-[60%] xl:w-[80%]">
            Whether you're planning a corporate affair, a festival, or an
            intimate gathering, we've got the expertise to ensure your venture
            is successful.
          </p>

          {/* <p className="md:w-2/3 xl:w-2/3 md:text-lg lg:text-xl mt-5"> */}
          <p className="md:text-lg lg:text-xl mt-5 w-[100%] md:w-[40%] lg:w-[60%] xl:w-[80%]">
            Let's make your next event unforgettable together!
          </p>
        </div>

        <Image
          src={logo}
          alt="Pink Piranha Logo"
          className="md:absolute md:right-[10px] w-[400px] mx-auto mt-5 xl:w-[600px] md:top-[35%] xl:top-[100px] -rotate-12"
        />
      </div>
    </section>
  );
}
