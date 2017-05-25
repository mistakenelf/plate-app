import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import AddRecoveredPlateMutation from '../../mutations/addRecoveredPlate'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ChangePassword from './components/ChangePassword'
import Loader from '../../components/Loader/Loader'
import PlatesQuery from '../../queries/plates'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import RecoverPlatesQuery from '../../queries/recoveredPlates'
import RemoveRecoveredPlateMutation from '../../mutations/removeRecoveredPlate'
import RemovedPlates from './components/RemovedPlates'
import Router from 'next/router'

class Account extends Component {
  static propTypes = {
    user: PropTypes.object,
    loading: PropTypes.bool,
    recoveredPlates: PropTypes.array,
    addRecoveredPlate: PropTypes.func,
    removeRecoveredPlate: PropTypes.func,
    url: PropTypes.object
  }

  state = {
    currentView: 'overview'
  }

  showOverview = () => {
    this.setState({
      currentView: 'overview'
    })
  }

  showSecurity = () => {
    this.setState({
      currentView: 'security'
    })
  }

  showTools = () => {
    this.setState({
      currentView: 'tools'
    })
  }

  render() {
    console.log(Router.route)
    const {
      user,
      loading,
      recoveredPlates,
      addRecoveredPlate,
      removeRecoveredPlate
    } = this.props

    if (loading) {
      return <Loader />
    }

    return (
      <div>
        <Breadcrumbs currentRoute={this.props.url.pathname} />
        <div className="navigation-container">
          <div className="navigation">
            <span className="nav-link" style={{ marginRight: 30 }}>
              <a href="#" onClick={this.showOverview}>Overview</a>
            </span>
            <span className="nav-link" style={{ marginRight: 30 }}>
              <a href="#" onClick={this.showSecurity}>Security</a>
            </span>
            <span className="nav-link">
              <a href="#" onClick={this.showTools}>Tools</a>
            </span>
          </div>
        </div>
        <div>
          {this.state.currentView === 'overview' &&
            <div className="row">
              <div className="col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                <ProfilePage user={user} />
              </div>
            </div>}
          {this.state.currentView === 'security' &&
            <div className="row">
              <div className="col-sm-12 col-md-6 col-md-offset-3  col-lg-6 col-lg-offset-3">
                <ChangePassword user={user} />
              </div>
            </div>}
          {this.state.currentView === 'tools' &&
            <RemovedPlates
              recoverPlates={recoveredPlates}
              addRecoveredPlate={addRecoveredPlate}
              removeRecoveredPlate={removeRecoveredPlate}
            />}
        </div>
        <style jsx>{`
          @media only screen
          and (min-device-width : 320px)
          and (max-device-width : 1030px) {
            .nav-link {
              font-size: 40%;
            }
          }
          .divider {
            margin-top: 40px;
            margin-bottom: 40px;
          }
          .bottom-padding {
            padding-bottom: 30px;
          }
          .wrapper{
            margin: 3em 0;
          }
          .account-links {
            display: flex;
            justify-content: center;
          }
          .navigation-container {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
          }
          .navigation a {
            position: relative;
            display: inline-block;
            outline: none;
            margin-top: 20px;
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 400;
            text-shadow: 0 0 1px rgba(255,255,255,0.3);
            font-size: 1.35em;
          }
          .navigation a:hover,
          .navigation a:focus {
            outline: none;
          }
          .nav-link a {
            padding: 12px 10px 10px;
            color: #566473;
            text-shadow: none;
            font-weight: 700;
          }
          .nav-link a::before,
          .nav-link a::after {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 3px;
            background: #566473;
            content: '';
            transition: transform 0.3s;
            transform: scale(0.85);
          }
          .nav-link a::after {
            opacity: 0;
            transition: top 0.3s, opacity 0.3s, transform 0.3s;
          }
          .nav-link a:hover::before,
          .nav-link a:hover::after,
          .nav-link a:focus::before,
          .nav-link a:focus::after {
            transform: scale(1);
          }
          .nav-link a:hover::after,
          .nav-link a:focus::after {
            top: 0%;
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}

export default compose(
  graphql(RecoverPlatesQuery, {
    props: ({ data: { loading, recoveredPlates } }) => ({
      loading,
      recoveredPlates
    }),
    options: props => ({
      variables: { username: props.user.username }
    })
  }),
  graphql(AddRecoveredPlateMutation, {
    props: ({ mutate }) => ({
      addRecoveredPlate: (
        name,
        description,
        thumbnail,
        status,
        content,
        createdBy
      ) => {
        return mutate({
          variables: {
            name,
            description,
            thumbnail,
            status,
            content,
            createdBy
          },
          optimisticResponse: {
            __typename: 'Mutation',
            addRecoveredPlate: {
              __typename: 'Plate',
              name,
              description,
              thumbnail,
              status,
              content,
              createdBy
            }
          }
        })
      }
    }),
    options: props => ({
      refetchQueries: [
        {
          query: PlatesQuery,
          variables: { username: props.user.username }
        }
      ]
    })
  }),
  graphql(RemoveRecoveredPlateMutation, {
    props: ({ mutate }) => ({
      removeRecoveredPlate: id => {
        return mutate({
          variables: { id },
          optimisticResponse: {
            __typename: 'Mutation',
            removeRecoveredPlate: {
              __typename: 'Plate',
              id
            }
          }
        })
      }
    }),
    options: props => ({
      refetchQueries: [
        {
          query: RecoverPlatesQuery,
          variables: { username: props.user.username }
        }
      ]
    })
  })
)(Account)
