<template>
  <category-title :title="props.category.name"></category-title>
  <div class="grid grid-cols-2_1 gap-x-10 mt-5 mb-10">
    <div class="p-5 border-[1px] border-solid border-gray-300 rounded-md">
      <router-link
        :to="'category/' + props.category.id"
        class="block w-full h-48 overflow-hidden rounded-md"
      >
        <img :src="banner" alt="banner" class="w-full h-full object-cover object-center block" />
      </router-link>
      <div v-if="props.category.posts.length > 0" class="grid grid-cols-2 gap-6 pt-5">
        <post-item
          v-for="(post, index) in props.category.posts"
          :key="index"
          :post="post"
        ></post-item>
      </div>
    </div>
    <category-nav :id="props.category.id"></category-nav>
  </div>
</template>

<script setup>
import CategoryTitle from './CategoryTitle.vue'
import CategoryNav from './CategoryNav.vue'
import PostItem from './product/PostItem.vue'
const props = defineProps(['category'])
let banner = 'https://placehold.it/500x200'
if (props.category.posts.length > 0) {
  banner = props.category.posts[0].image
}
</script>
