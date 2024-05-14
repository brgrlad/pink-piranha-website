import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-4 py-2 ">
      <h2 className="text-pink-400">Pink Piranha</h2>
      <button
        type="button"
        class=" text-pink-800 bg-pink-400 border-transparent mt-[-50px] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-1 text-center mb-2 h-10 flex items-end"
      >
        STAFF NEEDED: COME WORK WITH US!
      </button>
      <button
        type="button"
        class=" bg-transparent border-4 border-pink-400 text-pink-400 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2"
      >
        MENU
      </button>
    </header>
  );
}
