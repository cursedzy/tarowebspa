<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="2" width="12" height="20" rx="2" :stroke="color" stroke-width="2" fill="none"/>
    <path d="M12 6v4m0 4v4" :stroke="color" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="8" r="1" :fill="color"/>
    <circle cx="12" cy="16" r="1" :fill="color"/>
    <path d="M9 12h6" :stroke="color" stroke-width="2" stroke-linecap="round"/>
  </svg>
</template>

<script>
export default {
  name: 'TarotIcon',
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
