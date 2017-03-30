import React from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
  slide: {
    padding: 15,
    minHeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 45
  },
  slide1: {
    background: "#FEA900"
  },
  slide2: {
    background: "#B3DC4A"
  },
  slide3: {
    background: "#6AC0FF"
  }
};

const HomeDetails = () => {
  return (
    <SwipeableViews enableMouseEvents resistance>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        Easy To Use
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        Easy To Setup
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        Task management made Easy
      </div>
    </SwipeableViews>
  );
};

export default HomeDetails;
