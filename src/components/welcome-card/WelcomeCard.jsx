import logo from "../../../public/img/pink-piranha-logo.png";
import Image from "next/image";

export default function WelcomeCard() {
  return (
    <section class="bg-pink-200 md:px-10 px-5 rounded-3xl">
      <div class="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 min-h-[40vh] lg:min-h-[80vh]">
        <div class="mr-auto place-self-center lg:col-span-7 border-2 border-lime-300">
          <h2 className=" text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl">
            WELCOME TO <span className="sm:inline block"> PINK PIRANHA </span>
          </h2>

          <h3 className="lg:text-nowrap text-1xl line lg:text-5xl leading-tight mt-5">
            Where events come alive with the perfect team
          </h3>

          <p class="md:text-lg lg:text-xl mt-5 w-[100%] lg:w-[80%]">
            We specialize in providing you with talented and dynamic individuals
            who will assist in bringing your vision to life.
          </p>

          <p class="md:text-lg lg:text-xl mt-5 w-[100%] lg:w-[80%]">
            Whether you're planning a corporate affair, a festival, or an
            intimate gathering, we've got the expertise to ensure your venture
            is successful.
          </p>

          {/* <p class="md:w-2/3 xl:w-2/3 md:text-lg lg:text-xl mt-5"> */}
          <p class="md:text-lg lg:text-xl mt-5 w-[100%] lg:w-[80%]">
            Let's make your next event unforgettable together!{" "}
          </p>
        </div>

        {/* <div class="lg:mt-0 lg:col-span-5 lg:flex border-2 "> */}
        <Image
          src={logo}
          width={300}
          alt="Pink Piranha Logo"
          className="md:absolute md:right-10 mt-5 md:mt-[200px] mx-auto xl:w-[400px]  md:top-[780px]"
        />
        {/* </div> */}
      </div>
    </section>
  );
}
