"use client";
import logo from "../../../public/img/pink-piranha-logo.png";
import Image from "next/image";
import Menu from "../menu/Menu";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  let [isClicked, setIsClicked] = useState(false);

  return (
    <header className="fixed overflow-x-hidden left-0 top-0 flex justify-between items-start w-full p-5 z-50 ">
      <Link href="/#home">
        <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />
      </Link>

      <Link href="work-with-us">
        <button
          type="button"
          className=" text-dark-pink border-dark-pink bg-light-pink border-transparent border-2 mt-[-35px] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-8 py-1 text-center mb-2 h-10 flex items-end"
        >
          WE`RE HIRING EVENT STAFF!
        </button>
      </Link>

      <button
        type="button"
        className="shadow-3xl border-2 border-dark-pink text-dark-pink bg-light-pink font-bold rounded-full text-sm  px-8 py-2 text-center mb-2 z-50"
        onClick={() => setIsClicked((prev) => !isClicked)}
      >
        {isClicked ? "CLOSE" : "MENU"}
      </button>

      {isClicked && <Menu setIsClicked={setIsClicked} />}
    </header>
  );
}
