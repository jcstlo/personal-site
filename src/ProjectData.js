const technologyIcons = {
  question1: "question-mark-box.svg",
  question2: "question-mark-circle.svg",
  question3: "question-mark-shield.svg",
  mech: "mech-gear-light-mode.svg",
  csharp: "c-sharp.svg",
  c: "c.svg",
  ti: "ti.svg",
  react: "react.svg",
  javascript: "javascript.svg"
}

const technologyIconsDarkMode = {
  question1: "question-mark-box.svg",
  question2: "question-mark-circle.svg",
  question3: "question-mark-shield.svg",
  mech: "mech-gear-dark-mode.svg",
  csharp: "c-sharp.svg",
  c: "c.svg",
  ti: "ti.svg",
  react: "react.svg",
  javascript: "javascript.svg"
}

const placeholderProj = {
  name: "Work in progress!",
  shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  mainImage: "question-mark-box.svg",
  link: "none",
  technologies: [
    "question1",
    "question2",
    "question3",
    "question1",
    "question2"
  ]
};

const beehiveProj = {
  name: "Smart Beehive",
  shortDesc: "Customized a beehive with \"smart\" features, such as temperature tracking, weight detection, and physical orientation. Information gets sent to a GUI created with C# to show live plots, warnings, and recommended actions to maintain the health of the beehive. This was a creative final project in a mechatronics engineering course, done by myself and a classmate. I was in charge of programming the firmware of a TI MSP430 microcontroller in C to pass information to/from the C# GUI through UART, integrating data from various sensors (load cell, accelerometer, temperature sensor).",
  mainImage: "beehive.jpg",
  link: "https://www.youtube.com/watch?v=4DKA0eWGjeA",
  technologies: [
    "mech",
    "csharp",
    "c",
    "ti",
  ]
}

const codeEchoProj = {
    name: "Code Templater",
    shortDesc: "Created a simple tool to help users easily write repeatable code by first defining a template, and then seeing the output generate immediately. This was a quick idea I came up with to practice adding interactivity to a website with React states. I used Material UI to style the page.",
    mainImage: "codeecho.jpg",
    link: "https://codeecho-972.pages.dev",
    technologies: [
        "react",
        "javascript",
    ]
}

export { technologyIcons, technologyIconsDarkMode, placeholderProj, beehiveProj, codeEchoProj };
