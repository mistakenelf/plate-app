<template>
  <div>
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      v-if="label"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      class="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
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
