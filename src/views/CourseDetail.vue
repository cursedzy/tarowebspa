<template>
  <div class="course-detail-page">
    
    <div class="container" v-if="course">
      <div class="course-detail">
        <div class="detail-header">
          <div class="course-image-large">
            <img :src="course.image" :alt="course.title" />
            <div class="price-badge">
              {{ course.price.toLocaleString() }} ₽
            </div>
          </div>
          <div class="course-info">
            <h2>{{ course.title }}</h2>
            <p class="course-level-detail">{{ course.level }}</p>
            <p class="course-duration-detail">Продолжительность: {{ course.duration }}</p>
            <p class="course-description-detail">{{ course.fullDescription }}</p>
          </div>
        </div>
        
        <div class="detail-content">
          <div class="detail-section" v-for="module in course.modules" :key="module.title">
            <h3>{{ module.title }}</h3>
            <ul class="list-styled">
              <li v-for="topic in module.topics" :key="topic">{{ topic }}</li>
            </ul>
          </div>
          
          <div class="detail-section">
            <h3>Для кого подходит:</h3>
            <ul class="list-styled">
              <li v-for="item in course.suitable" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        
        <div class="detail-footer">
          <a href="https://t.me/taroandetc" target="_blank" class="btn btn-primary btn-large">
            {{ isLoading ? 'Обработка...' : `Записаться на курс за ${course.price.toLocaleString()} ₽` }}
          </a>
          <p v-if="course.note" class="course-note-detail">{{ course.note }}</p>
        </div>
      </div>
    </div>
    
    <div class="container" v-else>
      <div class="not-found-content">
        <h2>Курс не найден</h2>
        <p>Запрашиваемый курс не существует.</p>
        <router-link to="/courses" class="btn btn-primary">Вернуться к курсам</router-link>
      </div>
    </div>
    
    <LoaderComponent :isVisible="isLoading" />
  </div>
</template>

<script>
import { getCourseById } from '../data/courses.js'
import LoaderComponent from '../components/LoaderComponent.vue'

export default {
  name: 'CourseDetailPage',
  components: {
    LoaderComponent
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    course() {
      return getCourseById(this.id)
    },
    breadcrumbItems() {
      return [
        { text: 'Курсы', to: '/courses' },
        { text: this.course?.title || 'Курс' }
      ]
    }
  },
  methods: {
  },
  watch: {
    course: {
      immediate: true,
      handler(newCourse) {
        if (newCourse) {
          document.title = `${newCourse.title} - taro&etc`
        }
      }
    }
  }
}
</script>
