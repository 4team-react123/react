// components/Header.js
import React from "react";
import "./Header.css";

function Header() {
  return (
    <section className="header">
      <div className="navigationBar">
        <div className="userName">
          <img src="/images/logo.png" alt="logo"/>
          <span>Yegrina</span>
        </div>
        <div className="navigationItems">
          <span>Main</span>
          <span>Recycle</span>
          <span>Event</span>
          <span>Business</span>
        </div>
      </div>
    </section>
  );
}

export default Header;
