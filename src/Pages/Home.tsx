import harpicVideo from "/Videos/HARPIC Door to Door.mp4";
import { Button } from "../../components/ui/button";

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
        <div className="absolute left-10 bottom-24">
          <Button variant="default">
            <span className="text-blue-600">GET STARTED</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
