<template>
  <div>
    <label class="block text-grey-darker text-sm font-bold mb-2" v-if="label">
      {{ label }}
    </label>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      class="shadow appearance-none border-2 rounded w-full py-2 px-3 text-grey-darker leading-tight outline-none"
      :class="hasErrors ? 'border-2 border-red-light' : ''"
    />
    <span class="text-sm text-red-light" v-if="errorMessage">{{
      errorMessage
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    name: String,
    id: String,
    placeholder: String,
    hasErrors: Boolean,
    errorMessage: String
  },
  $_veeValidate: {
    value() {
      return this.$el.value
    },
    name() {
      return this.name
    }
  }
}
</script>
