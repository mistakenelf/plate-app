import Header from '../components/Header/Header'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import React from 'react'
import { pageWithAuth } from '../hocs/page'

export default pageWithAuth(({ url }) => (
  <div>
    <Header title="Plate Filler" />
    <PlateFillerContainer plateId={url.query.id} />
  </div>
))
