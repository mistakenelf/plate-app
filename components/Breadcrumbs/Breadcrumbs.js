import React, { Component } from 'react'

class Breadcrumbs extends Component {
  static async getInitialProps({ asPath }) {
    return asPath
  }
  render() {
    return (
      <div>
        <ul className="breadcrumbs">
          <li><a href="#">Home</a></li>
          <li><a href="#">{this.props.asPath}</a></li>
          <li>File</li>
        </ul>
        <style jsx>{`
        a {
          text-decoration: none;
          color: #343F53;
        }
        `}</style>
      </div>
    )
  }
}

export default Breadcrumbs
