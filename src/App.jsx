function App() {
  return (
    <>
      <div class="header flex justify-between mt-5">
        <p class="p-0 list-none inline ml-5">Joseph Castillo</p>
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
      <div class="main flex justify-between mt-24 mb-36">
        <div class="text ml-52 mr-12">
          <h1>Hi! I'm Joseph.</h1>
          <p>
            This is where I will fill in my personal description.
            Right now, I'm just focusing on getting the structure in place first.
          </p>
        </div>
        <img class="w-60 h-52 mr-52" src="src/assets/headshot_placeholder.jpg" alt="Personal site headshot placeholder"></img>
      </div>
      <div class="contact text-center">
        <h2 class="contact">Contact me!</h2>
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
      <p class="footer text-center">Designed & Built by Joseph Castillo</p>
    </>
  )
}

export default App
