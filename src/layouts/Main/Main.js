import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';

const Main = () => {
  const navItems = (
    <>
      <NavLink className={"btn btn-ghost btn-sm lg:mx-2 "}>Home</NavLink>
      <NavLink className={"btn btn-ghost btn-sm lg:mx-2"}>Contact Us</NavLink>
      <NavLink className={"btn btn-ghost btn-sm lg:mx-2"}>Documentation</NavLink>
    </>
  );

  return (
    <div>
      <Header navItems={navItems}></Header>
      <div className="drawer">
        <input id="mainDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}

        </div>
        <div className="drawer-side">
          <label htmlFor="mainDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {navItems}

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Main;