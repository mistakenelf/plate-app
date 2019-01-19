<template>
  <div class="h-full bg-blue-darker flex flex-col">
    <div class="text-grey-lightest text-center text-3xl font-light mt-4 mb-8">
      🍛 Plate
    </div>
    <div
      class="h-12 text-grey-lightest hover:bg-blue-darkest flex items-center cursor-pointer pl-6"
      :class="
        $route.name === 'dashboard' &&
          'border-l-4 border-blue-dark bg-blue-darkest'
      "
      @click="goToRoute('dashboard')"
    >
      <div class="flex flex-row items-center">
        <font-awesome-icon icon="chart-line" class="mr-2" />
        Dashboard
      </div>
    </div>
    <div
      class="h-12 text-grey-lightest hover:bg-blue-darkest border-l-4 border-blue-darker flex items-center cursor-pointer pl-6"
      :class="
        ($route.name === 'tasks' || $route.name === 'new-task') &&
          'border-l-4 border-blue-dark bg-blue-darkest'
      "
      @click="goToRoute('tasks')"
    >
      <div class="flex flex-row items-center">
        <font-awesome-icon icon="tasks" class="mr-2" />
        Tasks
      </div>
    </div>
    <div class="flex justify-center items-center absolute pin-b w-64 p-4">
      <font-awesome-icon
        class="text-lg mr-2 text-grey-lightest"
        icon="moon"
        :class="$store.state.theme.selectedThemeClasses.textColor"
      />
      <ToggleSwitch
        :label="$store.state.theme.selectedThemeName"
        :handleToggle="toggleTheme"
        :isChecked="$store.state.theme.selectedThemeName === 'dark'"
      />
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '@/components/ToggleSwitch'
export default {
  components: {
    ToggleSwitch
  },
  methods: {
    goToRoute(route) {
      this.$router.push({ name: route })
    },
    toggleTheme() {
      const { selectedThemeName } = this.$store.state.theme

      if (selectedThemeName === 'light') {
        this.$store.dispatch('theme/toggleTheme', {
          selectedThemeName: 'dark'
        })
      } else {
        this.$store.dispatch('theme/toggleTheme', {
          selectedThemeName: 'light'
        })
      }
    }
  }
}
</script>
