import H_option from "./H_option"
import NavBarBtn from "./NavBarBtn"

function NavBar() {
  return (
    <div className="grid grid-rows-12 z-10 fixed top-0 w-full h-screen">
    <div className="row-span-2 grid grid-cols-7 place-items-center py-2 w-full  z-10">
    <div className="col-span-1">
      <button className="px-6 py-3 text-lg rounded-full font-bold transition ease-in-out delay-150 bg-gradient-to-r from-blue-400 via-purple-500 to-fuchsia-400 hover:-translate-y-0.5 hover:scale-110 duration-300">
           Explore
        </button>
      </div>
      
        <div className="col-span-2">
            <NavBarBtn name={"Discover Yourself"}></NavBarBtn>
        </div>
        <div className="col-span-1">
            <NavBarBtn name={"Features"}></NavBarBtn>
        </div>
        <div className="col-span-1">
            <NavBarBtn name={"Community"}></NavBarBtn>
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
      <div className="row-span-10 grid grid-cols-8 z-10 pt-8">
        <div className="row-start-2 col-span-2 col-start-1">
        <H_option option={"Conditions A-Z"}/>
        </div>
        <div className="row-start-3 col-span-1 col-start-2">
        <H_option option={"Living Well"}/>
        </div>
        <div className="row-start-4 col-span-2 col-start-1">
        <H_option option={"Understand Yourself"}/>
        </div>
        <div className="row-start-5 col-span-1 col-start-2">
        <H_option option={"Volunteer"}/>
        </div>
        <div className="row-start-2 col-span-1 col-start-7">
        <H_option option={"Help"}/>
        </div>
        <div className="row-start-3 col-span-2 col-start-7">
          <H_option option={"Donate"}/>
        </div>
        <div className="row-start-4 col-span-1 col-start-7">
          <H_option option={"Podcast"}/>
        </div>
        <div className="row-start-5 col-span-2 col-start-7">
          <H_option option={"Our Programmes"}/>
        </div>
        
      </div>
      </div>
  )
}

export default NavBar
