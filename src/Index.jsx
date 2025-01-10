import ContactMe from './ContactMe';
import Footer from './Footer';

function Index() {
  return (
    <div className="animate-load-page">
      <div className="flex justify-between mb-10 flex-col-reverse sm:flex-row items-center">
        <div className="mr-3 ml-3 sm:mr-12 sm:ml-16">
          <h1 className="text-5xl pb-7 font-albert font-bold mt-9 sm:mt-0 text-center sm:text-left text-lightModeText dark:text-darkModeText">Hi! I&apos;m Joseph.</h1>
          <p className="text-xl font-albert font-normal text-lightModeText dark:text-darkModeText">
            I am an engineer located in Vancouver, Canada.<br></br><br></br>
            Currently, I am studying computer science with the aim of transitioning to software engineering, focusing on full-stack/backend development.<br></br><br></br>
            In my free time, you can find me playing ultimate, hiking, or working on projects.
          </p>
        </div>
        <img className="w-60 h-60 sm:mr-16 object-cover rounded-full drop-shadow-lg border border-gray-400" src="me.jpg" alt="Personal site headshot placeholder"></img>
      </div>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  )
}

export default Index
