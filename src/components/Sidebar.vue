<template>
  <div class="h-full bg-blue-darker flex flex-col">
    <div class="text-grey-lightest text-center text-3xl font-light mt-4 mb-8">
      🍛 Plate
    </div>
    <div
      class="h-12 text-grey-lightest hover:bg-blue-darkest flex items-center cursor-pointer mb-4"
      :class="$route.name === 'dashboard' && 'bg-blue-dark'"
      @click="goToRoute('dashboard')"
    >
      <div class="flex flex-row items-center ml-6">
        <font-awesome-icon icon="chart-line" class="mr-2" />
        Dashboard
      </div>
    </div>
    <div
      class="h-12 text-grey-lightest hover:bg-blue-darkest flex items-center cursor-pointer"
      :class="$route.name === 'tasks' && 'bg-blue-dark'"
      @click="goToRoute('tasks')"
    >
      <div class="flex flex-row items-center ml-6">
        <font-awesome-icon icon="tasks" class="mr-2" />
        Tasks
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToRoute(route) {
      this.$router.push(route)
    }
  }
}
</script>
