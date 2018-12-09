<template>
  <form class="p-2">
    <div class="flex flex-row justify-between flex-wrap">
      <div class="w-full sm:w-full md:w-1/2 p-2">
        <AppInput
          type="text"
          name="title"
          placeholder="Title"
          label="Title"
          v-model="title"
          v-validate="'required'"
          :hasErrors="errors.has('title')"
          :errorMessage="errors.first('title')"
        />
      </div>
      <div class="sm:w-full md:w-1/2 p-2">
        <AppInput
          type="text"
          name="description"
          placeholder="Description"
          label="Description"
          v-model="description"
          v-validate="'required'"
          :hasErrors="errors.has('description')"
          :errorMessage="errors.first('description')"
        />
      </div>
    </div>
  </form>
</template>

<script>
import AppCoreLayout from '@/components/AppCoreLayout'
import AppInput from '@/components/AppInput'
export default {
  components: {
    AppInput
  },
  data: () => ({
    title: '',
    description: ''
  }),
  created() {
    this.$emit('update:layout', AppCoreLayout)
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }

        const payload = {
          title: this.title,
          description: this.description
        }

        console.log(payload)
      })
    }
  }
}
</script>
