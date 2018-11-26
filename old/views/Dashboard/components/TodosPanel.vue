<template>
  <ApolloQuery
    :query="require('../queries/todoLists.gql')"
    :variables="{ limit: 5 }"
  >
    <template slot-scope="{ result: { loading, error, data } }">
      <app-panel title="Todo List's" class="w-full">
        <template slot="extra">
          <router-link class="text-white" :to="`/new-todo-list`"
            ><font-awesome-icon
              class="text-2xl cursor-pointer text-darker"
              icon="plus"
          /></router-link>
        </template>
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <div
            class="border-b-2 p-4 h-16 cursor-pointer items-center hover:bg-grey-lighter"
            v-for="todoList in data.todoLists"
            :key="todoList.id"
            v-on:click="goToDetail(todoList.id)"
          >
            <div class="text-grey-black text-md">{{ todoList.title }}</div>
            <div class="text-grey-darker text-sm">
              {{ todoList.description }}
            </div>
          </div>
        </div>
        <router-link
          class="flex justify-center uppercase p-4 h-16 items-center text-grey-darker no-underline"
          :to="`/todos-listing`"
          >View More</router-link
        >
      </app-panel>
    </template>
  </ApolloQuery>
</template>

<script>
import AppPanel from '@/components/AppPanel'

export default {
  components: {
    'app-panel': AppPanel
  },
  methods: {
    goToDetail(id) {
      this.$router.push(`/todo-details/${id}`)
    }
  }
}
</script>
