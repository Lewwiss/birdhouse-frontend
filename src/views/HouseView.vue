<script lang="ts">
  import type { HouseType, ResidencyType } from '../types/HouseType'
  import Sidebar from '../components/Sidebar.vue'
  import Header from '../components/Header.vue'
  import HeaderSkeleton from '../components/skeletons/HeaderSkeleton.vue'
  import Residency from '../components/Residency.vue'
  import ResidencySkeleton from '../components/skeletons/ResidencySkeleton.vue'
  import Graph from '../components/Graph.vue'
  import Pagination from '../components/Pagination.vue'

  export default {
    name: "HouseView",
    components: {
      Sidebar,
      Header,
      HeaderSkeleton,
      Residency,
      ResidencySkeleton,
      Graph,
      Pagination
    },
    data() {
      return {
        house: null || <HouseType>{},
        menu: <String>"overview",
        paginationResidency: 7
      }
    },
    mounted() {
      fetch(`https://birdhouse-backend.vercel.app/house/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
          this.house = data;
          /*
          if (this.house.residency.length >= 7) {
            // If data is more than 7 splice the last 7 objects
            this.paginationResidency = this.house.residency.splice(data.residency.length - 7, 7);
          } else {
            // If data is less than 7 set our data
            this.paginationResidency = this.house.residency;
          }
          */
        })
        .catch(err => console.log(err)
      )
    },
    methods: {
      changeMenu(menuItem: String) {
        this.menu = menuItem;
      },
      paginationForward() {
        console.log("forward");
        this.paginationResidency += 7;
      },
      paginationBackward() {
        this.paginationResidency -= 7;
      },
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
          <div v-if="house.residency.length > 0" class="flex flex-col space-y-4">
            <Residency v-for="residency in house.residency" :residency="residency" />
          </div>
        </div>
        <div v-if="menu === 'graph'" class="w-full h-full">
          <Graph :residency="house.residency" />
        </div>
      </div>
      <div class="w-full p-8 flex flex-col gap-6 grow" v-else>
        <HeaderSkeleton />
        <div class="flex flex-col space-y-4">
          <ResidencySkeleton />
        </div>
      </div>
      <Pagination v-if="house.id" :paginationForward="paginationForward" :paginationBackward="paginationBackward" :itemCount="house.residency.length / 7" />
    </div>
  </div>
</template>