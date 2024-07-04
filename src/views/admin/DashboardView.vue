<template>
  <main>
    <div class="grid grid-cols-4 gap-x-8 pt-10">
      <box-item>
        <template #title>
          <h2 class="uppercase text-gray-600 font-semibold">Today's money</h2>
        </template>
        <template #count>
          <p class="text-xl font-bold text-gray-800">$53.000</p>
        </template>
        <template #noti>
          <div class="flex items-center mt-2">
            <span class="text-green-600 font-medium">+55% </span>
            <span class="mx-1">since yesterday</span>
          </div>
        </template>
        <template #icon>
          <div
            class="h-10 w-10 bg-boxBlue flex items-center justify-center text-white rounded-full mt-2"
          >
            <font-awesome-icon :icon="['fas', 'coins']" />
          </div>
        </template>
      </box-item>
      <box-item>
        <template #title>
          <h2 class="uppercase text-gray-600 font-semibold">Today's users</h2>
        </template>
        <template #count>
          <p class="text-xl font-bold text-gray-800">2.300</p>
        </template>
        <template #noti>
          <div class="flex items-center mt-2">
            <span class="text-green-600 font-medium">+3% </span>
            <span class="mx-1">since lastweek</span>
          </div>
        </template>
        <template #icon>
          <div
            class="h-10 w-10 bg-boxRed flex items-center justify-center text-white rounded-full mt-2"
          >
            <font-awesome-icon :icon="['fas', 'earth-americas']" />
          </div>
        </template>
      </box-item>
      <box-item>
        <template #title>
          <h2 class="uppercase text-gray-600 font-semibold">New clients</h2>
        </template>
        <template #count>
          <p class="text-xl font-bold text-gray-800">+3.462</p>
        </template>
        <template #noti>
          <div class="flex items-center mt-2">
            <span class="text-red-600 font-medium">-2% </span>
            <span class="mx-1">since lastquarter</span>
          </div>
        </template>
        <template #icon>
          <div
            class="h-10 w-10 bg-boxGreen flex items-center justify-center text-white rounded-full mt-2"
          >
            <font-awesome-icon :icon="['far', 'newspaper']" />
          </div>
        </template>
      </box-item>
      <box-item>
        <template #title>
          <h2 class="uppercase text-gray-600 font-semibold">sales</h2>
        </template>
        <template #count>
          <p class="text-xl font-bold text-gray-800">$103.430</p>
        </template>
        <template #noti>
          <div class="flex items-center mt-2">
            <span class="text-green-600 font-medium">+5% </span>
            <span class="mx-1">Than last month</span>
          </div>
        </template>
        <template #icon>
          <div
            class="h-10 w-10 bg-boxOrange flex items-center justify-center text-white rounded-full mt-2"
          >
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          </div>
        </template>
      </box-item>
    </div>
    <div class="my-5 grid grid-cols-7_5 gap-x-5">
      <div class="bg-white rounded-md overflow-hidden shadow-arround-sm">
        <div class="pt-5 px-5">
          <h2 class="text-444 font-semibold">Scales Overview</h2>
          <p class="py-2 text-sm text-444">
            <span class="mr-1 text-green-600"
              ><font-awesome-icon :icon="['fas', 'arrow-up']"
            /></span>
            <span class="font-medium">4% more</span>
            <span class=""> in 2022 </span>
          </p>
        </div>
        <div class="p-5 h-96 bg-transparent">
          <chart-box></chart-box>
        </div>
      </div>
      <div class="bg-transparent shadow-arround-sm rounded-md overflow-hidden">
        <slide-home></slide-home>
      </div>
    </div>
    <div class="grid grid-cols-2_1 gap-x-5 my-5">
      <div class="bg-white shadow-arround-sm rounded-md overflow-hidden max-h-80 flex flex-col">
        <h2 class="px-5 pb-1 pt-3 text-444 font-semibold text-base">Sales by Country</h2>
        <div class="flex-1 overflow-y-auto">
          <row-country></row-country>
          <row-country>
            <template #ensign>
              <img
                src="https://cdn.pixabay.com/photo/2013/07/12/17/38/germany-152142_640.png"
                alt="germany"
              />
            </template>
            <template #country-name> Germany </template>
            <template #sales> 3.900 </template>
            <template #value> $440.000 </template>
            <template #bounce> 40.22%</template>
          </row-country>
          <row-country>
            <template #ensign>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/great-britain-2730686-2266296.png?f=webp&w=256"
                alt="Great Britain"
                class="w-full h-full object-cover object-center block"
              />
            </template>
            <template #country-name> Great Britain </template>
            <template #value> $190.700 </template>
            <template #bounce> 23.44% </template>
          </row-country>
          <row-country>
            <template #ensign>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWqzPEX2qajZHmKz_eWFuozYXzEsprWKMfw&s"
                alt="Brasil"
                class="w-full h-full object-cover object-center block"
              />
            </template>
            <template #country-name> Brasil </template>
            <template #sales> 560 </template>
            <template #value> $143.960 </template>
            <template #bounce> 32.14% </template>
          </row-country>
        </div>
      </div>
      <div class="bg-white shadow-arround-sm rounded-md max-h-80 overflow-hidden flex flex-col">
        <h2 class="px-5 pb-1 pt-3 text-444 font-semibold text-base">Categories</h2>
        <div class="flex-1 overflow-y-auto">
          <row-category
            v-for="(category, index) of categories"
            :category="category"
            :key="index"
          ></row-category>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import BoxItem from '@/components/admin/BoxItem.vue'
import ChartBox from '@/components/admin/ChartBox.vue'
import SlideHome from '@/components/admin/SlideHome.vue'
import RowCountry from '@/components/admin/table/RowCountry.vue'
import RowCategory from '@/components/admin/table/RowCategory.vue'
import { ref, watchEffect } from 'vue'
import axios from 'axios'

const categories = ref([])

watchEffect(async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/short-data-categories`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
  const { data } = await response.data
  categories.value = data
})
</script>
