<template>
  <button
    :type="type"
    class="text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none text-grey-lightest"
    :class="colorClass + ' ' + widthClasses"
    @click="$emit('onClick')"
  >
    <font-awesome-icon v-if="icon" class="mr-2" :icon="icon" />
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    text: String,
    color: String,
    icon: String,
    fullWidth: Boolean
  },
  computed: {
    colorClass() {
      if (this.color) {
        return `bg-${this.color} hover:bg-${this.color}-dark`
      } else {
        return 'bg-grey hover:bg-grey-dark'
      }
    },
    widthClasses() {
      if (this.fullWidth) {
        return 'w-full justify-center'
      } else {
        return ''
      }
    }
  }
}
</script>
