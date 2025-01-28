<script setup>
import { useScrollLock } from "@vueuse/core";
import { onMounted, ref } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

const isLocked = useScrollLock(document.body);

onMounted(() => {
  isLocked.value = true;
});
</script>

<template>
  <div
    class="popup fixed left-0 top-0 w-full h-full flex flex-wrap px-16 py-20"
  >
    <div class="w-1/2 pr-20">
      <HtmlVideo
        v-if="videoUrl"
        :src="videoUrl"
        :autoplay="true"
        preload="metadata"
        :controls="false"
        :muted="true"
        :loop="true"
        class="aspect-video"
      />
    </div>

    <div class="w-1/2 flex flex-col justify-between relative z-50">
      <h3 v-if="title" v-html="title" class="text-80 font-bold" />
      <h3 v-if="title" v-html="title" class="text-80 font-bold" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
}
</style>
