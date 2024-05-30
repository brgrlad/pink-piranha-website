import Link from "next/link";
import Image from "next/image";

export default function ServicesCard({
  title,
  iconTest,
  content,
  icon,
  width = "100%",
  height = "400px",
  marginBottom = "20px",
}) {
  return (
    <div
      style={{ width, height, marginBottom }}
      className={`py-1 md:py-2 px-4 bg-light-pink rounded-xl text-dark-pink flex flex-col justify-start text-center`}
    >
      {icon}

      {/* <h3 className="mb-1 text-[22px]">{title}</h3> */}
      <p className="mb-5 text-[16px] font-bold border-[1px] rounded-3xl p-1 bg-dark-pink text-light-pink">
        {title}
      </p>
      <ul className="text-sm">
        {content.map((service) => (
          <li key={service}>
            <p className="mb-4 ">✓ {service}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
