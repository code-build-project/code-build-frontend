<template>
  <svg
    width="20"
    height="38"
    viewBox="0 0 20 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.66699 35.6666L18.3337 18.9999L1.66699 2.33325"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconAngleBracket',
  props: {
    stroke: {
      default: 'white'
    },
    strokeWidth: {
      default: '3'
    },
  }
}
</script>