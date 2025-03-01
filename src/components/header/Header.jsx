import React from "react";
import scss from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { IoLogoXbox } from "react-icons/io";

const Header = () => {
  return (
    <header className={scss.id}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <IoLogoXbox />
          </div>
          <div className={scss.nav}>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/multiplications">
              <p>multiplications</p>
            </NavLink>
            <NavLink to="/plus">
              <p>plus</p>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
