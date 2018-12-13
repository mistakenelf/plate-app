<template>
  <Panel title="Notes" height="385px">
    <template slot="addNew">
      <router-link to="/new-note" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div>Notes</div>
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
