import React from "react";

const HomeDetails = () => {
  return (
    <div className="home-details">
      <div className="lead-in">
        <h1>
          This is the greatest task management app I have ever used. It so easy to get setup and start using right away
        </h1>
      </div>
      <style jsx>
        {
          `
          .lead-in {
            height: 500px;
            display: flex;
            padding-left: 20px;
            padding-right: 20px;
            align-items: center;
            text-align: center;
            justify-content: center;
          }
          `
        }
      </style>
    </div>
  );
};

export default HomeDetails;
