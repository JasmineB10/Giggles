
function NavBarBtn(props:any) {
  return (
    <button className="px-6 py-2 bg-slate-50 text-base rounded-full font-medium outline outline-rose-300 hover:bg-rose-300 hover:outline-transparent">
            {props.name}
        </button>
  )
}
export default NavBarBtn;