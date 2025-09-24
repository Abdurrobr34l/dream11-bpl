import React from "react";
import coinImage from "../../assets/coin.png";
import logoImage from "../../assets/logo.png";

export default function Header({availableBalance}) {
  return (
    <>
      <div className="navbar pt-8 pb-6 px-0">
        <div className="navbar-start justify-between flex-row-reverse lg:flex-row w-full">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-10 z-[1] p-3 outline-1 rounded-box w-52 gap-3 right-5"
            >
              <li>
                <a className="menuLink">Home</a>
              </li>
              <li>
                <a className="menuLink">Fixture</a>
              </li>
              <li>
                <a className="menuLink">Teams</a>
              </li>
              <li>
                <a className="menuLink">Schedules</a>
              </li>
              <li>
                <a className="flex justify-center px-5 py-3 font-bold outline-2 outline-[#13131320] rounded-[12px] max-w-[125px] commonHover">
                  {availableBalance} Coin
                  {/* 6  000 000 000 */}
                  <span>
                    <img src={coinImage} alt="coin" className="w-5 h-5" />
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a href="/index.html">
            <img src={logoImage} alt="logo" className="size-[73px]" />
          </a>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-12">
            <li>
              <a className="menuLink">Home</a>
            </li>
            <li>
              <a className="menuLink">Fixture</a>
            </li>
            <li>
              <a className="menuLink">Teams</a>
            </li>
            <li>
              <a className="menuLink">Schedules</a>
            </li>
            <li>
              <a className="px-5 py-3 font-bold outline-2 outline-[#13131320] rounded-[12px] commonHover flex items-center gap-2">
                {availableBalance} Coin
                <span>
                  <img src={coinImage} alt="coin" className="w-5 h-5" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
