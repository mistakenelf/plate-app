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
  inject: ['$validator'],
  data() {
    return {
      dueDate: ''
    }
  },
  watch: {
    dueDate(dueDate) {
      this.$emit('updateDueDate', dueDate)
    }
  }
}
</script>
