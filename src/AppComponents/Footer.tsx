import { NavLink } from "react-router-dom";
import darajalogo from "/src/Assets/DarajaLogo/FotoJet.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="w-1/2 centerizer">
        <div className="img_size md:w-2/6 flex gap-4 justify-between items-center">
          <NavLink to={"/"}>
            <img src={darajalogo} alt="The Logo of DarajaPlus" />
          </NavLink>
        </div>
      </div>

      <div className="width80 centerizer mt-8 py-10">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bgcolorbg2 merriweather mb-8">
          Celebrating Creativity and Driving Impact!
        </h1>
        <div className="sm:flex sm:justify-between sm:items-start">
          <section>
            <h1 className="text-xl font-semibold tracking-tight pb-5 colorcapital sm:pt-6">
              Nairobi
            </h1>
            <ul>
              <li>No 4 Town House</li>
              <li>Korosho Road</li>
              <li>Valley Arcade</li>
              <li>+254 702245534</li>
              <li>info@darajaplus.com</li>
            </ul>
          </section>

          <section>
            <h1 className="text-xl font-semibold tracking-tight pb-5 pt-6 colorcapital">
              Kampala
            </h1>
            <ul>
              <li>Ministers Village</li>
              <li>Plot 34</li>
              <li>Queen Maxima Road, off Matyrs Way</li>
              <li>+256 772959946</li>
              <li>info@darajaplus.com</li>
            </ul>
          </section>

          <section>
            <h1 className="text-xl font-semibold tracking-tight pb-5 pt-6 colorcapital">
              Lusaka
            </h1>
            <ul>
              <li>Plot 29</li>
              <li>Mbeki Road</li>
              <li>Valley Arcade</li>
              <li>+260 727175469</li>
              <li>info@darajaplus.com</li>
            </ul>
          </section>
        </div>
        <section className="flex py-8 justify-center gap-7">
          <FaFacebook size={30} />
          <FaSquareInstagram size={30} />
          <FaXTwitter size={30} />
          <IoLogoYoutube size={30} />
        </section>
      </div>
    </div>
  );
};

export default Footer;
