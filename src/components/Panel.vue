<template>
  <div
    class="shadow-md rounded"
    :class="$store.state.theme.selectedThemeClasses.panelBg"
  >
    <div
      class="flex justify-between items-center p-4 text-white rounded-t"
      :class="$store.state.theme.selectedThemeClasses.panelHeaderBg"
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
