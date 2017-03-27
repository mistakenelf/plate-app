import DashboardContainer from "./containers/DashboardContainer";
import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";
import React from "react";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Header title="Dashboard" />
      <DashboardContainer />
    </DefaultLayout>
  );
};

export default Dashboard;
