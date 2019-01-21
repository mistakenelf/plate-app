<template>
  <div class="p-2 md:p-4">
    <form @submit.prevent="handleSubmit()">
      <Header />
      <div class="mb-6" />
      <div
        class="flex flex-row justify-between mb-6 w-full flex-wrap sm:flex-wrap md:flex-no-wrap"
      >
        <TaskName v-on:updateName="updateName" />
        <TaskDueDate v-on:updateDueDate="updateDueDate" />
      </div>
      <div class="mb-6" />
      <div
        class="flex flex-row justify-between mb-6 w-full flex-wrap sm:flex-wrap md:flex-no-wrap"
      >
        <TaskTemplate v-on:updateTemplate="updateTemplate" />
        <TaskStatus v-on:updateStatus="updateStatus" />
      </div>
      <div class="mb-6" />
      <TaskContent :updateContent="updateContent" :content="content" />
    </form>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'

import TaskName from './components/TaskName'
import Header from './components/Header'
import TaskContent from './components/TaskContent'
import TaskDueDate from './components/TaskDueDate'
import TaskTemplate from './components/TaskTemplate'
import TaskStatus from './components/TaskStatus'

export default {
  components: {
    Header,
    TaskName,
    TaskContent,
    TaskDueDate,
    TaskTemplate,
    TaskStatus
  },
  data() {
    return {
      name: '',
      content:
        '<h1><strong>Your new task</strong></h1><p></p><h3>Create a new task here</h3><p></p><p>You can group a list of items like below:</p><p></p><ul><li><p>List item 1</p></li><li><p>List item 2</p></li><li><p>List item 3</p></li></ul>',
      dueDate: '',
      template: '',
      status
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
          dueDate: this.dueDate,
          template: this.template,
          status: this.status,
          createdBy: this.$store.state.auth.user.id
        }

        await this.$store.dispatch('tasks/createTask', payload)
        this.$router.push({ name: 'tasks' })
      })
    },
    updateName(name) {
      this.name = name
    },
    updateContent(content) {
      this.content = content
    },
    updateDueDate(date) {
      this.dueDate = date
    },
    updateTemplate(template) {
      this.template = template
    },
    updateStatus(status) {
      this.status = status
    }
  }
}
</script>
