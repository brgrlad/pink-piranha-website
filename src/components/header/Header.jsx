"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/img/pink-piranha-logo.png";
import Image from "next/image";
import Menu from "../menu/Menu";

export default function Header() {
  // --- STATE THAT WILL OPEN AND CLOSE THE DROP DOWN MENU ---
  let [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed overflow-x-hidden left-0 top-0 flex justify-between items-start w-full p-5 z-50 ">
      <Link href="/#home">
        <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />
      </Link>

      <Link href="work-with-us">
        <button
          type="button"
          className="top-5 left-28 text-dark-pink border-dark-pink bg-light-pink border-transparent border-2 mt-[-35px] focus:outline-none focus:ring-4 text-[8px] md:text-sm md:font-medium rounded-full text-sm px-8 py-1 text-center mb-2 h-10 flex items-end"
        >
          WE`RE HIRING!
        </button>
      </Link>

      <button
        type="button"
        className="shadow-3xl border-2 border-dark-pink text-dark-pink bg-light-pink font-bold rounded-full text-sm  px-8 py-2 text-center mb-2 z-50"
        onClick={() => setShowMenu((prev) => !showMenu)}
      >
        {showMenu ? "CLOSE" : "MENU"}
      </button>

      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </header>
  );
}
