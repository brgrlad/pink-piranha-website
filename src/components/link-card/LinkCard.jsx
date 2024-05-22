import Link from "next/link";

export default function LinkCard({
  title,
  content,
  link = "http://pinkpiranha.ie",
  height = "200px",
  width = "400px",
  marginBottom = "5",
}) {
  return (
    <div
      style={{ height: height, width: width }}
      className={`py-2 px-4 bg-pink-200 bg-opacity-10 rounded-xl text-pink-200 flex flex-col justify-center mb-${marginBottom}`}
    >
      <h3 class="mb-2">{title}</h3>

      <p class="mb-3 text-sm">{content}</p>

      <Link href="#" class="flex justify-end items-center w-full">
        Know more
        <svg
          class="h-8 w-8 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
