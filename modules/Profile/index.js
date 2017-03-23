import DefaultLayout from "../DefaultLayout";
import Header from "../../components/Header/Header";
import ProfileForm from "./components/ProfileForm";
import React from "react";

const Profile = () => {
  return (
    <DefaultLayout>
      <Header title="Profile" />
      <ProfileForm />
    </DefaultLayout>
  );
};

export default Profile;
