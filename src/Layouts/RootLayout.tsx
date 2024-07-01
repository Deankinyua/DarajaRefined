import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "../AppComponents/Header";

const RootLayout = () => {
  useEffect(() => {
    const myCheckBox = document.getElementById("checkbox") as HTMLInputElement;
    const navBarLinks = document.querySelectorAll(".links");

    navBarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        myCheckBox.checked = false;
      });
    });
  }, []);
  return (
    <div className="root-layout">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
