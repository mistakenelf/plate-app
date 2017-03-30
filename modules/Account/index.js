import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";
import ProfilePage from "./components/ProfilePage";
import React from "react";

const Account = () => {
  return (
    <DefaultLayout>
      <Header title="Profile" />
      <ProfilePage />
    </DefaultLayout>
  );
};

export default Account;
