<template>
  <div
    class="flex sm:flex-col flex-wrap md:flex-row items-center justify-between"
  >
    <div class="text-2xl md:text-3xl">Create A Task</div>
    <div class="flex flex-row items-center">
      <Button
        color="red"
        type="button"
        text="cancel"
        icon="ban"
        v-on:onClick="cancel"
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
  methods: {
    cancel() {
      this.$router.push({ name: 'tasks' })
    }
  }
}
</script>
