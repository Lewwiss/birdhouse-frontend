<script lang="ts">
    export default {
        props: ["paginationForward", "paginationBackward", "itemCount"]
    }
</script>

<template>
    <div class="w-full bg-shockbyte-dark p-3.5 flex items-center justify-center">
        <button class="rounded-md w-9 h-9 text-xl font-medium text-shockbyte-primary flex items-center justify-center" @click="$event => paginationBackward()">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15L1 8L8 1" stroke="#5051F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button v-for="index in itemCount" class="rounded-md w-9 h-9 text-xl font-medium text-shockbyte-lighter flex items-center justify-center">{{ index }}</button>
        <button class="rounded-md w-9 h-9 text-xl font-medium text-shockbyte-primary flex items-center justify-center" @click="$event => paginationForward()">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999999 1L8 8L1 15" stroke="#5051F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</template>