import HomeImg from "./HomeImg"
import HomeTxt from "./HomeTxt"

function HomeCard(props:any) {
  return (
    <div className="h-screen">
       <div className=" text-center px-5 py-12 text-5xl">
        {props.heading}
      </div> 
      <div className='flex justify-center mt-5 mb-6 h-1/2' >
       <div className=''>
         <HomeImg img={props.img}/>
       </div>
       <div className=''>
         <HomeTxt text={props.text} btntext={props.btntext}/>
       </div>
       </div>
      </div>
  )
}

export default HomeCard
