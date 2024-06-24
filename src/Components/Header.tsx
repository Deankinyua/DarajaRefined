import { NavLink } from "react-router-dom";
import "../CustomStyles/custom.css";

const Header = () => {
  return (
    <div className="headerSection">
      <header>
        {/* <label className="hamburger-menu">
          {" "}
          <input type="checkbox" id="checkbox" />{" "}
        </label> */}
        <div className="flex justify-between">
          <div className="add_border ml-4">image</div>
          <div className="add_border min_width70 mr-4">
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

export default Header;
