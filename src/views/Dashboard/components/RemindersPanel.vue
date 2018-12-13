<template>
  <Panel title="Reminders" height="385px">
    <template slot="addNew">
      <router-link to="/new-reminder" class="text-white">
        <font-awesome-icon icon="plus" />
      </router-link>
    </template>
    <div>Reminders</div>
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
