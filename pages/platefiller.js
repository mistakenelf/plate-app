import Cookies from 'js-cookie'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import PropTypes from 'prop-types'
import React from 'react'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithDefaultLayout } from '../hocs/page'

const platefiller = ({ getUserProfile, url }) => {
  if (getUserProfile === null) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }

  if (!Cookies.get('token')) {
    return (
      <div>
        <Unauthorized />
      </div>
    )
  }

  return (
    <div>
      <PlateFillerContainer plateId={url.query.id} />
    </div>
  )
}

platefiller.propTypes = {
  getUserProfile: PropTypes.object,
  url: PropTypes.object
}

export default pageWithDefaultLayout(platefiller)
