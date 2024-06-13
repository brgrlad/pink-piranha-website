"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "../../../public/img/pink-piranha-logo.png";
import Image from "next/image";
import Menu from "../menu/Menu";

export default function Header() {
  // --- STATE THAT WILL OPEN AND CLOSE THE DROP DOWN MENU ---
  let [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed overflow-x-hidden left-0 top-0 flex justify-between xm:self-center sm:items-start w-full p-5 z-50 ">
      <Link href="/#home">
        <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />
      </Link>

      <Link href="work-with-us">
        <button
          type="button"
          className=" text-dark-pink  bg-light-pink border border-dark-pink   mt-[-40px]  sm:mt-[-35px] focus:outline-none focus:ring-4 text-[10px] sm:text-sm md:font-medium rounded-full text-sm px-2 md:px-4 py-0 text-center mb-2 h-10 flex items-end"
        >
          WE`RE HIRING!
        </button>
      </Link>

      <button
        type="button"
        className="shadow-3xl border border-dark-pink text-dark-pink bg-light-pink font-bold rounded-full text-sm h-[40px] self-center px-8 py-2 text-center mb-2 z-50"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? "CLOSE" : "MENU"}
      </button>

      {/* {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />} */}
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
}
