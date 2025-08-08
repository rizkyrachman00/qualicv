<template>
    <RouterLink :to="`/resume/${resume.id}`" class="resume-card animate-in fade-in duration-1000">
        <div class="resume-card-header">
            <div class="flex flex-col gap-2">
                <h2 class="!text-black font-bold break-words">{{ resume.companyName }}</h2>
                <h3 class="text-lg break-words text-gray-500">{{ resume.jobTitle }}</h3>
            </div>

            <div class="flex-shrink-0">
                <ScoreCircle :score="resume.feedback.overallScore" />
            </div>
        </div>

        <div class="gradient-border animate-in fade-in duration-1000">
            <div class="w-full h-full">
                <img :src="resume.imagePath" alt="resume image"
                    class="w-full h-[350px] max-sm:h-[200px] object-cover object-top">
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router'
import ScoreCircle from '@/components/ScoreCircle.vue'

defineProps<{
    resume: Resume
}>()

</script>

<style scoped></style>