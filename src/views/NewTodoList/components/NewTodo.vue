<template>
  <form @submit.prevent="addNewTodo()" class="p-4">
    <div>
      <div class="flex flex-row items-center justify-between">
        <div class="text-3xl mb-2">New Todo</div>
        <button
          type="submit"
          class="bg-grey-darker hover:bg-grey-darkest text-grey-light font-bold py-2 px-4 inline-flex items-center"
        >
          Add Item
        </button>
      </div>
      <div class="flex flex-row justify-between flex-wrap">
        <div class="p-2 w-full sm:w-full md:w-1/2">
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
        <div class="p-2 w-full sm:w-full md:w-1/2">
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
  </form>
</template>

<script>
import TextField from '@/components/TextField'
export default {
  props: {
    todos: Array
  },
  components: {
    TextField
  },
  data: () => ({
    title: '',
    description: ''
  }),
  methods: {
    addNewTodo() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }

        this.$emit('addTodo', {
          title: this.title,
          description: this.description
        })
      })
    }
  }
}
</script>
