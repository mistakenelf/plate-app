import BorderedButton from "../../../components/BorderedButton";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="header-main">
          <h1>
            Task Management in the Most Simplistic Form, <br />
            Welcome to <i>Plate</i>!
          </h1>
        </div>
        <div className="header-secondary">
          <h5>
            Create multiple plates and customize your very own task layout.
            <br />
            Register now
            to begin managing your tasks!
          </h5>
        </div>
        <div className="register-button">
          <Link prefetch href="/register">
            <a>
              <BorderedButton type="button" label="Register" />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {
          `
          .banner {
            background: linear-gradient(-90deg, rgb(141, 95, 115), #343f53);
            height: 500px;
            padding-top: 80px;
          }
          .header-main h1 {
            text-align: center;
            color: white;
            font-size: 3.5em;
          }
          .header-secondary h5{
            text-align: center;
            color: white;
            font-style: italic;
            margin-top: 30px;
          }
          .register-button {
            margin-top: 50px;
            display: flex;
            justify-content: center;
          }
          @media only screen and (max-width: 660px) {
            .banner {
              padding-top: 80px;
              padding-right: 40px;
              padding-left: 40px;
              height: 450px;
            }
            .header-main h1 {
              font-size: 1.5em;
            }
            .header-secondary h5 {
              font-size: 1.0em;
            }
          }
          `
        }
      </style>
    </div>
  );
};

export default Banner;
