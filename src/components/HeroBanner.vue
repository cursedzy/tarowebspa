<template>
  <section class="hero">
    <div class="hero-carousel">
      <div class="carousel-container">
        <div class="desktop-carousel" v-if="!isMobile">
          <div 
            v-for="(course, index) in courses" 
            :key="index"
            class="carousel-card"
            :class="{
              'active': index === currentSlide,
              'prev': index === getPrevIndex(),
              'next': index === getNextIndex(),
              'hidden': !isVisible(index)
            }"
            @click="goToSlide(index)"
          >
            <div class="tarot-card" :class="{ 'flipped': index === currentSlide }">
              <div class="card-back">
                <div class="card-back-design">
                  <div class="mystical-pattern">
                    <div class="center-symbol">
                      <CrystalBallIcon :size="64" color="#dfc072" />
                    </div>
                    <div class="corner-ornament top-left">
                      <StarIcon :size="20" color="#dfc072" :fill="true" />
                    </div>
                    <div class="corner-ornament top-right">
                      <MoonIcon :size="20" color="#dfc072" :fill="true" />
                    </div>
                    <div class="corner-ornament bottom-left">
                      <EyeIcon :size="20" color="#dfc072" />
                    </div>
                    <div class="corner-ornament bottom-right">
                      <MysticIcon :size="20" color="#dfc072" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-front">
                <div class="card-header">
                  <h3>{{ course.title }}</h3>
                  <div class="price-tag">{{ course.price.toLocaleString() }} ₽</div>
                </div>
                
                <div class="card-image">
                  <img :src="course.imageAlt" :alt="course.title" />
                  <div class="card-overlay">
                  </div>
                </div>
                
                <div class="card-content">
                  <p class="card-description">{{ course.shortDescription }}</p>
                  <div class="card-details">
                    <span class="duration">{{ course.duration }}</span>
                    <span class="type">{{ course.level }}</span>
                  </div>
                </div>
                
                <div class="card-footer">
                  <button class="select-reading-btn" @click.stop="selectCourse(course)">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-carousel" v-if="isMobile">
          <div 
            class="carousel-slide" 
            v-for="(course, index) in courses" 
            :key="index"
            :class="{ active: currentSlide === index }"
          >
            <div class="tarot-card-mobile">
              <div class="card-header">
                <h3>{{ course.title }}</h3>
                <div class="price-tag">{{ course.price.toLocaleString() }} ₽</div>
              </div>
              
              <div class="card-image">
                <img :src="course.imageAlt" :alt="course.title" />
                <div class="card-overlay">
                </div>
              </div>
              
              <div class="card-content">
                <p class="card-description">{{ course.shortDescription }}</p>
                <div class="card-details">
                  <span class="duration">{{ course.duration }}</span>
                  <span class="type">{{ course.level }}</span>
                </div>
              </div>
              
              <div class="card-footer">
                <button class="select-reading-btn" @click="selectCourse(course)">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-controls">
        <button 
          class="control-btn prev" 
          @click="prevSlide"
          aria-label="Предыдущий курс"
        >
          ‹
        </button>
        
        <div class="dots-container">
          <button 
            v-for="(course, index) in courses" 
            :key="index"
            @click="goToSlide(index)"
            :class="{ active: currentSlide === index }"
            class="dot"
            :aria-label="`Перейти к курсу ${course.title}`"
          ></button>
        </div>
        
        <button 
          class="control-btn next" 
          @click="nextSlide"
          aria-label="Следующий курс"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { coursesData } from '../data/courses.js'
import CrystalBallIcon from './icons/CrystalBallIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import EyeIcon from './icons/EyeIcon.vue'
import MysticIcon from './icons/MysticIcon.vue'

export default {
  name: 'HeroBanner',
  components: {
    CrystalBallIcon,
    StarIcon,
    MoonIcon,
    EyeIcon,
    MysticIcon,
  },
  data() {
    return {
      currentSlide: 0,
      autoSlideInterval: null,
      isMobile: false,
      courses: coursesData.slice(0, 4) // Show first 4 courses
    }
  },
  mounted() {
    this.checkMobile()
    this.startAutoSlide()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    this.stopAutoSlide()
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768
    },
    goToSlide(index) {
      this.currentSlide = index
      this.resetAutoSlide()
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.courses.length
    },
    prevSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.courses.length - 1 : this.currentSlide - 1
    },
    getPrevIndex() {
      return this.currentSlide === 0 ? this.courses.length - 1 : this.currentSlide - 1
    },
    getNextIndex() {
      return (this.currentSlide + 1) % this.courses.length
    },
    isVisible(index) {
      return index === this.currentSlide || index === this.getPrevIndex() || index === this.getNextIndex()
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide()
      }, 6000)
    },
    stopAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval)
      }
    },
    resetAutoSlide() {
      this.stopAutoSlide()
      this.startAutoSlide()
    },
    selectCourse(course) {
      this.$router.push(`/courses/${course.id}`)
    }
  }
}
</script>
