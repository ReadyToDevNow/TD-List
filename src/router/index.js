import { createRouter, createWebHistory } from 'vue-router'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

const routes = [
  {
    path: '/Form',
    name: 'form',
    component: TodoForm,
  },
  {
    path: '/list',
    name: 'List',
    component: TodoList,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
