<template>
  <div class="p-2 flex flex-row flex-wrap">
    <div
      v-for="todo in todos"
      :key="todo.key"
      class="mt-4 w-full sm:w-full md:w-1/4"
    >
      <div class="bg-white shadow m-2 h-32 flex flex-col rounded">
        <div
          class="flex flex-row items-center justify-between bg-grey-darker rounded-t p-2 text-white"
        >
          <div class="text-lg truncate mr-2">{{ todo.title }}</div>
          <font-awesome-icon
            @click="$emit('removeTodo', todo)"
            class="text-2xl text-red-light cursor-pointer"
            icon="times"
          />
        </div>
        <div class="p-2">
          <div class="text-lg text-grey-darkest">{{ todo.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array
  }
}
</script>
