import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="flex justify-between mt-5">
      <div class="p-0 ml-5 text-2xl inline-block align-text-bottom font-albert font-bold leading-none">
        <Link to={`/`} >Joseph Castillo</Link>
      </div>
      <div class="flex">
        <ul>
          <li class="p-0 list-none inline mr-10 font-albert font-bold">
            <Link to={`about`}>about</Link>
          </li>
          <li class="p-0 list-none inline mr-10 font-albert font-bold">
            <Link to={`now`}>now</Link>
          </li>
          <li class="p-0 list-none inline mr-10 font-albert font-bold">projects</li>
          <li class="p-0 list-none inline mr-10 font-albert font-bold">resume</li>
        </ul>
        <span class="material-symbols-outlined mr-5"> light_mode </span>
      </div>
    </div>
  )
}

export default Header