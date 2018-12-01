<template>
  <AppLayout>
    <ApolloQuery :query="require('./queries/hello.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.hello }}</div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </AppLayout>
</template>

<script>
import AppLayout from '@/components/AppLayout'

export default {
  components: {
    AppLayout
  }
}
</script>
