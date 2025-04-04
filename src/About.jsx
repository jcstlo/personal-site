import SkillCard from "./SkillCard"
import ContactMe from "./ContactMe"
import Footer from "./Footer"
import { softwareSkills, hardwareSkills, mechanicalSkills } from "./Skills"
import { Link } from "react-router-dom";

function About() {
  const softwareSkillCards = softwareSkills.map(skill =>
    <SkillCard key={skill} name={skill} />
  );
  const hardwareSkillCards = hardwareSkills.map(skill =>
    <SkillCard key={skill} name={skill} />
  );
  const mechanicalSkillCards = mechanicalSkills.map(skill =>
    <SkillCard key={skill} name={skill} />
  );

  return (
    <div className="animate-load-page">
      <div className="max-w-5xl">
        <h1 className="text-5xl mb-7 font-albert font-bold text-center sm:text-left ml-7 text-lightModeText dark:text-darkModeText">About Me</h1>
        <p className="font-albert font-normal text-xl ml-7 mr-7 text-lightModeText dark:text-darkModeText">
          I am an engineer located in Vancouver, BC, with professional experience in the semiconductor industry. I am passionate about solving real-world problems, and I enjoy contributing to projects that have positive and meaningful impact.<br/><br/>

          Most recently, I worked at Intel as an SoC Verification Engineer. Before that, I completed a bachelor&apos;s degree in Mechanical Engineering (Mechatronics specialization) at the University of British Columbia (UBC).<br/><br/>

          In 2024, I made the decision to transition to software engineering. I am currently finishing up an online, accredited computer science degree, and I regularly work on side projects to further develop my skills.<br/><br/>
          </p>
        <h2 className="text-4xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-7 text-lightModeText dark:text-darkModeText">Skills</h2>
        <h3 className="text-2xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-7 text-lightModeText dark:text-darkModeText">Software</h3>
        <div className="flex flex-wrap justify-center">
          {softwareSkillCards}
        </div>
        <h3 className="text-2xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-7 text-lightModeText dark:text-darkModeText">Hardware</h3>
        <div className="flex flex-wrap justify-center">
          {hardwareSkillCards}
        </div>
        <h3 className="text-2xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-7 text-lightModeText dark:text-darkModeText">Mechanical</h3>
        <div className="flex flex-wrap justify-center">
          {mechanicalSkillCards}
        </div>
        <h2 className="text-4xl font-albert font-bold mt-7 mb-4 text-center sm:text-left ml-7 text-lightModeText dark:text-darkModeText">Projects</h2>
        <p className="font-albert font-normal text-xl mb-7 text-center sm:text-left sm:ml-7 text-lightModeText dark:text-darkModeText">
          You can find a list of my projects <Link to={`../projects`} className="font-bold underline">here!</Link>
        </p>
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
}

export default About
