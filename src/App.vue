<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

const showEl = ref(false);

let isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const onScroll = () => {
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
    class="px-4 lg:px-16 py-4 lg:py-10 fixed top-0 left-0 w-full flex justify-between text-white mix-blend-difference z-[100]"
  >
    <!-- LOGO -->
    <div @click.native="scrollToTop" class="cursor-pointer">
      <img
        alt="logo"
        class="logo w-[10vw] lg:w-[5vw] object-contain"
        src="/assets/svg/logo.svg"
      />
    </div>
    <!-- END :: LOGO -->

    <!-- NAV -->
    <div class="wrapper hidden lg:block">
      <Nav />
    </div>
    <!-- END ::  NAV -->

    <!-- FS MENU -->
    <div class="block lg:hidden">
      <Hamburger @click="toggleMenu" :isMenuOpen="isMenuOpen" />
    </div>
    <!-- END :: FS MENU -->

    <teleport to="body">
      <TransitionGsap
        :leave_to="{ scale: 0.9, opacity: 0, duration: 0.4 }"
        :from="{ opacity: 0 }"
        :to="{
          opacity: 1,
          duration: 0.4,
          ease: 'Power1.easeOut',
        }"
        class="overflow-auto"
      >
        <FullscreenMenu
          v-if="isMenuOpen"
          :isMenuOpen="isMenuOpen"
          class="block lg:hidden"
        />
      </TransitionGsap>
    </teleport>
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
