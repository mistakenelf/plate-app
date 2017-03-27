import DashboardContainer from "./containers/DashboardContainer";
import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";
import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Header title="Dashboard" />
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionAppearTimeout={1500}
      >
        <DashboardContainer />
      </ReactCSSTransitionGroup>
      <style jsx global>
        {
          `
          .example-enter {
            transform: translate3d(100%, 0, 0);
          }

          .example-enter.example-enter-active {
            transform: translate3d(0, 0, 0);
            transition: all 600ms;
          }

          .example-leave {
            opacity: 1;
          }

          .example-leave.example-leave-active {
            opacity: 0.01;
            transition: opacity 300ms ease-in;
          }
          .example-appear {
            transform: translate3d(100%, 0, 0);
          }

          .example-appear.example-appear-active {
            transform: translate3d(0, 0, 0);
            transition: all 600ms;
          }
          `
        }
      </style>
    </DefaultLayout>
  );
};

export default Dashboard;
