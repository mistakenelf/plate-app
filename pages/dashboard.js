import DashboardContainer from "../containers/DashboardContainer";
import DefaultLayoutContainer from "../containers/DefaultLayoutContainer";
import Header from "../components/Header/Header";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <DefaultLayoutContainer>
    <Header title="Dashboard" />
    <DashboardContainer />
  </DefaultLayoutContainer>
));
