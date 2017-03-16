import DashboardContainer from "./containers/DashboardContainer";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import Header from "../../components/Header/Header";
import React from "react";

export default () => (
  <DefaultLayout>
    <Header title="Dashboard" />
    <DashboardContainer />
  </DefaultLayout>
);
