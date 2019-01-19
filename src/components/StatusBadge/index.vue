<template>
  <div class="text-sm rounded p-1" :class="statusClass">{{ status }}</div>
</template>

<script>
export default {
  props: {
    status: String
  },
  computed: {
    statusClass() {
      if (this.status === 'Open') {
        return 'bg-blue text-grey-lightest'
      } else if (this.status === 'In Progress') {
        return 'bg-yellow-dark text-black'
      } else {
        return 'bg-green text-grey-lightest'
      }
    }
  }
}
</script>
