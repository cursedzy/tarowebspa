<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="logo">
            <h3>taro&etc.</h3>
            <p>кубанский генератор рандомных ответов, маг, чародей, конспиролог, таролог</p>
          </div>
        </div>
        
        <div class="footer-section">
          <h4>Навигация</h4>
          <ul>
            <li><router-link to="/">Главная</router-link></li>
            <li><router-link to="/about">Обо мне</router-link></li>
            <li><router-link to="/courses">Курсы</router-link></li>
            <li><router-link to="/contact">Контакты</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Контакты</h4>
          <p>+79253694105</p>
          <p>taroandetc@proton.me</p>
        </div>
        
        <div class="footer-section">
          <h4>Социальные сети</h4>
          <div class="social-links">
            <a href="https://t.me/taroandetc" target="_blank" class="social-link">Telegram</a>
            <a href="https://www.instagram.com/taroandetc?igsh=MTV3ZDNhZ3Fxd3oyaw==" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 taro&etc. Все права защищены. 18+</p>
        <a href="/terms.pdf" class="footer-link">Договор оферты</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: #1f1416;
  color: #f5eace;
  padding: 60px 0 20px;
  position: relative;
}

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(135deg, #dfc072 0%, #f5eace 100%);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 40px 30px;
  margin-bottom: 40px;
}

.footer-section h3 {
  color: #dfc072;
  font-size: 24px;
  margin-bottom: 15px;
  position: relative;
}

.footer-section h3::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 30%;
  height: 2px;
  background: #1f1416;
}

.footer-section h4 {
  color: #f5eace;
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
}

.footer-section p {
  color: #cccccc;
  line-height: 1.6;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s;
  position: relative;
}

.footer-section ul li a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #dfc072;
  transition: width 0.3s;
}

.footer-section ul li a:hover {
  color: #dfc072;
}

.footer-section ul li a:hover::before {
  width: 100%;
}

.social-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-link {
  color: #cccccc;
  text-decoration: none;
  padding: 8px 12px;
  border: 2px solid #333;
  border-radius: 20px;
  transition: all 0.3s;
  font-size: 14px;
  background: transparent;
}

.social-link:hover {
  background: linear-gradient(135deg, #dfc072 0%, #f5eace 100%);
  color: #1f1416;
  border-color: #dfc072;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  color: #999;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
