import Image from "next/image";
import logo from "../../../public/img/pink-piranha-logo.png";
import LinkCard from "../link-card/LinkCard";
LinkCard;
import Link from "next/link";

Image;

export default function Footer() {
  return (
    <footer className="mx-auto p-1 md:p-5">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <Image src={logo} alt="pink piranha logo" className="w-[50%] my-5" />

        <div className="flex flex-col items-center mb-6 text-sm font-medium w-[100%] md:w-[50%]">
          <LinkCard
            title={"WORK WITH US!"}
            width="60%"
            marginBottom="20px"
            content={"Lorem ipsum dolor sit amet,minimaautem aspernatur?"}
          />
          <LinkCard
            title={"REACH OUT!"}
            width="60%"
            marginBottom="20px"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore "
            }
          />
        </div>
      </div>

      <Link href="www.google.com">
        <svg
          className="h-12 ml-auto mx-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </Link>

      <p className="text-sm sm:text-center w-full">
        © 2023 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        delectus.
      </p>
    </footer>
  );
}