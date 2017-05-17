import AccountInfo from './components/AccountInfo'
import ChangePassword from './components/ChangePassword'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'
import RecoverPlatesQuery from '../../queries/RecoverPlatesQuery'
import RemovedPlates from './components/RemovedPlates'
import { graphql } from 'react-apollo'

const Account = ({ user, loading, recoverPlates }) => {
  return (
    <div className="container bottom-padding">
      <PageHeader headerText="My Account" />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <ChangePassword user={user} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <ProfilePage user={user} />
        </div>
      </div>
      <div className="divider" />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <AccountInfo user={user} />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <RemovedPlates />
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
      `}</style>
    </div>
  )
}

Account.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  recoverPlates: PropTypes.array
}

export default graphql(RecoverPlatesQuery, {
  props: ({ data: { loading, recoverPlates } }) => ({
    loading,
    recoverPlates
  }),
  options: props => ({
    fetchPolicy: 'cache-and-network',
    variables: { username: props.user.username }
  })
})(Account)
