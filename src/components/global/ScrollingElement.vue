<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const props = defineProps({
  xPercent: {
    type: String,
  },
  yPercent: {
    type: String,
  },
  startPosition: {
    type: String,
  },
  endPosition: {
    type: String,
  },
});

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const item = self.selector(".item");
    gsap.to(item, {
      x: props.xPercent,
      y: props.yPercent,
      scrollTrigger: {
        trigger: item,
        start: props.startPosition,
        end: props.endPosition,
        scrub: true,
      },
    });
  }, main.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div class="scrolling-element" ref="main">
    <div class="item">
      <slot></slot>
    </div>
  </div>
</template>
