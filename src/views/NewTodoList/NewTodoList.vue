<template>
  <form class="p-2" @submit.prevent="handleSubmit">
    <BasicInfo :title="title" :description="description" />
    <NewTodo />
  </form>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import BasicInfo from './components/BasicInfo'
import NewTodo from './components/NewTodo'
export default {
  components: {
    BasicInfo,
    NewTodo
  },
  data: () => ({
    title: '',
    description: ''
  }),
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }

        const payload = {
          title: this.title,
          description: this.description
        }

        console.log(payload)
      })
    }
  }
}
</script>
