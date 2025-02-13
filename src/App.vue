<template>
  <header>
    <nav>
      <router-link to="/form">Formulaire</router-link> |
      <router-link to="/list">Liste</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
