import Image from "next/image";
import sampleImage from "../../../../public/gradients/2.jpg";

export default function page() {
  return (
    <section className=" p-5 md:p-10">
      <h2 className="text-4xl md:text-6xl py-5">WHAT WE DO</h2>

      <div className="grid  gap-5 py-5 grid-cols-1 sm:grid-cols-2 ">
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" className="rounded-3xl" />
      </div>
    </section>
  );
}
