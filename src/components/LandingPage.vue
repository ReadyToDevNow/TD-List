<template>
  <div class="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
    <header class="text-center mb-8">
      <h1 class="text-4xl font-bold text-blue-600">Bienvenue sur TodoList</h1>
      <p class="text-lg text-gray-600">Organisez votre vie, une tâche à la fois.</p>
    </header>

    <section class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-semibold mb-4">Commencez dès maintenant</h2>
        <form @submit.prevent="startTodoList">
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Votre Nom
            </label>
            <input
              class="shadow appearance-none border rounded w-full mb-1.5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Entrez votre nom"
              v-model="username"
            />
          </div>
          <div>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Commencer
            </button>
          </div>
        </form>
      </div>
    </section>

    <footer>
      <p>© 2025 WebForYou. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')

function startTodoList() {
  if (username.value.trim()) {
    // Ici, vous pouvez enregistrer le nom de l'utilisateur dans le store ou dans le localStorage
    // puis rediriger vers la page de la liste de tâches
    router.push({ name: 'form' })
  }
}
</script>
