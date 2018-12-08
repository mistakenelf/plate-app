<template>
  <AppPanel title="Todos" height="400px">
    <template slot="addNew">
      <router-link to="/new-todo-list" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <AppPanelLoader v-if="todoLists.length === 0" />
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
  </AppPanel>
</template>

<script>
import AppPanel from '@/components/AppPanel'
import AppPanelLoader from '@/components/AppPanelLoader'
import { mapState } from 'vuex'

export default {
  components: {
    AppPanel,
    AppPanelLoader
  },
  created() {
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
