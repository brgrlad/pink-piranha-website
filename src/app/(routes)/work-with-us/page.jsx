"use client";
import { useReducer, useState } from "react";
import fetchStaffAPI from "../../../../utils/fetchStaffAPI";
import Modal from "@/components/modal/Modal";

const initialFormData = {
  fullName: "",
  emailAddress: "",
  phoneNumber: "",
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
  const [file, setFile] = useState(null);

  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", fieldName: name, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let submit = await fetchStaffAPI("/api/staff-form", formData, file);
      return submit;
    } catch (e) {
      console.log("submission error:", e.message);
      return e;
    }
  };

  return (
    <>
      {showMenu && (
        <Modal
          title={`Thank you!`}
          message={"We will reply as soon as possible."}
          onClose={() => setShowMenu(false)}
        />
      )}
      <section className="grid grid-cols-1 lg:grid-cols-3 px-5 md:px-20 py-10 md:py-20 bg-light-pink text-dark-pink">
        <div className="formWrapper col-span-2 flex flex-col order-2 lg:order-1">
          <h2 className="text-xl lg:text-4xl 2xl:text-6xl">
            COME WORK WITH US!
          </h2>

          <form
            className="mb-20"
            onSubmit={(e) => handleSubmit(e)}
            name="work-with-us"
          >
            <div className="mb-5">
              <label
                htmlFor="fullName"
                className="mb-2 text-sm font-medium text-dark-pink"
              >
                Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="block bg-light-pink border border-dark-pink text-dark-pink text-sm rounded-2xl focus:ring-dark-pink focus:border-dark-pink w-full p-2.5"
              />
            </div>

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
            <div className="mb-5">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm font-medium text-dark-pink"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="bg-light-pink border border-dark-pink text-dark-pink text-sm rounded-2xl focus:ring-dark-pink focus:border-dark-pink block w-full p-2.5"
              />
            </div>
            <label
              className="block mb-2 text-sm font-medium text-dark-pink"
              htmlFor="file_input"
            >
              Upload your CV
            </label>
            <input
              type="file"
              id="uploadedFile"
              name="uploadedFile"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full p-2 bg-light-pink border border-dark-pink text-dark-pink text-sm rounded-2xl focus:ring-dark-pink "
            />
            <label
              htmlFor="message"
              className="block  text-sm font-medium text-dark-pink mt-5 mb-2"
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
            <button className="bg-dark-pink hover:bg-pink-700 text-light-pink font-bold py-2 px-4 rounded-full absolute my-5">
              Send Message
            </button>
          </form>
        </div>

        <div className="formText py-4 lg:px-8 lg:py-[120px] order-1 lg:order-2 xl:-mt-[40px]">
          <h3 className="text-2xl md:text-3xl lg:text-lg">
            WE`RE HIRING EVENT STAFF{" "}
          </h3>

          <p className="text-[18px]">
            Passionate about events and looking for a job that offer exciting
            opportunities all across Ireland?
          </p>
          <p className="text-[18px]">
            We are constantly seeking young, energetic individuals to join our
            vibrant team and help us create unforgettable experiences.
          </p>
          <p className="text-[18px]">
            If that resonates with you,{" "}
            <span className="font-bold"> upload your CV </span>and a brief cover
            letter outlining why you`d be a great fit for our team.
          </p>
        </div>
      </section>
    </>
  );
}
