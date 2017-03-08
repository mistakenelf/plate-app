import Navigation from '../../components/Navigation/Navigation';
import React from 'react';

type Props = {
  children?: Element<any>,
  open?: boolean,
  openDrawer?: Function,
  closeDrawer?: Function
};

export default ({ children, open, openDrawer, closeDrawer }: Props) => (
  <div>
    <style jsx global>
      {
        `
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font-family: 'Fira Sans', sans-serif;
        margin-top: 60px;
        margin-bottom: 20px;
      }
    `
      }
    </style>
    <Navigation open={open} openDrawer={openDrawer} closeDrawer={closeDrawer} />
    {children}
  </div>
);
