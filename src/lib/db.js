import RxDB from 'rxdb'

import { stickyNoteSchema } from '../schemas/stickyNote'

RxDB.plugin(require('pouchdb-adapter-idb'))

const collections = [
  {
    name: 'stickyNotes',
    schema: stickyNoteSchema
  }
]

export async function createDatabase() {
  const db = await RxDB.create({
    name: 'platedb',
    adapter: 'idb',
    multiInstance: true,
    queryChangeDetection: true
  })

  await Promise.all(collections.map(colData => db.collection(colData)))

  return db
}
