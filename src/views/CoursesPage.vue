<template>
  <div class="courses-page">
    <div class="page-header">
      <div class="container">
        <h1>Программы обучения</h1>
        <p>Изучите искусство Таро с профессиональным наставником</p>
      </div>
    </div>
    
    <section class="section section-alt">
      <div class="container">
        <div class="courses-grid">
          <div 
            v-for="course in courses" 
            :key="course.id"
            class="course-card"
            @click="goToCourse(course.id)"
          >
            <div class="course-image">
              <img :src="course.imageAlt" :alt="course.title" />
              <div class="course-level">{{ course.level }}</div>
            </div>
            
            <div class="course-content">
              <div class="course-header">
                <h3>{{ course.title }}</h3>
                <div class="course-price">
                  <span class="current-price">{{ course.price.toLocaleString() }} ₽</span>
                  <span v-if="course.originalPrice" class="original-price">{{ course.originalPrice.toLocaleString() }} ₽</span>
                </div>
              </div>
              
              <div class="course-meta">
                <span class="duration">{{ course.duration }}</span>
              </div>
              
              <p class="course-description">{{ course.shortDescription }}</p>
              
              <div class="course-features">
                <h5>Что включает:</h5>
                <ul class="features-list">
                  <li v-for="feature in course.features.slice(0, 3)" :key="feature">{{ feature }}</li>
                </ul>
              </div>
              
              <div class="course-actions">
                <a href="https://t.me/taroandetc_chat" target="_blank" class="btn btn-primary btn-full">
                  Записаться на курс
                </a>
                <button class="btn btn-gold btn-full" @click.stop="goToCourse(course.id)">
                  Подробнее
                </button>
              </div>
            </div>
            
            <div v-if="course.note" class="course-note">
              {{ course.note }}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <LoaderComponent :isVisible="isLoading" />
  </div>
</template>

<script>
import { coursesData } from '../data/courses.js'
import LoaderComponent from '../components/LoaderComponent.vue'

export default {
  name: 'CoursesPAge',
  components: {
    LoaderComponent
  },
  data() {
    return {
      courses: coursesData,
      isLoading: false
    }
  },
  methods: {
    goToCourse(id) {
      this.$router.push(`/courses/${id}`)
    }
  }
}
</script>
