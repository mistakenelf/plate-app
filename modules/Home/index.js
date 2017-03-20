import Banner from "./components/Banner";
import DefaultLayout from "../DefaultLayout";
import Footer from "./components/Footer";
import Header from "../../components/Header/Header";
import HomeDetails from "./components/HomeDetails";
import React from "react";

export default () => (
  <DefaultLayout>
    <Header title="Home" />
    <Banner />
    <HomeDetails />
    <Footer />
  </DefaultLayout>
);
