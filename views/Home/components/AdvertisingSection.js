import React from 'react'

const AdvertisingSection = () => {
  return (
    <section className="section">
      <div className="row row-padding">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src="/static/img/mobile.png" />
        </div>
        <div className="col-sm col-md-6 col-lg-6">
          <h2>Easily manage your tasks</h2>
          <p>
            Manage your tasks easily through an elegant and simple interface.
            Never forget whats on your list of tasks to be completed.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 col-md-last col-lg-last">
          <img src="/static/img/mobile.png" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h2>On the go</h2>
          <p>
            Edit and view your tasks on all platforms. Our responsive design allows
            for ease of access on all devices. Big, small, huge!
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .section {
            padding: 50px;
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          .row-padding {
            margin-bottom: 50px;
          }
        `}
      </style>
    </section>
  )
}

export default AdvertisingSection
