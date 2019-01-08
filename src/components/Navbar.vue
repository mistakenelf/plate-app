<template>
  <nav
    class="flex items-center flex-row px-4 justify-between p-4"
    :class="$store.state.theme.selectedThemeClasses.navbarBg"
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
      <div class="text-white text-2xl ml-2">{{ $t('brand_text') }}</div>
    </div>
    <div class="flex ml-6 text-2xl">
      <div @click="openModal" class="cursor-pointer">
        <flag v-if="$i18n.locale === 'en'" iso="us" />
        <flag v-if="$i18n.locale === 'fr'" iso="fr" />
      </div>
      <font-awesome-icon
        class="text-white cursor-pointer ml-4"
        @click="openMenu()"
        icon="bars"
      />
    </div>
    <Sidenav :open="menuOpen" v-on:handleClose="handleClose" />
    <CountrySelectModal
      :isOpen="modalOpen"
      v-on:closeModal="closeModal"
      :closeModal="closeModal"
    />
  </nav>
</template>

<script>
import Sidenav from '@/components/Sidenav'
import CountrySelectModal from '@/components/CountrySelectModal'
export default {
  components: {
    Sidenav,
    CountrySelectModal
  },
  data() {
    return {
      menuOpen: false,
      modalOpen: false
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
    openModal() {
      this.modalOpen = true
      document.body.classList.add('no-scroll')
    },
    closeModal() {
      this.modalOpen = false
      document.body.classList.remove('no-scroll')
    },
    goBack() {
      this.$router.back()
    }
  },
  computed: {
    showBack() {
      if (
        this.$route.path === '/' ||
        this.$route.path === `/${this.$i18n.locale}/dashboard`
      ) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
