<template>
  <div class="flex flex-row flex-wrap items-center justify-between">
    <div class="text-2xl md:text-3xl">Task Details</div>
    <div class="flex flex-row items-center">
      <Button
        color="red"
        type="button"
        text="delete"
        icon="ban"
        v-on:onClick="deleteTask"
      />
      <div class="mr-2" />
      <Button type="submit" color="blue" text="Save" icon="save" />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  data() {
    return {
      deleting: false
    }
  },
  methods: {
    async deleteTask() {
      this.deleting = true
      await this.$store.dispatch('tasks/deleteTask', this.$route.params.id)
      this.deleting = false
      this.$router.push({ name: 'tasks' })
    }
  }
}
</script>
