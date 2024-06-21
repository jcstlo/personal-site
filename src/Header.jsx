import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <div class="flex flex-col sm:flex-row sm:justify-between mt-5 mb-10 items-center">
      <div class="p-0 sm:ml-5 text-2xl inline-block align-text-bottom font-albert font-bold leading-none text-center mb-3 sm:mb-0">
        <Link to={`/`} class="text-lightModeText dark:text-darkModeText">Joseph Castillo</Link>
      </div>
      <div class="flex">
        <ul>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`about`} class="text-lightModeText dark:text-darkModeText">about</Link>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`now`} class="text-lightModeText dark:text-darkModeText">now</Link>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`projects`} class="text-lightModeText dark:text-darkModeText">projects</Link>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`resume`} class="text-lightModeText dark:text-darkModeText">resume</Link>
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