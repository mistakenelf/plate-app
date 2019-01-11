<template>
  <div
    class="shadow-md rounded"
    :class="$store.state.theme.selectedThemeClasses.panelBg"
  >
    <div
      class="flex justify-between items-center px-4 py-3 text-white rounded-t"
      :class="$store.state.theme.selectedThemeClasses.panelHeaderBg"
    >
      <div class="text-lg">{{ title }}</div>
      <slot name="addNew" />
    </div>
    <div class="flex flex-col" :style="{ height }"><slot /></div>
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
