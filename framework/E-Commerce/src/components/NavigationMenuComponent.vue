<template>
  <nav class="navigation-menu">
    <div class="nav-left">
      <!-- Browse All Categories Dropdown -->
      <div class="browse-dropdown">
        <button class="browse-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span>Browse All Categories</span>
          <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>

      <!-- Navigation Links -->
      <div class="nav-links">
        <a href="#" class="nav-link hot-deal">
          <span class="fire-icon">🔥</span>
          Hot Deals
        </a>
        <RouterLink to="/" class="nav-link">Home</RouterLink>

        <div class="nav-link dropdown">
          <span>Foods</span>
          <svg class="arrow-small" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <div class="nav-link dropdown">
          <span>Vegetables</span>
          <svg class="arrow-small" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <a href="#" class="nav-link">Drinks</a>
        <a href="#" class="nav-link">Cookies</a>

        <div class="nav-link dropdown">
          <span>Meat & Seafood</span>
          <svg class="arrow-small" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        <a href="#" class="nav-link">Bakery</a>
      </div>
    </div>

    <!-- Support Center -->
    <div class="support-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
        </path>
      </svg>
      <div class="support-text">
        <span class="support-number">0969337547</span>
        <span class="support-label">24/7 Support Center</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenuComponent',
}
</script>

<style scoped>
.navigation-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #ececec;
  height: 70px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 30px;
}

/* Browse All Categories Button */
.browse-dropdown {
  position: relative;
}

.browse-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #3bb77e;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.browse-button:hover {
  background: #2d9a68;
}

.browse-button svg {
  width: 18px;
  height: 18px;
}

.browse-button .arrow {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #253d4e;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #3bb77e;
}

.nav-link.hot-deal {
  color: #f74b81;
  font-weight: 700;
}

.fire-icon {
  font-size: 16px;
}

.nav-link.dropdown {
  display: flex;
  align-items: center;
}

.arrow-small {
  width: 14px;
  height: 14px;
  margin-left: 3px;
}

.nav-link.router-link-active {
  color: #3bb77e;
}

/* Support Center */
.support-center {
  display: flex;
  align-items: center;
  gap: 12px;
}

.support-center svg {
  width: 36px;
  height: 36px;
  color: #3bb77e;
}

.support-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.support-number {
  font-size: 20px;
  font-weight: 700;
  color: #3bb77e;
  line-height: 1;
}

.support-label {
  font-size: 12px;
  color: #7e7e7e;
}

@media (max-width: 1200px) {
  .nav-links {
    gap: 20px;
  }

  .nav-link {
    font-size: 14px;
  }
}

@media (max-width: 968px) {
  .nav-links {
    display: none;
  }

  .support-center {
    display: none;
  }
}

@media (max-width: 768px) {
  .navigation-menu {
    padding: 0 10px;
    height: 60px;
  }

  .browse-button {
    padding: 10px 15px;
    font-size: 13px;
  }

  .browse-button span {
    display: none;
  }
}
</style>
