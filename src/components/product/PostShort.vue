<template>
  <article class="flex items-center gap-x-5 py-2 my-2 border-b-[1px] border-solid border-gray-200">
    <h2 class="select-none text-2xl text-baseColor">
      {{ props.index }}
    </h2>
    <router-link
      :to="'/detail-post/' + props.post.id"
      class="text-sm text-444 line-clamp-2 transition-all ease-linear hover:text-blue-700"
      >{{ props.post.title }}</router-link
    >
  </article>
</template>

<script setup>
const props = defineProps(['post', 'index'])
</script>
