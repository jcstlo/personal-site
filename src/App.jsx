function App() {
  return (
    <>
      <div class="flex justify-center">
        <div class="max-w-5xl">
          <div class="flex justify-between mt-5">
            <p class="p-0 ml-5 inline-block align-text-bottom">Joseph Castillo</p>
            <ul>
              <li class="p-0 list-none inline mr-10">about</li>
              <li class="p-0 list-none inline mr-10">now</li>
              <li class="p-0 list-none inline mr-10">projects</li>
              <li class="p-0 list-none inline mr-10">resume</li>
              <li class="p-0 list-none inline mr-10">
              <span class="material-symbols-outlined"> light_mode </span>
              </li>
            </ul>
          </div>
          <div class="flex justify-between mt-24 mb-36">
            <div class="text mr-12 ml-16">
              <h1 class="text-5xl pb-7">Hi! I'm Joseph.</h1>
              <p class="text-xl">
                This is where I will fill in my personal description.
                Right now, I'm just focusing on getting the structure in place first.
              </p>
            </div>
            <img class="w-60 h-52 mr-16" src="src/assets/headshot_placeholder.jpg" alt="Personal site headshot placeholder"></img>
          </div>
          <div class="text-center">
            <h2 class="text-4xl pb-3">Contact me!</h2>
            <ul class="p-0 flex justify-center">
              <li class="p-0 list-none inline">
                <img class="contact-icon w-12 h-12" src="src/assets/icon_placeholder.jpg" alt="Placeholder Icon"></img>
              </li>
              <li class="p-0 list-none inline">
                <img class="contact-icon w-12 h-12" src="src/assets/icon_placeholder.jpg" alt="Placeholder Icon"></img>
              </li>
              <li class="p-0 list-none inline">
                <img class="contact-icon w-12 h-12" src="src/assets/icon_placeholder.jpg" alt="Placeholder Icon"></img>
              </li>
            </ul>
          </div>
          <p class="text-center pt-10">Designed & Built by Joseph Castillo</p>
        </div>
      </div>
    </>
  )
}

export default App
