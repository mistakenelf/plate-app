import { DefaultDraftBlockRenderMap } from 'draft-js'
import { Map } from 'immutable'

const blockRenderMap = Map({
  'text-align-right': {
    element: 'div'
  },
  'text-align-left': {
    element: 'div'
  },
  'text-align-center': {
    element: 'div'
  }
})

export default DefaultDraftBlockRenderMap.merge(blockRenderMap)
