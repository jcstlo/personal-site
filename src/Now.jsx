import ContactMe from "./ContactMe"
import Footer from "./Footer"

// NOTE: This page is unused.
function Now() {
  return (
    <div className="animate-load-page">
      <div className="mb-10">
        <h1 className="text-5xl pb-7 font-albert font-bold text-center sm:text-left ml-3 text-lightModeText dark:text-darkModeText">What I&apos;m Doing Now</h1>
        <p className="font-albert font-normal ml-3 text-lightModeText dark:text-darkModeText">This is a now page, inspired by <a target="_blank" rel="noopener noreferrer" href="https://nownownow.com/about" className="underline">Derek Sivers.</a></p>
        <ul className="mt-10 ml-5 mr-3">
          <li className="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Building a full-stack application with React and Django</li>
          <li className="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Getting a CS degree from WGU</li>
          <li className="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Playing ultimate frisbee</li>
          <li className="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Reading &quot;Project Hail Mary&quot; by Andy Weir</li>
          <li className="list-disc font-albert font-normal text-xl ml-3 text-lightModeText dark:text-darkModeText">Going on scenic hikes near Vancouver, BC</li>
        </ul>
      </div>
      <p className="font-albert font-light mb-10 ml-3 text-lightModeText dark:text-darkModeText">Last updated: July 11, 2024</p>
      <ContactMe></ContactMe>
      <Footer></Footer>
      </div>
  )
}

export default Now
