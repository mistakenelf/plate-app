import AccountInfo from './components/AccountInfo'
import ChangePassword from './components/ChangePassword'
import Loader from '../../components/Loader/Loader'
import PageHeader from '../../components/PageHeader/PageHeader'
import ProfilePage from './components/ProfilePage'
import PropTypes from 'prop-types'
import React from 'react'
import RecoverPlatesQuery from '../../queries/RecoverPlatesQuery'
import RemovedPlates from './components/RemovedPlates'
import { graphql } from 'react-apollo'

const Account = ({ user, loading, recoverPlates }) => {
  if (loading) {
    return <Loader />
  }
  return (
    <div>
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
        <div>
          <ProfilePage user={user} />
          <AccountInfo user={user} />
        </div>
        <input type="radio" name="tab-group" id="tab2" aria-hidden="true" />
        <label htmlFor="tab2" aria-hidden="true">Account Security</label>
        <div>
          <ChangePassword user={user} />
        </div>
        <input type="radio" name="tab-group" id="tab3" aria-hidden="true" />
        <label htmlFor="tab3" aria-hidden="true">Tools</label>
        <div>
          <RemovedPlates recoverPlates={recoverPlates} />
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
