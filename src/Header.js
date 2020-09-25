import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left"></div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
        alt="facebook logo"
      />

      <div className="header__milddle"></div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
