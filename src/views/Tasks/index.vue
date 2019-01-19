<template>
  <div class="p-2 h-full">
    <Header />
    <div class="mb-6" />
    <div v-if="loading" class="flex items-center justify-center mt-30p">
      <Spinner />
    </div>
    <div v-if="!loading && tasks.length === 0" class="mt-30p"><NoTasks /></div>
    <div v-if="!loading && tasks.length > 0" class="grid">
      <div v-for="task in tasks" :key="task.id"><Task :task="task" /></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import DefaultLayout from '@/components/DefaultLayout'
import Spinner from '@/components/Spinner'

import Header from './components/Header'
import NoTasks from './components/NoTasks'
import Task from './components/Task'

export default {
  components: {
    Header,
    NoTasks,
    Task,
    Spinner
  },
  data() {
    return {
      loading: false
    }
  },
  computed: mapState('tasks', ['tasks']),
  async created() {
    this.$emit('update:layout', DefaultLayout)

    this.loading = true
    await this.$store.dispatch('tasks/getTasks')
    this.loading = false
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 15px;
}
</style>
