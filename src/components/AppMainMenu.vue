<template>
  <transition name="slide">
    <div
      v-if="open"
      class="bg-white fixed pin-t pin-r shadow w-64 h-64 z-10 rounded-bl-full"
    >
      Menu Content Here
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: Boolean,
    handleClose: Function
  }
}
</script>

<style>
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, -100px);
}
.slide-leave-to {
  transform: translate(100%, -100%);
}
</style>
