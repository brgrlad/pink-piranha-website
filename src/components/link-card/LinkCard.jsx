import Link from "next/link";

export default function LinkCard({
  title,
  content,
  link,
  width = "100%",
  height = "200px",
  marginBottom = "20px",
}) {
  return (
    <div
      style={{ width, height, marginBottom }}
      className={`py-1 md:py-2 px-4 bg-pink-900 rounded-xl text-pink-200 flex flex-col justify-center`}
    >
      <h3 className="mb-1 md:text-3xl text-lg">{title}</h3>

      <p className="mb-1 text-sm ">{content}</p>

      <Link
        href={`${link}`}
        className="flex justify-end items-center w-full h-3 "
      >
        Know more
        <svg
          className="h-8 w-8 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
