import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center p-10 pt-18 lg:pt-20 pb-0 font-Montserrat"
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
        ABOUT
      </motion.p>
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.1,
            type: "tween",
            opacity: {
              duration: 0.7,
              type: "tween",
            },
          },
        }}

        viewport={{once: true}}
        className="w-60 h-60 border-2 rounded-full overflow-hidden flex justify-center mt-7"
      >
        <img className="w-50 h-50 object-cover mt-9" src="/profile.png"></img>
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
            duration: 0.5,
            delay: 0.1,
            type: "tween",
            opacity: {
              duration: 0.7,
              type: "tween",
            },
          },
        }}

        viewport={{once: true}}
        className="grid grid-cols-[35%_2%_70%] gap-x-2 gap-y-2 mt-4 font-semibold lg:text-xl"
      >
        <p>Name</p>
        <p>:</p>
        <p>Akash S</p>
        <p>Education</p>
        <p>:</p>
        <p>B.Tech CSBS</p>
        <p>Role</p>
        <p>:</p>
        <p>Front-End Developer</p>
        <p>Mobile</p>
        <p>:</p>
        <p>6383283581</p>
        <p>DOB</p>
        <p>:</p>
        <p>26-04-2004</p>
        <p className="hidden lg:block">Email</p>
        <p className="hidden lg:block">:</p>
        <p className="hidden lg:block">sakashcsbs2004@gmail.com</p>
      </motion.div>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.1,
            type: "tween",
            opacity: {
              duration: 0.7,
              type: "tween",
            },
          },
        }}

        viewport={{once: true}}
        className="text-justify mt-5 text-base font-medium lg:text-xl lg:w-330"
      >
        My name is Akash S, a front-end developer focused on building
        user-friendly, responsive interfaces that balance clean design with
        practical functionality. I'm passionate about enhancing user experience
        through modern front-end practices, bringing ideas to life with semantic
        HTML, modern CSS, JavaScript and React JS to create interactive,
        accessible, and visually compelling web experiences.
      </motion.p>
    </section>
  );
}

export default About;
