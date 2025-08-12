<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="10" r="8" :stroke="color" stroke-width="2" fill="none"/>
    <path d="M6 18h12" :stroke="color" stroke-width="2" stroke-linecap="round"/>
    <path d="M8 20h8" :stroke="color" stroke-width="2" stroke-linecap="round"/>
    <circle cx="10" cy="8" r="1.5" :fill="color" opacity="0.6"/>
    <circle cx="14" cy="12" r="1" :fill="color" opacity="0.4"/>
    <path d="M8 10c2-2 6-2 8 0" :stroke="color" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
  </svg>
</template>

<script>
export default {
  name: 'CrystalBallIcon',
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
