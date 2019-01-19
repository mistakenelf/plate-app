<template>
  <div class="mb-6 md:mb-0 w-full">
    <Select
      name="template"
      placeholder="Select a template"
      label="Select a template"
      v-model="template"
      :options="templateOptions"
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
      template: '',
      templateOptions: {
        basic: 'Basic',
        todo: 'Todo'
      }
    }
  },
  watch: {
    template(template) {
      this.$emit('updateTemplate', template)
    }
  }
}
</script>
