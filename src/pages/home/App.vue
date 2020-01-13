<template>
	<div id="home" @click="openWin">打开窗口</div>
</template>
<script>
export default {
	name: 'home',
	methods: {
		openWin() {
			window.console.log('1111')
		},
	},
}
</script>
<style lang="scss" scoped>
#home{
	cursor: pointer;
}
</style>