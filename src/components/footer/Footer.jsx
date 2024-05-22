import Image from "next/image";
import logo from "../../../public/gradients/logo.png";
import LinkCard from "../link-card/LinkCard";
LinkCard;
import Link from "next/link";

Image;

export default function Footer() {
  return (
    <footer className="mx-auto p-1 md:p-5">
      <div class="flex md:flex-row flex-col justify-between items-center">
        <Image src={logo} alt="pink piranha logo" class="w-[50%] my-5" />

        <div class="flex flex-col items-center mb-6 text-sm font-medium w-[100%] md:w-[50%]">
          <LinkCard
            title={"WORK WITH US!"}
            width="60%"
            marginBottom="5"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolor porro est mollitia enim iste ab rerum, minimaautem aspernatur?"
            }
          />
          <LinkCard
            title={"REACH OUT!"}
            width="60%"
            marginBottom="5"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolor porro est mollitia enim iste ab rerum, minimaautem aspernatur?"
            }
          />
        </div>
      </div>

      <Link href="www.google.com">
        <svg
          class="h-12 ml-auto mx-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </Link>

      <p class="text-sm sm:text-center w-full">
        © 2023 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        delectus.
      </p>
    </footer>
  );
}
