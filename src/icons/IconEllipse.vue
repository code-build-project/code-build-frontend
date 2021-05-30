<template>
  <svg
    width="9"
    height="9"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="4.6123"
      cy="4.63281"
      r="4"
      :fill="fill"
    />
  </svg>
</template>

<script>

export default {
  name: 'IconEllipse',
  props: {
    fill: {
      default: '#3A3F4F'
    }
  }
};
</script>