<template>
  <div class="p-4 h-full">
    <Header />
    <div class="mt-30p"><NoTasks /></div>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'

import Header from './components/Header'
import NoTasks from './components/NoTasks'

export default {
  components: {
    Header,
    NoTasks
  },
  created() {
    this.$emit('update:layout', DefaultLayout)
  }
}
</script>
