import Image from "next/image";
import Link from "next/link";

export default function ServicesCard({
  title,
  content,
  link,
  icon,
  width = "100%",
  height = "410px",
  marginBottom = "20px",
}) {
  const TickIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4 inline"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  return (
    <div
      style={{ width, height, marginBottom }}
      className="py-1 md:py-2 px-4 bg-light-pink rounded-xl text-dark-pink flex flex-col justify-start text-center"
    >
      {icon}

      <h3 className="mb-5 text-[16px] font-bold font-sans rounded-3xl p-1 bg-dark-pink text-light-pink">
        {title}
      </h3>

      {content && (
        <ul className="text-sm">
          {content.map((service) => (
            <li key={service.toUpperCase()}>
              <p className="mb-4 text-[16px] font-medium">
                <TickIcon /> {service.toUpperCase()}
              </p>
            </li>
          ))}
        </ul>
      )}

      {link && (
        <Link href="/#contact-us" className="mt-5">
          CONTACT US NOW!{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 inline"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
