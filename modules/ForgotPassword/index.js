import BackButton from "../../components/BackButton/BackButton";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import Header from "../../components/Header/Header";
import NavlessLayout from "../NavlessLayout";
import React from "react";

const ForgotPassword = () => {
  return (
    <NavlessLayout>
      <Header title="Forgot Password" />
      <BackButton />
      <ForgotPasswordForm />
    </NavlessLayout>
  );
};

export default ForgotPassword;
