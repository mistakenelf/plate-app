<template>
  <NoteTitle v-on:updateTitle="updateTitle" />
</template>

<script>
import NoteTitle from './components/NoteTitle'
import DefaultLayout from '@/components/DefaultLayout'
export default {
  components: {
    NoteTitle
  },
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.$emit('update:layout', DefaultLayout)
  },
  methods: {
    updateTitle(title) {
      this.title = title
    }
  }
}
</script>
