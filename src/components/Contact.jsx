import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center font-Montserrat text-2xl font-bold"
    >
      <div className="flex bg-[#104050]">
        <div className="p-10  text-white">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div className="p-10  text-white">
          <i class="fa-brands fa-github"></i>
        </div>
        <div className="p-10  text-white">
          <i class="fa-brands fa-square-linkedin"></i>
        </div>
        <div className="p-10  text-white">
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
    </section>
  );
}

export default Contact;
