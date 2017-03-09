import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";
import NavlessLayout from "../layouts/NavlessLayout/NavlessLayout";
import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title="Register" />
    <BackButton />
    <RegisterForm />
  </NavlessLayout>
));
