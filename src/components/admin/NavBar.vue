<template>
  <nav
    class="fixed top-5 left-5 bottom-5 bg-white w-72 p-5 pb-0 z-10 rounded-md overflow-hidden flex flex-col overflow-y-auto shadow-arround-sm"
  >
    <router-link
      to="/admin/dashboard"
      class="block pb-3 pt-2 border-b-[1px] border-solid border-gray-300"
    >
      <figure class="p-3">
        <img src="https://staticg.sportskeeda.com/logo/brand_logos/full-vector.svg" alt="logo" />
      </figure>
    </router-link>
    <div class="flex-1 pt-3 flex flex-col">
      <div class="flex-1 border-b-[1px] border-solid border-gray-300">
        <router-link
          to="/admin/dashboard"
          class="block py-3 px-4 rounded-md transition-all ease-linear duration-200 hover:bg-navActive my-2"
          activeClass="bg-navActive font-medium"
          exactActiveClass="bg-navActive font-medium"
        >
          <span class="text-[rgb(94_114_228)]">
            <font-awesome-icon :icon="['fas', 'tv']" />
          </span>
          <span class="text-444 mx-2">Home</span>
        </router-link>
        <router-link
          to="/admin/users"
          class="block py-3 px-4 rounded-md transition-all ease-linear duration-200 hover:bg-navActive my-2"
          activeClass="bg-navActive font-medium"
          exactActiveClass="bg-navActive font-medium"
        >
          <span class="text-[rgb(251_99_64)]">
            <font-awesome-icon :icon="['fas', 'users']" />
          </span>
          <span class="text-444 mx-2"> Users </span>
        </router-link>
        <router-link
          to="/admin/posts"
          class="block py-3 px-4 rounded-md transition-all ease-linear duration-200 hover:bg-navActive my-2"
          activeClass="bg-navActive font-medium"
          exactActiveClass="bg-navActive font-medium"
        >
          <span class="text-[rgb(45_206_137)]">
            <font-awesome-icon :icon="['fas', 'newspaper']" />
          </span>
          <span class="mx-2 text-444"> posts </span>
        </router-link>
      </div>
      <router-link
        to="/"
        class="block py-3 px-4 rounded-md transition-all ease-linear duration-200 hover:bg-navActive my-2"
      >
        <span class="text-baseColor">
          <font-awesome-icon :icon="['fas', 'house-user']" />
        </span>
        <span class="text-sm mx-2">Back to website</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup></script>
