<template>
  <section class="section">
    <div class="container">
      <div class="about-content">
        <div class="about-image">
          <img src="/images/aida.jpg" alt="Обо мне" />
        </div>
        <div class="about-text">
          <h2>Обо мне</h2>
          <p>
            {{ aboutInfo.description }}
          </p>
          <p>
            {{ aboutInfo.approach }}
          </p>
          <div class="credentials">
            <div class="credential">
              <h4>Опыт</h4>
              <span>{{ aboutInfo.experience }}</span>
            </div>
            <div class="credential">
              <h4>Консультаций</h4>
              <span>{{ aboutInfo.readigsalt}}</span>
            </div>
            <div class="credential">
              <h4>Клиентов</h4>
              <span>{{ aboutInfo.clientsalt}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { aboutData } from '../data/about.js'

export default {
  name: 'AboutPage',
  data() {
    return {
      aboutInfo: aboutData
    }
  }
}
</script>

<style scoped>
.section {
  padding: 80px 0;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 60px;
}

.about-image {
  flex: 0 0 300px;
}

.about-image img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;
}

.about-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
}

.credentials {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.credential {
  text-align: center;
}

.credential h4 {
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.credential span {
  font-size: 24px;
  font-weight: bold;
  color: rgb(31, 20, 22)
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  
  .about-image {
    flex: none;
  }
  
  .credentials {
    justify-content: center;
  }
}
</style>
