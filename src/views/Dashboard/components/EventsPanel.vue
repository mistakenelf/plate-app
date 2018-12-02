<template>
  <AppPanel title="Events">
    <template slot="addNew">
      <router-link to="/new-event" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div>Events</div>
  </AppPanel>
</template>

<script>
import AppPanel from '@/components/AppPanel'

export default {
  name: 'EventsPanel',
  components: {
    AppPanel
  }
}
</script>
