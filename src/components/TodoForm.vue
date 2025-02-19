<template>
  <div class="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
    <form @submit.prevent="addTodo">
      <input
        v-model="todo"
        placeholder="Ajouter une tâche"
        class="shadow appearance-none border rounded mb-1.5 py-0.5 px-1 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        type="submit"
        class="bg-blue-500 rounded text-white font-bold py-0.5 px-1 focus:outline-none focus:shadow-outline cursor-pointer"
      >
        Ajouter
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '@/stores/todolist'

const todo = ref('')
const store = useTodoListStore()

function addTodo() {
  if (todo.value.trim()) {
    store.addTodo(todo.value)
    todo.value = ''
  }
}
</script>

<style></style>
