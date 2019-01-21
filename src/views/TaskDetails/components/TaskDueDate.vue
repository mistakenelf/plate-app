<template>
  <div class="w-full">
    <DateField
      name="dueDate"
      placeholder="Due Date"
      label="Due Date"
      v-model="dueDate"
    />
  </div>
</template>

<script>
import DateField from '@/components/DateField'

export default {
  components: {
    DateField
  },
  props: {
    taskDueDate: String
  },
  inject: ['$validator'],
  data() {
    return {
      dueDate: null
    }
  },
  created() {
    this.dueDate = this.taskDueDate
  },
  watch: {
    dueDate(newDueDate) {
      this.$emit('updateDueDate', newDueDate)
    }
  }
}
</script>
