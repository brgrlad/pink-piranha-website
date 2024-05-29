"use client";
import { useReducer, useState } from "react";
import Modal from "@/components/about-card/modal/Modal";
import ContactInfo from "../contact-info/ContactInfo";

// INITIAL FORM DATA
const initialFormData = {
  firstName: "",
  emailAddress: "",
  phoneNumber: "",
  message: "",
};

// DISPATCH FORM ACTIONS
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

export default function ContactUs() {
  // STATES FOR FORM AND MODAL
  const [formData, dispatch] = useReducer(formReducer, initialFormData);
  const [showModal, setShowModal] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", fieldName: name, value });
  };

  // HANDLE FORM SUBMIT: SEND DATA TO BACKEND, SHOW CONFIRMATION MODAL IN THE UI AND RESET FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <section
      className=" bg-pink-200 md:px-10 px-5 p-20 border-8 "
      id="contact-us"
    >
      {/* MODAL IS SHOWN UPON SUBMIT */}
      {showModal && (
        <Modal
          title={`Thank you!`}
          message={"We will reply as soon as possible."}
          onClose={() => setShowModal(false)}
        />
      )}
      {/* PAGE TITLE */}
      <h2 className="text-4xl md:text-6xl">CONTACT US!</h2>

      {/* MAIN WRAPPER FOR THE FORM SECTION  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5">
        {/* LEFT SIDE COL - FORM FIELDS */}
        <div className="formWrapper w-[100%] flex flex-col justify-items-end">
          <form className="mb-20" onSubmit={(e) => handleSubmit(e)}>
            {/* FIRST NAME FIELD */}
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

            {/* PHONE NUMBER FIELD */}
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="mb-2 text-sm font-medium text-pink-800"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block bg-pink-100 border border-pink-500 text-pink-800 text-sm rounded-2xl focus:ring-pink-900 focus:border-pink-900 w-full p-2.5"
              />
            </div>

            {/* EMAIL ADDRESS FIELD */}
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

            {/* MESSAGE FIELD */}
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

            {/* SUBMIT BUTTON */}
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full absolute my-5">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE COL - TEXT AND CONTACT INFO */}
        <div className="formText py-4 lg:px-8">
          <h3>WE ARE HERE TO HELP</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            ipsa rerum repudiandae omnis dicta. quod!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            ullam!
          </p>

          <ContactInfo
            icon={"/img/icons/phone.svg"}
            contactInfo={"+353 1 384 3838"}
          />
          <ContactInfo
            icon={"/img/icons/email.svg"}
            contactInfo={"hello@pinkpiranha.ie"}
          />
        </div>
      </div>
    </section>
  );
}
