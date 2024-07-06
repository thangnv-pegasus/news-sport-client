<template>
  <article
    class="flex items-center px-5 py-3 text-sm font-semibold text-444 border-b-[1px] border-solid border-gray-300"
    v-if="option === 'title'"
  >
    <p class="w-480px">Author</p>
    <p class="flex-1">Function</p>
    <p class="flex-1">Status</p>
    <p class="flex-1">Employed</p>
    <p class="flex-1">Action</p>
  </article>
  <article
    class="flex items-center px-5 py-3 text-sm font-semibold text-444 border-b-[1px] border-solid border-gray-300"
    v-if="option === 'data'"
  >
    <div class="w-480px flex items-center">
      <figure class="w-9 h-9 overflow-hidden rounded-md">
        <img
          :src="user.avatar"
          :alt="user.fullname"
          class="w-full h-full object-cover objec-tcenter block"
          @error="handleErrorImage"
        />
      </figure>
      <div class="px-2">
        <h3 class="text-base leading-4">{{ user.fullname }}</h3>
        <p class="font-normal text-sm">{{ user.email }}</p>
      </div>
    </div>
    <p class="flex-1">
      {{ user.role }}
    </p>
    <p class="flex-1">{{ user.status }}</p>
    <p class="flex-1">{{ getTime() }}</p>
    <div class="flex-1 gap-x-5 flex items-center text-base">
      <button type="button" class="text-yellow-600">
        <font-awesome-icon :icon="['far', 'pen-to-square']" />
      </button>
      <button type="button" class="text-baseColor">
        <font-awesome-icon :icon="['far', 'trash-can']" />
      </button>
    </div>
  </article>
</template>

<script setup>
import moment from 'moment'

const props = defineProps({
  option: {
    type: String,
    validator: (value) => {
      return ['title', 'data'].includes(value)
    },
    default: 'data'
  },
  user: {
    type: Object
  }
})
const getTime = () => {
  return moment(props.user.created_at).format('DD/MM/YYYY')
}

const handleErrorImage = (e) => {
  e.target.src = import.meta.env.VITE_BASE_URL_BE + props.user.avatar
}
</script>
