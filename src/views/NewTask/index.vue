<template>
  <div class="p-2 md:p-4">
    <form @submit.prevent="handleSubmit()">
      <Header />
      <div class="mb-6" />
      <TaskName v-on:updateName="updateName" />
      <div class="mb-6" />
      <TaskContent :updateContent="updateContent" />
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'

import TaskName from './components/TaskName'
import Header from './components/Header'
import TaskContent from './components/TaskContent'

export default {
  components: {
    Header,
    TaskName,
    TaskContent
  },
  data() {
    return {
      name: '',
      content: ''
    }
  },
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  methods: {
    async handleSubmit() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }
        const payload = {
          name: this.name,
          content: this.content,
          createdBy: this.$store.state.auth.user.id
        }

        console.log(payload)
      })
    },
    updateName(name) {
      this.name = name
    },
    updateContent(content) {
      this.content = content
    }
  }
}
</script>
