<template>
  <div class="px-2 flex flex-row flex-wrap pb-20">
    <div
      v-for="todoList in todoLists"
      :key="todoList.id"
      class="mt-4 w-full sm:w-full md:w-1/4"
    >
      <div
        class="bg-white shadow m-2 h-24 flex flex-col rounded"
        v-bind:class="{
          'opacity-50':
            todoList.completed ||
            (todoListLoading.loading &&
              todoListLoading.index === todoLists.indexOf(todoList))
        }"
      >
        <div
          class="flex flex-row items-center justify-between bg-grey-darkest rounded-t px-2 py-3 text-grey-lightest"
        >
          <div class="cursor-pointer text-lg">Todo List</div>
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
          class="p-2 flex items-center justify-center"
          v-if="
            todoListLoading.loading &&
              todoListLoading.index === todoLists.indexOf(todoList)
          "
        >
          <Spinner />
        </div>
        <div
          v-else
          class="p-2 h-32 cursor-pointer"
          @click="$emit('openList', todoList.id)"
        >
          <div class="text-2xl text-grey-darkest">{{ todoList.title }}</div>
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
