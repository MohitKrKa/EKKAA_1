import React from "react";
import phone from "/Contact/phone.svg";
import location from "/Contact/location.svg";
import email from "/Contact/email.svg";

const FormPage = () => {
  return (
    <div className=" bg-[#000000] w-screen flex md:flex-row flex-col gap-10 justify-center">
      {/*  Form and Map */}
      <div className=" md:w-[60%] text-white border-l-[1px] border-r-[1px] border-[#434343B2] px-8 py-16">
        <div className="">
          <h2 className="md:text-7xl text-3xl font-extrabold bebas-neue mb-4">
            We'd love to hear from you
          </h2>
          <p className="font-[200] text-gray-300 mb-12 md:text-base text-sm font-[Poppins]">
            We're here to help and answer any question you might have. <br />
            We look forward to hearing from you
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 relative gap-x-16 gap-y-8 font-[Poppins]">
            <div>
              <input
                placeholder="NAME"
                type="text"
                className="w-full  border-b border-[#9A9A9A] focus:outline-none "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full  border-b border-[#9A9A9A] focus:outline-none py-2"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="INTERESTED IN"
                className="w-full  border-b border-[#9A9A9A] focus:outline-none py-2"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="PHONE NUMBER"
                className="w-full  border-b border-[#9A9A9A] focus:outline-none py-2"
              />
            </div>

            <div className="md:col-span-2 max-w-[70%]">
              <textarea
                rows="3"
                placeholder="MESSAGE"
                className="w-full border-b border-[#9A9A9A] focus:outline-none "
              ></textarea>
            </div>

            <div className="md:col-span-2 absolute hidden md:flex  top-40 right-10  justify-end">
              <button
                type="submit"
                className="flex items-center justify-center  rounded-full border border-[#9A9A9A] text-white font-bold uppercase relative hover:border-yellow-500 transition cursor-pointer"
              >
                <img
                  src="/Contact/submitButton.svg"
                  alt=""
                  className="w-full "
                />
              </button>
            </div>
            <div className="md:col-span-2 absolute flex md:hidden  bottom-0 right-0  justify-end">
              <button
                type="submit"
                className="flex items-center justify-center  rounded-full border border-[#9A9A9A] text-white font-bold uppercase relative hover:border-yellow-500 transition cursor-pointer"
              >
                <img
                  src="/Contact/submitButton.svg"
                  alt=""
                  className="w-[20vw] "
                />
              </button>
            </div>
          </form>

          {/* Map  */}
          <div className="mt-16 w-full h-[450px] flex flex-col gap-6">
            <h2 className="md:text-7xl text-3xl bebas-neue">We're here</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.5091620502562!2d77.12554287641248!3d28.883214175528824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dab9c6f38819b%3A0x2f31ee6a5da18e1a!2sEKKAA%20ELECTRONICS%20INDUSTRIES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1747918169819!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>
      </div>

      {/* Contact details */}
      <div className="text-white px-20 font-[300] py-16 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <img src={email} alt="" className="w-6 h-7" />
            <span>Query.ekkaa@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <img src={phone} alt="" className="w-6 h-7" />
            <span>+ 91 8527197251 (Kundli)</span>
          </div>
          <div className="flex gap-4">
            <img src={location} alt="" className="w-7" />
            <span>Sonipat, Haryana</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <img src={phone} alt="" className="w-6 h-7" />
            <span>+91 9138953303</span>
          </div>
          <div className="flex gap-4">
            <img src={location} alt="" className="w-7" />
            <span>Noida, UP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
