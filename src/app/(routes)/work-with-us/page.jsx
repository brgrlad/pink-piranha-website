"use client";
import { useState } from "react";

export default function WorkWithUs() {
  let [formData, setFormData] = useState({
    firstName: "",
    emailAddress: "",
    uploadedFile: "",
    message: "",
  });

  // HANDLE USER INPUT
  const handleChange = () => {};

  // HANDLE FORM SUBMIT TO BACKEND
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 p-5 md:p-10">
      <div className="formWrapper w-[100%] col-span-2 flex flex-col order-2 lg:order-1">
        <h2 className="text-4xl md:text-6xl py-5">Work with us!</h2>

        {/* FORM WRAPPER */}
        <form className="mb-20" onSubmit={(e) => handleSubmit(e)}>
          {/* FIRST NAME LABEL */}
          <div className="mb-5">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-pink-800"
            >
              Name
            </label>

            {/* FIRST NAME INPUT */}
            <input
              type="text"
              id="FirstName"
              name="firstName"
              className="bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 block w-full p-2.5"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div className="mb-5">
            {/* EMAIL ADDRESS LABEL */}
            <label
              htmlFor="base-input"
              className="block mb-2 text-sm font-medium text-pink-800"
            >
              E-mail Address
            </label>

            {/* EMAIL ADDRESS INPUT */}
            <input
              type="emailAddress"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              className="bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 block w-full p-2.5"
            />
          </div>

          {/* LABEL FOR FILE */}
          <label
            className="block mb-2 text-sm font-medium text-pink-800"
            htmlFor="file_input"
          >
            Upload file or CV (if applicable)
          </label>

          {/* FILE UPLOAD INPUT */}
          <input
            className="block w-full p-2 bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 "
            id="uploadedFile"
            name="uploadedFile"
            type="file"
            value={formData.uploadedFile}
          />

          {/* LABEL FOR MESSAGE */}
          <label
            htmlFor="message"
            type="text"
            id="message"
            name="message"
            value={formData.message}
            className="block mb-2 text-sm font-medium text-pink-800"
          >
            Your message
          </label>

          {/* MESSAGE INPUT */}
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm bg-pink-100 border border-pink-500 text-pink-800 rounded-2xl focus:ring-pink-900 focus:border-pink-900"
            placeholder="Tell us about yourself..."
          ></textarea>

          {/* SUBMIT BUTTON */}
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
