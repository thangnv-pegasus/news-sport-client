import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const useToastStore = defineStore('toast', () => {
  const show = ref(false)

  const active = (status = 'success', message, duration = 3000) => {
    toast(message, {
      theme: 'auto',
      type: status,
      pauseOnHover: false,
      dangerouslyHTMLString: true,
      autoClose: duration,
      pauseOnFocusLoss: false
    })
  }

  return { show, active }
})

export default useToastStore
