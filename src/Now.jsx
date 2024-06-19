import ContactMe from "./ContactMe"
import Footer from "./Footer"

function Now() {
  return (
    <>
      <div class="w-screen mt-24 mb-10">
        <h1 class="text-5xl pb-7 font-albert font-bold">What I'm Doing Now</h1>
        <p class="font-albert font-normal">This is a now page, inspired by Derek Sivers.</p>
        <ul class="mt-10 ml-10">
          <li class="list-disc font-albert font-normal text-2xl">List item A</li>
          <li class="list-disc font-albert font-normal text-2xl">List item B</li>
          <li class="list-disc font-albert font-normal text-2xl">List item C</li>
          <li class="list-disc font-albert font-normal text-2xl">List item D</li>
          <li class="list-disc font-albert font-normal text-2xl">List item E</li>
        </ul>
      </div>
      <p class="font-albert font-light mb-10">Last updated: June 18, 2024</p>
      <ContactMe></ContactMe>
      <Footer></Footer>
      </>
  )
}

export default Now