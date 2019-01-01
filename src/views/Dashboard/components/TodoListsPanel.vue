<template>
  <Panel title="Todos" height="385px">
    <template slot="addNew">
      <router-link to="/new-todo-list" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div
      v-if="todoLists && !loading && todoLists.length === 0"
      class="flex items-center justify-center flex-col h-full"
      :class="
        $store.state.theme.selectedTheme === 'light'
          ? 'bg-blue-darker'
          : 'bg-black'
      "
    >
      <font-awesome-icon icon="clipboard-list" class="text-huge mb-4" />
      <div class="text-xl text-center">
        You currently have no todo lists created
      </div>
    </div>
    <PanelLoader v-if="loading" />
    <div v-if="todoLists">
      <div
        class="border-b-2 p-4 h-16 cursor-pointer items-center"
        :class="
          $store.state.theme.selectedTheme === 'light'
            ? 'hover:bg-grey-lighter'
            : 'bg-black hover:bg-grey-darkest'
        "
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
      v-if="todoLists"
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

export default {
  components: {
    Panel,
    PanelLoader
  },
  props: {
    todoLists: Array,
    loading: Boolean
  },
  methods: {
    goToDetailView(id) {
      this.$router.push(`/todo-list/${id}`)
    }
  }
}
</script>
