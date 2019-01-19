<template>
  <div class="bg-white rounded border-l-4 border-blue w-full p-2">
    <div class="flex flex-row items-center justify-between mb-4">
      <div class="text-xl font-bold truncate">{{ task.name }}</div>
      <StatusBadge :status="task.status" />
    </div>
    <div class="font-semibold text-md">
      Due On: <span class="font-light text-md">{{ task.dueDate }}</span>
    </div>
  </div>
</template>

<script>
import StatusBadge from '@/components/StatusBadge'

export default {
  components: {
    StatusBadge
  },
  props: {
    task: Object
  }
}
</script>
