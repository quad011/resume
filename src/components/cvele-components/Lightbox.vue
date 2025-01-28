<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  openPopup: {
    type: Boolean,
  },
});
const emit = defineEmits(["close"]);

const closePopup = () => {
  openPopup = false;
};

const el = ref(null);

onMounted(() => {
  el.value.focus();
});
</script>

<template>
  <div
    ref="el"
    tabindex="0"
    @keyup.esc="emit('close')"
    class="lightbox fixed w-full h-full top-0 left-0 backdrop-blur flex items-center justify-center z-50 transition-500"
  >
    <plus
      @click="emit('close')"
      class="absolute top-0 right-0 m-1 md:m-5 z-50 pointer-events-auto"
      color="black"
      size="1.5rem"
      :hoverable="true"
      :close="true"
    />

    <div class="w-full h-full">
      <slot />
    </div>
  </div>
</template>
