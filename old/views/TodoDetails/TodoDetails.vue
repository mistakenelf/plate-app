<template>
  <app-layout>
    <ApolloQuery
      :query="require('./queries/todoList.gql')"
      :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading" class="loading apollo">Loading...</div>
        <div v-else-if="error" class="error apollo">An error occured</div>
        <div v-else-if="data" class="result apollo">
          <pre> {{ JSON.stringify(data.todoList, null, 2) }} </pre>
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
