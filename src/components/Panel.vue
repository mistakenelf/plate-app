<template>
  <div class="bg-white shadow-md rounded">
    <div
      class="flex justify-between items-center bg-teal-dark p-4 text-white rounded-t"
    >
      <div class="text-xl">{{ title }}</div>
      <slot name="addNew" />
    </div>
    <div :style="{ height }"><slot /></div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    height: String
  }
}
</script>
