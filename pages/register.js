// @flow

import BackButton from "../components/BackButton/BackButton";
import Header from "../components/Header/Header";
import NavlessLayout from "../layouts/NavlessLayout/NavlessLayout";
import React from "react";
import RegisterForm from "../forms/RegisterForm/RegisterForm";
import pageDecorator from "../lib/pageDecorator";

type Props = {
  url: Object
};

export default pageDecorator(({ url }: Props) => (
  <NavlessLayout>
    <Header title="Register" />
    <BackButton url={url} />
    <RegisterForm />
  </NavlessLayout>
));
