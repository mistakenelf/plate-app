import Banner from './Banner';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const styles = {
  slide: {
    margin: 0,
    padding: 0,
    color: 'white',
    height: 400
  },
  slide1: {
    background: '#FEA900'
  },
  slide2: {
    background: '#B3DC4A'
  },
  slide3: {
    background: '#6AC0FF'
  }
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Header = () => (
  <AutoPlaySwipeableViews interval="4000">
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <Banner />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n2</div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n3</div>
  </AutoPlaySwipeableViews>
);

export default Header;
