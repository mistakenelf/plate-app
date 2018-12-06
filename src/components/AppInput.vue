<template>
  <div>
    <label class="block text-grey-darker text-sm font-bold mb-2" v-if="label">
      {{ label }}
    </label>
    <input
      :type="type"
      :name="name"
      :id="id"
      v-validate="validations"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight outline-none"
    />
    <span v-if="errors.has(name)">{{ errors.first(name) }}</span>
  </div>
</template>

<script>
export default {
  props: ['label', 'type', 'name', 'id', 'placeholder', 'validations', 'value']
}
</script>
