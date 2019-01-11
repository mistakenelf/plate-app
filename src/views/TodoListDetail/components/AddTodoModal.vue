<template>
  <Modal :isOpen="isOpen" v-on:closeModal="closeModal">
    <form @submit.prevent="handleSubmit">
      <div class="text-2xl mb-4">Add Todo</div>
      <TextField
        type="text"
        name="description"
        placeholder="Describe your todo"
        v-model="description"
        v-validate="'required'"
        :hasErrors="errors.has('description')"
        :errorMessage="errors.first('description')"
      />
      <button
        class="bg-teal-dark mt-4 border-b-4 border-teal-darker rounded w-full hover:bg-teal-dark text-white font-bold py-1 px-4 focus:outline-none hover:bg-teal mb-4"
        type="submit"
      >
        <font-awesome-icon
          class="text-2xl"
          :icon="!loading ? 'plus' : 'spinner'"
          :spin="loading"
        />
      </button>
    </form>
  </Modal>
</template>

<script>
import TextField from '@/components/TextField'
import Modal from '@/components/Modal'
export default {
  components: {
    TextField,
    Modal
  },
  props: {
    isOpen: Boolean,
    closeModal: Function,
    addingTodo: Boolean,
    todoList: Object
  },
  data() {
    return {
      description: '',
      loading: false
    }
  },
  methods: {
    async handleSubmit() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }

        const payload = {
          description: this.description,
          createdBy: this.$store.state.auth.user.id
        }

        this.loading = true
        await this.$store.dispatch('todos/updateTodoList', payload)
        this.loading = false

        this.$emit('handleClose')

        this.description = ''
        this.$validator.errors.clear()
      })
    }
  }
}
</script>
