<template>
  <app-layout>
    <ApolloQuery :query="require('./queries/todoLists.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <div
            class="mb-2"
            v-for="todoList in data.todoLists"
            :key="todoList.id"
          >
            {{ todoList.title }}
          </div>
        </div>
      </template>
    </ApolloQuery>
  </app-layout>
</template>

<script>
import AppLayout from '@/components/AppLayout'

export default {
  components: {
    'app-layout': AppLayout
  }
}
</script>
