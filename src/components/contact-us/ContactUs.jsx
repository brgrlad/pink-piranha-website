"use client";
import { useState } from "react";
import { Resend } from "resend";
import Modal from "@/components/modal/Modal";
import ContactInfo from "../contact-info/ContactInfo";
import fetchBusinessAPI from "../../../utils/fetchBusinessAPI";

// INITIAL FORM DATA
const initialFormData = {
  firstName: "",
  emailAddress: "",
  phoneNumber: "",
  message: "",
};

export default function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = await fetchBusinessAPI("/api/submit-form", formData);
      console.log(data);
    } catch (e) {
      console.log("contact us 2");
      console.log(e.message);
    }

    setFormData(initialFormData);
    setShowModal(true);
  };

  return (
    <section
      className="bg-light-pink text-dark-pink md:px-10 py-5 relative z-0 -mt-[40px] rounded-3xl shadow-2xl "
      id="contact-us"
    >
      {/* MODAL IS SHOWN UPON SUBMIT */}
      {showModal && (
        <Modal
          title={`Hey, thanks!`}
          message={"We will reply as soon as possible."}
          onClose={() => setShowModal(false)}
        />
      )}
      {/* PAGE TITLE */}
      <h2 className="text-4xl md:text-6xl mx-10 mt-10 2xl:px-40">
        CONTACT US!
      </h2>

      {/* MAIN WRAPPER FOR THE FORM SECTION  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5 mx-8 2xl:px-40">
        {/* LEFT SIDE COL - FORM FIELDS */}
        <div className="formWrapper w-[100%] flex flex-col justify-items-end lg:px-2">
          <form
            name="contact-us"
            method="POST"
            className="mb-20"
            value={formData}
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* FIRST NAME FIELD */}
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="mb-2 text-sm font-medium text-dark-pink"
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
                className="block bg-light-pink border border-dark-pink text-dark-pink text-sm rounded-2xl focus:ring-dark-pink focus:border-dark-pink w-full p-2.5"
              />
            </div>

            {/* PHONE NUMBER FIELD */}
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="mb-2 text-sm font-medium text-dark-pink"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block bg-light-pink border border-dark-pink text-dark-pink text-sm rounded-2xl focus:ring-dark-pink focus:border-dark-pink w-full p-2.5"
              />
            </div>

            {/* EMAIL ADDRESS FIELD */}
            <div className="mb-5">
              <label
                htmlFor="emailAddress"
                className="block mb-2 text-sm font-medium text-dark-pink"
              >
                E-mail Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="bg-light-pink border border-dark-pink text-dark-pink text-sm rounded-2xl focus:ring-dark-pink focus:border-dark-pink block w-full p-2.5"
              />
            </div>

            {/* MESSAGE FIELD */}
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-dark-pink"
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
              className="block p-2.5 w-full text-sm bg-light-pink border border-dark-pink text-dark-pink rounded-2xl focus:ring-dark-pink focus:border-dark-pink"
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="bg-dark-pink text-light-pink hover:opacity-85 text-white font-bold py-2 px-4 rounded-full absolute my-5"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE COL - TEXT AND CONTACT INFO */}
        <div className="formText py-4 lg:px-8 text-dark-pink">
          <h3 className="text-2xl mb-14">WE ARE HERE TO HELP</h3>

          <p>
            Whether you`re looking for
            <span className="font-bold"> event staffing </span>for your next
            event in Ireland, get a{" "}
            <span className="font-bold"> price estimate </span> on our services,{" "}
            <span className="font-bold">book a consultation</span>, or just want
            to chat about your ideas, we are happy to assist you with your
            enquires.
          </p>

          <p>
            Just{" "}
            <span className="border-[1px] border-dark-pink rounded-3xl px-3 mr-1">
              drop us a line!
            </span>
            and we promise to get back to you as soon as possible.
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
