import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import path from 'path'
import fs from 'fs'
import { app } from 'electron'
import defaultData from './defaultData'
import { DatabaseLow } from '../../types'
import Constants from '../utils/Constants'

let DB_FOLDER = ''

if (Constants.IS_DEV_ENV) {
  // In development mode, the database will be stored in the root folder _databases
  DB_FOLDER = path.join(__dirname, '_databases')
} else {
  DB_FOLDER = path.join(app.getPath('userData'), 'dbs')
}

// Ensure that the folder exists
if (!fs.existsSync(DB_FOLDER)) {
  fs.mkdirSync(DB_FOLDER, { recursive: true })
}
console.log('DB_FOLDER:', DB_FOLDER)
const dbFile = path.join(DB_FOLDER, 'databases.json')
const adapter = new JSONFile<DatabaseLow>(dbFile)
const db = new Low(adapter, defaultData)

async function initialize(): Promise<void> {
  await db.read()
  await db.write()
}

initialize()

export default db
