<template>
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
