<template>
  <div class="w-full">
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
      :autofocus="autofocus"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="appearance-none block text-md w-full text-grey-darker border-2 py-3 px-4 leading-tight focus:outline-none rounded"
      :class="{
        'bg-white': !disabled,
        'bg-grey-lighter': disabled,
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
    type: String,
    name: String,
    autofocus: Boolean,
    id: String,
    isLarge: Boolean,
    placeholder: String,
    hasErrors: Boolean,
    errorMessage: String,
    readonly: Boolean,
    disabled: Boolean,
    value: String
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
