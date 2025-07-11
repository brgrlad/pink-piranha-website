import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-pink text-light-pink font-sans -mt-[50px] pt-[50px] px-10 lg:px-20">
      <div className="mx-auto w-full py-8 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src="/img/pink-piranha-logo.png"
                alt="Pink Piranha logo"
                width="50"
                height="100"
              />
              <h2 className="self-center text-2xl font-bold whitespace-nowrap ml-2 aventine-font">
                PINK PIRANHA
              </h2>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 w-fit mr-auto sm:w-full md:w-fit  md:ml-auto md:mr-0 sm:text-right gap-2 sm:gap-6 md:gap-8 text-left ">
            <div className="sans-serif">
              <h2 className="mb-6 text-sm font-bold">NAVIGATION</h2>

              <ul className="text-xs">
                <li className="mb-3">
                  <Link href="/#home" className="hover:underline">
                    HOME
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/#what-we-do" className="hover:underline">
                    WHAT WE DO
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="/#photo-gallery" className="hover:underline">
                    PHOTO GALLERY
                  </Link>
                </li>
                {/* <li className="mb-3">
                  <Link href="/meet-the-team" className="hover:underline">
                    MEET THE TEAM
                  </Link>
                </li> */}
                <li className="mb-3">
                  <Link href="/#contact-us" className="hover:underline">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-bold uppercase">Follow us</h2>
              <ul className="text-gray-500400 text-xs">
                <li className="mb-3">
                  <Link
                    href="https://www.instagram.com/pinkpiranha.agency/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:underline"
                  >
                    INSTAGRAM
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    href="https://www.linkedin.com/company/pink-piranha-agency/?originalSubdomain=ie"
                    className="hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    LINKEDIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
