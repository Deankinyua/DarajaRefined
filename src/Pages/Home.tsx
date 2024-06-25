import harpicVideo from "/Videos/HARPIC Door to Door.mp4";

const Home = () => {
  return (
    <div className="hero_video_container">
      <video
        className="hero_video"
        src={harpicVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="overlay1">
        <button>Get Started</button>
        <p>To my Site</p>
      </div>
    </div>
  );
};

export default Home;
