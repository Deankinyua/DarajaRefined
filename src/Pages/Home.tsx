import harpicVideo from "/Videos/HARPIC Door to Door.mp4"

const Home = () => {
  return(
     <div className="hero_video_container">  

     <div className="overlay1"></div>  

     <video className="hero_video" src={harpicVideo} autoPlay loop muted></video>
       </div>
  
  )

};

export default Home;


