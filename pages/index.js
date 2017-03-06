import Banner from "../components/Banner/Banner";
import DefaultLayoutContainer from "../containers/DefaultLayoutContainer";
import Header from "../components/Header/Header";
import HomeDetails from "../components/HomeDetails/HomeDetails";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <DefaultLayoutContainer>
    <Header title="Home" />
    <Banner />
    <HomeDetails />
  </DefaultLayoutContainer>
));
