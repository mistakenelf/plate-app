<template>
  <div
    @click="$emit('openModal')"
    class="p-4 m-4 cursor-pointer border-4 border-dashed border-grey-darker rounded flex items-center justify-center items-center"
  >
    <div class="flex items-center">
      <font-awesome-icon class="text-xl mr-2" icon="plus" />
      <div class="text-xl">Add Todo</div>
    </div>
  </div>
</template>
