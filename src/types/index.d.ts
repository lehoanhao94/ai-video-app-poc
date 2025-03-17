export type ProjectFolder = {
  id: string
  name: string
  created: number
  updated?: number
}

export type DatabaseLow = {
  projectFolders: ProjectFolder[]
}
