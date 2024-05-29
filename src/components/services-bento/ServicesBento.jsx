import bentoImage from "../../../public/crowd.jpeg";
import waves from "../../../public/img/waves/svg-2.png";
import bubbleTrio from "../../../public/img/bubbles/bubble_trio_1.png";
import Image from "next/image";

export default function ServicesBento() {
  return (
    <section className="py-5 z-50 relative">
      <Image
        src={waves}
        alt="section divider: an illustration of sea waves in shades of pink"
        className="section-divider h-[150px]"
      />

      <Image
        src={bubbleTrio}
        alt="bubles"
        className="w-[300px] absolute left-[35%] top-[-10%] rotate-180"
      />

      <div
        className="contentWrapper  text-pink-800 bg-pink-400 p-8 -mt-[20px] rounded-3xl"
        style={{ backgroundColor: "rgb(254 118 175)" }}
      >
        <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl text-pink-200 ml-8">
          Photo Gallery
        </h2>

        <p className="ml-8">Fresh snaps from our Instagram page!</p>
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
