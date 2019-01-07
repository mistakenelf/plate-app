<template>
  <button
    type="submit"
    class="bg-teal-dark text-white py-3 px-2 w-16 hover:bg-teal focus:outline-none font-bold"
  >
    <font-awesome-icon
      class="text-2xl"
      :icon="!loading ? 'save' : 'spinner'"
      :spin="loading"
    />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean
  }
}
</script>
