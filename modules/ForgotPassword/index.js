import BackButton from "../../components/BackButton/BackButton";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Header from "../../components/Header/Header";
import NavlessLayout from "../NavlessLayout/NavlessLayout";
import React from "react";

export default () => (
  <NavlessLayout>
    <Header title="Forgot Password" />
    <BackButton />
    <ForgotPasswordForm />
  </NavlessLayout>
);
