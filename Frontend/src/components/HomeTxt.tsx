function HomeTxt(props:any) {
  return (
    //HOVER EFFECT DOESN'T WORK
    <div className="w-96 h-96 px-14 py-10 text-3xl bg-fuchsia-200 rounded-xl shadow-md shadow-slate-600 hover:shadow-2xl hover:shadow-fuchsia-500 transition-shadow duration-300">
      {props.text}
      <div className="text-2xl">
        <button className="px-4 py-2 outline outline-2 font-medium outline-sky-950 mt-5 rounded-full text-sky-950 bg-slate-100">{props.btntext}</button>
      </div>
    </div>
  )
}

export default HomeTxt
