import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { css } from 'aphrodite'
import styles from './styles.js'
import ImageAddAPhoto from 'material-ui/svg-icons/image/add-a-photo'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import EditorFormatListNumber from 'material-ui/svg-icons/editor/format-list-numbered'
import CommunicationDialpad from 'material-ui/svg-icons/communication/dialpad'
import AvVideoLibrary from 'material-ui/svg-icons/av/video-library'

function Workspace(){
  return(
    <Grid fluid>
      <Row>
        <Col md={3} className={css(styles.toolbar)}>
        <List>
          <ListItem primaryText="Text Editor" leftIcon={<EditorModeEdit/>}/>
          <ListItem primaryText="Calculator" leftIcon={<CommunicationDialpad />}/>
          <ListItem primaryText="To Do List" leftIcon={<EditorFormatListNumber />}/>
          <ListItem primaryText="Image" leftIcon={<ImageAddAPhoto />}/>
          <ListItem primaryText="Video" leftIcon={<AvVideoLibrary />}/>
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Option 1" />
          <ListItem primaryText="Option 2" />
          <ListItem primaryText="Option 3" />
          <ListItem primaryText="Option 4" />
        </List>
        </Col>
        <Col md={9}>

        </Col>
      </Row>
    </Grid>
  )
}

export default Workspace
