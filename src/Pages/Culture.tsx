import Footer from "../AppComponents/Footer";

import culture1 from "../Assets/TeamPictures/the-colony-962x1024.jpg";
import culture2 from "../Assets/TeamPictures/brainstorm.jpg";
import culture3 from "../Assets/TeamPictures/fun.jpg";
import culture4 from "../Assets/TeamPictures/nature.jpg";
import culture5 from "../Assets/TeamPictures/competition-768x1024.jpg";
import culture6 from "../Assets/TeamPictures/celebration.jpg";

import "../CustomStyles/home.css";

const Culture = () => {
  return (
    <div className="mt-14">
      <div className="my-6 px-4 sm:flex sm:gap-5 sm:items-center sm:justify-between sm:px-8">
        <div className="maxwidth500">
          <h1 className="text-3xl sm:text-3xl font-extrabold tracking-tight merriweather">
            We are <span className="bgcolorbg2">The Colony</span>
          </h1>
          <p className="pt-3 md:text-xl">
            The colony is diverse, with members of different backgrounds, skills
            and talents. Just like an ant colony, we are resilient, committed
            and constantly working together to achieve desired results. We
            understand the value of hard work and pushing till the end as a
            committed, diligent, willing and strategic team. We accomplish more
            together, always remembering the big picture.
          </p>
        </div>
        <div className="w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture1}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>
      </div>

      <div className="my-6 px-4 sm:flex sm:gap-5 sm:items-center sm:justify-between sm:px-8">
        <div className="hidden sm:block w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture2}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>

        <div className="maxwidth500">
          <h1 className="text-3xl sm:text-3xl font-extrabold tracking-tight merriweather">
            Brainstorm at <span className="bgcolorbg2">The Colony</span>
          </h1>
          <p className="pt-3 md:text-xl">
            Brainstorms are so important to us! We put our brilliant minds
            behind every concept we come up with, to foster creativity, generate
            innovative ideas, and collaborate for greatness!
          </p>
        </div>

        <div className="sm:hidden w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture2}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>
      </div>

      <div className="my-6 px-4 sm:flex sm:gap-5 sm:items-center sm:justify-between sm:px-8">
        <div className="maxwidth500">
          <h1 className="text-3xl sm:text-3xl font-extrabold tracking-tight merriweather">
            Nature with <span className="bgcolorbg2">The Colony</span>
          </h1>
          <p className="pt-3 md:text-xl">
            Nature isn’t just a backdrop for us; it’s a stage to unleash our
            boundless passion and energy. Stepping out isn’t just a break from
            the office—it’s a grand entrance into a world filled with
            unforgettable experiences.
          </p>
        </div>
        <div className="w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture3}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>
      </div>

      <div className="my-6 px-4 sm:flex sm:gap-5 sm:items-center sm:justify-between sm:px-8">
        <div className="hidden sm:block w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture4}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>

        <div className="maxwidth500">
          <h1 className="text-3xl sm:text-3xl font-extrabold tracking-tight merriweather">
            Celebration at <span className="bgcolorbg2">The Colony</span>
          </h1>
          <p className="pt-3 md:text-xl">
            At the Colony, celebration, creativity, and joy are the heartbeat of
            our spirit. We don’t just work; we dance through challenges, share
            victories, and cherish every moment as a masterpiece in the making.
          </p>
        </div>

        <div className="sm:hidden w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture4}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>
      </div>

      <div className="my-6 px-4 sm:flex sm:gap-5 sm:items-center sm:justify-between sm:px-8">
        <div className="maxwidth500">
          <h1 className="text-3xl sm:text-3xl font-extrabold tracking-tight merriweather">
            Play at <span className="bgcolorbg2">The Colony</span>
          </h1>
          <p className="pt-3 md:text-xl">
            All work with no play makes the colony dull. In our world, breaks
            are not just pauses; they’re opportunities for rejuvenation and
            inspiration. Whether it’s a quick game, a shared laugh, or a
            spontaneous moment of creativity, we understand that these elements
            are essential to fueling our productivity and maintaining a dynamic
            & engaging atmosphere.
          </p>
        </div>
        <div className="w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture5}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>
      </div>

      <div className="my-6 px-4 sm:flex sm:gap-5 sm:items-center sm:justify-between sm:px-8">
        <div className="hidden sm:block w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture6}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>

        <div className="maxwidth500">
          <h1 className="text-3xl sm:text-3xl font-extrabold tracking-tight merriweather">
            Competition at <span className="bgcolorbg2">The Colony</span>
          </h1>
          <p className="pt-3 md:text-xl">
            The perfect end to competition is the sweet taste of victory! At the
            Colony, our adventures unfold, and as competition starts, the reward
            isn’t just a win, but the realization of our strengths and
            potential.
          </p>
        </div>

        <div className="sm:hidden w-4/5 centerizer sm:cuimg_container py-5 minwidth45">
          <img
            src={culture6}
            alt=""
            className="object-cover md:w-1/2 centerizer"
          />
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Culture;
