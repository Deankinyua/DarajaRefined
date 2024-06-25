import { NavLink } from "react-router-dom";

import "../CustomStyles/custom.css";
import "../CustomStyles/hamburger.css";
import darajalogo from "/DarajaLogo/FotoJet.png";

const HeaderAtLargeScreens = () => {
  return (
    <div className="headerSection sm:bg-transparent">
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
            <nav className="flex justify-between font-extrabold">
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"/about"}>ABOUT</NavLink>
              <NavLink to={"/culture"}>CULTURE</NavLink>
              <NavLink to={"/caseStudies"}>CASE STUDIES</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderAtLargeScreens;
