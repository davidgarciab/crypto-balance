<template>
    <div
        class="flex flex-row w-1/4 justify-center items-center p-3 border-2 text-blue-600 border-blue-600 font-bold hover:text-white hover:bg-blue-600 cursor-pointer"
        @click="$emit('connect')">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamask"
            class="h-5 mr-2">
        Connect to Metamask
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'MetaMask'
    
})
</script>

<style>

</style>