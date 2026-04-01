import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function Project() {
  const ref = useRef(null);
  const [isScrolltop, setScrollTop] = useState(false);

  const handleScrollDown = () => {
    if (ref) {
      ref.current.scrollTop = 550;
      console.log(ref.current.scrollHeight);
      setScrollTop(true);
    }
  };

  const handleScrollTOp = () => {
    if (ref) {
      ref.current.scrollTop = 0;
      console.log(ref.current.scrollHeight);
      setScrollTop(false);
    }
  };

  return (
    <section
      id="project"
      className="flex flex-col items-center font-Montserrat pt-20 lg:pt-20 lg:text-xl"
    >
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.6,
            type: "tween",
            opacity: {
              duration: 0.7,
              type: "tween",
            },
          },
        }}
        viewport={{once: true}}
        className="text-2xl font-bold lg:text-4xl"
      >
        PROJECTS
      </motion.p>
      <div
        onClick={handleScrollTOp}
        className={
          isScrolltop
            ? "mb-[-12px] px-1 py-2 mt-5 rounded-full bg-[#104050] text-white flex items-center cursor-pointer lg:hidden"
            : "px-1 py-2 rounded-full bg-[#104050] text-white flex items-center mt-3 cursor-pointer lg:hidden opacity-0 hover:cursor-auto"
        }
      >
        <i className="fa-solid fa-arrow-down fa-flip-vertical text-sm"></i>
      </div>
      <div
        ref={ref}
        className="project-div w-89 h-140 overflow-hidden lg:w-270 lg:grid lg:grid-cols-2 lg:mt-10 lg:gap-4 lg:h-auto"
      >
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.6,
              type: "tween",
              opacity: {
                duration: 0.7,
                type: "tween",
              },
            },
          }}
          viewport={{ once: true }}
          className="m-8 my-5 p-5 rounded-2xl space-y-3 ring-2 lg:mx-3"
        >
          <p className="font-bold text-xl lg:text-2xl">Cake Bakery website</p>
          <p className="font-medium">
            A responsive single-page bakery website built with React.js and
            Tailwind CSS, smooth navigation, and a mobile-first layout
          </p>
          <a href="https://cakebakery-site.vercel.app/">
            <button className="border-1 hover:bg-white hover:text-red-500 transition duration-800 hover:cursor-pointer font-semibold px-3 py-2 bg-[#ff3333] text-white rounded-2xl">
              View Project
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.6,
              type: "tween",
              opacity: {
                duration: 0.7,
                type: "tween",
              },
            },
          }}
          viewport={{ once: true }}
          className="m-8 my-5 p-5 rounded-2xl space-y-3 ring-2 lg:mx-3"
        >
          <p className="font-bold text-xl lg:text-2xl">Grocery List</p>
          <p className="font-medium">
            Built a mobile-responsive React grocery list app with full CRUD
            functionality — add, edit, mark as completed, and delete items
          </p>
          <a href="https://grocery-lists-seven.vercel.app/">
            <button className="border-1 hover:bg-white hover:text-red-500 transition duration-800 hover:cursor-pointer font-semibold px-3 py-2 bg-[#ff3333] text-white rounded-2xl">
              View Project
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.6,
              type: "tween",
              opacity: {
                duration: 0.7,
                type: "tween",
              },
            },
          }}
          viewport={{ once: true }}
          className="m-8 my-5 mb-5 p-5 rounded-2xl space-y-3 ring-2 lg:mx-3"
        >
          <p className="font-bold text-xl lg:text-2xl">Task Management Site</p>
          <p className="font-medium">
            Developed a responsive task management application with full CRUD
            functionality — Add, Edit, and Delete tasks with Date & Time
            support.
          </p>
          <a href="https://task-management-site-sepia.vercel.app">
            <button className="border-1 hover:bg-white hover:text-red-500 transition duration-800 cursor-pointer font-semibold px-3 py-2 bg-[#ff3333] text-white rounded-2xl">
              View Project
            </button>
          </a>
        </motion.div>

        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
              duration: 0.6,
              type: "tween",
              opacity: {
                duration: 0.7,
                type: "tween",
              },
            },
          }}
          viewport={{ once: true }}
          className="m-8 my-5 p-5 rounded-2xl space-y-3 ring-2 lg:mx-3"
        >
          <p className="font-bold text-xl lg:text-2xl">Blogger Clone</p>
          <p className="font-medium">
            Built a Blogger site clone using HTML and CSS, replicating the core
            layout and design with a clean, responsive interface.
          </p>

          <a href="https://akashobito.github.io/Blogger-Clone/">
            <button className="border-1 hover:bg-white hover:text-red-500 transition duration-800 cursor-pointer font-semibold px-3 py-2 bg-[#ff3333] text-white rounded-2xl lg:mt-7">
              View Project
            </button>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.6,
            type: "tween",
            opacity: {
              duration: 0.7,
              type: "tween",
            },
          },
        }}
        viewport={{once: true}}
        onClick={handleScrollDown}
        className={
          !isScrolltop
            ? "mt-[-12px] px-1 py-2 rounded-full bg-[#104050] text-white flex items-center cursor-pointer lg:hidden"
            : "px-1 py-2 rounded-full bg-[#104050] text-white flex items-center mt-3 cursor-pointer lg:hidden !opacity-0 hover:cursor-auto"
        }
      >
        <i className="fa-solid fa-arrow-down text-sm"></i>
      </motion.div>
    </section>
  );
}

export default Project;
