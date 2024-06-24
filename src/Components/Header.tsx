import { NavLink } from "react-router-dom";
import "../CustomStyles/custom.css";
import "../CustomStyles/hamburger.css";
import darajalogo from "../../public/DarajaLogo/FotoJet.png";
import HeaderAtLargeScreens from "./HeaderAtLargeScreens";

const Header = () => {
  return (
    <div className="header_culture mb-6">
      <header className="sm:hidden">
        <label className="hamburger-menu">
          {" "}
          <input type="checkbox" id="checkbox" />{" "}
        </label>

        <div className="flex flex-col gap-6 justify-end nav_container">
          <div>
            <div className="img_size">
              <NavLink to={"/"} className={"links"}>
                <img src={darajalogo} alt="The Logo of DarajaPlus" />
              </NavLink>
            </div>
          </div>
          <div className="min_width70 mr-4">
            <nav className="flex justify-between flex-col gap-12">
              <NavLink to={"/"} className={"text-red-600 links"}>
                HOME
              </NavLink>
              <NavLink to={"about"} className={"text-red-600 links"}>
                ABOUT
              </NavLink>
              <NavLink to={"culture"} className={"text-red-600 links"}>
                CULTURE
              </NavLink>
              <NavLink to={"caseStudies"} className={"text-red-600 links"}>
                CASE STUDIES
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
      <HeaderAtLargeScreens></HeaderAtLargeScreens>
    </div>
  );
};

export default Header;
