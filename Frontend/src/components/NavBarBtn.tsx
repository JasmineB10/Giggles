import { useMediaQuery } from 'react-responsive';
function NavBarBtn(props:any) {
  const afterMediumBreakpoint = useMediaQuery({query: "(min-width: 768px"});
  if(afterMediumBreakpoint){
  return (

    
    <button className="px-6 py-2 bg-slate-50 text-base rounded-full font-medium outline outline-rose-300 hover:bg-rose-300 hover:outline-transparent">
            {props.name}
        </button>
  )
}
return(
  <button className="w-full pb-2 mt-2 font-medium border-2 border-violet-200/80 border-b-indigo-300 shadow-sm hover:shadow-md focus:border-b-indigo-400">{props.name}</button>
)
}
export default NavBarBtn;