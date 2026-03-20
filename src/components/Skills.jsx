import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      className="font-Montserrat flex flex-col  justify-center items-center font-medium space-y-7.5 pt-20"
    >
      <div>
        <p className="text-2xl font-bold lg:text-4xl">SKILLS</p>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-25 lg:gap-y-28 lg:mt-15 justify-center items-center font-medium space-y-7.5">
        <div className="skillsDiv">HTML / CSS</div>
        <div className="skillsDiv">JAVASCRIPT</div>
        <div className="skillsDiv">REACT JS</div>
        <div className="skillsDiv">TAILWIND CSS</div>
        <div className="skillsDiv">REDUX-TOOLKIT</div>
        <div className="skillsDiv">CONTEXT API</div>
        <div className="skillsDiv">GIT / GIT-HUB</div>
        <div className="skillsDiv">REACT HOOK FORM</div>
        <div className="skillsDiv">RESPONSIVE DESIGN</div>
      </div>
    </section>
  );
}

export default Skills;
