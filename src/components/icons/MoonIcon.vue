<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" :stroke="color" stroke-width="2" :fill="fill ? color : 'none'"/>
    <circle cx="16" cy="8" r="1" :fill="color" opacity="0.6"/>
    <circle cx="18" cy="12" r="0.5" :fill="color" opacity="0.4"/>
  </svg>
</template>

<script>
export default {
  name: 'MoonIcon',
  props: {
    size: {
      type: [String, Number],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    fill: {
      type: Boolean,
      default: false
    }
  }
}
</script>
