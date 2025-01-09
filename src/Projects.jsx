import ContactMe from "./ContactMe"
import Footer from "./Footer"
import ProjectCard from "./ProjectCard"
import { beehiveProj, codeEchoProj, blackjackTrainerProj, narroProj, fountainPenShowcaseProj } from "./ProjectData"

function Project() {
  return (
    <div className="animate-load-page">
      <h1 className="text-5xl mb-7 font-albert font-bold text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">Projects</h1>
      <div>
        <ProjectCard projectData={fountainPenShowcaseProj}/>
        <ProjectCard projectData={narroProj}/>
        <ProjectCard projectData={blackjackTrainerProj}/>
        <ProjectCard projectData={beehiveProj}/>
        <ProjectCard projectData={codeEchoProj}/>
        <ContactMe />
        <Footer />
      </div>
    </div>
    
  )
}

export default Project
