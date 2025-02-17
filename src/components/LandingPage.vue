<template>
  <div>
    <header>
      <h1>Bienvenue sur TodoList</h1>
      <p>Organisez votre vie, une tâche à la fois.</p>
    </header>

    <section>
      <div>
        <h2></h2>
        <form @submit.prevent="startTodoList">
          <div>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Votre Nom
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
      <p>© 2023 TodoList. Tous droits réservés.</p>
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
