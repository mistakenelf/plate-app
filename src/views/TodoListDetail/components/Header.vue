<template>
  <div class="flex items-center justify-between">
    <h1 class="text-3xl md:text-5xl">{{ todoList.title }}</h1>
    <div class="flex items-center">
      <button
        @click="$emit('openModal')"
        class="bg-teal-dark border-b-4 border-teal-darker rounded w-full hover:bg-teal-darker text-white font-bold py-1 px-4 focus:outline-none hover:bg-teal"
        type="button"
      >
        <font-awesome-icon icon="plus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todoList: Object
  }
}
</script>
