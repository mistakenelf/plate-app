<template>
  <nav
    class="bg-blue-darker flex items-center flex-row px-4 justify-between h-16"
  >
    <div class="text-white text-2xl">Plate</div>
    <ul class="flex list-reset ml-6 text-white text-2xl">
      <router-link tag="li" to="/dashboard" class="pr-8 cursor-pointer">
        <font-awesome-icon icon="tachometer-alt" />
      </router-link>
      <router-link tag="li" to="/todos-listing" class="pr-8 cursor-pointer">
        <font-awesome-icon icon="list" />
      </router-link>
      <router-link tag="li" to="/reminders-listing" class="pr-8 cursor-pointer">
        <font-awesome-icon icon="calendar" />
      </router-link>
      <router-link tag="li" to="/notes-listing" class="pr-8 cursor-pointer">
        <font-awesome-icon icon="sticky-note" />
      </router-link>
      <router-link tag="li" to="/events-listing" class="cursor-pointer">
        <font-awesome-icon icon="clipboard" />
      </router-link>
    </ul>
  </nav>
</template>
