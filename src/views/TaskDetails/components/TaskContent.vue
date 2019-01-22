<template>
  <TextEditor :content="content" :updateContent="updateContent" />
</template>

<script>
import TextEditor from '@/components/TextEditor'
export default {
  components: {
    TextEditor
  },
  props: {
    taskContent: String,
    updateContent: Function
  },
  data() {
    return {
      content: ''
    }
  },
  created() {
    this.content = this.taskContent
  },
  watch: {
    content(newContent) {
      this.$emit('updateContent', newContent)
    }
  }
}
</script>
