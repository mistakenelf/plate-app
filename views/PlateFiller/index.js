import { compose, graphql } from 'react-apollo'

import ContentEditor from './components/ContentEditor'
import Loader from '../../components/Loader/Loader'
import PageHeader from '../../components/PageHeader/PageHeader'
import PlateQuery from '../../queries/plate'
import PropTypes from 'prop-types'
import React from 'react'
import SavePlateContentMutation from '../../mutations/savePlateContent'

function PlateFiller({ plateId, savePlateContent, plate, loading }) {
  if (loading) {
    return <Loader />
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 full-width">
          <PageHeader headerText={plate.name} />
          <ContentEditor
            saveContent={savePlateContent}
            plateContent={plate.content}
            plateId={plateId}
          />
        </div>
      </div>
      <style jsx>{`
        .bottom-margin {
          margin-bottom: 50px;
        }
        .full-width {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

PlateFiller.propTypes = {
  plateId: PropTypes.string,
  savePlateContent: PropTypes.func,
  plate: PropTypes.object,
  loading: PropTypes.bool
}

export default compose(
  graphql(SavePlateContentMutation, {
    props: ({ mutate }) => ({
      savePlateContent: (id, content) => mutate({ variables: { id, content } })
    }),
    options: ({ plateId }) => ({
      refetchQueries: [
        {
          query: PlateQuery,
          variables: { id: plateId }
        }
      ]
    })
  }),
  graphql(PlateQuery, {
    props: ({ data: { loading, plate } }) => ({
      loading,
      plate
    }),
    options: ({ plateId }) => ({
      variables: { id: plateId }
    })
  })
)(PlateFiller)
