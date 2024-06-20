function SkillCard({name}) {
  return (
    <>
      <div class="shadow-lg w-72 h-12 rounded-lg border border-slate-300 mb-6 flex items-center ml-3 mr-3">
        <p class="ml-5 font-albert font-normal text-lg">{name}</p>
      </div>
    </>
  )
}

export default SkillCard