import staff01 from "../../../public/img/photos/staff01.jpg";
import staff02 from "../../../public/img/photos/staff02.jpg";
import staff03 from "../../../public/img/photos/staff03.jpg";
import staff04 from "../../../public/img/photos/staff04.jpg";
import staff05 from "../../../public/img/photos/staff05.jpg";

import waves from "../../../public/img/waves/svg-2.png";
import wavesInverted from "../../../public/img/waves/dark-wave.png";
import bubbleTrio from "../../../public/img/bubbles/bubble_trio_1.png";
import Image from "next/image";

export default function PhotoGallery() {
  return (
    <section className="relative rounded-3xl shadow-lg" id="photo-gallery">
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

      <div className="contentWrapper  text-dark-pink md:px-10 px-5 -mt-[20px] rounded-xl py-10 bg-medium-pink bg-gradient-to-b from-medium-pink via-pink-600 via-60% to-dark-pink">
        <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl text-pink-200 ml-2">
          Photo Gallery
        </h2>

        <p className="ml-2">Fresh snaps from our latest events!</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-5">
          <Image
            src={staff01}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />
          <Image
            src={staff02}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />

          <Image
            src={staff03}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />
          <Image
            src={staff04}
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />
          <Image
            src={staff05}
            alt="placeholder"
            className="col-span-2 aspect-[2/1] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
