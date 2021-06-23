<template>
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.583374 15.3333C0.583374 13.0417 2.41671 11.3 4.61671 11.3H9.29171C11.5834 11.3 13.325 13.1333 13.325 15.3333"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.74999 1.76669C11.3083 3.32502 11.3083 5.80002 9.74999 7.26669C8.19166 8.73335 5.71666 8.82502 4.24999 7.26669C2.78332 5.70835 2.69166 3.23335 4.24999 1.76669C5.80833 0.30002 8.19166 0.30002 9.74999 1.76669"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>

export default {
  name: 'IconUser',
  props: {
    stroke: {
      type: String,
      default: '#256CFE'
    }
  }
};
</script>