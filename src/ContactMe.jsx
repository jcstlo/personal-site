import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function ContactMe() {
  const {darkMode} = useContext(DarkModeContext);
  
  let githubIcon;
  let linkedinIcon;
  if (darkMode) {
    githubIcon = <img className="contact-icon w-9 h-9" src="github-logo-dark-mode.svg"></img>;
    linkedinIcon = <img className="contact-icon w-12 h-12" src="linkedin-logo-dark-mode.svg"></img>;
  } else {
    githubIcon = <img className="contact-icon w-9 h-9" src="github-logo-light-mode.svg"></img>;
    linkedinIcon = <img className="contact-icon w-12 h-12" src="linkedin-logo-light-mode.svg"></img>;
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl pb-3 font-albert font-bold text-lightModeText dark:text-darkModeText">Contact me!</h2>
      <div className="p-0 flex justify-center items-center">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jcstlo">
          {githubIcon}
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/josephcast/">
          {linkedinIcon}
        </a>
      </div>
      <p className="mt-3 font-albert underline text-lightModeText dark:text-darkModeText">joseph.cast0226@gmail.com</p>
    </div>
  )
}

export default ContactMe
