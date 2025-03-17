import { defineStore } from 'pinia'
export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    projects: [] as any[],
    loadings: {} as Record<string, boolean>
  }),
  getters: {},
  actions: {
    async getProjects() {
      try {
        this.loadings.getProjects = true
        this.projects = await window.mainApi.invoke('db_getProjectFolders')
      } catch (error) {
        console.error(error)
      } finally {
        this.loadings.getProjects = false
      }
    },
    async addProject(name: string) {
      try {
        this.loadings.addProject = true
        await window.mainApi.invoke('db_addProjectFolder', name)
        await this.getProjects()
      } catch (error) {
        console.error(error)
      } finally {
        this.loadings.addProject = false
      }
    }
  }
})
