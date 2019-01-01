<template>
  <div
    v-if="isOpen"
    class="h-full w-full fixed pin flex justify-center items-center"
  >
    <div
      @click="$emit('closeModal')"
      class="fixed pin z-10 overflow-auto flex smoke-darkest"
    />
    <div
      class="bg-white m-4 shadow-md p-4 w-full sm:w-full md:w-1/2 z-50 lg:w-1/3 rounded relative flex flex-col"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    closeModal: Function
  }
}
</script>

<style>
.smoke-darkest {
  background: rgba(0, 0, 0, 0.6);
}
</style>
