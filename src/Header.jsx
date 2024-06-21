import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <div class="flex flex-col sm:flex-row sm:justify-between mt-5 mb-10 items-center">
      <div class="p-0 sm:ml-5 text-2xl inline-block align-text-bottom font-albert font-bold leading-none text-center mb-3 sm:mb-0">
        <Link to={`/`} >Joseph Castillo</Link>
      </div>
      <div class="flex">
        <ul>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`about`}>about</Link>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`now`}>now</Link>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`projects`}>projects</Link>
          </li>
          <li class="p-0 list-none mr-7 sm:mr-10 font-albert font-bold inline">
            <Link to={`resume`}>resume</Link>
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