import { technologyIcons } from "./ProjectData"

function ProjectCard({projectData}) {
  const icons = projectData.technologies.map(tech =>
    <img class="w-9 h-9" src={technologyIcons[tech]} alt="Placeholder Icon"></img>
  );

  return (
    <div class="flex mb-7">
      <img class="w-72 h-72 border border-stone-800 rounded-2xl" src={projectData.mainImage} alt="Placeholder Icon"></img>
      <div class="ml-5">
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