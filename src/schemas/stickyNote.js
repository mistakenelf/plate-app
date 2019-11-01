export const stickyNoteSchema = {
  title: 'sticky note schema',
  description: 'describes a sticky note',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    noteText: {
      type: 'string'
    }
  },
  required: ['noteText']
}
