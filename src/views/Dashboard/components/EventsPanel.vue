<template>
  <app-panel title="Events" class="w-full">
    <template slot="extra">
      <router-link class="text-white" :to="`/new-todo-list`"
        ><font-awesome-icon
          class="text-2xl cursor-pointer text-darker"
          icon="plus"
      /></router-link>
    </template>
    <div>Your currently have no events</div>
  </app-panel>
</template>

<script>
import AppPanel from '@/components/AppPanel'
export default {
  components: {
    'app-panel': AppPanel
  }
}
</script>
