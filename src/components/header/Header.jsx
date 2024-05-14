import logo from "../../../public/gradients/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-start w-full">
      <Image src={logo} width={100} height={100} alt="Pink Piranha logo" />

      <button
        type="button"
        class=" text-pink-800 bg-pink-300 border-transparent mt-[-55px] focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-8 py-1 text-center mb-2 h-10 flex items-end"
      >
        STAFF NEEDED: COME WORK WITH US!
      </button>

      <button
        type="button"
        class=" bg-transparent border-4 border-pink-700 text-pink-700  font-medium rounded-full text-sm px-8 py-2 text-center mb-2 z-50"
      >
        MENU
      </button>
    </header>
  );
}
