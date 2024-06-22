import ContactMe from "./ContactMe"
import Footer from "./Footer"

function Now() {
  return (
    <div class="animate-load-page">
      <div class="mb-10">
        <h1 class="text-5xl pb-7 font-albert font-bold text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">What I'm Doing Now</h1>
        <p class="font-albert font-normal ml-3 text-lightModeText dark:text-darkModeText">This is a now page, inspired by <a target="_blank" rel="noopener noreferrer" href="https://nownownow.com/about" class="underline">Derek Sivers.</a></p>
        <ul class="mt-10 ml-10">
          <li class="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Building my personal website (improving my front-end skills in the process)</li>
          <li class="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Getting a CS degree from WGU</li>
          <li class="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Playing ultimate frisbee</li>
          <li class="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Reading "Project Hail Mary" by Andy Weir</li>
          <li class="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Going on scenic hikes near Vancouver, BC</li>
        </ul>
      </div>
      <p class="font-albert font-light mb-10 ml-3 text-lightModeText dark:text-darkModeText">Last updated: June 22, 2024</p>
      <ContactMe></ContactMe>
      <Footer></Footer>
      </div>
  )
}

export default Now