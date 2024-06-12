import Image from "next/image";

export default function PhotoGallery() {
  return (
    <section className="relative rounded-4xl shadow-lg " id="photo-gallery">
      <Image
        src="/img/waves/svg-2.png"
        alt="section divider: an illustration of sea waves in shades of pink"
        className="section-divider min-w-full h-[150px]"
        width={500}
        height={100}
      />

      <Image
        src="/img/bubbles/bubble_trio_1.png"
        alt="bubles"
        className="absolute w-[150px] md:w-[200px] left-[60%]  lg:w-[250px]  md:left-[30%] lg:left-[45%] xl:left-[40%] top-[-6%] rotate-[150deg] z-40"
        width={500}
        height={150}
      />

      <div className="contentWrapper px-5 md:px-20 2xl:px-60  -mt-[20px] rounded-xl py-10 bg-medium-pink bg-gradient-to-b from-medium-pink via-medium-pink via-60% to-dark-pink">
        <h2 className="text-4xl lg:text-nowrap md:text-4xl lg:text-6xl xl:text-7xl text-dark-pink">
          PHOTO GALLERY
        </h2>

        <p className="text-light-pink px-2 sm:px-5 rounded-3xl -mt-[5px] mb-10 w-fit bg-dark-pink text-[13px]  sm:text-sm">
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
            width={1000}
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
