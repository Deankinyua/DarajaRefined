import { AccordionDemo } from "../AppComponents/Accordion";

const About = () => {
  return (
    <div className="mt-10 about-wrapper">
      <div className="sm:flex">
        <div className="about-intro">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
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
          <AccordionDemo></AccordionDemo>
        </div>
      </div>
    </div>
  );
};

export default About;
