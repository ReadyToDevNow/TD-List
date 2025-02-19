<template>
  <div class="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
    <h2 class="text-4xl font-bold text-blue-600">Liste de tâche</h2>
    <span class="text-lg text-gray-600">Gérez vos tâches</span>
    <section class="">
      <ul>
        <li v-for="todo in store.todoList" :key="todo.id">
          <span :class="{ completed: todo.completed }" @click="store.toggleCompleted(todo.id)">
            {{ todo.item + ' ' }}
          </span>
          <button
            @click="store.deleteTodo(todo.id)"
            class="bg-blue-500 border rounded text-white font-bold px-1 py-1 shadow-none mt-8 ml-6"
          >
            Supprimer
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todolist'

const store = useTodoListStore()
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
