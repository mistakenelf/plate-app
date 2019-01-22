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
  props: {
    taskStatus: String
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
  created() {
    this.status = this.taskStatus
  },
  watch: {
    status(newStatus) {
      this.$emit('updateStatus', newStatus)
    }
  }
}
</script>
