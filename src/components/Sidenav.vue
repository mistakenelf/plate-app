<template>
  <transition name="slide">
    <div
      v-if="open"
      class="fixed h-full pin-r pin-t z-10 w-24 p-2"
      :class="$store.state.theme.selectedThemeClasses.sideNavBg"
    >
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
        @click="goToRoute('/todo-lists')"
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon
          class="text-3xl mb-2"
          icon="clipboard-list"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        />
        <div :class="$store.state.theme.selectedThemeClasses.textColor">
          Todo Lists
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon
          class="text-3xl mb-2"
          icon="bell"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        />
        <div :class="$store.state.theme.selectedThemeClasses.textColor">
          Reminders
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon
          class="text-3xl mb-2"
          icon="newspaper"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        />
        <div :class="$store.state.theme.selectedThemeClasses.textColor">
          Notes
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon
          class="text-3xl mb-2"
          icon="calendar-check"
          :class="$store.state.theme.selectedThemeClasses.textColor"
        />
        <div :class="$store.state.theme.selectedThemeClasses.textColor">
          Reminders
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
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
        @click="toggleTheme()"
      >
        <div>{{ $store.state.theme.selectedThemeName }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: Boolean
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    },
    goToRoute(route) {
      this.$emit('handleClose')
      this.$router.push(route)
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
