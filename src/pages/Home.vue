<script setup>
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <main>
    <PageHeader
      title="Darko Cvetković"
      bgImage="./src/assets/img/bg-image.jpg"
    />

    <Works title="Projects" />

    <MarqueeWrapper title="Technology" />

    <WorkExperience title="Work Experience" />

    <MarqueeWrapper :marqueeText="true" :reversed="true" />

    <PageFooter />
  </main>
</template>
