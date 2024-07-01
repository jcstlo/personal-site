const technologyIcons = {
  question1: "question-mark-box.svg",
  question2: "question-mark-circle.svg",
  question3: "question-mark-shield.svg",
  mech: "mech-gear-light-mode.svg",
  csharp: "c-sharp.svg",
  c: "c.svg",
  ti: "ti.svg"
}

const technologyIconsDarkMode = {
  question1: "question-mark-box.svg",
  question2: "question-mark-circle.svg",
  question3: "question-mark-shield.svg",
  mech: "mech-gear-dark-mode.svg",
  csharp: "c-sharp.svg",
  c: "c.svg",
  ti: "ti.svg"
}

const placeholderProj = {
  name: "Placeholder Project Name",
  shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  mainImage: "question-mark-box.svg",
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
  technologies: [
    "mech",
    "csharp",
    "c",
    "ti",
  ]
}

export { technologyIcons, technologyIconsDarkMode, placeholderProj, beehiveProj };