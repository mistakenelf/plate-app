<template>
  <div class="p-2 flex flex-row flex-wrap pb-20">
    <div class="md:mt-0 w-full sm:w-full md:w-1/3 lg:w-1/4">
      <div class="bg-white shadow flex flex-col rounded m-2">
        <div
          @click="$emit('addTodo')"
          class="p-2 h-32 sm:h-32 md:h-48 flex flex-col items-center justify-center cursor-pointer"
        >
          <div class="flex flex-col items-center justify-center">
            <font-awesome-icon
              icon="plus"
              class="text-5xl mb-4 font-thin text-grey-darker"
            />
            <div class="text-xl text-grey-darker uppercase">Add Todo</div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="todo in todos"
      :key="todo.index"
      class="mt-4 md:mt-0 w-full sm:w-full md:w-1/3 lg:w-1/4"
    >
      <div class="bg-white shadow flex flex-col rounded m-2 h-48">
        <div
          class="flex flex-row items-center justify-between bg-grey-darkest rounded-t px-2 py-1 text-white"
        >
          <div class="text-lg">Todo</div>
          <font-awesome-icon
            @click="$emit('removeTodo', todo)"
            class="text-2xl text-red cursor-pointer"
            icon="times"
          />
        </div>
        <div class="p-2">
          <TextArea
            name="description"
            placeholder="Describe your todo"
            v-model="todo.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextArea from '@/components/TextArea'
export default {
  components: {
    TextArea
  },
  props: {
    todos: Array
  }
}
</script>
