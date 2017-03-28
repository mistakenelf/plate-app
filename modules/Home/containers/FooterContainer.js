import React, { PropTypes } from "react";

import Divider from "material-ui/Divider";
import FooterMobile from "../components/FooterMobile";
import Link from "next/link";
import { actions } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const FooterContainer = props => {
  return (
    <div>
      <div className="footer-main">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <h3>Plate</h3>
            <div className="divider-style">
              <Divider />
            </div>
            <p>
              Plate is the easiest way to manage your tasks<br />
              Check out our resources to learn more about<br />
              getting started.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <h3>Quick Links</h3>
            <div className="divider-style">
              <Divider />
            </div>
            <Link prefetch href="/register">
              <a className="footer-links">Register</a>
            </Link>
            <br />
            <Link prefetch href="/login">
              <a className="footer-links">
                Login
              </a>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <h3>Get In Touch</h3>
            <div className="divider-style">
              <Divider />
            </div>
            <Link prefetch href="/">
              <a className="footer-links">About Us</a>
            </Link>
            <br />
            <Link prefetch href="/">
              <a className="footer-links">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-mobile">
        <FooterMobile
          quickLinkOpen={props.quickLinkOpen}
          aboutLinkOpen={props.aboutLinkOpen}
          toggleAboutLink={props.toggleAboutLink}
          toggleQuickLink={props.toggleQuickLink}
        />
      </div>
      <div className="copyright">
        Copyright © 2017 Plate
      </div>
      <style jsx>
        {
          `
        .footer-mobile {
          background-color: #1E2532;
          padding: 30px;
        }
        .footer-main {
          color: white;
          background-color: #1E2532;
          height: 250px;
          padding: 30px;
        }
        .footer-main p {
          color: #bdbdbd;
        }
        .footer-main ul {
          list-style-type: none;
          color: #bdbdbd;
        }
        .footer-main ul li {
          margin-bottom: 5px;
        }
        .footer-links {
          color: #bdbdbd;
          display: inline-block;
          margin-bottom: 5px;
        }
        .footer-links:hover {
          color: #ffffff;
        }
        .divider-style {
          opacity: 0.2;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .copyright {
          color: white;
          background-color: #343F53;
          padding: 5px;
          font-size: .2em;
        }
        a::before,
        a::after {
          display: inline-block;
          opacity: 0;
          transition: transform 0.3s, opacity 0.2s;
        }

        a::before {
          padding-right:10px;
          content: '[';
          transform: translateX(10px);
        }

        a::after {
          padding-left:10px;
          content: ']';
          transform: translateX(-10px);
        }

        a:hover::before,
        a:hover::after,
        a:focus::before,
        a:focus::after {
          opacity: 1;
          transform: translateX(0px);
        }

        @media only screen
        and (min-device-width : 320px)
        and (max-device-width : 1030px) {
          .footer-main {
            display: none;
          }
        }

        @media only screen
        and (min-device-width : 1031px)
        and (max-device-width : 2600px) {
          .footer-mobile {
            display: none;
          }
        }
      `
        }
      </style>
    </div>
  );
};

const mapStateToProps = (
  {
    footer: {
      quickLinkOpen,
      aboutLinkOpen
    }
  }
) => {
  return {
    quickLinkOpen,
    aboutLinkOpen
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      toggleQuickLink: actions.toggleQuickLink,
      toggleAboutLink: actions.toggleAboutLink
    },
    dispatch
  );
};

FooterContainer.propTypes = {
  quickLinkOpen: PropTypes.bool,
  aboutLinkOpen: PropTypes.bool,
  toggleAboutLink: PropTypes.func,
  toggleQuickLink: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
