<template>
  <Panel title="Reminders" height="290px">
    <template slot="addNew">
      <router-link to="/new-reminder" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div
      class="flex items-center justify-center flex-col h-full"
      :class="$store.state.theme.selectedThemeClasses.remindersPanelBg"
    >
      <font-awesome-icon icon="bell" class="text-huge mb-4" />
      <div class="text-xl text-center">You currently have no reminders</div>
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
