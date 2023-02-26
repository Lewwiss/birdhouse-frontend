<script lang="ts">
  import type { HouseType } from '../types/HouseType'
  import Sidebar from '../components/Sidebar.vue'
  import Header from '../components/Header.vue'
  import Residency from '../components/Residency.vue'
  import Graph from '../components/Graph.vue'
  import Pagination from '../components/Pagination.vue'

  export default {
    name: "HouseView",
    components: {
      Sidebar,
      Header,
      Residency,
      Graph,
      Pagination
    },
    data() {
      return {
        house: null || <HouseType>{},
        menu: <String>"overview"
      }
    },
    mounted() {
      fetch(`https://birdhouse-backend.vercel.app/house/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => this.house = data)
        .catch(err => console.log(err)
      )
    },
    methods: {
      changeMenu(menuItem: String) {
        this.menu = menuItem;
      }
    }
  }
</script>

<template>
  <div class="w-full h-full grow flex">
    <Sidebar />
    <div class="w-full flex flex-col">
      <div class="w-full p-8 flex flex-col gap-6 grow" v-if="house.id">
        <Header :house="house" :changeMenu="changeMenu" :menu="menu" />
        <div v-if="menu === 'overview'" class="w-full h-full">
          <div v-if="house.residency.length > 0" class="flex flex-col gap-4">
            <Residency v-for="residency in house.residency" :residency="residency" />
          </div>
        </div>
        <div v-if="menu === 'graph'" class="w-full h-full">
          <Graph :residency="house.residency" />
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>