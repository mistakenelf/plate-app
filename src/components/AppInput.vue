<template>
  <div>
    <label class="block text-grey-darker text-sm font-bold mb-2" v-if="label">{{
      label
    }}</label>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight outline-none"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    name: String,
    id: String,
    placeholder: String
  }
}
</script>
