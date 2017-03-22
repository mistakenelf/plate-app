import BackButton from "../../components/BackButton/BackButton";
import Header from "../../components/Header/Header";
import LoginForm from "./components/LoginForm";
import NavlessLayout from "../NavlessLayout";
import React from "react";

const Login = () => {
  return (
    <NavlessLayout>
      <Header title="Login" />
      <BackButton />
      <LoginForm />
    </NavlessLayout>
  );
};

export default Login;
