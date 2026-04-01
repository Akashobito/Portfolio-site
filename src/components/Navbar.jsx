import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [isNavbar, setIsNavbar] = useState(false);
  const [navbarOption, setNavbarOption] = useState("home");

  useEffect(() => {
    window.location.hash = "#home";
  }, []);

  const handleMenu = () => {
    setIsNavbar(true);
  };

  const handleClose = () => {
    setIsNavbar(false);
  };

  return (
    <motion.nav
      initial={{
        y: -50,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          type: 'tween',
          opacity: {
            duration: 1.2
          }
        }
      }}


      className="z-10 nav-bar font-Roboto relative text-white "
    >
      <div className="fixed top-0 left-0 w-full bg-white right-0 flex justify-between items-center h-16 text-[#104050] lg:justify-around">
        <a
          href="#home"
          onClick={() => {
            setNavbarOption("home");
            handleClose();
          }}
        >
          <i class="fa-brands fa-asymmetrik text-5xl ml-5 justify-self-start"></i>
        </a>
        <i
          onClick={handleMenu}
          className="fa-solid fa-bars cursor-pointer text-4xl mr-5 lg:!hidden"
        ></i>

        <ul className="hidden lg:flex space-x-20 font-Montserrat font-bold">
          <a
            href="#home"
            className={navbarOption === "home" ? "text-red-500" : ""}
            onClick={() => {
              setNavbarOption("home");
            }}
          >
            <li>HOME</li>
          </a>
          <a
            href="#about"
            className={navbarOption === "about" ? "text-red-500" : ""}
            onClick={() => {
              setNavbarOption("about");
            }}
          >
            <li>ABOUT</li>
          </a>
          <a
            href="#project"
            className={navbarOption === "project" ? "text-red-500" : ""}
            onClick={() => {
              setNavbarOption("project");
            }}
          >
            <li>PROJECTS</li>
          </a>
          <a
            href="#skills"
            className={navbarOption === "skills" ? "text-red-500" : ""}
            onClick={() => {
              setNavbarOption("skills");
            }}
          >
            <li>SKILLS</li>
          </a>
          <a
            href="#education"
            className={navbarOption === "education" ? "text-red-500" : ""}
            onClick={() => {
              setNavbarOption("education");
            }}
          >
            <li>EDUCATIONS</li>
          </a>
        </ul>
      </div>

      <AnimatePresence>
        {isNavbar && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                duration: 0.5,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => {
                setIsNavbar(false);
              }}
              className="w-full h-[100vh] backdrop-blur-[2px] fixed"
            ></motion.div>

            <motion.div
              initial={{
                x: 250,
              }}
              animate={{
                x: 0,
              }}
              exit={{
                right: -250,
              }}
              transition={{
                type: "tween",
                duration: 0.5,
                ease: 'easeInOut'
              }}
              className="fixed right-[-1px] top-0 bottom-0 w-60 bg-[#104050]  pl-10 pt-10 "
            >
              <ul className="flex flex-col py-2 text-xl font-medium [&_li]:py-5">
                <div>
                  <i
                    onClick={handleClose}
                    className="fa-solid fa-x cursor-pointer absolute top-3 left-2"
                  ></i>
                </div>
                <a
                  href="#home"
                  onClick={() => {
                    setIsNavbar(false);
                  }}
                >
                  <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => {
                      setNavbarOption("home");
                    }}
                  >
                    <span
                      className={navbarOption === "home" ? "text-red-400" : ""}
                    >
                      <i className="fa-solid fa-house pr-10"></i>
                    </span>
                    <li
                      className={navbarOption === "home" ? "text-red-400" : ""}
                    >
                      HOME
                    </li>
                  </div>
                </a>

                <a
                  href="#about"
                  onClick={() => {
                    setIsNavbar(false);
                  }}
                >
                  <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => {
                      setNavbarOption("about");
                    }}
                  >
                    <span
                      className={navbarOption === "about" ? "text-red-400" : ""}
                    >
                      <i className="fa-solid fa-id-card pr-10"></i>
                    </span>
                    <li
                      className={navbarOption === "about" ? "text-red-400" : ""}
                    >
                      ABOUT
                    </li>
                  </div>
                </a>

                <a
                  href="#project"
                  onClick={() => {
                    setIsNavbar(false);
                  }}
                >
                  <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => {
                      setNavbarOption("project");
                    }}
                  >
                    <span
                      className={
                        navbarOption === "project" ? "text-red-400" : ""
                      }
                    >
                      <i className="fa-solid fa-laptop-file pr-10"></i>
                    </span>
                    <li
                      className={
                        navbarOption === "project" ? "text-red-400" : ""
                      }
                    >
                      PROJECTS
                    </li>
                  </div>
                </a>

                <a
                  href="#skills"
                  onClick={() => {
                    setIsNavbar(false);
                  }}
                >
                  <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => {
                      setNavbarOption("skills");
                    }}
                  >
                    <span
                      className={
                        navbarOption === "skills" ? "text-red-400" : ""
                      }
                    >
                      <i className="fa-solid fa-brain pr-10"></i>
                    </span>
                    <li
                      className={
                        navbarOption === "skills" ? "text-red-400" : ""
                      }
                    >
                      SKILLS
                    </li>
                  </div>
                </a>

                <a
                  href="#education"
                  onClick={() => {
                    setIsNavbar(false);
                  }}
                >
                  <div
                    className="flex items-center hover:cursor-pointer"
                    onClick={() => {
                      setNavbarOption("education");
                    }}
                  >
                    <span
                      className={
                        navbarOption === "education" ? "text-red-400" : ""
                      }
                    >
                      <i className="fa-solid fa-book pr-10"></i>
                    </span>
                    <li
                      className={
                        navbarOption === "education" ? "text-red-400" : ""
                      }
                    >
                      EDUCATION
                    </li>
                  </div>
                </a>
              </ul>

              <div className="w-40 flex justify-between text-2xl mt-5">
                <a href="tel: +916383283581">
                  <i class="fa-solid fa-phone"></i>
                </a>
                <a href="https://github.com/Akashobito" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/akashs26/" target="_blank">
                  <i class="fa-brands fa-square-linkedin"></i>
                </a>
                <a href="mailto: sakashcsbs2004@gmail.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
