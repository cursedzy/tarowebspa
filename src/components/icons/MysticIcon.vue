<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" :stroke="color" stroke-width="2" fill="none"/>
    <path d="M12 2v4m0 12v4m10-10h-4m-12 0h4" :stroke="color" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="12" r="3" :stroke="color" stroke-width="2" fill="none"/>
    <path d="M16.24 7.76l-2.12 2.12m-4.24 4.24l-2.12 2.12m8.48 0l-2.12-2.12m-4.24-4.24l-2.12-2.12" :stroke="color" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</template>

<script>
export default {
  name: 'MysticIcon',
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
