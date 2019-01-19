<template>
  <div class="w-full">
    <Select
      name="status"
      placeholder="Status"
      label="Status"
      v-model="status"
      :options="statusOptions"
    />
  </div>
</template>

<script>
import Select from '@/components/Select'

export default {
  components: {
    Select
  },
  data() {
    return {
      status: '',
      statusOptions: {
        open: 'Open',
        inProgress: 'In Progress',
        done: 'Done'
      }
    }
  },
  watch: {
    status(status) {
      this.$emit('updateStatus', status)
    }
  }
}
</script>
