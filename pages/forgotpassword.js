import ForgotPassword from "../modules/ForgotPassword";
import Header from "../components/Header/Header";
import NavlessLayout from "../modules/NavlessLayout";
import React from "react";
import withData from "../lib/withData";

export default withData(() => (
  <NavlessLayout>
    <Header title="Forgot Password" />
    <ForgotPassword />
  </NavlessLayout>
));
