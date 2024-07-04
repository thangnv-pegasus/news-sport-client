<template>
  <footer class="flex items-center justify-between pt-5 text-sm text-444">
    <div>
      © 2024, distributed by <b>Themewagon</b>, made with
      <font-awesome-icon :icon="['fas', 'heart']" />
      by <b>Creative Tim</b> for a better web.
    </div>
    <div class="flex items-center gap-x-5">
      <router-link
        to="#"
        class="block px-2 py-1 transition-all ease-linear hover:text-baseColor font-medium"
      >
        Creative Tim
      </router-link>
      <router-link
        to="#"
        class="block px-2 py-1 transition-all ease-linear hover:text-baseColor font-medium"
      >
        About Us
      </router-link>
      <router-link
        to="#"
        class="block px-2 py-1 transition-all ease-linear hover:text-baseColor font-medium"
      >
        Blog
      </router-link>
      <router-link
        to="#"
        class="block px-2 py-1 transition-all ease-linear hover:text-baseColor font-medium"
      >
        License
      </router-link>
    </div>
  </footer>
</template>

<script setup></script>
