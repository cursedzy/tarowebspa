<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>Обо мне</h1>
        <p>{{ aboutInfo.platform }} - {{ aboutInfo.description.split('.')[0] }}</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="about-content">
          <div class="about-image">
            <div class="image-frame">
              <img src="/images/aida.jpg" alt="Аида - создатель TAROT&etc" />
              <div class="image-glow"></div>
            </div>
          </div>
          <div class="about-text">
            <div class="text-card">
              <h2>{{ aboutInfo.name }}</h2>
              <div class="quote-section">
                <div class="quote-mark">"</div>
                <p class="intro-text">{{ aboutInfo.description }}</p>
                <div class="quote-mark closing">"</div>
              </div>
              <p class="approach-text">{{ aboutInfo.approach }}</p>
              <div class="credentials">
                <div class="credential">
                  <div class="credential-icon">
                    <StarIcon :size="35" color="#dfc072" :fill="true" />
                  </div>
                  <h4>Опыт</h4>
                  <span>{{ aboutInfo.experience }}</span>
                </div>
                <div class="credential">
                  <div class="credential-icon">
                    <MoonIcon :size="35" color="#dfc072" :fill="true" />
                  </div>
                  <h4>Раскладов</h4>
                  <span>{{ aboutInfo.readings }}</span>
                </div>
                <div class="credential">
                  <div class="credential-icon">
                    <CrystalBallIcon :size="35" color="#dfc072"/>
                  </div>
                  <h4>Клиентов</h4>
                  <span>{{ aboutInfo.clients.split(' ')[1] }}+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="philosophy-section">
      <div class="container">
        <div class="philosophy-wrapper">
          <div class="philosophy-header">
            <h2>Мой путь и философия</h2>
            <div class="decorative-line"></div>
          </div>
          
          <div class="philosophy-content">
            <div class="story-card">
              <div class="card-number">01</div>
              <h3>Начало пути</h3>
              <div class="story-text">
                <p>{{ aboutInfo.background.split('\n\n')[0] }}</p>
              </div>
            </div>
            
            <div class="story-card">
              <div class="card-number">02</div>
              <h3>Образование и развитие</h3>
              <div class="story-text">
                <p>{{ aboutInfo.background.split('\n\n')[1] }}</p>
              </div>
            </div>
            
            <div class="philosophy-card">
              <div class="philosophy-icon">
                <EyeIcon :size="64" color="#dfc072" />
              </div>
              <h3>Мой подход к Таро: Рациональность, Энергии и Правда</h3>
              <div class="philosophy-text">
                <div v-for="paragraph in aboutInfo.philosophy.split('\n\n')" :key="paragraph" class="philosophy-paragraph">
                  <p>{{ paragraph }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EyeIcon from '@/components/icons/EyeIcon.vue';
import { aboutData } from '../data/about.js'
import StarIcon from '@/components/icons/StarIcon.vue';
import MoonIcon from '@/components/icons/MoonIcon.vue';
import CrystalBallIcon from '@/components/icons/CrystalBallIcon.vue';

export default {
  name: 'AboutPage',
  components: {
    EyeIcon,
    StarIcon,
    MoonIcon,
    CrystalBallIcon
  },
  data() {
    return {
      aboutInfo: aboutData
    }
  }
}
</script>

<style scoped>
.about-page {
  margin-top: var(--header-height);
}

.about-content {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4xl);
  margin-bottom: var(--space-xl);
}

.about-image {
  flex: 0 0 350px;
  position: relative;
}

.image-frame {
  position: relative;
  border-radius: var(--radius-full);
  overflow: hidden;
  box-shadow: var(--shadow-2xl);
}

.image-frame img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: var(--radius-full);
  transition: transform var(--transition-slow);
}

.image-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, var(--gold), var(--light-gold), var(--gold));
  border-radius: var(--radius-full);
  z-index: -1;
  opacity: 0.3;
  filter: blur(20px);
  animation: glow 3s ease-in-out infinite alternate;
}

@keyframes glow {
  from { opacity: 0.3; transform: scale(1); }
  to { opacity: 0.6; transform: scale(1.05); }
}

.about-text {
  flex: 1;
}

.text-card {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-background) 100%);
  padding: var(--space-3xl);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
}

.text-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--gold), var(--light-gold));
  border-radius: var(--radius-2xl);
  padding: 2px;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  z-index: -1;
}

.text-card h2 {
  font-size: var(--font-size-4xl);
  color: var(--primary-dark);
  margin-bottom: var(--space-2xl);
  font-weight: bold;
  text-align: center;
  position: relative;
}

.text-card h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, var(--gold), var(--light-gold));
  border-radius: var(--radius-sm);
}

.quote-section {
  position: relative;
  margin: var(--space-2xl) 0;
  padding: var(--space-xl);
  background: linear-gradient(135deg, rgba(223, 192, 114, 0.1), rgba(245, 234, 206, 0.1));
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--gold);
}

.quote-mark {
  font-size: var(--font-size-6xl);
  color: var(--gold);
  font-family: serif;
  line-height: 1;
  position: absolute;
  top: -10px;
  left: 10px;
}

.quote-mark.closing {
  bottom: -30px;
  right: 10px;
  top: auto;
  left: auto;
  transform: rotate(180deg);
}

.intro-text {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--primary-dark);
  font-style: italic;
  margin: var(--space-lg) 0;
  text-align: center;
}

.approach-text {
  font-size: var(--font-size-base);
  line-height: 1.8;
  color: var(--light-gray);
  margin-bottom: var(--space-2xl);
}

.credentials {
  display: flex;
  gap: var(--space-2xl);
  justify-content: center;
  margin-top: var(--space-3xl);
}

.credential {
  text-align: center;
  padding: var(--space-xl);
  background: linear-gradient(135deg, var(--white), var(--background));
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  border: 2px solid transparent;
}

.credential:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--gold);
}

.credential-icon {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-sm);
}

.credential h4 {
  font-size: var(--font-size-sm);
  color: var(--lighter-gray);
  margin-bottom: var(--space-xs);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.credential span {
  font-size: var(--font-size-2xl);
  font-weight: bold;
  color: var(--primary-dark);
}

.philosophy-section {
  padding: var(--space-5xl) 0;
  background: linear-gradient(135deg, var(--background) 0%, #e8e8e8 50%, var(--light-background) 100%);
  position: relative;
}

.philosophy-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(223,192,114,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
  opacity: 0.5;
}

.philosophy-wrapper {
  position: relative;
  z-index: 1;
}

.philosophy-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.philosophy-header h2 {
  font-size: var(--font-size-4xl);
  color: var(--primary-dark);
  margin-bottom: var(--space-lg);
  font-weight: bold;
}

.decorative-line {
  width: 120px;
  height: 4px;
  background: linear-gradient(135deg, var(--gold), var(--light-gold));
  margin: 0 auto;
  border-radius: var(--radius-sm);
  position: relative;
}

.decorative-line::before,
.decorative-line::after {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background: var(--gold);
  border-radius: var(--radius-full);
}

.decorative-line::before {
  left: -15px;
}

.decorative-line::after {
  right: -15px;
}

.philosophy-content {
  display: grid;
  gap: var(--space-3xl);
  max-width: 1000px;
  margin: 0 auto;
}

.story-card {
  background: linear-gradient(135deg, var(--white) 0%, var(--light-background) 100%);
  padding: var(--space-3xl);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  position: relative;
  border: 2px solid transparent;
  transition: var(--transition-normal);
}

.story-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--gold);
}

.card-number {
  position: absolute;
  top: -15px;
  left: var(--space-2xl);
  background: linear-gradient(135deg, var(--primary-dark), var(--dark-red));
  color: var(--white);
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-md);
}

.story-card h3 {
  color: var(--primary-dark);
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-lg);
  font-weight: bold;
}

.story-text p {
  color: var(--light-gray);
  line-height: 1.8;
  font-size: var(--font-size-base);
}

.philosophy-card {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--dark-red) 100%);
  color: var(--white);
  padding: var(--space-4xl);
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  position: relative;
  overflow: hidden;
}

.philosophy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="mystical" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="rgba(223,192,114,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23mystical)"/></svg>');
  opacity: 0.3;
}

.philosophy-icon {
  font-size: var(--font-size-5xl);
  text-align: center;
  margin-bottom: var(--space-lg);
  position: relative;
  z-index: 1;
}

.philosophy-card h3 {
  color: var(--gold);
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-2xl);
  font-weight: bold;
  text-align: center;
  position: relative;
  z-index: 1;
}

.philosophy-text {
  position: relative;
  z-index: 1;
}

.philosophy-paragraph {
  margin-bottom: var(--space-lg);
}

.philosophy-paragraph p {
  color: var(--light-gold);
  line-height: 1.8;
  font-size: var(--font-size-base);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3xl);
  }

  .about-image {
    flex: none;
    align-self: center;
  }

  .credentials {
    flex-direction: column;
    gap: var(--space-lg);
  }

  .text-card {
    padding: var(--space-2xl);
  }

  .philosophy-content {
    gap: var(--space-2xl);
  }

  .story-card,
  .philosophy-card {
    padding: var(--space-2xl);
  }
}
</style>
