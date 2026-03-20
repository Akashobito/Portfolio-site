import React from "react";
import "@fontsource-variable/dancing-script";
import "@fontsource/pacifico";
import "@fontsource/goldman";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/comfortaa";
import "@fontsource/oleo-script";

function HomePage() {
  return (
    <section
      id="home"
      className="flex flex-col lg:w-fit lg:items-center lg:ml-40 items-center font-Montserrat text-2xl font-bold space-y-4 lg:space-y-8 pt-35 lg:pt-55 lg:pb-10 text-[#104050]"
    >
      <p className="lg:text-4xl">Hello, It's Me</p>
      <img
        src="/bg.png"
        className="w-80 h-80 lg:w-120 lg:h-150 object-contain lg:object-cover lg:absolute lg:right-50 lg:top-25"
      ></img>
      <p className="text-red-600 lg:text-8xl pl-4 font-OleoScript tracking-widest text-5xl">
        Akash S
      </p>

      <p className="lg:text-4xl">Front End Developer</p>
      <div className="contact space-x-4">
        <a href="https://github.com/Akashobito">
          <i class="fa-brands fa-github lg:text-4xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/akashs26/">
          <i class="fa-brands fa-square-linkedin lg:text-4xl"></i>
        </a>
        <a href="mailto: sakashcsbs2004@gmail.com">
          <i class="fa-solid fa-envelope lg:text-4xl"></i>
        </a>
      </div>

      <div className="interaction flex text-lg lg:text-xl space-x-3 lg:space-x-10 mt-3">
        <a href="tel: +916383283581" className="cursor-pointer">
          <button className="hover:bg-white hover:text-red-500 hover:border-1 border-1 transition duration-800 px-4 py-1 lg:px-8 lg:py-3 bg-[#ff3333] text-white  font-semibold rounded-md cursor-pointer">
            Hire Me
          </button>
        </a>

        <a className="hover:cursor-pointer" href="https://drive.google.com/file/d/1NTuNce9cN-zYopU54mNMgAoDdagdsrnV/view?usp=sharing" target="_blank" >
          <button className="hover:bg-white hover:text-red-500 hover:border-1 border-1 transition duration-800 px-4 py-1 lg:px-8 lg:py-3 bg-[#ff3333] text-white font-semibold rounded-md cursor-pointer">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default HomePage;
