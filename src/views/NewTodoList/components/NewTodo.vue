<template>
  <form @submit.prevent="addNewTodo()" class="p-4">
    <div class="text-3xl mb-4">New Todo</div>
    <div class="flex flex-row justify-between items-end">
      <div class="flex flex-col w-full sm:w-full md:w-3/4">
        <div class="w-full">
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
      </div>
      <button
        type="submit"
        class="bg-grey-darker hover:bg-grey-darkest text-grey-light text-sm border-b-4 border-grey-darkest font-bold py-2 px-4 rounded focus:outline-none"
      >
        Add Item
      </button>
    </div>
  </form>
</template>

<script>
import TextField from '@/components/TextField'
export default {
  components: {
    TextField
  },
  data() {
    return {
      title: '',
      count: 0
    }
  },
  methods: {
    addNewTodo() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }

        this.$emit('addTodo', {
          title: this.title,
          todoIndex: this.todoIndex,
          createdBy: this.$store.state.auth.user.id,
          key: ++this.count
        })
      })
    }
  }
}
</script>
