<template>
  <Panel title="Todos" height="385px">
    <template slot="addNew">
      <router-link to="/new-todo-list" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <PanelLoader v-if="todoLists.length === 0" />
    <div v-if="todoLists.length > 0">
      <div
        class="border-b-2 p-4 h-16 cursor-pointer items-center hover:bg-grey-lighter"
        v-for="todoList in todoLists"
        :key="todoList.id"
        @click="goToDetailView(todoList.id)"
      >
        <div v-if="!todoList" class="bg-grey-light w-32 rounded h-3 mb-2" />
        <div v-if="!todoList" class="bg-grey-light w-64 rounded h-3" />
        <div v-if="todoList" class="text-grey-black text-md">
          {{ todoList.title }}
        </div>
        <div v-if="todoList" class="text-grey-darker text-sm">
          {{ todoList.description }}
        </div>
      </div>
    </div>
    <router-link
      v-if="todoLists.length > 0"
      to="/todo-lists"
      class="flex justify-center uppercase p-4 h-16 items-center text-grey-darker no-underline hover:bg-grey-lighter"
    >
      View All
    </router-link>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel'
import PanelLoader from '@/components/PanelLoader'
import { mapState } from 'vuex'

export default {
  components: {
    Panel,
    PanelLoader
  },
  created() {
    this.$store.dispatch('todoList/getTodoLists')
  },
  computed: mapState('todoList', ['todoLists']),
  methods: {
    goToDetailView(id) {
      this.$router.push(`/todo-list/${id}`)
    }
  }
}
</script>
