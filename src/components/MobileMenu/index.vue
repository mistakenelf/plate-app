<template>
  <transition name="slide">
    <div
      v-if="open"
      class="flex flex-col justify-between fixed h-full pin-r pin-t z-10 w-24 p-2"
      :class="$store.state.theme.selectedThemeClasses.sideNavBg"
    >
      <div class="flex flex-col">
        <div
          class="flex flex-col justify-center items-center mb-6 cursor-pointer"
        >
          <font-awesome-icon
            class="text-3xl mb-2 text-grey-darkest"
            :class="$store.state.theme.selectedThemeClasses.textColor"
            icon="user-circle"
          />
          <div :class="$store.state.theme.selectedThemeClasses.textColor">
            {{ $store.state.auth.user.firstName }}
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center mb-6 cursor-pointer"
          @click="goToRoute('tasks')"
        >
          <font-awesome-icon
            class="text-3xl mb-2 text-grey-darkest"
            :class="$store.state.theme.selectedThemeClasses.textColor"
            icon="tasks"
          />
          <div :class="$store.state.theme.selectedThemeClasses.textColor">
            Tasks
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center mb-6 cursor-pointer"
          @click="logout()"
        >
          <font-awesome-icon
            class="text-3xl mb-2"
            icon="sign-out-alt"
            :class="$store.state.theme.selectedThemeClasses.textColor"
          />
          <div :class="$store.state.theme.selectedThemeClasses.textColor">
            Logout
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <font-awesome-icon
          class="text-lg mr-2"
          icon="moon"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        />
        <ToggleSwitch
          :label="$store.state.theme.selectedThemeName"
          :handleToggle="toggleTheme"
          :isChecked="$store.state.theme.selectedThemeName === 'dark'"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import ToggleSwitch from '@/components/ToggleSwitch'

export default {
  components: {
    ToggleSwitch
  },
  props: {
    open: Boolean
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      document.body.classList.remove('no-scroll')
      this.$router.push(`/${this.$i18n.locale}`)
    },
    goToRoute(route) {
      this.$emit('handleClose')
      this.$router.push({ name: route })
    },
    toggleTheme() {
      const { selectedThemeName } = this.$store.state.theme

      if (selectedThemeName === 'light') {
        this.$store.dispatch('theme/toggleTheme', {
          selectedThemeName: 'dark'
        })
      } else {
        this.$store.dispatch('theme/toggleTheme', {
          selectedThemeName: 'light'
        })
      }
    }
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
