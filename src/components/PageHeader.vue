<script setup>
	import { onMounted } from "vue";

	const props = defineProps({
		title: {
			type: String
		}
	})

	onMounted(() => {
		console.log("title", props.title)
	})
</script>

<template>
	<div class="page-header p-5">
		<h1 v-html="title"></h1> 
	</div>`
</template>

<style lang="scss" scoped></style>
