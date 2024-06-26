import NavBarBtn from "./NavBarBtn"
import { useMediaQuery } from 'react-responsive';
function NavBarBtnTab() {

  const afterMediumBreakpoint = useMediaQuery({query: "(min-width: 768px"});
  if(afterMediumBreakpoint) {
  return (
    <div className="row-span-2 grid grid-cols-6 gap-4 place-items-center py-2 w-full  z-10">

      <div className="col-span-1">
      <button className="px-6 py-3 text-lg rounded-full font-bold transition ease-in-out delay-150 bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-400 hover:-translate-y-0.5 hover:scale-110 duration-300">
           Explore
        </button>
      </div>
      <div className="col-span-1">
            <NavBarBtn name={"Quote of the Day"}></NavBarBtn>
        </div>
      <div className="col-span-1">
            <NavBarBtn name={"Discover Yourself"}></NavBarBtn>
        </div>
        <div className="col-span-1">
            <NavBarBtn name={"Features"}></NavBarBtn>
        </div>
        <div className="col-span-1">
                {/* Login/Profile */}
                <NavBarBtn name={"Login"}></NavBarBtn>
        </div>
        <div className="col-span-1">
                {/* "logout" */}
               <NavBarBtn name={"SignUp"}></NavBarBtn>
        </div>
    </div>
  )
}
return(
  <div className="w-full pt-5 h-screen bg-violet-200 text-center">
    <button className="mb-4 text-blue-500 font-semibold text-xl tracking-widest">Giggles</button>
    <NavBarBtn name={"Explore"}></NavBarBtn>
    <NavBarBtn name={"Features"}></NavBarBtn>
    <NavBarBtn name={"Living Well"}></NavBarBtn>
    <NavBarBtn name={"Conditions A-Z"}></NavBarBtn>
    <NavBarBtn name={"Find Help"}></NavBarBtn>
    <NavBarBtn name={"Volunteer"}></NavBarBtn>
    <NavBarBtn name={"Donate"}></NavBarBtn>
    <NavBarBtn name={"Podcast"}></NavBarBtn>
    <NavBarBtn name={"Our Programmes"}></NavBarBtn>
    <NavBarBtn name={"Contact Us"}></NavBarBtn>


  </div>
  
)
}

export default NavBarBtnTab
