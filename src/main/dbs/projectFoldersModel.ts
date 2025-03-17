import db from './db'
import { ProjectFolder } from '@/types'

export async function getProjectFolders(): Promise<ProjectFolder[]> {
  await db.read()
  return db.data.projectFolders
}

export async function addProjectFolder(name: string): Promise<void> {
  await db.read()
  db.data.projectFolders.push({
    id: Date.now().toString(),
    name,
    created: Date.now()
  })
  await db.write()
}
