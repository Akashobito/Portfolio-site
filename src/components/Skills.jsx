import React from "react";
import { animate, motion } from "framer-motion";

const container = {
  initial: {
    x: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="font-Montserrat flex flex-col overflow-hidden pb-2 justify-center items-center font-medium space-y-7.5 pt-20"
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
        viewport={{once: true}}
      >
        <p className="text-2xl font-bold lg:text-4xl">SKILLS</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        className="flex flex-col lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-25 lg:gap-y-28 lg:mt-15 justify-center items-center font-medium space-y-7.5"
      >
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          HTML / CSS
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          JAVASCRIPT
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          REACT JS
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          TAILWIND CSS
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          REDUX-TOOLKIT
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          CONTEXT API
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          GIT / GIT-HUB
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          REACT HOOK FORM
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          FRAMER MOTION
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.2,
              opacity: {
                delay: 0.3,
                duration: 0.5,
              },
            },
          }}
          viewport={{ once: true }}
          className="skillsDiv"
        >
          RESPONSIVE DESIGN
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
