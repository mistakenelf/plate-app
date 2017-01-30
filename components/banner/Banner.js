import { Header, Button } from 'semantic-ui-react'

export default () => (
  <div>
    <div className='banner'>
      <Header style={{textAlign: 'center', color: 'white', fontSize: '3.5em'}}>
        Task Management in the Most Simplistic Form, <br />
        Welcome to <i>Plate</i>!
      </Header>
      <Header as='h5' style={{textAlign: 'center', color: 'white', fontStyle: 'italic'}}>
        Create multiple plates and customize your very own task layout.<br /> Register now
        to begin managing your tasks!
      </Header>
      <center>
        <Button primary style={{marginTop: '80px'}} size="large">Register Now!</Button>
      </center>
      <style jsx>{`
        .header-style {
          text-align: 'center';
        }
        .banner {
          background-image: url('/static/plateHeader.png');
          height: 500px;
          padding-top: 80px;
        }
        `}</style>
    </div>
  </div>
)