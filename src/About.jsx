import SkillCard from "./SkillCard"
import ContactMe from "./ContactMe"
import Footer from "./Footer"

function About() {
  return (
    <>
      <div class="mt-24 mb-10 max-w-5xl">
        <h1 class="text-5xl mb-7 font-albert font-bold">About Me</h1>
        <p class="font-albert font-normal text-xl">
          I am an aspiring software engineer located in Vancouver, BC. I'm a career transitioner from the semiconductor space. I am passionate about A, B, and C.<br/><br/>

          Most recently, I worked at Intel as an SoC Verification Engineer. Before that, I completed a bachelor's degree in Mechanical Engineering (Mechatronics specialization) at the University of British Columbia (UBC).<br/><br/>

          In 2024, I made the decision to transition to software engineering, and now I am currently enrolled in an online, accredited computer science degree, while working on personal projects on the side.<br/><br/>

          In my free time, I do X, Y, and Z. I wrte about what I'm currently up to here. 
        </p>
        <h2 class="text-4xl font-albert font-bold mt-7 mb-7">Skills</h2>
        <h3 class="text-2xl font-albert font-bold mt-7 mb-7">Software</h3>
        <div class="flex flex-wrap">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <h3 class="text-2xl font-albert font-bold mt-7 mb-7">Hardware</h3>
        <div class="flex flex-wrap">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <h3 class="text-2xl font-albert font-bold mt-7 mb-7">Mechanical</h3>
        <div class="flex flex-wrap">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
        <h2 class="text-4xl font-albert font-bold mt-7 mb-4">Projects</h2>
        <p class="font-albert font-normal text-xl mb-7">
          You can find a list of my projects here!
        </p>
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default About