<template>
  <form @submit.prevent="addTodo">
    <input v-model="todo" placeholder="Ajouter une tâche" />
    <button type="submit">Ajouter</button>
  </form>
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
