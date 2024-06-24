import { NavLink } from "react-router-dom";

import "../CustomStyles/custom.css";
import "../CustomStyles/hamburger.css";
import darajalogo from "../../public/DarajaLogo/FotoJet.png";

const HeaderAtLargeScreens = () => {
  return (
    <div className="headerSection">
      <header>
        <div className="flex justify-between items-center">
          <div>
            <div className="img_size">
              <NavLink to={"/"}>
                <img src={darajalogo} alt="The Logo of DarajaPlus" />
              </NavLink>
            </div>
          </div>
          <div className="min_width70">
            <nav className="flex justify-between">
              <NavLink to={"/"} className={"text-red-600"}>
                HOME
              </NavLink>
              <NavLink to={"about"} className={"text-red-600"}>
                ABOUT
              </NavLink>
              <NavLink to={"culture"} className={"text-red-600"}>
                CULTURE
              </NavLink>
              <NavLink to={"caseStudies"} className={"text-red-600"}>
                CASE STUDIES
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderAtLargeScreens;
