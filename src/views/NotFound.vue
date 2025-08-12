<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1>Страница не найдена</h1>
        <p>К сожалению, запрашиваемая страница не существует или была перемещена.</p>
        
        <div class="suggestions">
          <h3>Возможно, вас заинтересует:</h3>
          <div class="suggestion-links">
            <router-link to="/" class="suggestion-btn">Главная страница</router-link>
            <router-link to="/readings" class="suggestion-btn">Расклады Таро</router-link>
            <router-link to="/courses" class="suggestion-btn">Курсы обучения</router-link>
            <router-link to="/contact" class="suggestion-btn">Контакты</router-link>
          </div>
        </div>
        
        <div class="mystical-element">🔮</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style scoped>
.not-found-page {
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
}

.not-found-content {
  text-align: center;
  background: #fff;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  position: relative;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  color: rgb(20, 13, 15);
  line-height: 1;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.not-found-content h1 {
  color: #333;
  font-size: 36px;
  margin-bottom: 20px;
  font-weight: bold;
}

.not-found-content p {
  color: #666;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
}

.suggestions h3 {
  color: #333;
  font-size: 20px;
  margin-bottom: 25px;
  font-weight: bold;
}

.suggestion-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 40px;
}

.suggestion-btn {
  display: inline-block;
  background: rgb(20, 13, 15);
  color: white;
  padding: 12px 20px;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  transition: all 0.3s;
  font-size: 14px;
}

.suggestion-btn:hover {
  background: rgb(20, 13, 15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(211, 47, 47, 0.3);
}

.mystical-element {
  font-size: 48px;
  opacity: 0.3;
  position: absolute;
  bottom: 20px;
  right: 30px;
}

@media (max-width: 768px) {
  .not-found-content {
    padding: 40px 20px;
  }
  
  .error-code {
    font-size: 80px;
  }
  
  .not-found-content h1 {
    font-size: 28px;
  }
  
  .suggestion-links {
    grid-template-columns: 1fr;
  }
}
</style>
S