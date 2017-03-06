// @flow

import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import Link from "next/link";
import MenuItem from "material-ui/MenuItem";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import React from "react";

type Props = {
  open?: boolean,
  openDrawer?: Function,
  closeDrawer?: Function
};

export default ({ open, openDrawer, closeDrawer }: Props) => {
  const elementRight = (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      targetOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <Link prefetch href="/login"><a><MenuItem>Login</MenuItem></a></Link>
      <Link prefetch href="/register">
        <a><MenuItem>Register</MenuItem></a>
      </Link>
    </IconMenu>
  );
  return (
    <div>
      <AppBar
        title="Plate"
        onLeftIconButtonTouchTap={openDrawer}
        iconElementRight={elementRight}
        style={{
          backgroundColor: "#343f53",
          position: "fixed",
          height: 60,
          top: 0
        }}
      />
      <Drawer
        docked={false}
        width={200}
        open={open}
        onRequestChange={closeDrawer}
      >
        <Link prefetch href="/">
          <a className="sidebar-text">
            <MenuItem onTouchTap={closeDrawer}>Home</MenuItem>
          </a>
        </Link>
        <Link prefetch href="/dashboard">
          <a className="sidebar-text">
            <MenuItem onTouchTap={closeDrawer}>Dashboard</MenuItem>
          </a>
        </Link>
      </Drawer>
      <style jsx global>
        {
          `
        a {
          text-decoration: none;
        }
        .sidebar-text {
          text-align: center;
        }
      `
        }
      </style>
    </div>
  );
};
