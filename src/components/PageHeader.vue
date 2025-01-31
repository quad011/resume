<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  bgImage: {
    type: [Object, String],
  },
});
</script>

<template>
  <div
    ref="header"
    class="page-header h-[80vw] sm:h-[56vw] max-h-screen flex items-end relative overflow-hidden"
  >
    <ScrollingElement
      yPercent="-150"
      startPosition="bottom bottom"
      endPosition="top"
    >
      <h1
        v-html="title"
        class="text-black text-[10.5vw] whitespace-nowrap font-bold uppercase relative left-[-.7vw] leading-[.9]"
      ></h1>
    </ScrollingElement>
  </div>
</template>

<style lang="scss" scoped></style>
