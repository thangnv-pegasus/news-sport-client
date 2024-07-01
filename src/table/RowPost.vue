<template>
  <article class="flex border-b-[1px] border-solid border-gray-300 py-5 gap-x-5">
    <p class="px-4">{{ index }}</p>
    <p class="flex-1 line-clamp-1">{{ post.title ?? 'post title' }}</p>
    <p class="mx-2 text-sm">{{ moment(post.created_at).format('DD/MM/yyyy') ?? '02/02/2024' }}</p>
    <div class="flex items-center gap-x-3">
      <router-link
        :to="'/detail-post/' + post.id + '?type=preview'"
        class="block px-2 relative group text-green-700"
      >
        <font-awesome-icon :icon="['far', 'eye']" />
        <p
          class="absolute top-full opacity-0 left-1/2 -translate-y-full -translate-x-1/2 bg-green-600 text-white text-xs py-1 px-3 rounded-full after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-green-600 transition-all ease-linear duration-200 group-hover:-top-1 group-hover:opacity-100"
        >
          preview
        </p>
      </router-link>
      <router-link :to="'/edit-post/' + post.id" class="block px-2 relative group text-yellow-600">
        <font-awesome-icon :icon="['far', 'pen-to-square']" />
        <p
          class="absolute top-full opacity-0 left-1/2 -translate-y-full -translate-x-1/2 bg-yellow-600 text-white text-xs py-1 px-3 rounded-full after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-yellow-600 transition-all ease-linear duration-200 group-hover:-top-1 group-hover:opacity-100"
        >
          Edit
        </p>
      </router-link>
      <button type="button" class="block px-2 relative group text-baseColor" @click="handleDelete2">
        <font-awesome-icon :icon="['far', 'trash-can']" />
        <p
          class="absolute top-full opacity-0 left-1/2 -translate-y-full -translate-x-1/2 bg-baseColor text-white text-xs py-1 px-3 rounded-full after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-solid after:border-transparent after:border-t-baseColor transition-all ease-linear duration-200 group-hover:-top-1 group-hover:opacity-100"
        >
          Delete
        </p>
      </button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps(['post', 'index', 'posts', 'handleDelete'])
import moment from 'moment'

const handleDelete2 = async () => {
  const result = window.confirm('Are you sure want to delete this post?')
  if (result === true) {
    await props.handleDelete(props.post.id)
  }
}
</script>
