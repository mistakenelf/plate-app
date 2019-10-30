export const noteSchema = {
  title: 'note schema',
  description: 'describes a note',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    noteDesc: {
      type: 'string'
    }
  },
  required: ['noteDesc']
}
