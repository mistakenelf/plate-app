import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationExpandMoreIcon
  from 'material-ui/svg-icons/navigation/expand-more';
import Router from 'next/router';

const MobileToolbar = () => {
  return (
    <div className="toolbar-mobile">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Manage Plates" />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconMenu
            iconButtonElement={
              <IconButton touch>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem
              primaryText="Create Plate"
              onTouchTap={() => Router.push('/addPlate')}
            />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
      <style jsx>
        {
          `
          @media only screen
          and (min-device-width : 601px)
          and (max-device-width : 2600px) {
            .toolbar-mobile {
              display: none;
            }
          }
          `
        }
      </style>
    </div>
  );
};

MobileToolbar.propTypes = {
  openCreatePlateDialog: PropTypes.func
};

export default MobileToolbar;
