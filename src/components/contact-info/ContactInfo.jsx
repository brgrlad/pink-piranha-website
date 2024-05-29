import Image from "next/image";
export default function ContactInfo({ icon, contactInfo }) {
  return (
    <div className="callUs flex items-center stroke-pink-200 text-red-800">
      <Image src={icon} alt="icon" width={30} height={30} />
      <p className="ml-2">{contactInfo}</p>
    </div>
  );
}
