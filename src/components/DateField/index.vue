<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      v-if="label"
    >
      {{ label }}
    </label>
    <input
      type="date"
      :name="name"
      :id="id"
      :autofocus="autofocus"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      class="appearance-none block text-sm w-full bg-white text-grey-darker border-2 py-3 px-4 leading-tight focus:outline-none rounded"
      :class="{
        'border-2 border-red-light': hasErrors,
        'text-xl md:text-2xl h-12 rounded-none border-none': isLarge
      }"
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
    name: String,
    autofocus: Boolean,
    id: String,
    isLarge: Boolean,
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
