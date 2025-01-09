const technologyIcons = {
  question1: "question-mark-box.svg",
  question2: "question-mark-circle.svg",
  question3: "question-mark-shield.svg",
  mech: "mech-gear-light-mode.svg",
  csharp: "c-sharp.svg",
  c: "c.svg",
  ti: "ti.svg",
  react: "react.svg",
  javascript: "javascript.svg",
  typescript: "typescript.svg",
  nextjs: "nextjs-light-mode.svg",
  prisma: "prisma-light-mode.svg",
  tailwind: "tailwind.svg",
  digitalocean: "digitalocean.svg",
  nginx: "nginx.svg",
  docker: "docker.svg",
  python: "python.svg",
  postgresql: "postgresql.svg",
  aws: "aws-light-mode.svg",
  bootstrap: "bootstrap.svg",
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
  javascript: "javascript.svg",
  typescript: "typescript.svg",
  nextjs: "nextjs-dark-mode.svg",
  prisma: "prisma-dark-mode.svg",
  tailwind: "tailwind.svg",
  digitalocean: "digitalocean.svg",
  nginx: "nginx.svg",
  docker: "docker.svg",
  python: "python.svg",
  postgresql: "postgresql.svg",
  aws: "aws-dark-mode.svg",
  bootstrap: "bootstrap.svg",
}

const placeholderProj = {
  name: "Work in progress!",
  shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  mainImage: "question-mark-box.svg",
  link: "none",
  github: "https://github.com/jcstlo",
  technologies: [
    "question1",
    "question2",
    "question3",
  ]
};

const beehiveProj = {
  name: "Smart Beehive",
  shortDesc: "Customized a beehive with \"smart\" features, such as temperature tracking, weight detection, and physical orientation. Information gets sent to a GUI created with C# to show live plots, warnings, and recommended actions to maintain the health of the beehive. This was a creative final project in a mechatronics engineering course, done by myself and a classmate. I was in charge of programming the firmware of a TI MSP430 microcontroller in C to pass information to/from the C# GUI through UART, integrating data from various sensors (load cell, accelerometer, temperature sensor).",
  mainImage: "beehive.jpg",
  link: "https://www.youtube.com/watch?v=4DKA0eWGjeA",
  github: "none",
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
  github: "https://github.com/jcstlo/codeecho",
  technologies: [
    "react",
    "javascript",
  ]
}

const blackjackTrainerProj = {
  name: "Blackjack Strategy Trainer",
  shortDesc: "Built an interactive web app to train users to make correct decisions in blackjack, based on blackjack basic strategy. I implemented the game and training logic from scratch, including the ability to split and/or double down when the current hand allows. For deployment, I used Docker to containerize the application, configured nginx as a reverse proxy (with Certbot for https), and deployed this project onto an Ubuntu VPS hosted on DigitalOcean.",
  mainImage: "bjt.jpg",
  link: "https://snaptags.app",
  github: "https://github.com/jcstlo/blackjack-trainer",
  technologies: [
    "typescript",
    "react",
    "tailwind",
    "docker",
    "nginx",
    "digitalocean",
  ]
}

const narroProj = {
  name: "narro - Bookmark Search Engine",
  shortDesc: "Built a full-stack application to manage and filter bookmarks. Created with Next.js (App Router), PostgreSQL to store user data, and Prisma to query the database. The main motivation behind this project was to build a better user interface to store and retrieve bookmarks, as I found that current bookmark apps are tedious to setup/organize and don't have strong search capabilities.",
  mainImage: "narro.jpg",
  link: "https://demo.narrobookmarks.app",
  github: "https://github.com/jcstlo/narro",
  technologies: [
    "typescript",
    "nextjs",
    "prisma",
    "tailwind",
    "docker",
    "digitalocean",
  ]
}

const fountainPenShowcaseProj = {
  name: "Fountain Pen Showcase",
  shortDesc: "Created a full-stack application to record and share fountain pen collections. The app is built with Django 5.1 (Python), user data is stored in PostgreSQL, and user-uploaded images are stored on an AWS S3 bucket. Deployment is done using Docker on a DigitalOcean VPS, behind Gunicorn and nginx. The main motivation behind this project was to allow fountain pen enthusiasts to easily list and show their collections to others.",
  mainImage: "fps.jpg",
  link: "https://fountainpenshowcase.com",
  github: "https://github.com/jcstlo/fp-showcase",
  technologies: [
    "python",
    "bootstrap",
    "postgresql",
    "aws",
    "docker",
    "digitalocean",
  ]
}

export { technologyIcons,
         technologyIconsDarkMode,
         placeholderProj,
         beehiveProj,
         codeEchoProj,
         blackjackTrainerProj,
         narroProj,
         fountainPenShowcaseProj,
       };
