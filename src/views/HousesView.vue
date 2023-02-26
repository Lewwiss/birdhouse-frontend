<script lang="ts">
  import type { HouseType } from '../types/HouseType'
  import Sidebar from '../components/Sidebar.vue'
  import House from '../components/House.vue'
  import Pagination from '../components/Pagination.vue'

  export default {
    name: "HousesView",
    components: {
      Sidebar,
      House,
      Pagination
    },
    data() {
      return {
        houses: new Array<HouseType>()
      }
    },
    mounted() {
      fetch("https://birdhouse-backend.vercel.app/house")
        .then(res => res.json())
        .then(data => this.houses = data)
        .catch(err => console.log(err)
      )
    }
  }
</script>

<template>
  <div class="w-full h-full grow flex">
    <Sidebar />
    <div class="w-full flex flex-col">
      <div class="flex grow items-start w-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" v-if="houses.length > 0">
        <House v-for="house in houses" :house="house" />
      </div>
      <div v-else class="flex grow items-start w-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6" />
      <Pagination />
    </div>
  </div>
</template>