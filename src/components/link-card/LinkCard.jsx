export default function LinkCard({ title, content, link }) {
  return (
    <div class="max-w-xs p-6 bg-pink-200 bg-opacity-10 rounded-xl text-pink-200">
      <a href="#">
        <h3 class="mb-2">{title}</h3>
      </a>

      <p class="mb-3 text-sm">{content}</p>

      <a
        href={link}
        class="inline-flex font-medium items-center w-full justify-end text-sm hover:text-pink-300"
      >
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
      </a>
    </div>
  );
}
