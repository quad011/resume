<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="flex p-5 justify-between items-center">
    <!-- LOGO -->
    <img alt="logo" class="logo w-[8vw] object-contain" src="@/assets/svg/logo.svg" />
    <!-- END :: LOGO -->

    <!-- NAV -->
    <div class="wrapper">
      <nav class="text-base">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <!-- END ::  NAV -->
  </header>

  <RouterView />
</template>
