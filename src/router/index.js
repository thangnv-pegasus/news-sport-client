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
import AdminLayout from '@/components/layout/admin-layout/AdminLayout.vue'
import { useAuthStore } from '@/stores/auth'
import DashboardView from '@/views/admin/DashboardView.vue'

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
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/detail-post/:id',
    name: 'detail-post',
    component: DetailPostView
  },
  {
    path: '/create-post',
    name: 'create-post',
    component: CreatePostView,
    meta: { requiresAuth: true, role: 'user' | 'admin' }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { requiresAuth: true, role: 'user' | 'admin' }
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
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresGuest: true, role: 'guest' }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requiresGuest: true, role: 'guest' }
  }
]

const adminRoutes = [
  {
    path: '',
    name: 'admin-home',
    component: DashboardView,
    meta: { requiresAdmin: true, role: 'admin' }
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAdmin: true, role: 'admin' }
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
      children: adminRoutes
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  let user = authStore.getUser

  const token = localStorage.getItem('token')

  if (!user?.role && token) {
    await authStore.active()
    user = authStore.getUser
  }

  if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (user || token) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (user.role === 'admin' || user.role === 'user') {
      next()
    } else {
      next({ name: 'home' })
    }
  } else if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (user.role === 'admin') {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})
export default router
