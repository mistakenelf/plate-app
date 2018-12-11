<template>
  <nav
    class="bg-blue-darker flex items-start flex-row px-4 justify-between p-4"
  >
    <div
      @click="handleClose()"
      :class="menuOpen ? 'block' : 'hidden'"
      class="overlay"
    ></div>
    <div class="text-white text-2xl">Plate</div>
    <ul class="flex list-reset ml-6 text-2xl">
      <font-awesome-icon
        class="text-white cursor-pointer"
        @click="openMenu()"
        icon="bars"
      />
    </ul>
    <AppMainMenu :open="menuOpen" :handleClose="handleClose" />
  </nav>
</template>

<script>
import AppMainMenu from './AppMainMenu'
export default {
  components: {
    AppMainMenu
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    openMenu() {
      this.menuOpen = true
    },
    handleClose() {
      this.menuOpen = false
    }
  }
}
</script>

<style>
.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
}
</style>
