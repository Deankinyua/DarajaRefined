import harpicVideo from "../Videos/dettol.mp4";
import video1 from "/src/Videos/Sunlight Sunny Side campaign.mp4";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import "../CustomStyles/home.css";
import VideoService from "../Services/VideoService";
import ImageSlider from "../Services/ImageSlider";
import { IMAGES } from "../Services/ImageService";
import Marquee from "react-fast-marquee";
import { CLIENTS } from "../Services/ClientService";
import "../CustomStyles/about.css";
import "../CustomStyles/custom.css";
import Form, { formData } from "../AppComponents/Form";
import TypeWriter from "../Services/TypeWriter";

const Home = () => {
  const onSubmit = async (data: formData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    window.location.reload();
  };

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
        <div className="absolute left-10 bottom-24 py-2.5 px-2.5 md:left-28">
          <a href="#form" className="px-2.5">
            <Button variant="default" className="mr-6 w-full md:py-6">
              <span className="bgcolorbg md:text-2xl">TALK TO US</span>
              <Button variant="link" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Button>
          </a>
        </div>
      </div>
      <section className="md:flex mt-1 firstSection">
        <div className="firstSection">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Unlock Your
            <span className="text-red-600"> Brand's</span> Potential with Our
            Unique
            <span className="text-red-600"> Approach</span>
          </h1>
          <p className="text-xl leading-loose">
            Our dedication to increasing numbers has been the primary reason why
            we are trusted by the biggest brands. But what really sets us apart?
            Our commitment to brand campaigns with a purpose. We’re here to make
            waves and make them count!
          </p>
        </div>
        <div className="videoContainer">
          <VideoService videoName={video1} />
        </div>
      </section>

      <section>
        <TypeWriter></TypeWriter>
        <div>
          <Marquee pauseOnClick={true} speed={15}>
            <div className="brandsContainer">
              {CLIENTS.map((client) => (
                <div className="imgMarque clientContainer">
                  <img src={client} alt="" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      <section className="sm:flex sm:align-center sm:mt-9">
        <section className="firstSection mt-7 mb-7" id={"form"}>
          <Form onSubmit={onSubmit}></Form>
        </section>

        <section>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Award-Winning
              <span> </span> <span> </span>
              <span className="text-red-600">
                {" "}
                Marketing and Communication{" "}
              </span>
              <span> </span>
              Agency
            </h1>
          </div>
          <div className="home-imageSlider mt-5">
            <ImageSlider ImageUrls={IMAGES} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
