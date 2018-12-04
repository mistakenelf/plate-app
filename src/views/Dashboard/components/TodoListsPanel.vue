<template>
  <AppPanel title="Todos">
    <template slot="addNew">
      <router-link to="/new-todo-list" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div
      class="border-b-2 p-4 h-16 cursor-pointer items-center hover:bg-grey-lighter"
      v-for="todoList in todoLists"
      :key="todoList.id"
      @click="goToDetailView(todoList.id)"
    >
      <div class="text-grey-black text-md">{{ todoList.title }}</div>
      <div class="text-grey-darker text-sm">{{ todoList.description }}</div>
    </div>
    <router-link
      to="/todo-lists"
      class="flex justify-center uppercase p-4 h-16 items-center text-grey-darker no-underline hover:bg-grey-lighter"
    >
      View More
    </router-link>
  </AppPanel>
</template>

<script>
import AppPanel from '@/components/AppPanel'
import { mapState } from 'vuex'

export default {
  name: 'TodoListsPanel',
  components: {
    AppPanel
  },
  mounted() {
    this.$store.dispatch('getTodoLists')
  },
  computed: mapState(['todoLists']),
  methods: {
    goToDetailView(id) {
      this.$router.push(`/todo-list/${id}`)
    }
  }
}
</script>
