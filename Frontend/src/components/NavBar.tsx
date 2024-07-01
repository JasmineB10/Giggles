import { useMediaQuery } from "react-responsive";
import HomeOptionsTab from "./HomeOptionsTab"
import NavBarBtnTab from "./NavBarBtnTab"
import Hamburger from "./Hamburger";
import { useState } from "react";

function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  //REPETITION
  const afterMediumBreakpoint = useMediaQuery({ query: "(min-width: 768px)" });
  if(afterMediumBreakpoint){
  return (
    <div className="grid grid-rows-12 z-10 fixed top-0 w-full h-screen">
    
       <NavBarBtnTab/>
      <HomeOptionsTab/>    
      </div>
  )
}
  return(
    <div className="grid grid-rows-12 w-48 fixed h-screen">
      <Hamburger onClick={handleHamburgerClick} isOpen={isNavbarOpen} />
      {isNavbarOpen && <NavBarBtnTab/>}
    </div>
    
  )
}

export default NavBar
