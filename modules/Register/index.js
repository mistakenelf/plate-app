import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import NavlessLayout from "../NavlessLayout";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <NavlessLayout>
      <Header title="Register" />
      <BackButton />
      <RegisterForm />
    </NavlessLayout>
  );
};

export default Register;
