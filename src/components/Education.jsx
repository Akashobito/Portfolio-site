import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="font-Montserrat p-8 flex flex-col items-center space-y-8 pt-20  lg:text-xl lg:[&_div]:w-260 md:[&_div]:w-160"
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
        EDUCATIONS
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
        className="ring-2 p-5 rounded-2xl font-medium space-y-3"
      >
        <p className="font-bold text-2xl lg:text-3xl">2021-2025</p>
        <p className="font-bold ">
          B.TECH IN COMPUTER SCIENCE AND BUSINESS SYSTEMS
        </p>
        <p>
          E.G.S Pillay Engineering College , Nagapattinam | 05/2021 – 05/2025{" "}
          <br className="lg:block"></br>CGPA – 7.89
        </p>
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
        viewport={{once: true}}
        className="ring-2 p-5 rounded-2xl font-medium space-y-3"
      >
        <p className="font-bold text-2xl lg:text-3xl">2020-2021</p>
        <p className="font-bold ">HIGHER SECONDARY</p>
        <p>
          Karaikal Ammayar Higher Secondary School , Karaikal | 05/2020 –
          05/2021 <br className="lg:block"></br> Percentage – 82.2 %
        </p>
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
        viewport={{once: true}}
        className="ring-2 p-5 rounded-2xl font-medium space-y-3"
      >
        <p className="font-bold text-2xl  lg:text-3xl">2018-2019</p>
        <p className="font-bold ">SSLC</p>
        <p>
          Sri vikneswara High School , Karaikal |05/2018 – 05/2019 <br></br>{" "}
          Percentage – 77 %
        </p>
      </motion.div>
    </section>
  );
}

export default Education;
