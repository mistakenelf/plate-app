<template>
  <div>
    <div class="p-4">
      <TotalsBar :loading="loading" :totals="dashboard.dashboardCounts" />
    </div>
    <div class="px-2">
      <div class="flex flex-wrap -mx-0">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-6">
          <TodoListsPanel :loading="loading" :todoLists="dashboard.todoLists" />
        </div>
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-6">
          <RemindersPanel />
        </div>
      </div>
    </div>
    <div class="px-2 pt-2">
      <div class="flex flex-wrap -mx-0">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-6">
          <NotesPanel />
        </div>
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-6">
          <EventsPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
import TotalsBar from './components/TotalsBar'
import TodoListsPanel from './components/TodoListsPanel'
import RemindersPanel from './components/RemindersPanel'
import NotesPanel from './components/NotesPanel'
import EventsPanel from './components/EventsPanel'

export default {
  components: {
    TotalsBar,
    TodoListsPanel,
    RemindersPanel,
    NotesPanel,
    EventsPanel
  },
  data() {
    return {
      loading: false
    }
  },
  computed: mapState('dashboard', ['dashboard']),
  async created() {
    this.$emit('update:layout', DefaultLayout)

    this.loading = true
    await this.$store.dispatch('dashboard/getDashboard')
    this.loading = false
  }
}
</script>
