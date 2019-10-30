import RxDB from 'rxdb'

import { noteSchema } from '../schemas/note'

RxDB.plugin(require('pouchdb-adapter-idb'))

const collections = [
  {
    name: 'notes',
    schema: noteSchema
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
