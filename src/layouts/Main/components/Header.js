import React from "react";
import MenuIcon from "../../../tools/icons/MenuIcon";
import OutlineButton from "../../../tools/buttons/OutlineButton";
import IconCircleButton from "../../../tools/buttons/IconCircleButton";
import { Link } from "react-router-dom";


const Header = ({ navItems }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown"></div>
        <label htmlFor="mainDrawer" className="lg:hidden">
          <IconCircleButton>
            <MenuIcon />
          </IconCircleButton>
        </label>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/signup"}>
      <OutlineButton>Get Started</OutlineButton>
      </Link>
      </div>
    </div>
  );
};

export default Header;
