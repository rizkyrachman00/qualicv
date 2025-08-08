<template>
    <section class="main-section">
        <div class="page-heading py-16">
            <h1>Track your applications & Resume Ratings</h1>
            <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        <div v-if="resumes.length > 0" class="resumes-section">
            <ResumeCard v-for="resume in resumes" :key="resume.id" :resume="resume" />
        </div>
        
    </section>
</template>

<script setup lang="ts">
import { resumes } from "@/constants";
import ResumeCard from "@/components/ResumeCard.vue";

</script>

<style scoped></style>