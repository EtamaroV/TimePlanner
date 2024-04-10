<template>
  <div class="settings-container">
    <p class="larger-text">การตั้งค่า</p>
    <ul class="larger-navbar">
      <li v-for="page in pages" :key="page.id">
        <router-link :to="page.route" class="nav-link">{{ page.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        { id: 1, title: 'setting1', route: '/Setting1' },
        { id: 2, title: 'setting2', route: '/Setting2' },
        { id: 3, title: 'setting3', route: '/Setting3' },
        { id: 4, title: 'setting4', route: '/Setting4' },
        { id: 5, title: 'setting5', route: '/Setting5' },
      ]
    };
  }
};
</script>

<style>
.settings-container {
  text-align: center;
  background-color: #f0f0f0; 
  padding: 20px; 
  
}

.larger-text {
  font-size: 77px;
  font-style: italic;
  margin-bottom: 30px; 
  color: #333; 
}

.larger-navbar {
  list-style-type: none;
  padding: 0;
}

.larger-navbar li {
  font-size: 40px;
  margin-bottom: 70px; 
}

.nav-link {
  color: #00ff6a; 
  text-decoration: none;
  transition: color 0.3s; 
}

.nav-link:hover {
  color: #ff0e0e; 
}
</style>
