import BackButton from "../components/BackButton/BackButton";
import ForgotPasswordForm from "../forms/ForgotPasswordForm/ForgotPasswordForm";
import Header from "../components/Header/Header";
import NavlessLayout from "../layouts/NavlessLayout/NavlessLayout";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title="Forgot Password" />
    <BackButton />
    <ForgotPasswordForm />
  </NavlessLayout>
));
