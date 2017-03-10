// @flow

import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";
import LoginForm from "../forms/LoginForm/LoginForm";
import NavlessLayout from "../layouts/NavlessLayout/NavlessLayout";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

type Props = {
  url: Object
};

export default pageDecorator(({ url }: Props) => (
  <NavlessLayout>
    <Header title="Login" />
    <BackButton url={url} />
    <LoginForm />
  </NavlessLayout>
));
