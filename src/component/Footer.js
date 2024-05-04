// components/Footer.js

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footerNavigationBar">
        <div className="footerUserName">
          <img src="/images/logo.png" alt="logo"/>
          <span>Yegrina</span>
        </div>
        <div className="footerNavigationContent">
          <div className="footerNavigationItems">
            <span>Main</span>
            <span>AboutUs</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
          <hr />
        </div>
      </div>
      <div className="footerHR">
        <hr />
      </div>
    </section>
  );
}

export default Footer;
