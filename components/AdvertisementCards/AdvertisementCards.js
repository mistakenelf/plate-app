import { Card, CardText, CardTitle } from 'material-ui/Card'

export default () => (
  <div className='container-fluid' style={{marginTop: 20}}>
    <div className='row'>
      <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
        <Card>
          <CardTitle title='Free' />
          <CardText>Free to use and create as many plates as you want</CardText>
        </Card>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
        <Card>
          <CardTitle title='Fast' />
          <CardText>Built on the latest technologies for speed</CardText>
        </Card>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
        <Card>
          <CardTitle title='User Friendly' />
          <CardText>Very easy to pick up and start using right away</CardText>
        </Card>
      </div>
    </div>
  </div>
)
