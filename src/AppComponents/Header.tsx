import { NavLink } from "react-router-dom";
import "../CustomStyles/custom.css";
import "../CustomStyles/hamburger.css";
import darajalogo from "/DarajaLogo/FotoJet.png";
import HeaderAtLargeScreens from "./HeaderAtLargeScreens";

const Header = () => {
  return (
    <div>
      <header className="header_culture sm:hidden">
        <div className="logo_small_screen">
          <NavLink to={"/"}>
            <img src={darajalogo} alt="The Logo of DarajaPlus" />
          </NavLink>
        </div>
        <label className="hamburger-menu">
          {" "}
          <input type="checkbox" id="checkbox" />{" "}
        </label>

        <div className="flex flex-col gap-6 justify-center nav_container">
          <div></div>
          <div className="min_width70 mr-4">
            <nav className="flex justify-between flex-col gap-10">
              <NavLink to={"/"} className={"links text-2xl"}>
                HOME
              </NavLink>
              <NavLink to={"about"} className={"links text-2xl"}>
                ABOUT
              </NavLink>
              <NavLink to={"culture"} className={"links text-2xl"}>
                CULTURE
              </NavLink>
              <NavLink to={"caseStudies"} className={"links pb-10 text-2xl"}>
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
