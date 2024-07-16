import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Shopping__1.png';

const menuItems = (
  <>
    <li className="font-medium text-white">
      <NavLink to="/shop" className="hover:bg-orange-400">
        Shop
      </NavLink>
    </li>
    <li className="font-medium text-white">
      <NavLink to="/login" className="hover:bg-orange-400">
        Login
      </NavLink>
    </li>
  </>
);

const Header = () => {
  return (
    <div className="bg-stone-500 fixed left-0 right-0 z-20">
      <div className="navbar justify-between container mx-auto">
        <div className="navbar-start">
          <Link to="/shop">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-stone-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
