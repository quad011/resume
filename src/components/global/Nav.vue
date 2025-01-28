<script setup>
const props = defineProps({
  items: {
    type: Object,
  },
});
</script>

<template>
  <nav class="text-base">
    <div
      @click.native="scrollToTop"
      class="mr-5 text-14 lg:text-base link reversed cursor-pointer"
    >
      Home
    </div>
    <RouterLink to="#about" class="mr-5 text-14 lg:text-base link reversed"
      >Projects</RouterLink
    >
    <RouterLink
      to="/"
      class="text-14 lg:text-base link reversed"
      @click="goTo('work')"
      >Experience</RouterLink
    >
  </nav>
</template>
