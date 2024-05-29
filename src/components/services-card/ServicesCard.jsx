import Link from "next/link";

export default function ServicesCard({
  title,
  content,
  icon,
  width = "100%",
  height = "400px",
  marginBottom = "20px",
}) {
  return (
    <div
      style={{ width, height, marginBottom }}
      className={`py-1 md:py-2 px-4 bg-pink-900 rounded-xl text-pink-200 flex flex-col justify-start`}
    >
      {icon}

      {/* <h3 className="mb-1 text-[22px]">{title}</h3> */}
      <p className="mb-5 text-[18px] font-bold">{title}</p>
      <ul className="text-sm list-disc ml-2">
        {content.map((service) => (
          <li key={service}>
            <p className="mb-5">{service}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
