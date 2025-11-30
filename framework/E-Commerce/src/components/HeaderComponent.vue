<template>
  <header class="header">
    <!-- Top Header -->
    <div class="top-header">
      <div class="header-container">
        <!-- Logo -->
        <RouterLink to="/" class="logo">
          <img src="../assets/icon.jpg" alt="Melon" class="logo-img" />
          <span class="logo-text">Melon</span>
        </RouterLink>

        <!-- Search Box -->
        <SearchBoxComponent />

        <!-- Top Menu Bar -->
        <TopMenuBarComponent />
      </div>
    </div>

    <!-- Navigation Menu -->
    <NavigationMenuComponent />
  </header>
</template>

<script>
import SearchBoxComponent from './SearchBoxComponent.vue'
import TopMenuBarComponent from './TopMenuBarComponent.vue'
import NavigationMenuComponent from './NavigationMenuComponent.vue'

export default {
  name: 'HeaderComponent',
  components: {
    SearchBoxComponent,
    TopMenuBarComponent,
    NavigationMenuComponent,
  },
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.top-header {
  padding: 20px 0;
  border-bottom: 1px solid #ececec;
}

.header-container {
  max-width: 1750px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: #3bb77e;
}

@media (max-width: 968px) {
  .header-container {
    flex-wrap: wrap;
    gap: 15px;
  }

  .logo-text {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .top-header {
    padding: 15px 0;
  }

  .header-container {
    padding: 0 10px;
  }

  .logo-img {
    width: 32px;
    height: 32px;
  }

  .logo-text {
    font-size: 20px;
  }
}
</style>
