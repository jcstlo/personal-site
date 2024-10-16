import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import { technologyIcons, technologyIconsDarkMode } from "./ProjectData"

function ProjectCard({projectData}) {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  let iconsMap;
  if (darkMode) {
    iconsMap = technologyIconsDarkMode;
  } else {
    iconsMap = technologyIcons;
  }

  let githubIcon;
  if (darkMode) {
    githubIcon = <img class="contact-icon w-5 h-5" src="github-logo-dark-mode.svg"></img>;
  } else {
    githubIcon = <img class="contact-icon w-5 h-5" src="github-logo-light-mode.svg"></img>;
  }

  let projectLink;
  if (projectData.link !== "none") {
    projectLink = <a target="_blank" rel="noopener noreferrer" href={projectData.link}>Demo</a>
  } else {
    projectLink = <></>
  }

  let githubLink;
  if (projectData.github !== "none") {
    githubLink = <a target="_blank" rel="noopener noreferrer" href={projectData.github}>{githubIcon}</a>
  } else {
    githubLink = <></>
  }

  const icons = projectData.technologies.map(tech =>
    <img class="w-9 h-9 mx-0.5" src={iconsMap[tech]} alt="Placeholder Icon"></img>
  );

  return (
    <div class="flex mb-7 flex-col sm:flex-row items-center sm:items-start">
      <img class="w-full h-full max-w-72 max-h-72 sm:w-72 sm:h-72 border border-stone-800 rounded-2xl" src={projectData.mainImage} alt="Placeholder Icon"></img>
      <div class="ml-5 mr-5 mt-5 sm:mt-0">
        <div class="flex items-center">
          <h2 class="font-albert font-bold text-2xl text-lightModeText dark:text-darkModeText mr-3">{projectData.name}</h2>
          {githubLink}
        </div>
        <p class="font-albert font-bold text-lightModeText dark:text-darkModeText underline">{projectLink}</p>
        <p class="font-albert font-normal text-lightModeText dark:text-darkModeText my-2">{projectData.shortDesc}</p>
        <div class="flex mt-1 mb-1">
          {icons}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
