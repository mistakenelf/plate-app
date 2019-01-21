<template>
  <TextEditor :content="content" />
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
  }
}
</script>
