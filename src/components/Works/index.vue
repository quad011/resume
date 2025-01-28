<script setup>
import items from "./items";

const props = defineProps({
  title: {
    type: String,
  },
});

const itemsArray = Object.values(items.data.items);
itemsArray.splice(1, 0, { type: "text", content: items.data.content });
</script>

<template>
  <div ref="works" class="works px-4 lg:px-16 my-10 lg:my-16 relative">
    <h2 v-html="title" class="text-32 lg:text-40 mb-4 lg:mb-10" />
    <div class="flex flex-wrap -mx-4">
      <div
        v-for="(item, index) in itemsArray"
        :key="index"
        class="px-4 w-ull lg:w-1/3 mb-20"
      >
        <WorkBox :title="item.title" :videoUrl="item.videoUrl" />

        <div v-if="item.content" class="h-full flex flex-col justify-between">
          <h2
            v-html="item?.content?.title"
            class="text-24 lg:text-32 uppercase mb-5 lg:mb-0"
          />
          <p v-html="item?.content?.text" class="text-16 lg:text-base" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
