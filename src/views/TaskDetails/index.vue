<template>
  <div class="p-2 md:p-4">
    <div v-if="loading" class="flex justify-center items-center mt-30p">
      <Spinner />
    </div>
    <form v-else @submit.prevent="handleSubmit()">
      <Header />
      <div class="mb-6" />
      <div
        class="flex flex-row justify-between mb-6 w-full flex-wrap sm:flex-wrap md:flex-no-wrap"
      >
        <TaskName :taskName="task.name" v-on:updateName="updateName" />
        <TaskDueDate
          :taskDueDate="task.dueDate"
          v-on:updateDueDate="updateDueDate"
        />
      </div>
      <div class="mb-6" />
      <div
        class="flex flex-row justify-between mb-6 w-full flex-wrap sm:flex-wrap md:flex-no-wrap"
      >
        <TaskTemplate :taskTemplate="task.template" />
        <TaskStatus :taskStatus="task.status" />
      </div>
      <div class="mb-6" />
      <TaskContent :taskContent="task.content" />
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout'
import Spinner from '@/components/Spinner'
import Header from './components/Header'
import TaskName from './components/TaskName'
import TaskContent from './components/TaskContent'
import TaskDueDate from './components/TaskDueDate'
import TaskTemplate from './components/TaskTemplate'
import TaskStatus from './components/TaskStatus'
export default {
  components: {
    Spinner,
    Header,
    TaskName,
    TaskContent,
    TaskDueDate,
    TaskTemplate,
    TaskStatus
  },
  data() {
    return {
      loading: false,
      name: '',
      content: '',
      dueDate: '',
      template: '',
      status: ''
    }
  },
  computed: mapState('tasks', ['task']),
  async created() {
    this.$emit('update:layout', DefaultLayout)

    this.loading = true
    await this.$store.dispatch('tasks/getTaskDetails', this.$route.params.id)
    this.loading = false
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

        console.log(payload)
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
