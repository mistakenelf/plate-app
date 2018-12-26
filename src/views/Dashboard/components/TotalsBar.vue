<template>
  <div>
    <div
      v-if="loading"
      class="bg-white shadow rounded mb-4 w-full flex items-center justify-center px-4 flex-wrap py-2 h-16 md:h-24"
    >
      <h3>Loading...</h3>
    </div>
    <div
      v-else
      class="bg-white shadow rounded mb-4 w-full flex flex-row justify-between px-4 flex-wrap py-2 h-16 md:h-24"
    >
      <div class="flex flex-col justify-center text-center">
        <div class="text-xl md:text-5xl">{{ totals.todoCount }}</div>
        <div class="text-xs md:text-lg">Todo Lists</div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div class="text-xl md:text-5xl">0</div>
        <div class="text-xs md:text-lg">Reminders</div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div class="text-xl md:text-5xl">0</div>
        <div class="text-xs md:text-lg">Events</div>
      </div>
      <div class="flex flex-col justify-center text-center">
        <div class="text-xl md:text-5xl">0</div>
        <div class="text-xs md:text-lg">Notes</div>
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
