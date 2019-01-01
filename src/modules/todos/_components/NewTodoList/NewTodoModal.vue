<template>
  <Modal :isOpen="isOpen" v-on:closeModal="closeModal">
    <form @submit.prevent="addNewTodo()" class="p-4">
      <div>
        <div class="text-3xl mb-2">New Todo</div>
        <div class="flex flex-col">
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
          <div class="w-full mt-4">
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
      <button
        type="submit"
        class="bg-grey-darker w-full mt-4 justify-center hover:bg-grey-darkest text-grey-light text-sm border-b-4 border-grey-darkest font-bold py-2 px-4 inline-flex items-center rounded focus:outline-none"
      >
        Add Item
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
    todoIndex: Number,
    isOpen: Boolean,
    closeModal: Function
  },
  data() {
    return {
      title: '',
      description: '',
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
          description: this.description,
          todoIndex: this.todoIndex,
          createdBy: this.$store.state.auth.user.id,
          key: ++this.count
        })

        this.$emit('close')
        this.title = null
        this.description = null
      })
    }
  }
}
</script>
