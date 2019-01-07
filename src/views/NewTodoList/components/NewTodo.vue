<template>
  <div class="flex justify-between w-full">
    <TextField
      type="text"
      name="description"
      :isLarge="true"
      placeholder="Describe your todo"
      v-model="description"
      v-validate="'required'"
      :hasErrors="errors.has('description')"
      :errorMessage="errors.first('description')"
    />
    <button
      @click="$emit('addTodo', description)"
      type="button"
      class="bg-teal-dark w-16 text-grey-lightest focus:outline-none"
    >
      <font-awesome-icon icon="plus" />
    </button>
  </div>
</template>

<script>
import TextField from '@/components/TextField'
export default {
  components: {
    TextField
  },
  data() {
    return {
      description: ''
    }
  }
}
</script>
