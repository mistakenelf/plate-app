import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import HomeDetails from "../components/HomeDetails/HomeDetails";
import HomeLayoutContainer from "../containers/HomeLayoutContainer";
import React from "react";
import pageDecorator from "../lib/pageDecorator";

export default pageDecorator(() => (
  <HomeLayoutContainer>
    <Header title="Home" />
    <Banner />
    <HomeDetails />
  </HomeLayoutContainer>
));
