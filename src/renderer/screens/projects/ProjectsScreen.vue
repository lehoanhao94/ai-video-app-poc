<template>
  <div
    >Projects: {{ projects }}

    <Button @click="createProject"> Create project</Button>
  </div>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '@/renderer/store/projects'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const projectsStore = useProjectsStore()

const { projects } = storeToRefs(projectsStore)

onMounted(() => {
  projectsStore.getProjects()
})

const createProject = () => {
  const name = 'New project'
  projectsStore.addProject(name)
}
</script>
