import './App.css'

function App() {
  return (
    <>
      <div class="header">
        <p class="text-3xl font-bold underline">Joseph Castillo</p>
        <ul>
          <li>about</li>
          <li>now</li>
          <li>projects</li>
          <li>resume</li>
          <li>
          <span class="material-symbols-outlined"> light_mode </span>
          </li>
        </ul>
      </div>
      <div class="main">
        <div class="text">
          <h1>Hi! I'm Joseph.</h1>
          <p>
            This is where I will fill in my personal description.
            Right now, I'm just focusing on getting the structure in place first.
          </p>
        </div>
        <img class="headshot" src="src/assets/headshot_placeholder.jpg" alt="Personal site headshot placeholder"></img>
      </div>
      <div class="contact">
        <h2 class="contact">Contact me!</h2>
        <ul>
          <li>
            <img class="contact-icon" src="src/assets/icon_placeholder.jpg" alt="Placeholder Icon"></img>
          </li>
          <li>
            <img class="contact-icon" src="src/assets/icon_placeholder.jpg" alt="Placeholder Icon"></img>
          </li>
          <li>
            <img class="contact-icon" src="src/assets/icon_placeholder.jpg" alt="Placeholder Icon"></img>
          </li>
        </ul>
      </div>
      <p class="footer">Designed & Built by Joseph Castillo</p>
    </>
  )
}

export default App
