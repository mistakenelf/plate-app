<template>
  <Modal :isOpen="isOpen" v-on:closeModal="closeModal">
    <div class="text-2xl mb-4">Select Country</div>
    <div class="flex flex-wrap">
      <div @click="setLocale('en')">
        <flag class="text-4xl m-2 cursor-pointer" iso="us" />
      </div>
      <div @click="setLocale('fr')">
        <flag class="text-4xl m-2 cursor-pointer" iso="fr" />
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  components: {
    Modal
  },
  props: {
    isOpen: Boolean,
    closeModal: Function
  },
  methods: {
    async setLocale(locale) {
      await this.$store.dispatch('translation/setLocale', { locale })
      this.$emit('closeModal')
    }
  }
}
</script>
