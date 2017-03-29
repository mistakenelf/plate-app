import FooterDesktop from "./FooterDesktop";
import FooterMobile from "./FooterMobile";
import React from "react";

const Footer = () => {
  return (
    <div>
      <FooterDesktop />
      <FooterMobile />
      <div className="copyright">
        Copyright © 2017 Plate
      </div>
      <style jsx>
        {
          `
          .copyright {
            color: white;
            background-color: #343F53;
            padding: 5px;
            font-size: .2em;
          }
          `
        }
      </style>
    </div>
  );
};

export default Footer;
