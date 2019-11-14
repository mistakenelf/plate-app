import RxDB from 'rxdb';

import { plateSchema } from '../schemas/plate';
import { stickyNoteSchema } from '../schemas/stickyNote';

RxDB.plugin(require('pouchdb-adapter-idb'));

const collections = [
  {
    name: 'stickynotes',
    schema: stickyNoteSchema,
  },
  {
    name: 'plates',
    schema: plateSchema,
  },
];

export async function createDatabase() {
  const db = await RxDB.create({
    name: 'platedb',
    adapter: 'idb',
    multiInstance: true,
    queryChangeDetection: true,
  });

  await Promise.all(collections.map(colData => db.collection(colData)));

  return db;
}
