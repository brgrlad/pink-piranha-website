export default function ServicesBento() {
  return (
    <section className="w-full py-10 md:px-10 px-5 flex">
      {/* left side */}

      <div class="grid grid-cols-1 gap-y-4 w-1/3">
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          1
        </div>
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          2
        </div>
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          3
        </div>
      </div>

      {/* right side */}

      <div class="grid grid-cols-2 gap-4 w-2/3 px-4">
        <div class="flex items-center justify-center h-72 col-span-2 bg-blue-500 text-white self-end mt-[115px] ">
          4
        </div>
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white self-end">
          5
        </div>
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white self-end">
          6
        </div>
      </div>
    </section>
  );
}

{
  /* <div class="grid grid-cols-3 gap-10 rounded shadow-md">
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          1
        </div>
        <div class="flex items-center justify-center h-12"></div>
        <div class="flex items-center justify-center h-12"></div>
        <div class="flex items-center justify-center h-48 bg-blue-500 text-white">
          4
        </div>
        <div class="flex items-center justify-center h-96 col-span-2 bg-blue-500 text-white">
          5
        </div>
        <div class="flex items-center justify-center h-24 bg-blue-500 text-white">
          6
        </div>
        <div class="flex items-center justify-center h-24 bg-blue-500 text-white">
          7
        </div>
        <div class="flex items-center justify-center h-24 bg-blue-500 text-white">
          8
        </div>
      </div> */
}
