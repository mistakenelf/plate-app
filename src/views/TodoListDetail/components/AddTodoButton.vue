<template>
  <button
    type="button"
    @click="$emit('openModal')"
    class="bg-teal-dark shadow-lg m-2 fixed pin-b pin-r h-16 w-16 text-white p-4 hover:bg-teal focus:outline-none rounded-full font-bold"
  >
    <font-awesome-icon class="text-2xl" icon="plus" />
  </button>
</template>
