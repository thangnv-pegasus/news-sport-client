import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  let auth = ref({
    token: '',
    user: {}
  })

  const active = async () => {
    const token = localStorage.getItem('token')

    if (token) {
      const response = await axios(`${import.meta.env.VITE_BASE_URL_API}/user`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      const { data } = await response
      // console.log(data.user)
      auth.value.token = token
      auth.value.user = data.user
    }
  }

  const logout = watch(auth, () => {
    auth.value = {}
  })

  return { auth, active, logout }
})
