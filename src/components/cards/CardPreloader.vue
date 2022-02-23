<template>
  <div class="preloader">
    <div v-for="(item, index) in new Array(6)" :key="index" class="preloader__card" />
  </div>
</template>

<script>
export default {
  name: 'CardPreloader'
};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.preloader__card {
  width: 367px;
  height: 465px;
  margin-bottom: 30px;
  background: linear-gradient(-90deg, #f3f3f3, $color-silver);
  background-size: 200% 200%;
  border-radius: 8px;
  animation: gradient 1.5s linear infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 100%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 50% 100%;
	}
}
</style>