<script lang="ts">
    export default {
        props: ["house", "changeMenu", "menu"],
        data() {
            return {
                id: "",
                name: "",
                longitude: 0,
                latitude: 0,
                created: Date.now(),
                updated: Date.now()
            }
        },
        created() {
            this.id = this.house.id;
            this.name = this.house.name;
            this.longitude = this.house.longitude;
            this.latitude = this.house.latitude;
            this.created = this.house.created;
            this.updated = this.house.updated;
        }
    }
</script>

<template>
    <div class="bg-shockbyte-dark pt-6 px-6 rounded-xl w-full">
        <div class="flex flex-row pb-5">
            <h6 class="flex grow text-2xl font-semibold text-white truncate">{{ name }}</h6>
            <div class="flex flex-row space-x-2.5 items-center">
                <div class="w-5 h-5 flex items-center justify-center">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.05025 2.05025C4.78392 -0.683417 9.21608 -0.683418 11.9497 2.05025C14.6834 4.78392 14.6834 9.21608 11.9497 11.9497L7 16.8995L2.05025 11.9497C-0.683418 9.21608 -0.683418 4.78392 2.05025 2.05025ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" fill="white" />
                    </svg>
                </div>
                <p class="font-medium text-white truncate">({{ longitude }}, {{ latitude }})</p>
            </div>
        </div>
        <div class="flex flex-row space-x-8">
            <button @click="$event => changeMenu('overview')">
                <div class="border-b-2 pb-3" :class="menu === 'overview' ? 'border-shockbyte-primary' : 'border-transparent'">
                    <p :class="menu === 'overview' ? 'text-shockbyte-primary' : 'text-shockbyte-lighter'">Overview</p>
                </div>
            </button>
            <button @click="$event => changeMenu('graph')">
                <div class="border-b-2 pb-3" :class="menu === 'graph' ? 'border-shockbyte-primary' : 'border-transparent'">
                    <p :class="menu === 'graph' ? 'text-shockbyte-primary' : 'text-shockbyte-lighter'">Graph</p>
                </div>
            </button>
        </div>
    </div>
</template>