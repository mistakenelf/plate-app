<template>
  <div
    @click="$emit('openModal')"
    class="h-64 cursor-pointer border-4 border-dashed border-grey-darker rounded flex items-center justify-center flex-col"
  >
    <font-awesome-icon class="text-5xl mb-4" icon="plus" />
    Add Todo
  </div>
</template>
