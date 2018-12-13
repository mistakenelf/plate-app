<template>
  <Panel title="Events" height="385px">
    <template slot="addNew">
      <router-link to="/new-event" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div>Events</div>
  </Panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  }
}
</script>
