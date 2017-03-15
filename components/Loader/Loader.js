import CircularProgress from "material-ui/CircularProgress";
import React from "react";

export default () => (
  <div className="loader">
    <CircularProgress size={60} />
    <style jsx>
      {
        `
        .loader {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `
      }
    </style>
  </div>
);
