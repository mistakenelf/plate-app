<template>
  <div
    class="p-4 bg-white shadow-md rounded w-full sm:w-full md:w-1/2 h-128 md:-mx-2"
  >
    <div class="text-3xl mb-4">Basic Info</div>
    <div class="flex flex-row justify-between flex-wrap">
      <div class="w-full p-2">
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
      <div class="w-full p-2">
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
  data: () => ({
    title: '',
    description: ''
  }),
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
