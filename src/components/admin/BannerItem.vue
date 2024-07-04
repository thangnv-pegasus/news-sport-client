<template>
  <article :class="'w-full h-full bg-cover bg-center rounded-md ' + backgroundUrl">
    <div class="p-10 flex justify-end flex-col text-white h-full">
      <button
        type="button"
        class="bg-white text-444 w-8 h-8 flex items-center justify-center rounded-md text-sm my-3"
      >
        <slot name="icon"><font-awesome-icon :icon="['fas', 'trophy']" /></slot>
      </button>
      <h2 class="text-xl font-semibold opacity-90 select-none">
        <slot name="title">Share with us your design tips!</slot>
      </h2>
      <p class="text-sm mt-1 select-none">
        <slot name="sub-title">
          Don't be afraid to be wrong because you can't learn anything from a compliment.
        </slot>
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps(['backgroundUrl'])
</script>
