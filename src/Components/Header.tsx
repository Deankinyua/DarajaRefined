import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerSection">
      <header>
        <label className="hamburger-menu">
          {" "}
          <input type="checkbox" id="checkbox" />{" "}
        </label>
        <h1>shshs</h1>

        <nav className="nav-bar">
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
      </header>
    </div>
  );
};

export default Header;
