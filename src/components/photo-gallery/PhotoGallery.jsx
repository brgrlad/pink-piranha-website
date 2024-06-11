import Image from "next/image";

// import staff01 from "/img/photos/staff01.jpg";
// import staff02 from "/img/photos/staff02.jpg";
// import staff03 from "/img/photos/staff03.jpg";
// import staff04 from "/img/photos/staff04.jpg";
// import staff05 from "/img/photos/staff05.jpg";
// import waves from "/img/waves/svg-2.png";
// import bubbleTrio from "/img/bubbles/bubble_trio_1.png";

export default function PhotoGallery() {
  return (
    <section className="relative rounded-4xl shadow-lg" id="photo-gallery">
      <Image
        src="/img/waves/svg-2.png"
        alt="section divider: an illustration of sea waves in shades of pink"
        className="section-divider h-[150px]"
        width={500}
        height={500}
      />

      {/* <Image
        src="/img/bubbles/bubble_trio1.png"
        alt="bubles"
        className="absolute w-[150px] md:w-[200px] left-[60%]  lg:w-[250px]  md:left-[30%] lg:left-[45%] xl:left-[40%] top-[-6%] rotate-[150deg] z-40"
        width={500}
        height={500}
      /> */}
      <div className="contentWrapper  md:px-10 px-5 -mt-[20px] rounded-xl py-10 bg-medium-pink bg-gradient-to-b from-medium-pink via-medium-pink via-60% to-dark-pink">
        <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl text-dark-pink">
          PHOTO GALLERY
        </h2>

        <p className="text-light-pink px-5 rounded-3xl -mt-[5px] mb-10 w-fit bg-dark-pink text-sm">
          FRESH SNAPS FROM OUR LATEST EVENTS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-5">
          <Image
            width={500}
            height={500}
            src="/img/photos/staff01.jpg"
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />
          <Image
            width={500}
            height={500}
            src="/img/photos/staff02.jpg"
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />

          <Image
            width={500}
            height={500}
            src="/img/photos/staff03.jpg"
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />
          <Image
            width={500}
            height={500}
            src="/img/photos/staff04.jpg"
            alt="placeholder"
            className="aspect-square col-span-1 object-cover rounded-xl"
          />
          <Image
            width={500}
            height={500}
            src="/img/photos/staff05.jpg"
            alt="placeholder"
            className="col-span-2 aspect-[2/1] object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
