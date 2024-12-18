import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function ThemeButton() {
  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
    else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }

  let icon;
  if (darkMode) {
    icon = <img className="w-7 h-7" src="light_mode_sun.svg"></img>;
  } else {
    icon = <img className="w-7 h-7" src="dark_mode_moon.svg"></img>;
  }

  return (
    <button onClick={toggleDarkMode}>
      {icon}
    </button>
  )
}

export default ThemeButton
