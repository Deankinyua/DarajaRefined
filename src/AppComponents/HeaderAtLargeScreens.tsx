import { NavLink } from "react-router-dom";
import darajalogo from "/src/Assets/DarajaLogo/FotoJet.png";
import { ModeToggle } from "../components/mode-toggle";

const HeaderAtLargeScreens = () => {
  return (
    <div className="headerSection sm:bg-transparent">
      <header>
        <div className="flex justify-between items-center">
          <div>
            <div className="img_size flex gap-4 justify-between items-center">
              <NavLink to={"/"}>
                <img src={darajalogo} alt="The Logo of DarajaPlus" />
              </NavLink>
              <ModeToggle></ModeToggle>
            </div>
          </div>
          <div className="min_width70">
            <nav className="flex justify-between font-extrabold">
              <NavLink
                to={"/"}
                className={
                  "md:text-lg xl:text-2xl nav_links_big_screens bgcolorbg2 merriweather"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to={"/about"}
                className={
                  "md:text-lg xl:text-2xl nav_links_big_screens bgcolorbg2 merriweather"
                }
              >
                ABOUT
              </NavLink>
              <NavLink
                to={"/culture"}
                className={
                  "md:text-lg nav_links_big_screens xl:text-2xl bgcolorbg2 merriweather"
                }
              >
                CULTURE
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderAtLargeScreens;
