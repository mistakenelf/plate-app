<template>
  <div class="flex flex-row items-center justify-end">
    <Button
      color="teal"
      type="button"
      text="New Task"
      icon="plus"
      v-on:onClick="goToCreateTask()"
    />
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  methods: {
    goToCreateTask() {
      this.$router.push({ name: 'new-task' })
    }
  }
}
</script>
