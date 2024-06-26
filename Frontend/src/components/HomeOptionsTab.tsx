import H_option from "./H_option"
import { useMediaQuery } from 'react-responsive';


function HomeOptionsTab() {
  const afterMediumBreakpoint = useMediaQuery({query: "(min-width: 768px"});
  if(afterMediumBreakpoint)
  return (
    <div className="row-span-10 grid grid-cols-8 z-10 pt-8">
        <div className="row-start-2 col-span-2 col-start-1">
        <H_option option={"Conditions A-Z"}/>
        </div>
        <div className="row-start-3 col-span-2 col-start-1">
        <H_option option={"Living Well"}/>
        </div>
        <div className="row-start-4 col-span-3 col-start-1">
        <H_option option={"Understand Yourself"}/>
        </div>
        <div className="row-start-5 col-span-1 col-start-2">
        <H_option option={"Volunteer"}/>
        </div>
        <div className="row-start-2 col-span-1 col-start-7">
        <H_option option={"Help"}/>
        </div>
        <div className="row-start-3 col-span-1 col-start-7">
          <H_option option={"Donate"}/>
        </div>
        <div className="row-start-4 col-span-1 col-start-7">
          <H_option option={"Podcast"}/>
        </div>
        <div className="row-start-5 col-span-2 col-start-6">
          <H_option option={"Our Programmes"}/>
        </div>
    </div>
  )
  return(
    <>
    </>
  )
}

export default HomeOptionsTab
