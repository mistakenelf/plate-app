<template>
  <div class="mb-6 md:mb-0 w-full mr-0 md:mr-2">
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
  props: {
    taskTemplate: String
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
  created() {
    this.template = this.taskTemplate
  }
}
</script>
