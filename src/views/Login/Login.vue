<template>
  <div
    class="h-full flex items-center flex-col justify-center bg-blue-darker p-4"
  >
    <form
      @submit.prevent="handleSubmit"
      class="bg-grey-light shadow-md px-8 pt-6 pb-8 mb-4 w-full sm:w-full md:w-1/2 lg:w-1/3 rounded"
    >
      <div class="flex justify-between items-center flex-row w-full mb-4">
        <div class="text-2xl">Login</div>
        <div class="text-2xl">🍛</div>
      </div>
      <div class="mb-4">
        <TextField
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
        <TextField
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
      <button
        class="bg-teal-dark border-b-4 border-teal-darker rounded w-full hover:bg-teal-dark text-white font-bold py-2 px-4 focus:outline-none hover:bg-teal mb-4"
        type="submit"
      >
        Login
      </button>
      <router-link to="/register">Dont have an account?</router-link>
    </form>
  </div>
</template>

<script>
import BasicLayout from '@/components/BasicLayout'
import TextField from '@/components/TextField'

export default {
  components: {
    TextField
  },
  data: () => ({
    email: '',
    password: ''
  }),
  created() {
    this.$emit('update:layout', BasicLayout)
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }

        const payload = {
          email: this.email,
          password: this.password
        }

        await this.$store.dispatch('auth/login', payload)
        this.$router.push('/dashboard')
      })
    }
  }
}
</script>
