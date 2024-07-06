<template>
  <article
    class="flex items-center px-5 py-3 text-sm font-semibold text-444 border-b-[1px] border-solid border-gray-300"
    v-if="option === 'title'"
  >
    <h3 class="w-480px">Post</h3>
    <h3 class="flex-1">Author</h3>
    <h3 class="flex-1">Status</h3>
    <h3 class="flex-1">Employed</h3>
    <h3 class="flex-1">Action</h3>
  </article>
  <article
    class="flex items-center px-5 py-3 text-sm text-444 border-b-[1px] border-solid border-gray-300 select-none"
    v-if="option === 'data'"
  >
    <h3 class="w-480px flex items-center gap-x-3 pr-5">
      <figure class="w-40 h-24 overflow-hidden rounded-md">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-full object-cover object-center block"
          @error="handleErrorImage"
        />
      </figure>
      <router-link
        :to="'/detail-post/' + post.id"
        class="block flex-1 line-clamp-3 hover:text-blue-600 font-normal"
      >
        {{ post.title }}
      </router-link>
    </h3>
    <h3 class="flex-1 font-semibold">
      {{ post.author.fullname }}
    </h3>
    <h3 :class="'flex-1 font-medium ' + binddingStatusText(post.status)">
      {{ post.status }}
    </h3>
    <h3 class="flex-1">{{ getTime() }}</h3>
    <h3 class="flex-1 flex items-center gap-x-8 flex-wrap text-base">
      <router-link
        :to="'/detail-post/' + post.id + '?type=preview'"
        class="block text-green-600 relative group z-[2]"
      >
        <font-awesome-icon :icon="['far', 'eye']" />
        <p
          class="absolute group-hover:bottom-[calc(100%+2px)] group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all ease-linear duration-300 bottom-0 opacity-0 bg-green-700 text-xs py-1 px-2 text-white left-1/2 -translate-x-1/2 rounded-md after:content-[''] after:absolute after:border-4 after:border-solid after:border-transparent after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-green-700 after:z-[1]"
        >
          Preview
        </p>
      </router-link>
      <router-link class="block text-yellow-600 relative group z-[2]">
        <font-awesome-icon :icon="['far', 'pen-to-square']" />
        <p
          class="absolute group-hover:bottom-[calc(100%+2px)] group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all ease-linear duration-300 bottom-0 opacity-0 bg-yellow-600 text-xs py-1 px-2 text-white left-1/2 -translate-x-1/2 rounded-md after:content-[''] after:absolute after:border-4 after:border-solid after:border-transparent after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-yellow-600 after:z-[1]"
        >
          Edit
        </p>
      </router-link>
      <button type="button" class="text-baseColor relative group">
        <font-awesome-icon :icon="['far', 'trash-can']" />
        <p
          class="absolute group-hover:bottom-[calc(100%+2px)] group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all ease-linear duration-300 bottom-0 opacity-0 bg-baseColor text-xs py-1 px-2 text-white left-1/2 -translate-x-1/2 rounded-md after:content-[''] after:absolute after:border-4 after:border-solid after:border-transparent after:top-full after:left-1/2 after:-translate-x-1/2 after:border-t-baseColor after:z-[1]"
        >
          Edit
        </p>
      </button>
      <div class="flex items-center text-sm py-1 gap-x-5 my-1">
        <button
          :class="
            'border-2 border-solid border-baseColor text-baseColor px-3 font-medium rounded-md hover:bg-baseColor hover:text-white transition-all ease-linear duration-150 py-1 ' +
            binddingStatusBtn('reject')
          "
        >
          Reject
        </button>
        <button
          :class="
            'border-2 border-solid border-green-600 text-green-600 px-3 font-medium rounded-md hover:bg-green-600 hover:text-white transition-all ease-linear duration-150 py-1 ' +
            binddingStatusBtn('accept')
          "
        >
          Active
        </button>
      </div>
    </h3>
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
  post: {
    type: Object
  }
})

const handleErrorImage = (e) => {
  e.target.value = import.meta.env.VITE_BASE_URL_BE + props.post.image
}

const getTime = () => {
  return moment(props.post.created_at).format('DD/MM/yyyy')
}

const binddingStatusText = (status) => {
  if (status === 'accept') {
    return 'text-green-600'
  } else if (status === 'reject') {
    return 'text-red-600'
  } else {
    return 'text-yellow-600'
  }
}

const binddingStatusBtn = (status) => {
  if (status === 'accept') {
    if (status === props.post.status) {
      return 'bg-green-600 text-white'
    }
    return 'bg-white text-green-600'
  } else if (status === 'reject') {
    if (status === props.post.status) {
      return 'bg-baseColor text-white'
    }
    return 'bg-white text-baseColor'
  }
}
</script>
