"use client";
import logo from "../../../public/img/pink-piranha-logo.png";
import Image from "next/image";
import Menu from "../menu/Menu";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <header className="fixed overflow-x-hidden left-0 top-0 flex justify-between items-start w-full p-5 ">
      <Link href="/">
        <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />
      </Link>

      <Link href="work-with-us">
        <button
          type="button"
          class=" text-pink-800 bg-pink-300 border-transparent mt-[-35px] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-8 py-1 text-center mb-2 h-10 flex items-end"
        >
          EVENT STAFF NEEDED: COME WORK WITH US!
        </button>
      </Link>

      <button
        type="button"
        class="bg-transparent border-4 border-pink-700 text-pink-700  font-bold rounded-full text-sm  px-8 py-2 text-center mb-2 z-50"
        onClick={() => setIsClicked((prev) => !isClicked)}
      >
        {isClicked ? "CLOSE" : "MENU"}
      </button>

      {isClicked && <Menu />}
    </header>
  );
}
