import React from "react";
import coinImage from "../../assets/coin.png";
import logoImage from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <div className="navbar pt-12 pb-6">
        <div className="flex-1">
          <a href="/index.html" className="text-xl"><img src={logoImage} alt="It is an logo image" className="size-[73px]"/></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal items-center gap-12 px-1">
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
              <a className="px-5 py-3 font-bold border-2 border-[#13131320] rounded-[12px] commonHover">
                0 Coin
                <span><img src={coinImage} alt="It is an coin image" /></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
