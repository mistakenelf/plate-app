<template>
  <TextEditor v-on:updateContent="updateContent" />
</template>

<script>
import TextEditor from '@/components/TextEditor'
export default {
  components: {
    TextEditor
  },
  props: {
    updateContent: Function
  }
}
</script>
