
function HomeImg(props : any) {
    return (
      <div className="w-96 h-96 mr-5 rounded-xl">
        <img 
          src={props.img}
          className="rounded-2xl object-fit w-full h-full"
          alt="Home Image"
        ></img>
      </div>
    )
  }
  
  export default HomeImg
  