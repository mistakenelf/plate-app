<template>
  <div>
    <div class="text-3xl mb-4">Basic Info</div>
    <div class="flex flex-col">
      <div class="w-full mb-4">
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
      <div class="w-full">
        <TextArea
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
import TextArea from '@/components/TextArea'
export default {
  components: {
    TextField,
    TextArea
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
