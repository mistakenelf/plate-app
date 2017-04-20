import Header from '../components/Header/Header'
import PlateFillerContainer from '../containers/PlateFillerContainer'
import React from 'react'
import { pageWithDefaultLayout } from '../hocs/page'

export default pageWithDefaultLayout(({ url }) => (
  <div>
    <Header title="Plate Filler" />
    <PlateFillerContainer plateId={url.query.id} />
  </div>
))
