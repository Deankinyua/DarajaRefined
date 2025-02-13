import { ChevronRight } from "lucide-react";
import { AccordionDemo } from "../AppComponents/Accordion";
import { Button } from "../components/ui/button";
import everestVideo from "../Videos/everestcorrect~2.mp4";
import { FaQuoteLeft } from "react-icons/fa";
import Footer from "../AppComponents/Footer";

import Form, { formData } from "../AppComponents/Form";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: formData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    navigate("/");
    console.log(data);
  };

  return (
    <div className="mt-10">
      <div className="md:flex md:justify-between about-wrapper centerizer sm:gap-12 sm:py-10 px-6 md:px-10">
        <div className="basis-2/3 sm:px-7 md:px-0">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bgcolorbg2 merriweather">
            THE DARAJA PLUS STORY
          </h1>
          <p className="min350 leading-relaxed lg:pr-8 lg:pt-5">
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
        <div className="max-w-md md:min400 mt-7 sm:pl-7 md:pl-0">
          <h2 className="font-extrabold">WHAT PEOPLE SAY ABOUT US</h2>
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-tight bgcolorbg2 merriweather">
            Client Feedback
          </h1>
          <FaQuoteLeft />
          <div>
            As a Digital & Experiential media company , we don’t want to be
            associated with anything less than the BEST. That is why we always
            look forward to creating experiences with Daraja.
            <span className="block font-semibold text-center">
              Brian Masila MD,
            </span>
            <span className="text-center text-xs block">Hauz Ent</span>
          </div>

          <div className="mt-9 lg:hidden">
            <FaQuoteLeft />
            Working with Daraja was delightful. The events’ team literally
            brought their proposal to life. With an eye for detail and a
            goal-oriented approach, they surpassed my expectations.
            <span className="block font-semibold text-center">
              Linda Mtama, Marketing Manager,
            </span>
            <span className="text-center text-xs block">
              Britania Foods Ltd
            </span>
          </div>
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight  merriweather mb-6">
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

      <section className="my-6 md:flex sm:justify-between sm:gap-12 w-11/12 centerizer">
        <div className="sm:maxwidth40 sm:centerizer">
          <p className="mt-4 font-semibold underline bgcolorbg2 merriweather">
            Frequently Asked Questions.
          </p>
          <AccordionDemo></AccordionDemo>
        </div>

        <div className="my-7 px-6 md:my-0 minwidth50 lg:minwidth60" id={"form"}>
          <Form onSubmit={(data) => onSubmit(data)}></Form>
        </div>

        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mzB1VGEGcSU?si=EUBm5kQbhikzfN5J"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};

export default About;
