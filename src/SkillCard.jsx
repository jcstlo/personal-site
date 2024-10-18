function SkillCard({name}) {
  return (
    <>
      <div className="shadow-lg w-72 h-12 rounded-lg border border-slate-300 mb-6 flex items-center ml-3 mr-3">
        <p className="ml-5 font-albert font-normal text-lg text-lightModeText dark:text-darkModeText">{name}</p>
      </div>
    </>
  )
}

export default SkillCard
