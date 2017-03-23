import Banner from "./components/Banner";
import DefaultLayout from "../DefaultLayout";
import FooterContainer from "./containers/FooterContainer";
import Header from "../../components/Header/Header";
import HomeDetails from "./components/HomeDetails";
import React from "react";

const Home = () => {
  return (
    <DefaultLayout>
      <Header title="Home" />
      <Banner />
      <HomeDetails />
      <FooterContainer />
    </DefaultLayout>
  );
};

export default Home;
