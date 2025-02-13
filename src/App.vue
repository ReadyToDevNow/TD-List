<template>
  <header>
    <nav>
      <router-link to="/">Liste de Tâches</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
