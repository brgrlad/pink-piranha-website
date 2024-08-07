import Link from "next/link";

export default function LinkCard({
  onClick,
  title,
  content,
  link,
  width = "100%",
  height = "fit-content",
  marginBottom = "20px",
}) {
  return (
    <div
      style={{ width, height, marginBottom }}
      className={` p-4 bg-dark-pink rounded-xl text-pink-200 flex flex-col justify-around`}
    >
      <h3 className="mb-1 md:text-3xl text-lg">{title}</h3>

      <p className="mb-1 text-sm ">{content}</p>

      <Link
        // ---- ON CLICK FUNCTION RECEIVED HERE IS CLOSING THE DROP DOWN MENU ONCE THE USER CLICKS ON THE LINK
        onClick={onClick}
        href={`${link}`}
        className="flex justify-end items-center w-full text-xs"
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
