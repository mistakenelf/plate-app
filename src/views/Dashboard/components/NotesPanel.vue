<template>
  <Panel title="Notes" height="290px">
    <template slot="addNew">
      <router-link to="/new-note" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div
      class="flex items-center justify-center flex-col h-full rounded"
      :class="$store.state.theme.selectedThemeClasses.notesPanelBg"
    >
      <font-awesome-icon icon="newspaper" class="text-huge mb-4" />
      <div class="text-xl text-center">You currently have no notes created</div>
    </div>
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
