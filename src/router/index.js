import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CreatePostView from '@/views/CreatePostView.vue'
import DetailPostView from '@/views/DetailPostView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SearchView from '@/views/SearchView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import EditPostView from '@/views/EditPostView.vue'
import EditProfileView from '@/views/EditProfileView.vue'
import DefaultLayout from '@/components/layout/user-layout/DefaultLayout.vue'
import AdminLayout from '@/components/layout/AdminLayout.vue'
import { useAuthStore } from '@/stores/auth'

const userRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/category/:id',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePostView,
    meta: { requiresAuth: true, role: 'user' | 'admin' }
  },
  {
    path: '/detail-post/:id',
    name: 'detail-post',
    component: DetailPostView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true, role: 'user' | 'admin' }
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPostView,
    meta: { requiresAuth: true, role: 'user' | 'admin' }
  },
  {
    path: '/edit-profile',
    name: 'edit-profile',
    component: EditProfileView,
    meta: { requiresAuth: true, role: 'user' | 'admin' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: userRoutes
    },
    {
      path: '/admin',
      component: AdminLayout,
      children: []
    }
  ]
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const user = authStore.auth.user
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!user) {
      next({ name: 'Login' })
    } else if (to.meta.role && to.meta.role !== user.role) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
