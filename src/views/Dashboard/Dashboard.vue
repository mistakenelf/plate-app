<template>
  <div>
    <div class="px-2 pt-2">
      <TotalsBar />
      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-2">
          <TodoListsPanel />
        </div>
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-2">
          <RemindersPanel />
        </div>
      </div>
    </div>
    <div class="px-2 pt-2">
      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-2">
          <NotesPanel />
        </div>
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 px-2 mb-2">
          <EventsPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import TotalsBar from './components/TotalsBar'
import TodoListsPanel from './components/TodoListsPanel'
import RemindersPanel from './components/RemindersPanel'
import NotesPanel from './components/NotesPanel'
import EventsPanel from './components/EventsPanel'

export default {
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  components: {
    TotalsBar,
    TodoListsPanel,
    RemindersPanel,
    NotesPanel,
    EventsPanel
  }
}
</script>
