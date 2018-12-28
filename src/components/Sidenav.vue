<template>
  <transition name="slide">
    <div
      v-if="open"
      class="fixed h-full pin-r pin-t z-10 w-24 p-2 bg-grey-lighter"
    >
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon
          class="text-3xl mb-2 text-grey-darkest"
          icon="user-circle"
        />
        <div>{{ $store.state.auth.user.firstName }}</div>
      </div>
      <div
        @click="goToRoute('todo-lists')"
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon class="text-3xl mb-2" icon="clipboard-list" />
        <div>Todo Lists</div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon class="text-3xl mb-2" icon="bell" />
        <div>Reminders</div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon class="text-3xl mb-2" icon="newspaper" />
        <div>Notes</div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
      >
        <font-awesome-icon class="text-3xl mb-2" icon="calendar-check" />
        <div>Reminders</div>
      </div>
      <div
        class="flex flex-col justify-center items-center mb-6 cursor-pointer"
        @click="logout()"
      >
        <font-awesome-icon class="text-3xl mb-2" icon="sign-out-alt" />
        <div>Logout</div>
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
