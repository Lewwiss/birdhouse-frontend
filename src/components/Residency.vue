<script lang="ts">
    export default {
        props: ["residency"],
        data() {
            return {
                date: "",
                birds: 0,
                eggs: 0
            }
        },
        created() {
            const formatDate = new Date(this.residency.date);
            this.date = `${formatDate.getDate()}/${formatDate.getMonth() + 1}/${formatDate.getFullYear()}`;
            this.birds = this.residency.birds;
            this.eggs = this.residency.eggs;
        }
    }
</script>

<template>
    <div class="bg-shockbyte-dark p-6 rounded-xl w-full flex flex-row gap-9">
        <p class="text-white">{{ date }}</p>
        <div class="flex flex-row space-x-2.5 items-center">
            <div class="flex flex-row space-x-2.5 items-center">
                <div class="w-5 h-5 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_732_47)">
                        <path d="M3.74996 10C4.90055 10 5.83329 9.06727 5.83329 7.91668C5.83329 6.76608 4.90055 5.83334 3.74996 5.83334C2.59937 5.83334 1.66663 6.76608 1.66663 7.91668C1.66663 9.06727 2.59937 10 3.74996 10Z" fill="white"/>
                        <path d="M7.49996 6.66667C8.65055 6.66667 9.58329 5.73393 9.58329 4.58333C9.58329 3.43274 8.65055 2.5 7.49996 2.5C6.34937 2.5 5.41663 3.43274 5.41663 4.58333C5.41663 5.73393 6.34937 6.66667 7.49996 6.66667Z" fill="white"/>
                        <path d="M12.5 6.66667C13.6506 6.66667 14.5833 5.73393 14.5833 4.58333C14.5833 3.43274 13.6506 2.5 12.5 2.5C11.3494 2.5 10.4166 3.43274 10.4166 4.58333C10.4166 5.73393 11.3494 6.66667 12.5 6.66667Z" fill="white"/>
                        <path d="M16.25 10C17.4006 10 18.3333 9.06727 18.3333 7.91668C18.3333 6.76608 17.4006 5.83334 16.25 5.83334C15.0994 5.83334 14.1666 6.76608 14.1666 7.91668C14.1666 9.06727 15.0994 10 16.25 10Z" fill="white"/>
                        <path d="M14.45 12.3833C13.725 11.5333 13.1166 10.8083 12.3833 9.95833C12 9.50833 11.5083 9.05833 10.925 8.85833C10.8333 8.825 10.7416 8.8 10.65 8.78333C10.4416 8.75 10.2166 8.75 9.99996 8.75C9.78329 8.75 9.55829 8.75 9.34162 8.79167C9.24996 8.80833 9.15829 8.83333 9.06662 8.86667C8.48329 9.06667 7.99996 9.51667 7.60829 9.96667C6.88329 10.8167 6.27496 11.5417 5.54162 12.3917C4.44996 13.4833 3.10829 14.6917 3.35829 16.3833C3.59996 17.2333 4.20829 18.075 5.29996 18.3167C5.90829 18.4417 7.84996 17.95 9.91662 17.95H10.0666C12.1333 17.95 14.075 18.4333 14.6833 18.3167C15.775 18.075 16.3833 17.225 16.625 16.3833C16.8833 14.6833 15.5416 13.475 14.45 12.3833Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_732_47">
                            <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <p class="text-white">{{ birds }}</p>
            </div>
            <div class="flex flex-row space-x-2.5 items-center">
                <div class="w-5 h-5 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_732_56)">
                            <path d="M9.99996 2.5C7.08329 2.5 4.16663 7.775 4.16663 11.6667C4.16663 14.8917 6.77496 17.5 9.99996 17.5C13.225 17.5 15.8333 14.8917 15.8333 11.6667C15.8333 7.775 12.9166 2.5 9.99996 2.5ZM9.99996 15.8333C7.69996 15.8333 5.83329 13.9667 5.83329 11.6667C5.83329 8.25833 8.39163 4.16667 9.99996 4.16667C11.6083 4.16667 14.1666 8.25833 14.1666 11.6667C14.1666 13.9667 12.3 15.8333 9.99996 15.8333Z" fill="white"/>
                            <path d="M10.8333 13.3333C10.35 13.3333 8.33329 13.2667 8.33329 10.8333C8.33329 10.375 7.95829 10 7.49996 10C7.04163 10 6.66663 10.375 6.66663 10.8333C6.66663 13.3333 8.32496 15 10.8333 15C11.2916 15 11.6666 14.625 11.6666 14.1667C11.6666 13.7083 11.2916 13.3333 10.8333 13.3333Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_732_56">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <p class="text-white">{{ eggs }}</p>
            </div>
        </div>
    </div>
</template>