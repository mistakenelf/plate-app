<template>
  <div class="h-64">
    <div class="text-3xl mb-2">Basic Info</div>
    <div class="flex flex-col">
      <div class="p-2 w-full">
        <TextField
          type="text"
          name="title"
          placeholder="Title"
          label="Title"
          v-model="title"
          v-validate="'required'"
          :hasErrors="errors.has('title')"
          :errorMessage="errors.first('title')"
        />
      </div>
      <div class="p-2 w-full">
        <TextField
          type="text"
          name="description"
          placeholder="Description"
          label="Description"
          v-model="description"
          v-validate="'required'"
          :hasErrors="errors.has('description')"
          :errorMessage="errors.first('description')"
        />
      </div>
    </div>
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
      title: '',
      description: ''
    }
  },
  watch: {
    title(newTitle) {
      this.$emit('updateTitle', newTitle)
    },
    description(newDescription) {
      this.$emit('updateDescription', newDescription)
    }
  }
}
</script>
