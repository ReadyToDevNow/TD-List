<template>
  <header>
    <nav class="bg-gray-300">
      <router-link to="/Accueil">Accueil</router-link> |
      <router-link to="/Form">Formulaire</router-link> |
      <router-link to="/List">Liste</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
