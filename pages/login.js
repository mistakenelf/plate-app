import BackHomeButton from "../components/BackHomeButton/BackHomeButton";
import Header from "../components/Header/Header";
import LoginForm from "../components/LoginForm/LoginForm";
import NavlessLayout from "../layouts/NavlessLayout/NavlessLayout";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <NavlessLayout>
    <Header title="Login" />
    <BackHomeButton />
    <LoginForm />
  </NavlessLayout>
));
