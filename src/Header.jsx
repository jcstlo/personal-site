import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Header() {
  let activeLink = ({ isActive, isPending }) => {
    return isActive ? "text-lightModeText dark:text-darkModeText underline" : "text-lightModeText dark:text-darkModeText";
  }

  return (
    <div class="flex flex-col sm:flex-row sm:justify-between mt-5 mb-10 items-center">
      <div class="p-0 sm:ml-5 text-2xl inline-block align-text-bottom font-albert font-bold leading-none text-center mb-3 sm:mb-0">
        <NavLink to={`/`} className={activeLink}>Joseph Castillo</NavLink>
      </div>
      <div class="flex">
        <ul>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <NavLink to={`about`} className={activeLink}>about</NavLink>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <NavLink to={`now`} className={activeLink}>now</NavLink>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <NavLink to={`projects`} className={activeLink}>projects</NavLink>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <NavLink to={`resume`} className={activeLink}>resume</NavLink>
          </li>
        </ul>
        <div class="mr-0 sm:mr-5">
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}

export default Header