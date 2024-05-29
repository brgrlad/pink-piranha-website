import bentoImage from "../../../public/crowd.jpeg";
import waves from "../../../public/img/waves/svg-2.png";
import bubbleTrio from "../../../public/img/bubbles/bubble_trio_1.png";
import Image from "next/image";

export default function ServicesBento() {
  return (
    <section className="py-5 relative">
      <Image
        src={waves}
        alt="section divider: an illustration of sea waves in shades of pink"
        className="section-divider h-[150px]"
      />

      <Image
        src={bubbleTrio}
        alt="bubles"
        className="absolute  w-[150px] md:w-[200px] left-[60%]  lg:w-[250px]  md:left-[30%] lg:left-[45%] xl:left-[40%] top-[-6%] rotate-[150deg] z-40"
      />

      <div
        className="contentWrapper  text-pink-800 bg-pink-400 p-8 -mt-[20px] rounded-3xl"
        style={{ backgroundColor: "rgb(254 118 175)" }}
      >
        <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl text-pink-200 ml-2">
          Photo Gallery
        </h2>

        <p className="ml-2">Fresh snaps from our latest events!</p>
        <div className="grid grid-cols-3 gap-5">
          <Image
            src={bentoImage}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-3xl"
          />
          <Image
            src={bentoImage}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-3xl"
          />

          <Image
            src={bentoImage}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-3xl"
          />
          <Image
            src={bentoImage}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-3xl"
          />
          <Image
            src={bentoImage}
            alt="placeholder"
            className="col-span-2 aspect-[2/1] object-cover rounded-3xl"
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
