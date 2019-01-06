<template>
  <button
        type="submit"
        class="bg-teal-dark shadow-lg h-16 w-16 text-white p-4 hover:bg-teal focus:outline-none rounded-full font-bold"
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

