import { compose, graphql } from 'react-apollo'

import AccountInfo from './components/AccountInfo'
import AddRecoveredPlateMutation
  from '../../mutations/AddRecoveredPlateMutation'
import ChangePassword from './components/ChangePassword'
import Loader from '../../components/Loader/Loader'
import PageHeader from '../../components/PageHeader/PageHeader'
import PlatesQuery from '../../queries/PlatesQuery'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'
import RecoverPlatesQuery from '../../queries/RecoverPlatesQuery'
import RemovedPlates from './components/RemovedPlates'

const Account = ({ user, loading, recoverPlates, addRecoveredPlate }) => {
  if (loading) {
    return <Loader />
  }
  return (
    <div className="container">
      <PageHeader headerText="My Account" />
      <div className="tabs">
        <input
          type="radio"
          name="tab-group"
          id="tab1"
          aria-hidden="true"
          defaultChecked
        />
        <label htmlFor="tab1" aria-hidden="true">Account Info</label>
        <div className="full-height">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <ProfilePage user={user} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <AccountInfo user={user} />
            </div>
          </div>
        </div>
        <input type="radio" name="tab-group" id="tab2" aria-hidden="true" />
        <label htmlFor="tab2" aria-hidden="true">Account Security</label>
        <div className="full-height">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-lg-offset-3">
              <ChangePassword user={user} />
            </div>
          </div>
        </div>
        <input type="radio" name="tab-group" id="tab3" aria-hidden="true" />
        <label htmlFor="tab3" aria-hidden="true">Tools</label>
        <div className="full-height">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-lg-offset-2">
              <RemovedPlates
                recoverPlates={recoverPlates}
                addRecoveredPlate={addRecoveredPlate}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .divider {
          margin-top: 40px;
          margin-bottom: 40px;
        }
        .bottom-padding {
          padding-bottom: 30px;
        }
        .full-height {
          height: 100% !important;
          padding-bottom: 20px !important;
        }
      `}</style>
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  recoverPlates: PropTypes.array,
  addRecoveredPlate: PropTypes.func
}

export default compose(
  graphql(RecoverPlatesQuery, {
    props: ({ data: { loading, recoverPlates } }) => ({
      loading,
      recoverPlates
    }),
    options: props => ({
      fetchPolicy: 'cache-and-network',
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
  })
)(Account)
