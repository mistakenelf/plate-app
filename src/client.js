import * as sapper from '../__sapper__/client.js'
import 'tailwindcss/dist/tailwind.min.css'
import { Store } from 'svelte/store.js'

async function post(endpoint, data) {
  const r = await fetch(endpoint, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return r.json()
}

class PlateStore extends Store {
  async login(credentials) {
    const response = await post(`auth/login`, credentials)
    if (response.user) {
      this.set({ user: response.user })
    }

    return response
  }

  async logout() {
    const response = await post(`auth/logout`)
    this.set({ user: null })
    return response
  }

  async register(user) {
    const response = await post(`auth/register`, user)
    if (response.user) this.set({ user: response.user })
    return response
  }

  async save(user) {
    const response = await post(`auth/save`, user)
    if (response.user) this.set({ user: response.user })
    return response
  }
}

sapper.start({
  target: document.querySelector('#sapper'),
  store: data => {
    return new PlateStore(data)
  }
})
