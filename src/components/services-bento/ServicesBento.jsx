import bentoImage from "../../../public/crowd.jpeg";
import Image from "next/image";

export default function ServicesBento() {
  return (
    <section className="w-full py-10 md:px-10 px-5 flex flex-end mt-[-80px]">
      {/* LEFT SIDE GRID */}

      <div className="grid grid-cols-1 gap-y-[20px] w-1/3 overflow-hidden justify-end items-center">
        <div className="flex w-full self-end aspect-square">
          <Image
            src={bentoImage}
            alt="placeholder image"
            className="rounded-3xl h-full object-cover"
          />
        </div>

        {/* <div className="flex h-[400px] self-end"> */}
        <div className="flex w-full self-end aspect-square">
          <Image
            src={bentoImage}
            alt="placeholder image"
            className="rounded-3xl h-full object-cover"
          />
        </div>
        {/* <div className="flex h-[400px] self-end"> */}
        <div className="flex w-full self-end aspect-square">
          <Image
            src={bentoImage}
            alt="placeholder image"
            className="rounded-3xl h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE GRID */}
      <div className="grid grid-cols-2 gap-[20px] w-2/3 px-4 items-end overflow-hidden">
        <div className="flex items-center justify-center h-[200px] col-span-1 self-end aspect-square w-full"></div>
        <div className="flex items-center justify-center h-[200px] col-span-1 self-end aspect-square w-full"></div>

        <div className="flex items-center justify-center h-[600px] col-span-2 self-end aspect-square w-full">
          <Image
            src={bentoImage}
            alt="placeholder image"
            className="rounded-3xl h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center h-[400px] col-span-1 self-end aspect-square w-full ">
          <Image
            src={bentoImage}
            alt="placeholder image"
            className="rounded-3xl h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center h-[400px] col-span-1 self-end aspect-square w-full">
          <Image
            src={bentoImage}
            alt="placeholder image"
            className="rounded-3xl h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="grid grid-cols-3 gap-10 rounded shadow-md">
        <div className="flex items-center justify-center h-48 bg-blue-500 text-white">
          1
        </div>
        <div className="flex items-center justify-center h-12"></div>
        <div className="flex items-center justify-center h-12"></div>
        <div className="flex items-center justify-center h-48 bg-blue-500 text-white">
          4
        </div>
        <div className="flex items-center justify-center h-96 col-span-2 bg-blue-500 text-white">
          5
        </div>
        <div className="flex items-center justify-center h-24 bg-blue-500 text-white">
          6
        </div>
        <div className="flex items-center justify-center h-24 bg-blue-500 text-white">
          7
        </div>
        <div className="flex items-center justify-center h-24 bg-blue-500 text-white">
          8
        </div>
      </div> */
}
