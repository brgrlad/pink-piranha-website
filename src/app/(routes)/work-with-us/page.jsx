import React from "react";

export default function WorkWithUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 p-5 md:p-10">
      <div className="formWrapper w-[100%] col-span-2 flex flex-col order-2 lg:order-1">
        <h2 className="text-4xl md:text-6xl py-5">Work with us!</h2>
        <form className="mb-20">
          <div className="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-pink-800"
            >
              Name
            </label>
            <input
              type="text"
              id="base-input"
              className="bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 block w-full p-2.5"
            />
          </div>
          <div className="mb-5">
            <label
              for="base-input"
              className="block mb-2 text-sm font-medium text-pink-800"
            >
              E-mail Address
            </label>
            <input
              type="e-mail"
              id="base-input"
              className="bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 block w-full p-2.5"
            />
          </div>

          <label
            for="message"
            className="block mb-2 text-sm font-medium text-pink-800"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm bg-pink-100 border border-pink-500 text-pink-800 rounded-2xl focus:ring-pink-900 focus:border-pink-900"
            placeholder="Tell us about yourself..."
          ></textarea>

          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full absolute my-5">
            Send Message
          </button>
        </form>
      </div>

      <div className="formText py-4 lg:px-8 lg:py-[120px] order-1 lg:order-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa
          rerum repudiandae omnis dicta. quod!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ullam!
        </p>
      </div>
    </section>
  );
}
