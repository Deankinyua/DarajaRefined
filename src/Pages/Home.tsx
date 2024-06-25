import harpicVideo from "../../public/Videos/videoplaybacklotus.mp4";

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
      <div className="overlay1"></div>
      <div>
        <h1>Welcome</h1>
        <p>To my Site</p>
      </div>
    </div>
  );
};

export default Home;
