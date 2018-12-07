<template>
  <AppPanel title="Notes">
    <template slot="addNew">
      <router-link to="/new-note" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div>Notes</div>
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
