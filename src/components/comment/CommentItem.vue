<template>
  <article class="flex gap-x-3 py-2 px-5 my-1">
    <figure class="w-14 h-14 overflow-hidden rounded-full">
      <img
        :src="image"
        :alt="comment.author.fullname"
        class="w-full h-full object-cover object-center block"
      />
    </figure>
    <div class="w-[580px]">
      <p class="font-semibold select-none">{{ comment.author.fullname }}</p>
      <p class="text-sm text-gray-800">{{ comment.content }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps(['comment'])

const image = props.comment.author.image ?? 'https://placehold.it/100x100'
</script>
