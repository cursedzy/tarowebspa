<template>
  <div class="card" :class="[variant === 'featured' ? 'card-featured' : '']">
    <div class="card-header" v-if="title">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentBox',
  props: {
    title: String,
    variant: {
      type: String,
      default: 'default'
    }
  }
}
</script>
