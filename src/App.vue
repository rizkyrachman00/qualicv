<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <main class="bg-[url('images/bg-main.svg')] bg-cover">
        <Navbar />
        <RouterView />
    </main>
</template>

<style scoped></style>
