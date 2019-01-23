<template>
  <TextEditor v-on:updateContent="updateContent" :content="content" />
</template>

<script>
import TextEditor from '@/components/TextEditor'

export default {
  components: {
    TextEditor
  },
  props: {
    updateContent: Function,
    content: String
  }
}
</script>
