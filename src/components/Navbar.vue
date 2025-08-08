<template>
    <nav class="navbar">
        <RouterLink to="/">
            <p class="text-2xl font-bold text-gradient">QualiCv</p>
        </RouterLink>
        <RouterLink class="primary-button w-fit" to="/upload">
            Upload Resume
        </RouterLink>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped></style>