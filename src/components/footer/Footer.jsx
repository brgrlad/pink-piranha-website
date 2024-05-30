import Image from "next/image";
import logo from "../../../public/img/pink-piranha-logo.png";
import LinkCard from "../link-card/LinkCard";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light-pink text-dark-pink font-sans">
      <div className="mx-auto w-full  p-8 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/img/pink-piranha-logo.png"
                alt="FlowBite Logo"
                width="50"
                height="100"
              />
              <span className="self-center text-2xl font-bold whitespace-nowrap ml-2">
                PINK PIRANHA
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 ">
            <div className="sans-serif">
              <h2 className="mb-6 text-sm font-semibold">NAVIGATION</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="/#home" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#what-we-do" className="hover:underline">
                    What We Do
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#photo-gallery" className="hover:underline">
                    Photo Gallery
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/meet-the-team" className="hover:underline">
                    Meet The Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/#contact-us" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      </div>
    </footer>
  );
}
