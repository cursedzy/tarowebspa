<template>
<header class="header">
  <div class="container">
    <div class="logo">
      <h1>taro</h1>
      <span>&etc.</span>
    </div>
    
    <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
      <ul class="nav-list">
        <li><router-link to="/" @click="closeMenu">Главная</router-link></li>
        <li><router-link to="/about" @click="closeMenu">Обо мне</router-link></li>
        <li><router-link to="/courses" @click="closeMenu">Курсы</router-link></li>
        <li><router-link to="/contact" @click="closeMenu">Контакты</router-link></li>
      </ul>
    </nav>
    
    <button class="menu-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
</template>

<script>
export default {
name: 'AppHeader',
data() {
  return {
    isMenuOpen: false
  }
},
methods: {
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  },
  closeMenu() {
    this.isMenuOpen = false
  }
}
}
</script>

<style scoped>
.header {
background: #1f1416;
box-shadow: 0 2px 10px rgba(0,0,0,0.3);
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 1000;
border-bottom: 2px solid #dfc072;
}

.container {
max-width: 1200px;
margin: 0 auto;
padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
height: 70px;
}

.logo h1 {
font-size: 24px;
font-weight: bold;
color: #dfc072;
margin: 0;
text-shadow: 1px 1px 2px rgba(223, 192, 114, 0.3);
}

.logo span {
font-size: 12px;
color: #f5eace;
display: block;
margin-top: -5px;
font-weight: 500;
letter-spacing: 2px;
}

.nav-list {
display: flex;
list-style: none;
gap: 30px;
}

.nav-list a {
text-decoration: none;
color: #f5eace;
font-weight: 500;
transition: color 0.3s;
position: relative;
padding: 8px 0;
}

.nav-list a:hover,
.nav-list a.router-link-active {
color: #dfc072;
}

.menu-toggle {
display: none;
flex-direction: column;
background: none;
border: none;
cursor: pointer;
padding: 5px;
}

.menu-toggle span {
width: 25px;
height: 3px;
background: #dfc072;
margin: 3px 0;
transition: 0.3s;
border-radius: 2px;
}

.menu-toggle:hover span {
background: #f5eace;
}

@media (max-width: 768px) {
.menu-toggle {
  display: flex;
}

.nav {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgb(31, 20, 22); /* Fixed: Explicit RGB value */
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  border-top: 2px solid #dfc072;
}

.nav-open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.nav-list {
  flex-direction: column;
  padding: 20px;
  gap: 15px;
}
}
</style>
