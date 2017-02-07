import { Button, Grid } from 'semantic-ui-react'

import Link from 'next/prefetch'

export default () => {
  return (
    <Grid textAlign='center'>
      <Grid.Row>
        <Grid.Column width={16} computer={8} widescreen={8} tablet={10} mobile={14}>
          <div className='unauthorized-card'>
            <div className='header'>
              <h2>Unauthorized</h2>
            </div>
            <h3>
              It appears you do not have access to the page you are trying to access.
              Please be sure you are authorized to view this content. If you believe
              you should be able to access this content, please navigate to the help section.
            </h3>
            <div className='button-pad'>
              <Link href='/'>
                <a>
                  <Button>Return Home</Button>
                </a>
              </Link>
            </div>
            <style jsx>{`
              h2 {
                color: white;
                margin-top: 12px;
              }
              h3 {
                padding: 20px;
              }
              .unauthorized-card {
                margin-top: 80px;
                background-color: #eceff1;
                border-radius: 5px;
              }
              .header {
                height: 80px;
                padding: 10px;
                background-color: #ef9a9a;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
              }
              .button-pad {
                padding: 10px;
              }
            `}</style>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
