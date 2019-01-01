<template>
  <nav
    class="bg-blue-darker flex items-center flex-row px-4 justify-between p-4"
  >
    <div
      @click="handleClose()"
      :class="menuOpen ? 'block' : 'hidden'"
      class="fixed w-full h-full opacity-75 cursor-pointer pin bg-grey-darkest z-10"
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
    <Sidenav :open="menuOpen" v-on:handleClose="handleClose" />
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
