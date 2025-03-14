import { defineStore } from 'pinia'

export const useTextToVideoStore = defineStore('textToVideoStore', {
  state: () => ({
    videoName: '',
    videoScript: '' as string
  }),
  getters: {
    videoScriptCharactersCount(): number {
      return this.videoScript?.length
    },

    videoScenes(): string[] {
      return this.videoScript.split('\n')
    },

    videoScenesCount(): number {
      return this.videoScenes.length
    }
  },
  actions: {}
})
