function ProjectCard() {
  return (
    <div class="flex mb-7">
      <img class="w-72 h-72 border border-stone-800 rounded-2xl" src="question-mark-box.svg" alt="Placeholder Icon"></img>
      <div class="ml-5">
        <h2 class="font-albert font-bold text-2xl">Project Name Here</h2>
        <p class="font-albert font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="flex">
          <img class="w-9 h-9" src="question-mark-box.svg" alt="Placeholder Icon"></img>
          <img class="w-9 h-9" src="question-mark-box.svg" alt="Placeholder Icon"></img>
          <img class="w-9 h-9" src="question-mark-box.svg" alt="Placeholder Icon"></img>
          <img class="w-9 h-9" src="question-mark-box.svg" alt="Placeholder Icon"></img>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard