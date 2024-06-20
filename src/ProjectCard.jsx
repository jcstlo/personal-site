import { technologyIcons } from "./ProjectData"

function ProjectCard({projectData}) {
  const icons = projectData.technologies.map(tech =>
    <img class="w-9 h-9" src={technologyIcons[tech]} alt="Placeholder Icon"></img>
  );

  return (
    <div class="flex mb-7 flex-col sm:flex-row items-center sm:items-start">
      <img class="w-full h-full max-w-72 max-h-72 sm:w-72 sm:h-72 border border-stone-800 rounded-2xl" src={projectData.mainImage} alt="Placeholder Icon"></img>
      <div class="ml-5 mr-5 mt-5 sm:mt-0">
        <h2 class="font-albert font-bold text-2xl">{projectData.name}</h2>
        <p class="font-albert font-normal">{projectData.shortDesc}</p>
        <div class="flex">
          {icons}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard