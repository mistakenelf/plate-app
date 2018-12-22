<template>
  <form @submit.prevent="addNewTodo()">
    <div class="p-4 mt-6 bg-white rounded shadow w-full">
      <div class="flex flex-row items-center justify-between">
        <div class="text-3xl">New Todo</div>
        <button
          type="submit"
          class="bg-grey-darker hover:bg-grey-dark rounded text-white p-2 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <div class="flex flex-col">
        <div class="mt-4">
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
        <div class="mt-4">
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
    <div class="flex flex-row flex-wrap">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="flex flex-row flex-wrap mt-4 w-full sm:w-full md:w-1/4 lg:w-1/5 flex-grow"
      >
        <div
          class="bg-white shadow p-2 m-2 h-32 flex justify-center flex-col items-center rounded w-full"
        >
          <div>{{ todo.title }}</div>
          <div>{{ todo.description }}</div>
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
