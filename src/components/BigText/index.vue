<script setup>
import items from "./items";

const props = defineProps({});
console.log("items", items);
</script>

<template>
  <div class="big-text flex items-center overflow-hidden my-10 lg:my-20">
    <ScrollingElement
      class="flex"
      xPercent="-60%"
      startPosition="bottom bottom"
      endPosition="top"
    >
      <h2 class="flex items-center">
        <span v-for="i in 3" class="flex items-center">
          <span
            v-for="(item, index) in items.headline"
            class="flex items-center"
          >
            <span
              v-html="item.text"
              class="text-[8.46vw] font-bold uppercase"
            />
          </span>
        </span>
      </h2>
    </ScrollingElement>
  </div>
</template>

<style lang="scss" scoped></style>
