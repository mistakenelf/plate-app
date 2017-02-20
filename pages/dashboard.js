import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'

import AddPlateButton from '../components/AddPlateButton/AddPlateButton'
import FlatButton from 'material-ui/FlatButton'
import LayoutContainer from '../containers/LayoutContainer'
import pageDecorator from '../lib/pageDecorator'

export default pageDecorator((props) => (
  <LayoutContainer>
    <div className='container-fluid' style={{ paddingTop: 5 }}>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' style={{ marginBottom: 10 }}>
          <AddPlateButton />
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4' style={{ marginBottom: 10 }}>
          <Card>
            <CardHeader
              title='Without Avatar'
              subtitle='Subtitle'
              actAsExpander
              showExpandableButton
            />
            <CardActions>
              <FlatButton label='Action1' />
              <FlatButton label='Action2' />
            </CardActions>
            <CardText expandable>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <Card>
            <CardHeader
              title='Without Avatar'
              subtitle='Subtitle'
              actAsExpander
              showExpandableButton
            />
            <CardActions>
              <FlatButton label='Action1' />
              <FlatButton label='Action2' />
            </CardActions>
            <CardText expandable>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
        </div>
      </div>
    </div>
  </LayoutContainer>
))
