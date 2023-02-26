<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <main class="bg-shockbyte-darker min-h-screen flex flex-col selection:bg-shockbyte-primary selection:text-white">
    <header class="bg-shockbyte-dark">
      <div class="w-full p-5 text-center">
        <p class="text-2xl font-inter font-bold text-white text-center">Shockbyte BirdHouses Admin Panel</p>
      </div>
    </header>
    <RouterView />
  </main>
</template>