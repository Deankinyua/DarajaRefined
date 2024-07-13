import { ChevronRight } from "lucide-react";
import { AccordionDemo } from "../AppComponents/Accordion";
import { Button } from "../components/ui/button";
import everestVideo from "../Videos/everestcorrect~2.mp4";

const About = () => {
  return (
    <div className="mt-10">
      <div className="sm:flex sm:justify-between about-wrapper centerizer sm:gap-12">
        <div className="basis-2/4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bgcolorbg2 merriweather">
            THE DARAJA PLUS STORY
          </h1>
          <p>
            We’re not your average marketing and communications company. We’re a
            team of innovators on a mission to reshape consumer behavior. From
            digital dynamism to ground-shaking activities, we bring brands to
            life with impact. Our secret? We’re not just about campaigns, we’re
            about causes. Positive social impact is the core of everything we
            do. Behind Daraja Plus – We are a team of dedicated experts, each
            bringing their unique spark to every project. Since 2015, we’ve been
            rewriting the playbook, proudly steering brands toward success.
          </p>
        </div>
        <div>
          <p className="mt-4 font-semibold underline bgcolorbg2 merriweather">
            Frequently Asked Questions.
          </p>
          <AccordionDemo></AccordionDemo>
        </div>
      </div>

      <div className="hero_video_container">
        <video
          className="hero_video"
          src={everestVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="overlay1">
          <div className="flex flex-col gap-10 items-start justify-center ml-9">
            <div className="w-3/4 sm:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bgcolorbg2 merriweather mb-6">
                Partner With Us And Achieve Greater Heights
              </h1>
              <p className="sm:text-xl">
                Be part of the most competitive marketing and communications
                company.Why hesitate to work with us? We know you want to
                &#9743;
              </p>
            </div>

            <div>
              <a href="#form">
                <Button variant="default" className="w-full md:py-6">
                  <span className="bgcolorbg md:text-xl merriweather">
                    Start Now
                  </span>
                  <Button variant="link" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
