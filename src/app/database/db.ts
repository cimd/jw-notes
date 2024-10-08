// db.ts
import Dexie, { Table } from 'dexie'
import { IUser } from 'modules/Auth/models/UserInterface'
import { INote } from 'modules/Note/models/NoteInterface'

export class dexieDb extends Dexie {
  users!: Table<IUser>
  notes!: Table<INote>

  constructor() {
    super('jwNotesDB')
    this.version(0)
      .stores({
        users: '++id,email',
        notes: '++id,meeting_at,keywords',
      })
  }
}

export const db = new dexieDb()
