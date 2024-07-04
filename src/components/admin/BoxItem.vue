<template>
  <div class="p-5 bg-white rounded-md overflow-hidden flex">
    <div class="flex-1">
      <slot name="title"></slot>
      <slot name="count"></slot>
      <slot name="noti" class="mt-4"></slot>
    </div>
    <slot name="icon"></slot>
  </div>
</template>

<script setup></script>
