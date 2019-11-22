export const plateSchema = {
  title: 'plate schema',
  description: 'describes a plate',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    name: {
      type: 'string',
    },
    dueDate: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    noteOneText: {
      type: 'string',
    },
    noteTwoText: {
      type: 'string',
    },
  },
  required: ['name', 'description'],
};
