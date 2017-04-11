import React from 'react';
import SlideOne from './SlideOne';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const styles = {
  slide: {
    margin: 0,
    padding: 0,
    color: 'white',
    height: 400,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  slide1: {
    background: 'linear-gradient(-90deg, rgb(141, 95, 115), #343f53)'
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
  <AutoPlaySwipeableViews enableMouseEvents resistance interval={4000}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <SlideOne />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n2</div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n3</div>
  </AutoPlaySwipeableViews>
);

export default Header;
