import React from "react";
import Image from "next/image";
import sampleImage from "../../../../public/gradients/2.jpg";

export default function MeetTheTeam() {
  return (
    <section className=" p-5 md:p-10">
      <h2 class="text-6xl py-5">MEET THE TEAM</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolorem
        doloremque labore nostrum mollitia ad. Id tempore quod repudiandae esse.
      </p>

      <div class="grid  gap-5 py-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
        <Image src={sampleImage} alt="sample image" class="rounded-3xl" />
      </div>
    </section>
  );
}
