import ContactMe from "./ContactMe"
import Footer from "./Footer"
import ProjectCard from "./ProjectCard"
import { placeholderProj } from "./ProjectData"

function Project() {
  return (
    <div class="mt-14">
      <ProjectCard projectData={placeholderProj}/>
      <ProjectCard projectData={placeholderProj}/>
      <ProjectCard projectData={placeholderProj}/>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Project