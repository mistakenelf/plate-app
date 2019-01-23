<template>
  <TextEditor :content="taskContent" v-on:updateContent="updateContent" />
</template>

<script>
import TextEditor from '@/components/TextEditor'

export default {
  components: {
    TextEditor
  },
  props: {
    taskContent: String
  },
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.content = this.taskContent
  },
  methods: {
    updateContent(content) {
      this.$emit('updateParentContent', content)
    }
  }
}
</script>
