import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <h5 className="call_center">Questions? Call 1-844-505-2993</h5>
      <div className="footer">
        <div className="footer__list">
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Ways to Watch</p>
          <p>Corporate Information</p>
          <p>Netflix Originals</p>
        </div>

        <div className="footer__list">
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>

        <div className="footer__list">
          <p>Account</p>
          <p>Redeem Gift Cards</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>

        <div className="footer__list">
          <p>Media Center</p>
          <p>Buy Gift Cards</p>
          <p>Cookies Preferences</p>
          <p>Legal Notices</p>
        </div>
      </div>
      <p className="mark">&copy; 2022 Movies, All Right Reserved</p>
    </>
  );
};

export default Footer;
