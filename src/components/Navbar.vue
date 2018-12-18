<template>
  <nav
    class="bg-blue-darker flex items-center flex-row px-4 justify-between p-4"
  >
    <div
      @click="handleClose()"
      :class="menuOpen ? 'block' : 'hidden'"
      class="overlay"
    ></div>
    <div class="flex flex-row items-center">
      <font-awesome-icon
        @click="goBack()"
        v-if="showBack"
        class="text-white text-2xl w-4 cursor-pointer"
        icon="arrow-left"
      />
      <div v-else class="text-2xl">🍛</div>
      <div class="text-white text-2xl ml-2">Plate</div>
    </div>
    <ul class="flex list-reset ml-6 text-2xl">
      <font-awesome-icon
        class="text-white cursor-pointer ml-4"
        @click="openMenu()"
        icon="bars"
      />
    </ul>
    <Sidenav :open="menuOpen" :handleClose="handleClose" />
  </nav>
</template>

<script>
import Sidenav from './Sidenav'
export default {
  components: {
    Sidenav
  },
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    openMenu() {
      this.menuOpen = true
      document.body.classList.add('no-scroll')
    },
    handleClose() {
      this.menuOpen = false
      document.body.classList.remove('no-scroll')
    },
    goBack() {
      this.$router.back()
    }
  },
  computed: {
    showBack() {
      if (this.$route.path === '/' || this.$route.path === '/dashboard') {
        return false
      } else {
        return true
      }
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
