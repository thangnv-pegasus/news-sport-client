<template>
  <article class="flex items-center gap-x-3 px-5 py-3 my-2">
    <div
      class="w-8 h-8 bg-gray-900 text-white rounded-lg overflow-hidden flex items-center justify-center text-xs"
    >
      <font-awesome-icon :icon="['fas', 'layer-group']" />
    </div>
    <div class="flex-1 text-sm text-444 select-none">
      <p class="font-bold">{{ category.name }}</p>
      <p class="mt-1 flex items-center">
        <b class="mx-1">{{ category.postActive }}</b> posts active,
        <b class="mx-1"> {{ category.postsAll }} </b> posts
      </p>
    </div>
    <div class="flex items-center gap-x-5">
      <button type="button" class="text-yellow-600">
        <font-awesome-icon :icon="['far', 'pen-to-square']" />
      </button>
      <button type="button" class="text-red-600">
        <font-awesome-icon :icon="['far', 'trash-can']" />
      </button>
    </div>
  </article>
</template>

<script setup>
defineProps(['category'])
</script>
