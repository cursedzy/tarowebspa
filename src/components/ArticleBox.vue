<template>
  <article class="article-box" @click="toggleExpanded">
    <div class="article-preview">
      <h4>{{ title }}</h4>
      <p class="excerpt">{{ excerpt }}</p>
    </div>
    
    <div class="article-content" :class="{ expanded: isExpanded }">
      <div class="article-full">
        <h4>{{ title }}</h4>
        <div class="article-text">
          <slot></slot>
        </div>
        <button class="close-btn" @click.stop="toggleExpanded">Закрыть</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticleBox',
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false
    }
  },
  methods: {
    toggleExpanded() {
      this.isExpanded = !this.isExpanded
    }
  }
}
</script>
