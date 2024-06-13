function App() {
  return (
    <>
      <div class="flex justify-center">
        <div class="max-w-5xl">
          <div class="flex justify-between mt-5">
            <p class="p-0 ml-5 text-2xl inline-block align-text-bottom font-albert font-bold leading-none">Joseph Castillo</p>
            <div class="flex">
              <ul>
                <li class="p-0 list-none inline mr-10 font-albert font-bold">about</li>
                <li class="p-0 list-none inline mr-10 font-albert font-bold">now</li>
                <li class="p-0 list-none inline mr-10 font-albert font-bold">projects</li>
                <li class="p-0 list-none inline mr-10 font-albert font-bold">resume</li>
              </ul>
              <span class="material-symbols-outlined mr-5"> light_mode </span>
            </div>
          </div>
          <div class="flex justify-between mt-24 mb-36">
            <div class="text mr-12 ml-16">
              <h1 class="text-5xl pb-7 font-albert font-bold">Hi! I'm Joseph.</h1>
              <p class="text-xl font-albert font-normal">
                I am an engineer located in Vancouver, Canada.<br></br><br></br>
                Currently, I am studying computer science with the aim of transitioning to software engineering, focusing on full-stack development.<br></br><br></br>
                In my free time, you can find me playing ultimate, hiking, or working on projects.
              </p>
            </div>
            <img class="w-60 h-52 mr-16 object-cover rounded-full" src="src/assets/me.jpg" alt="Personal site headshot placeholder"></img>
          </div>
          <div class="text-center">
            <h2 class="text-4xl pb-3 font-albert font-bold">Contact me!</h2>
            <div class="p-0 flex justify-center items-center">
              <img class="contact-icon w-9 h-9" src="src/assets/github-logo.svg" alt="Placeholder Icon"></img>
              <img class="contact-icon w-12 h-12" src="src/assets/linkedin-logo.svg" alt="Placeholder Icon"></img>
            </div>
            <p class="mt-3 font-albert underline">joseph.cast0226@gmail.com</p>
          </div>
          <p class="text-center pt-10 font-albert font-light">Designed & Built by Joseph Castillo</p>
        </div>
      </div>
    </>
  )
}

export default App
