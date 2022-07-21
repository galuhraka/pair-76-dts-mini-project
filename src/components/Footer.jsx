import React from "react";

const Footer = () => {
  return (
    <div className=" w-[80%] mx-auto text-justify flex flex-wrap-reverse justify-between text-gray-400 my-20 text-sm">
      <div className="flex flex-col cursor-pointer">
        <p>FAQ</p>
        <p>Investor Relations</p>
        <p>Ways to Watch</p>
        <p>Corporate Information</p>
        <p>Netflix Originals</p>
        <p className="p-2 border border-gray-400 text-base my-2 w-[70%] text-center">
          Service Code
        </p>
        <p className="text-xs">&copy; 2022 Muvlix, All Right Reserved</p>
      </div>
      <div className="flex flex-col cursor-pointer">
        <p>Help Center</p>
        <p>Jobs</p>
        <p>Terms of Use</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col cursor-pointer">
        <p>Account</p>
        <p>Redeem Gift Cards</p>
        <p>Privacy</p>
        <p>Speed Test</p>
      </div>
      <div className="flex flex-col cursor-pointer">
        <p>Media Center</p>
        <p>Buy Gift Cards</p>
        <p>Cookies Preferences</p>
        <p>Legal Notices</p>
      </div>
    </div>
  );
};

export default Footer;
