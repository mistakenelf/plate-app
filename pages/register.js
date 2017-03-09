import BackHomeButton from "../components/BackHomeButton/BackHomeButton";
import Header from "../components/Header/Header";
import NavlessLayout from "../layouts/NavlessLayout/NavlessLayout";
import React from "react";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title="Register" />
    <BackHomeButton />
    <RegisterForm />
  </NavlessLayout>
));
