
function H_option(props:any) {
  return (
    <div className="px-6 py-2 bg-slate-50 text-base rounded-full font-medium outline outline-blue-300 hover:bg-blue-300 hover:outline-transparent">
      <button>{props.option}</button>
    </div>
  )
}

export default H_option
