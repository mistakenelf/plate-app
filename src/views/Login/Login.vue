<template>
  <div class="h-full flex items-center justify-center bg-blue-darker p-4">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-full md:w-1/2 lg:w-1/3"
    >
      <div class="mb-4">
        <AppInput
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          v-model="email"
          v-validate="'required|email'"
          :hasErrors="errors.has('email')"
          :errorMessage="errors.first('email')"
        />
      </div>
      <div class="mb-6">
        <AppInput
          type="password"
          name="password"
          placeholder="******************"
          label="Password"
          v-model="password"
          v-validate="'required'"
          :hasErrors="errors.has('password')"
          :errorMessage="errors.first('password')"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-teal w-full hover:bg-teal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AppBasicLayout from '@/components/AppBasicLayout'
import AppInput from '@/components/AppInput'

export default {
  components: {
    AppInput
  },
  data: () => ({
    email: '',
    password: ''
  }),
  created() {
    this.$emit('update:layout', AppBasicLayout)
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }

        const payload = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('login', payload)
        this.$router.push('/dashboard')
      })
    }
  }
}
</script>
