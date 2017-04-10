// @flow

import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';

import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';

type Props = {
  openDialog: Function
};

const DesktopToolbar = ({ openDialog }: Props) => {
  return (
    <div className="toolbar-desktop">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup />
        <ToolbarGroup>
          <ToolbarSeparator />
          <RaisedButton primary label="Create Plate" onTouchTap={openDialog} />
        </ToolbarGroup>
      </Toolbar>
      <style jsx>
        {
          `
          @media only screen
            and (min-device-width : 320px)
            and (max-device-width : 600px) {
              .toolbar-desktop {
                display: none;
              }
            }
          `
        }
      </style>
    </div>
  );
};

export default DesktopToolbar;
