import Account from "../modules/Account";
import DefaultLayout from "../modules/DefaultLayout";
import Header from "../components/Header/Header";
import React from "react";
import withData from "../lib/withData";

export default withData(() => (
  <DefaultLayout>
    <Header title="Account" />
    <Account />
  </DefaultLayout>
));
