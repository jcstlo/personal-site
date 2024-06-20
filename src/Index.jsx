import ContactMe from './ContactMe';
import Footer from './Footer';

function Index() {
  return (
    <>
      <div class="flex justify-between mt-24 mb-36 flex-col-reverse sm:flex-row items-center">
        <div class="mr-12 ml-16">
          <h1 class="text-5xl pb-7 font-albert font-bold mt-9 sm:mt-0">Hi! I'm Joseph.</h1>
          <p class="text-xl font-albert font-normal">
            I am an engineer located in Vancouver, Canada.<br></br><br></br>
            Currently, I am studying computer science with the aim of transitioning to software engineering, focusing on full-stack development.<br></br><br></br>
            In my free time, you can find me playing ultimate, hiking, or working on projects.
          </p>
        </div>
        <img class="w-60 h-60 sm:mr-16 object-cover rounded-full" src="me.jpg" alt="Personal site headshot placeholder"></img>
      </div>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  )
}

export default Index