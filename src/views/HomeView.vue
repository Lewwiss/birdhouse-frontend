<script lang="ts">
  import { RouterLink } from 'vue-router';

  export default {};
</script>

<template>
  <div class="w-full h-full grow flex items-center justify-center">
    <div class="flex flex-col space-y-6 py-6 items-center justify-center">
      <p class="text-2xl font-semibold text-white">Home page</p>
      <RouterLink to="/houses">
        <div class="bg-shockbyte-primary py-3 px-5 rounded-lg flex flex-row space-x-2.5 items-center">
          <p class="font-medium text-white">To BirdHouses Overview</p>
          <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5L19 8.5M19 8.5L12 15.5M19 8.5L1 8.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </RouterLink>
    </div>
  </div>
</template>