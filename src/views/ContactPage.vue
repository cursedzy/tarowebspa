<template>
  <div class="contact-page">
    <div class="page-header">
      <div class="container">
        <BreadcrumbNav />
        <h1>Контакты</h1>
        <p>Свяжитесь со мной для консультации</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card">
            <div class="contact-icon">
              📞
            </div>
            <h3>Телефон</h3>
            <p>+79253694105</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              ✉️
            </div>
            <h3>Email</h3>
            <p>info@taroandetc.ru</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              💬
            </div>
            <h3>Telegram</h3>
            <a href="https://t.me/taroandetc" target="_blank" class="telegram-link">
              @taroandetc
            </a>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              🕐
            </div>
            <h3>Режим работы</h3>
            <p>Ежедневно с 10:00 до 22:00</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              ⚡
            </div>
            <h3>Время ответа</h3>
            <p>Отвечаю в течение 2-4 часов</p>
          </div>
          
          <div class="contact-card">
            <div class="contact-icon">
              💻
            </div>
            <h3>Форматы консультаций</h3>
            <ul class="consultation-types">
              <li>Онлайн консультации через Telegram</li>
              <li>Видео-звонки по предварительной записи</li>
              <li>Письменные расклады с подробным описанием</li>
            </ul>
          </div>
        </div>
        
        <div class="contact-cta">
          <h2>Готовы начать?</h2>
          <p>Свяжитесь со мной в Telegram для записи на консультацию</p>
          <a href="https://t.me/taroandetc" target="_blank" class="btn btn-primary btn-large">
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'ContactPage',
  components: {
  }
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

.contact-card {
  background: var(--white);
  padding: var(--space-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: var(--transition-normal);
  border: 2px solid transparent;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--gold);
}

.contact-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-lg);
}

.contact-card h3 {
  color: var(--primary-dark);
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-base);
  font-weight: bold;
}

.contact-card p {
  color: var(--light-gray);
  font-size: var(--font-size-base);
  line-height: 1.6;
}

.telegram-link {
  color: var(--gold);
  text-decoration: none;
  font-weight: bold;
  font-size: var(--font-size-lg);
  transition: var(--transition-normal);
}

.telegram-link:hover {
  color: var(--dark-gold);
  text-decoration: underline;
}

.consultation-types {
  list-style: none;
  padding: 0;
  text-align: left;
}

.consultation-types li {
  color: var(--light-gray);
  margin-bottom: var(--space-sm);
  padding-left: var(--space-lg);
  position: relative;
}

.consultation-types li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--gold);
  font-weight: bold;
}

.contact-cta {
  text-align: center;
  background: linear-gradient(135deg, var(--background) 0%, #e8e8e8 100%);
  padding: var(--space-4xl) var(--space-2xl);
  border-radius: var(--radius-xl);
  margin-top: var(--space-4xl);
}

.contact-cta h2 {
  color: var(--primary-dark);
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-lg);
  font-weight: bold;
}

.contact-cta p {
  color: var(--light-gray);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-2xl);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }
  
  .contact-cta {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
