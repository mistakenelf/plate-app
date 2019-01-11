<template>
  <Panel title="Todo Lists" height="290px">
    <template slot="addNew">
      <router-link to="todo-lists/new" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div
      v-if="todoLists && !loading && todoLists.length === 0"
      class="flex items-center justify-center flex-col h-full"
      :class="$store.state.theme.selectedThemeClasses.todoListPanelBg"
    >
      <font-awesome-icon icon="clipboard-list" class="text-huge mb-4" />
      <div class="text-xl text-center">
        You currently have no todo lists created
      </div>
    </div>
    <PanelLoader v-if="loading" />
    <div v-if="todoLists">
      <div
        :class="$store.state.theme.selectedThemeClasses.todoListHover"
        class="border-b-2 p-3 h-12 cursor-pointer items-center flex items-center"
        v-for="todoList in todoLists"
        :key="todoList.id"
        @click="goToDetailView(todoList.id)"
      >
        <div
          v-if="todoList"
          class="text-md"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          <span class="font-medium">{{ todoList.title }}</span>
          <span class="text-grey-dark text-sm">
            - {{ todoList.todos.length }} Todo(s)</span
          >
        </div>
      </div>
    </div>
    <router-link
      v-if="todoLists && todoLists.length > 0 && !loading"
      to="todo-lists"
      class="flex text-md mt-auto font-bold justify-center p-4 h-12 items-center no-underline"
      :class="
        $store.state.theme.selectedThemeClasses.textColor +
          ' ' +
          $store.state.theme.selectedThemeClasses.todoListHover
      "
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
      this.$router.push({ name: 'todo-list', params: { id } })
    }
  }
}
</script>
