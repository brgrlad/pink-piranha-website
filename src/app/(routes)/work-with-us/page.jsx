"use client";
import { useReducer, useState } from "react";
import Modal from "@/components/about-card/modal/Modal";

const initialFormData = {
  firstName: "",
  emailAddress: "",
  uploadedFile: "",
  message: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.fieldName]: action.value,
      };
    case "RESET_FORM":
      return initialFormData;
    default:
      return state;
  }
};

export default function WorkWithUs() {
  const [formData, dispatch] = useReducer(formReducer, initialFormData);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", fieldName: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <>
      {showModal && (
        <Modal
          title={`Thank you!`}
          message={"We will reply as soon as possible."}
          onClose={() => setShowModal(false)}
        />
      )}
      <section className="grid grid-cols-1 lg:grid-cols-3 p-5 md:p-10">
        <div className="formWrapper w-[100%] col-span-2 flex flex-col order-2 lg:order-1">
          <h2 className="text-4xl md:text-6xl py-5">Work with us!</h2>

          <form className="mb-20" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="mb-2 text-sm font-medium text-pink-800"
              >
                Name
              </label>
              <input
                type="text"
                id="FirstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 w-full p-2.5"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="emailAddress"
                className="block mb-2 text-sm font-medium text-pink-800"
              >
                E-mail Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 block w-full p-2.5"
              />
            </div>
            <label
              className="block mb-2 text-sm font-medium text-pink-800"
              htmlFor="file_input"
            >
              Upload file or CV (if applicable)
            </label>
            <input
              type="file"
              id="uploadedFile"
              name="uploadedFile"
              value={formData.uploadedFile}
              onChange={handleChange}
              className="block w-full p-2 bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 "
            />
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-pink-800"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about yourself..."
              rows="4"
              className="block p-2.5 w-full text-sm bg-pink-100 border border-pink-500 text-pink-800 rounded-2xl focus:ring-pink-900 focus:border-pink-900"
            ></textarea>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full absolute my-5">
              Send Message
            </button>
          </form>
        </div>

        <div className="formText py-4 lg:px-8 lg:py-[120px] order-1 lg:order-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsa rerum repudiandae omnis dicta. quod!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            ullam!
          </p>
        </div>
      </section>
    </>
  );
}
