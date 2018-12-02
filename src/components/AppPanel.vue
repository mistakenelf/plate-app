<template>
  <div class="bg-white shadow-md rounded">
    <div
      class="flex justify-between items-center bg-teal-dark p-4 text-white rounded-t"
    >
      <div class="text-xl">{{ title }}</div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
