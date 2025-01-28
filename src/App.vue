<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const showEl = ref(false);

const onScroll = () => {
  // console.log("Window scrollY:", window);
  showEl.value = window.scrollY > 100;
  return {
    showEl,
  };
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

// function goTo(refEl) {
//   console.log('refEl.value:', refEl);
//   refEl.value.scrollIntoView({ behavior: "smooth" })
// }

// const onScroll = function scrollHandler(e) {
//   console.log("eeeeee", e); // Debugging scroll event
//   showEl.value = e.target.scrollTop <= 10; // Update visibility based on scroll position
// };
</script>

<template>
  <header
    class="flex px-4 lg:px-16 py-4 lg:py-10 justify-between fixed top-0 left-0 w-full z-10 text-white mix-blend-difference"
  >
    <!-- LOGO -->
    <div @click.native="scrollToTop" class="cursor-pointer">
      <img
        alt="logo"
        class="logo w-[5vw] object-contain"
        src="/assets/svg/logo.svg"
      />
    </div>
    <!-- END :: LOGO -->

    <!-- NAV -->
    <div class="wrapper">
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
    </div>
    <!-- END ::  NAV -->
  </header>
  <div
    class="fixed right-3 lg:right-5 bottom-16 lg:bottom-5 z-10 bg-white rounded-full transition-opacity duration-500 cursor-pointer mix-blend-difference"
    @click.native="scrollToTop"
    :class="showEl ? 'opacity-100' : 'opacity-0'"
  >
    <arrow-top
      v-if="showEl"
      class="w-10 lg:w-14 h-10 lg:h-14 p-3 rotate-180 stroke-black"
    />
  </div>

  <RouterView />
</template>
