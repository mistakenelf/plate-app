import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import LoginForm from "./components/LoginForm";
import NavlessLayout from "../../layouts/NavlessLayout/NavlessLayout";
import React from "react";

export default () => (
  <NavlessLayout>
    <Header title="Login" />
    <BackButton />
    <LoginForm />
  </NavlessLayout>
);
