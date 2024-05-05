// components/Footer.js
import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
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
          <Link to="/">Main</Link>
            <Link to="/recycle">Recycle</Link>
            <Link to="/event">Event</Link>
            <Link to="/business">Business</Link>
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
