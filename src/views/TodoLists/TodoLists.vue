<template>
  <div class="flex flex-row flex-wrap">
    <div
      v-for="todoList in todoLists"
      :key="todoList.id"
      class="bg-grey-lighter shadow rounded w-full sm:w-full md:w-1/4 lg:w-1/5 m-2 sm:m-2 lg:m-4 p-4 flex-grow"
    >
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <div class="text-xl font-bold">{{ todoList.title }}</div>
          <div>{{ todoList.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppCoreLayout from '@/components/AppCoreLayout'
export default {
  created() {
    this.$emit('update:layout', AppCoreLayout)
  },
  mounted() {
    this.$store.dispatch('getTodoLists')
  },
  computed: mapState(['todoLists'])
}
</script>
