import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import NavlessLayout from "../NavlessLayout/NavlessLayout";
import React from "react";
import RegisterForm from "./components/RegisterForm";

export default () => (
  <NavlessLayout>
    <Header title="Register" />
    <BackButton />
    <RegisterForm />
  </NavlessLayout>
);
