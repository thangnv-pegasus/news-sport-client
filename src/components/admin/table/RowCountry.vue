<template>
  <article class="flex items-center py-4 border-b-[1px] border-solid border-gray-300">
    <figure class="w-10 h-6 mx-5">
      <slot name="ensign">
        <img
          src="https://png.pngtree.com/png-clipart/20220831/ourmid/pngtree-united-states-flag-png-image_6131323.png"
          alt="ensign"
          class="w-full h-full object-cover object-center block"
        />
      </slot>
    </figure>
    <div class="flex-1 text-left">
      <p class="text-xs font-medium text-444">Country:</p>
      <p class="font-medium text-sm text-black"><slot name="country-name">United State</slot></p>
    </div>
    <div class="flex-1 text-left">
      <p class="text-xs font-medium text-444">Sales:</p>
      <p class="font-medium text-sm text-black"><slot name="sales">2500</slot></p>
    </div>
    <div class="flex-1 text-left">
      <p class="text-xs font-medium text-444">Value:</p>
      <p class="font-medium text-sm text-black"><slot name="value">$230.900</slot></p>
    </div>
    <div class="w-28 text-left">
      <p class="text-xs font-medium text-444">Bounce:</p>
      <p class="font-medium text-sm text-black"><slot name="bounce">29.9%</slot></p>
    </div>
  </article>
</template>

<script setup></script>
