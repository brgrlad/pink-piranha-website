import Image from "next/image";
import logo from "../../../public/gradients/logo.png";
import LinkCard from "../link-card/LinkCard";
LinkCard;

Image;

export default function Footer() {
  return (
    <footer>
      <div class="mx-auto p-1 md:p-10">
        <div class="flex md:flex-row flex-col justify-between items-center ">
          <Image src={logo} alt="pink piranha logo" class="w-[60%]" />

          <div class="flex flex-col items-center mb-6 text-sm font-medium w-[100%] md:w-[40%]">
            <LinkCard
              title={"WORK WITH US!"}
              width="90%"
              marginBottom="5"
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolor porro est mollitia enim iste ab rerum, minimaautem aspernatur?"
              }
            />
            <LinkCard
              title={"REACH OUT!"}
              width="90%"
              marginBottom="5"
              content={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolor porro est mollitia enim iste ab rerum, minimaautem aspernatur?"
              }
            />
          </div>
        </div>

        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          delectus.
        </span>
      </div>
    </footer>
  );
}
