<template>
  <div>
    <div
      v-if="loading"
      class="shadow rounded mb-4 w-full flex items-center justify-center px-4 flex-wrap py-2 h-16 md:h-24"
      :class="$store.state.theme.selectedThemeClasses.totalsPanelBg"
    >
      <h3>Loading...</h3>
    </div>
    <div
      v-else
      class="shadow rounded mb-4 w-full flex flex-row justify-between px-4 flex-wrap py-2 h-16 md:h-24"
      :class="$store.state.theme.selectedThemeClasses.totalsPanelBg"
    >
      <div class="flex flex-col justify-center text-center">
        <div
          class="text-xl md:text-5xl"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          {{ totals.todoCount }}
        </div>
        <div
          class="text-xs md:text-lg"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          Todo Lists
        </div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div
          class="text-xl md:text-5xl"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          0
        </div>
        <div
          class="text-xs md:text-lg"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          Reminders
        </div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div
          class="text-xl md:text-5xl"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          0
        </div>
        <div
          class="text-xs md:text-lg"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          Events
        </div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div
          class="text-xl md:text-5xl"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          0
        </div>
        <div
          class="text-xs md:text-lg"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        >
          Notes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    totals: Object
  }
}
</script>
