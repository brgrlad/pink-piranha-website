import logo from "../../../public/gradients/logo.png";
import LinkCard from "../link-card/LinkCard";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <nav className="fixed z-40 top-0 right-0 overflow-hidden bg-pink-400 m-2 rounded-xl p-5 w-[97%]  lg:w-[50%]">
      <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />
      <div class="grid grid-cols-2 gap-4 px-4 pt-4 pb-2">
        <div class="left-column">
          <LinkCard
            title={"WORK WITH US!"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolor porro est mollitia enim iste"
            }
            link="/work-with-us"
          />
          <LinkCard
            title={"REACH OUT!"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dolor porro est mollitia enim iste ab rerum, minimaautem aspernatur?"
            }
            link="/work-with-us"
          />
        </div>
        <div class="right-column">
          <ul className="h-full text-right flex flex-col justify-between text-2xl text-pink-700 font-bold">
            <li>
              <Link href="/" className="bg-pink-300 p-3 rounded-xl ">
                HOME
              </Link>
            </li>

            <li>
              <Link href="/meet-the-team"> MEET THE TEAM </Link>
            </li>
            <li>
              <Link href="/what-we-do"> WHAT WE DO</Link>
            </li>

            <li className="flex justify-end ">
              <Link href="www.google.com">
                <svg
                  class="h-8 "
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
