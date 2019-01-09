<template>
  <div>
    <div
      v-if="loading"
      class="shadow rounded mb-4 p-2 md:p-4 w-full flex items-center justify-center"
      :class="$store.state.theme.selectedThemeClasses.totalsPanelBg"
    >
      <Spinner />
    </div>
    <div
      v-else
      class="shadow rounded p-2 mb-4 w-full flex flex-row justify-between flex-wrap"
      :class="$store.state.theme.selectedThemeClasses.totalsPanelBg"
    >
      <div class="flex flex-col justify-center text-center">
        <div
          class="text-xl md:text-4xl"
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
          class="text-xl md:text-4xl"
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
          class="text-xl md:text-4xl"
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
          class="text-xl md:text-4xl"
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
import Spinner from '@/components/Spinner'
export default {
  components: {
    Spinner
  },
  props: {
    loading: Boolean,
    totals: Object
  }
}
</script>
