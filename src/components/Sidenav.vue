<template>
  <transition name="slide">
    <div
      v-if="open"
      class="fixed h-full pin-r pin-t z-10 w-24 p-2 bg-grey-lighter"
    >
      <div
        class="flex flex-col justify-center items-center mb-4 cursor-pointer"
      >
        <font-awesome-icon class="text-4xl mb-2" icon="user-circle" />
        <div>Profile</div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-4 cursor-pointer"
      >
        <font-awesome-icon class="text-4xl mb-2" icon="cogs" />
        <div>Settings</div>
      </div>
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
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>
