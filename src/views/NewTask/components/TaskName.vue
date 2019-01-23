<template>
  <div class="mb-6 md:mb-0 w-full mr-0 md:mr-2">
    <TextField
      type="text"
      name="name"
      placeholder="Name"
      label="Name"
      v-model="name"
      v-validate="'required'"
      :hasErrors="errors.has('name')"
      :errorMessage="errors.first('name')"
    />
  </div>
</template>

<script>
import TextField from '@/components/TextField'

export default {
  components: {
    TextField
  },
  inject: ['$validator'],
  data() {
    return {
      name: ''
    }
  },
  watch: {
    name(name) {
      this.$emit('updateName', name)
    }
  }
}
</script>
