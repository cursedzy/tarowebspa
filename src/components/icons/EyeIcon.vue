<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" :stroke="color" stroke-width="2" fill="none"/>
    <circle cx="12" cy="12" r="3" :stroke="color" stroke-width="2" fill="none"/>
    <circle cx="12" cy="12" r="1" :fill="color"/>
  </svg>
</template>

<script>
export default {
  name: 'EyeIcon',
  props: {
    size: {
      type: [String, Number],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>
