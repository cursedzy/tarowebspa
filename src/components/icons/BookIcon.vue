<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" :stroke="color" stroke-width="2" stroke-linecap="round"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" :stroke="color" stroke-width="2" fill="none"/>
    <path d="M8 7h8m-8 4h6m-6 4h4" :stroke="color" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<script>
export default {
  name: 'BookIcon',
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
