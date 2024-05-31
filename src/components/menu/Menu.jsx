import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/img/pink-piranha-logo.png";
import LinkCard from "../link-card/LinkCard";

// -- setShowMenu IS BEING PASSED AS A PROP FOR EACH OF THE MENU LINKS.
// -- setShowMenu WILL OPEN/CLOSE THE DROPDOWN MENU
export default function Menu({ setShowMenu }) {
  return (
    <nav className="menuBg fixed z-40 top-0 right-0 bg-pink-400 m-2 rounded-xl p-1 lg:p-5 w-[97%] md:w-[60%] xl:w-[50%] selection:bg-pink-300 shadow-xl bg-gradient-to-r from-pink-400 via-medium-pink to-dark-pink">
      <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 pt-4 pb-2">
        <div className="left-column md:order-1 order-2">
          <LinkCard
            onClick={() => setShowMenu(false)}
            title={"WORK WITH US"}
            content={
              "We're currently hiring for a variety of positions! Send us your CV!"
            }
            link="/#contact-us"
          />

          <LinkCard
            title={"REACH OUT"}
            content={
              "Need a quote, want to discuss your ideas? We're happy to help! "
            }
            link="#contact-us"
          />
        </div>
        <div className="right-column md:order-2 order-1">
          <ul className="h-full pb-10 text-right flex flex-col justify-between text-2xl text-light-pink font-bold">
            <li className="py-2">
              <Link
                href="/#home"
                className="rounded-xl "
                onClick={() => setShowMenu(false)}
              >
                HOME
              </Link>
            </li>

            <li className="py-2">
              <Link
                href="/meet-the-team#photos"
                onClick={() => setShowMenu(false)}
              >
                MEET THE TEAM
              </Link>
            </li>
            <li className="py-2" onClick={() => setShowMenu(false)}>
              <Link href="/#what-we-do"> WHAT WE DO</Link>
            </li>

            <li className="flex justify-end py-2">
              <a
                href={"https://www.instagram.com/pinkpiranha.agency"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                INSTAGRAM
                <svg
                  className="h-8 ml-2 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
