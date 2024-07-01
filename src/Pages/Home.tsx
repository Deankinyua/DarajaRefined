import harpicVideo from "/Videos/HARPIC Door to Door.mp4";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";

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
        <div className="absolute left-10 bottom-48">
          <Button variant="default" className="mr-6">
            <span className="text-white-700">TALK TO US</span>

            <Button variant="link" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Button>
          {/* <Button variant="default">
            <span className="text-red-700">PARTNERS</span>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
