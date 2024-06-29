<template>
  <main class="min-h-screen py-10">
    <section class="w-container mx-auto">
      <category-title :title="'Create post'"></category-title>
      <form
        action=""
        method="post"
        @submit.prevent="handleSubmit"
        enctype="multipart/form-data"
        class="block w-3/4 mx-auto"
      >
        <div class="my-2">
          <label for="title" class="block text-sm text-444 font-semibold mb-1"> Post title </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Post title..."
            class="block text-sm text-444 border-[1px] border-solid border-gray-300 rounded-md px-5 py-2 outline-none w-full"
            v-model="title"
          />
        </div>
        <div class="my-2">
          <label for="banner" class="block text-sm text-444 font-semibold mb-1">
            Post Banner
          </label>
          <input
            ref="fileInput"
            type="file"
            name="banner"
            id="banner"
            placeholder="Post Banner..."
            class="block text-sm text-444 border-[1px] border-solid border-gray-300 rounded-md px-5 py-2 outline-none w-full cursor-pointer"
            accept="image/*"
          />
        </div>
        <div class="my-2">
          <label for="category" class="block text-sm text-444 font-semibold mb-1"> Category </label>
          <select
            name="category"
            id="category"
            class="border-[1px] border-solid border-gray-300 cursor-pointer outline-none block w-full py-2 text-sm px-3 rounded-md"
            v-model="categoryId"
          >
            <option :value="category.id" v-for="(category, index) of categories" :key="index">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="my-2">
          <label for="editor" class="block text-sm text-444 font-semibold mb-1">
            Content of Post
          </label>
          <Editor id="editor" v-model="editorContent" editorStyle="height: 320px" class="" />
        </div>
        <button
          type="submit"
          class="block mt-5 bg-baseColor text-white py-2 px-10 rounded-full font-semibold text-sm hover:bg-opacity-95"
        >
          submit
        </button>
      </form>
    </section>
  </main>
</template>

<script setup>
import CategoryTitle from '@/components/CategoryTitle.vue'
import useToastStore from '@/stores/toast'
import axios from 'axios'
import Editor from 'primevue/editor'
import { ref, watchEffect } from 'vue'

const categories = ref({})
const editorContent = ref('')
const title = ref('')
const categoryId = ref(1)
const fileInput = ref(null)
const loading = ref(false)
const toastStore = useToastStore()

const handleSubmit = async () => {
  try {
    loading.value = true
    const dataForm = new FormData()
    console.log({ fileInput: fileInput.value.files[0] })
    dataForm.append('image', fileInput.value.files[0])
    dataForm.append('title', title.value)
    dataForm.append('content', editorContent.value)
    dataForm.append('category_id', categoryId.value)
    // console.log({ dataForm: dataForm.get('image') })
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL_API}/create-post`,
      dataForm,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    const { data } = await response
    console.log('response', data)
    loading.value = false
    toastStore.active('success', 'Thanks for new post, please wait to admin accept!')
    title.value = ''
    editorContent.value = ''
    categoryId.value = 1
    fileInput.value.files = null
  } catch (e) {
    // console.log(e)
    loading.value = false
    toastStore.active('error', JSON.stringify(e))
  }
}

watchEffect(async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL_API}/categories`)
  const { data } = await response.data
  categories.value = data
})
</script>
