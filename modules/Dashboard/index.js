import DashboardContainer from "./containers/DashboardContainer";
import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";
import Overdrive from "react-overdrive";
import React from "react";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Header title="Dashboard" />
      <Overdrive id="fill-plate">
        <DashboardContainer />
      </Overdrive>
    </DefaultLayout>
  );
};

export default Dashboard;
