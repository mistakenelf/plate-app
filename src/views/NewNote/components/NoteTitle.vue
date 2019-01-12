<template>
  <div class="w-full">
    <TextField
      type="text"
      name="title"
      :isLarge="true"
      placeholder="Give your note a title"
      v-model="title"
      v-validate="'required'"
      :hasErrors="errors.has('title')"
      :errorMessage="errors.first('title')"
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
      title: ''
    }
  },
  watch: {
    title(newTitle) {
      this.$emit('updateTitle', newTitle)
    }
  }
}
</script>
