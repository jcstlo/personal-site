import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Footer() {
  const {darkMode} = useContext(DarkModeContext);
  
  let githubIcon;
  if (darkMode) {
    githubIcon = <img className="contact-icon w-5 h-5 ml-2" src="github-logo-dark-mode.svg"></img>;
  } else {
    githubIcon = <img className="contact-icon w-5 h-5 ml-2" src="github-logo-light-mode.svg"></img>;
  }
  
  return (
    <div className="flex mt-10 items-center justify-center">
      <p className="text-center font-albert font-light text-lightModeText dark:text-darkModeText">Designed & Built by Joseph Castillo</p>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/jcstlo/personal-site">{githubIcon}</a>
    </div>
  )
}

export default Footer
