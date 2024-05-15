import logo from "../../../public/gradients/logo.png";
import Image from "next/image";

export default function WelcomeCard() {
  return (
    <section class="bg-pink-200 md:px-10 px-5 rounded-3xl">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h2 className=" text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl">
            WELCOME TO <span className="sm:inline block"> PINK PIRANHA </span>
          </h2>

          <h3 className="lg:text-nowrap text-1xl line lg:text-5xl leading-tight">
            Where events come alive with the perfect team
          </h3>

          <p class="md:w-2/3 xl:w-3/2 mb-6 lg:mb-8 md:text-lg lg:text-xl mt-10">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Perferendis, officiis.
          </p>

          {/* <p class="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl mt-10 md:w-1/2">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p> */}
        </div>

        {/* <div class="lg:mt-0 lg:col-span-5 lg:flex border-2 "> */}
        <Image
          src={logo}
          width={300}
          alt="Pink Piranha logo"
          className="md:absolute md:right-10 md:mt-[200px] mx-auto sm:w-[300px] xl:w-[400px]  md:top-[800px]"
        />
        {/* </div> */}
      </div>
    </section>
  );
}
