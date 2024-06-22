import SkillCard from "./SkillCard"
import ContactMe from "./ContactMe"
import Footer from "./Footer"
import { softwareSkills, hardwareSkills, mechanicalSkills } from "./Skills"
import { Link } from "react-router-dom";

function About() {
  const softwareSkillCards = softwareSkills.map(skill =>
    <SkillCard name={skill} />
  );
  const hardwareSkillCards = hardwareSkills.map(skill =>
    <SkillCard name={skill} />
  );
  const mechanicalSkillCards = mechanicalSkills.map(skill =>
    <SkillCard name={skill} />
  );

  return (
    <div class="animate-load-page">
      <div class="max-w-5xl">
        <h1 class="text-5xl mb-7 font-albert font-bold text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">About Me</h1>
        <p class="font-albert font-normal text-xl ml-3 mr-3 text-lightModeText dark:text-darkModeText">
          I am an aspiring software engineer located in Vancouver, BC. I'm a career transitioner from the semiconductor space. I am passionate about A, B, and C.<br/><br/>

          Most recently, I worked at Intel as an SoC Verification Engineer. Before that, I completed a bachelor's degree in Mechanical Engineering (Mechatronics specialization) at the University of British Columbia (UBC).<br/><br/>

          In 2024, I made the decision to transition to software engineering, and now I am currently enrolled in an online, accredited computer science degree, while working on personal projects on the side.<br/><br/>

          In my free time, I do X, Y, and Z. I wrte about what I'm currently up to <Link to={`../now`} class="font-bold underline">here.</Link>
          </p>
        <h2 class="text-4xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">Skills</h2>
        <h3 class="text-2xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">Software</h3>
        <div class="flex flex-wrap justify-center">
          {softwareSkillCards}
        </div>
        <h3 class="text-2xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">Hardware</h3>
        <div class="flex flex-wrap justify-center">
          {hardwareSkillCards}
        </div>
        <h3 class="text-2xl font-albert font-bold mt-7 mb-7 text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">Mechanical</h3>
        <div class="flex flex-wrap justify-center">
          {mechanicalSkillCards}
        </div>
        <h2 class="text-4xl font-albert font-bold mt-7 mb-4 text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">Projects</h2>
        <p class="font-albert font-normal text-xl mb-7 ml-3 text-lightModeText dark:text-darkModeText">
          You can find a list of my projects <Link to={`../projects`} class="font-bold underline">here!</Link>
        </p>
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
}

export default About