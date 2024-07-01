import harpicVideo from "/Videos/HARPIC Door to Door.mp4";
import video1 from "../../public/Videos/Sunlight Sunny Side campaign.mp4";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import "../CustomStyles/typography.css";
import VideoService from "../Services/VideoService";

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
        </div>
      </div>
      <div className="firstSection">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Unlock Your
          <span className="text-red-600"> Brand's</span> Potential with Our
          Unique
          <span className="text-red-600"> Approach</span>
        </h1>
        <p className="text-xl">
          Our dedication to increasing numbers has been the primary reason why
          we are trusted by the biggest brands. But what really sets us apart?
          Our commitment to brand campaigns with a purpose. We’re here to make
          waves and make them count!
        </p>
      </div>
      <div className="videoContainer">
        <VideoService videoName={video1} />
      </div>
    </div>
  );
};

export default Home;
