<template>
  <AppPanel title="Reminders">
    <template slot="addNew">
      <router-link to="/new-reminder" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div>Reminders</div>
  </AppPanel>
</template>

<script>
import AppPanel from '@/components/AppPanel'

export default {
  components: {
    AppPanel
  }
}
</script>
