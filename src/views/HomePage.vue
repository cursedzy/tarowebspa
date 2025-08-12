<template>
  <div class="home">
    <HeroBanner />
    
    <section class="section section-alt">
      <div class="container">
        <h2>Мои услуги</h2>
        <div class="grid grid-auto">
          <div class="card card-featured">
            <div class="card-header">
              <h3>Обряды и ритуалы</h3>
            </div>
            <div class="card-body">
              <p>Уникальные обряды и ритуалы, помогающие улучшить свою жизнь, самочувствие и финаннсы. </p>
              <ul class="list-styled">
                <li>Денежный обряд</li>
                <li>Обряд на удачу</li>
                <li>Чистка</li>
                <li>Защита</li>
                <li>Любовные ритуалы</li>
              </ul>
            </div>
          </div>
          
          <div class="card card-featured">
            <div class="card-header">
              <h3>Обучение Таро</h3>
            </div>
            <div class="card-body">
              <p>Комплексные курсы изучения Таро от базового до продвинутого уровня. Научитесь читать карты и помогать другим.</p>
              <ul class="list-styled">
                <li>Базовый курс Таро</li>
                <li>Продвинутые техники</li>
                <li>Практические занятия</li>
                <li>Индивидуальные лекции</li>
                <li>Курс для друзей</li>
              </ul>
            </div>
          </div>
          
          <div class="card card-featured">
            <div class="card-header">
              <h3>Онлайн консультации</h3>
            </div>
            <div class="card-body">
              <p>Удобные онлайн-сессии по видеосвязи. Получите профессиональную консультацию, не выходя из дома.</p>
              <ul class="list-styled">
                <li>Видео-консультации</li>
                <li>Аудио-сессии</li>
                <li>Письменные расклады</li>
                <li>Гибкий график</li>
                <li>Индивидуальный подход</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <AboutSection />
  </div>
</template>

<script>
import HeroBanner from '../components/HeroBanner.vue'
import AboutSection from '../components/AboutSection.vue'

export default {
  name: 'HomePage',
  components: {
    HeroBanner,
    AboutSection
  }
}
</script>
