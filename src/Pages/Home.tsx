import harpicVideo from "../Videos/dettol.mp4";
import video1 from "../Videos/HARPIC Door to Door.mp4";
import { Button } from "../components/ui/button";
import { ChevronRight } from "lucide-react";
import VideoService from "../Services/VideoService";
import ImageSlider from "../Services/ImageSlider";
import { IMAGES } from "../Services/ImageService";
import Marquee from "react-fast-marquee";
import { CLIENTS } from "../Services/ClientService";
import Form, { formData } from "../AppComponents/Form";
import TypeWriter from "../Services/TypeWriter";
import Footer from "../AppComponents/Footer";
import Cards from "../AppComponents/Cards";

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
        <div className="flex flex-col gap-10 items-start justify-center ml-9">
          <div className="w-3/4 sm:w-1/2">
            <h1 className="hidden md:block text-3xl md:text-4xl font-extrabold tracking-tight bgcolorbg2 merriweather mb-6">
              Transforming Brands with Innovative Marketing Solutions
            </h1>
            <p className="sm:text-xl">
              Our secret? We’re not just about campaigns, we’re about causes.
              Positive social impact is the core of everything we do.
            </p>
          </div>

          <div>
            <a href="#form">
              <Button variant="default" className="w-full md:py-6">
                <span className="bgcolorbg md:text-xl merriweather">
                  Our Partners
                </span>
                <Button variant="link" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Button>
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="pt-4">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bgcolorbg2 merriweather text-center">
            What We Offer:
          </h1>
          <Cards />
        </div>
      </section>

      <section className="md:flex mt-1 firstSection">
        <div className="firstSection">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Unlock Your
            <span className="bgcolorbg2"> Brand's</span> Potential with Our
            Unique
            <span className="bgcolorbg2"> Approach</span>
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
      </section>

      <section className="sm:flex sm:align-center sm:mt-9 sm:gap-12 px-4">
        <section>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Award-Winning
              <span> </span> <span> </span>
              <span className="bgcolorbg2"> Marketing and Communication </span>
              <span> </span>
              Agency
            </h1>
          </div>
          <div className="home-imageSlider mt-5">
            <ImageSlider ImageUrls={IMAGES} />
          </div>
        </section>

        <section className="firstSection mt-7 mb-7" id={"form"}>
          <Form onSubmit={onSubmit}></Form>
        </section>
      </section>

      <section id={"partners"}>
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

      <Footer></Footer>
    </div>
  );
};

export default Home;
