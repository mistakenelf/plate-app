<template>
  <div class="p-2 flex flex-row flex-wrap">
    <div
      v-for="todoList in todoLists"
      :key="todoList.id"
      class="mt-4 w-full sm:w-full md:w-1/4"
    >
      <div
        class="bg-white shadow m-2 h-32 flex flex-col rounded"
        v-bind:class="{
          'opacity-50':
            todoList.completed ||
            (todoListLoading.loading &&
              todoListLoading.index === todoLists.indexOf(todoList))
        }"
      >
        <div
          class="flex flex-row items-center justify-between bg-grey-darker rounded-t p-2 text-white"
        >
          <div
            @click="$emit('openList', todoList.id)"
            class="cursor-pointer text-lg truncate mr-2"
          >
            {{ todoList.title }}
          </div>
          <div class="flex items-center">
            <font-awesome-icon
              @click="$emit('toggleCompleted', todoList)"
              class="text-2xl mr-4 cursor-pointer"
              icon="check-circle"
              v-bind:class="{ 'text-green-light': todoList.completed }"
            />
            <font-awesome-icon
              @click="$emit('deleteTodoList', todoList)"
              class="text-2xl text-red-light cursor-pointer"
              icon="times"
            />
          </div>
        </div>
        <div
          class="p-2 h-16 flex items-center justify-center"
          v-if="
            todoListLoading.loading &&
              todoListLoading.index === todoLists.indexOf(todoList)
          "
        >
          <Spinner />
        </div>
        <div class="p-2 h-16" v-else>
          <div class="text-lg text-grey-darkest">
            {{ todoList.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner'
export default {
  components: {
    Spinner
  },
  props: {
    todoLists: Array,
    todoListLoading: Object
  }
}
</script>
