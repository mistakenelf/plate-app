import Banner from "./components/Banner";
import DefaultLayout from "../DefaultLayout";
import Footer from "./components/Footer";
import Header from "../../components/Header/Header";
import HomeDetails from "./components/HomeDetails";
import React from "react";

const Home = () => {
  return (
    <DefaultLayout>
      <Header title="Home" />
      <Banner />
      <HomeDetails />
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
