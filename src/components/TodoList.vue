<template>
  <div>
    <ul>
      <li v-for="todo in store.todoList" :key="todo.id">
        <span :class="{ completed: todo.completed }" @click="store.toggleCompleted(todo.id)">
          {{ todo.item + ' ' }}
        </span>
        <button @click="store.deleteTodo(todo.id)">Supprimer</button>
      </li>
    </ul>
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
