import bentoImage from "../../../public/crowd.jpeg";
import Image from "next/image";

export default function ServicesBento() {
  return (
    <section className="w-full py-10 md:px-10 px-5 flex flex-end mt-[-80px]">
      {/* left side */}

      <div class="grid grid-cols-1 gap-y-[10px] w-1/3 overflow-hidden justify-end items-baseline border-2">
        <div class="flex h-[400px] w-[400px] self-end">
          <Image
            src={bentoImage}
            alt="placeholder image"
            class="rounded-3xl h-full"
          />
        </div>

        <div class="flex h-[400px] w-[400px] self-end">
          <Image
            src={bentoImage}
            alt="placeholder image"
            class="rounded-3xl h-full"
          />
        </div>
        <div class="flex h-[400px] w-[400px] self-end">
          <Image
            src={bentoImage}
            alt="placeholder image"
            class="rounded-3xl h-full"
          />
        </div>
      </div>

      {/* right side */}

      <div class="grid grid-cols-2 gap-[10px] w-2/3 px-4 items-end overflow-hidden">
        <div class="flex items-center justify-center h-[200px] col-span-1 self-end"></div>
        <div class="flex items-center justify-center h-[200px] col-span-1 self-end"></div>
        <div class="flex items-center justify-center h-[600px] col-span-2 self-end">
          <Image
            src={bentoImage}
            alt="placeholder image"
            class="rounded-3xl h-full"
          />
        </div>
        <div class="flex items-center justify-center h-[400px] col-span-1 self-end">
          <Image
            src={bentoImage}
            alt="placeholder image"
            class="rounded-3xl h-full"
          />
        </div>
        <div class="flex items-center justify-center h-[400px] col-span-1 self-end">
          <Image
            src={bentoImage}
            alt="placeholder image"
            class="rounded-3xl h-full"
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div class="grid grid-cols-3 gap-10 rounded shadow-md">
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          1
        </div>
        <div class="flex items-center justify-center h-12"></div>
        <div class="flex items-center justify-center h-12"></div>
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          4
        </div>
        <div class="flex items-center justify-center h-96 col-span-2 bg-blue-500 text-white">
          5
        </div>
        <div class="flex items-center justify-center h-24 bg-blue-500 text-white">
          6
        </div>
        <div class="flex items-center justify-center h-24 bg-blue-500 text-white">
          7
        </div>
        <div class="flex items-center justify-center h-24 bg-blue-500 text-white">
          8
        </div>
      </div> */
}
