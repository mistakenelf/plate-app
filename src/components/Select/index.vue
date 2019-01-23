<template>
  <div class="w-full">
    <label
      class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
      v-if="label"
    >
      {{ label }}
    </label>
    <div class="relative">
      <select
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
        class="appearance-none block text-md w-full bg-white text-grey-darker border-2 py-3 px-4 leading-tight focus:outline-none rounded"
        :class="{
          'border-2 border-red-light': hasErrors,
          'text-xl md:text-2xl h-12 rounded-none border-none': isLarge
        }"
      >
        <option
          v-for="(option, name) in options"
          :key="option"
          :value="option"
          >{{ name }}</option
        >
      </select>
      <div
        class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          ></path>
        </svg>
      </div>
    </div>
    <span class="text-sm text-red-light" v-if="errorMessage">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    id: String,
    options: Object,
    isLarge: Boolean,
    placeholder: String,
    hasErrors: Boolean,
    errorMessage: String,
    value: String
  },
  $_veeValidate: {
    value() {
      return this.$el.value
    },
    name() {
      return this.name
    }
  },
  data() {
    return {
      selectedOption: null
    }
  },
  created() {
    this.selectedOption = this.value
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue
    }
  }
}
</script>
