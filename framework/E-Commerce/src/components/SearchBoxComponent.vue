<template>
  <div class="search-box">
    <select class="category-dropdown">
      <option value="all">All Categories</option>
      <option value="vegetables">Vegetables</option>
      <option value="fruits">Fruits</option>
      <option value="meat">Meat & Seafood</option>
      <option value="bakery">Bakery</option>
      <option value="drinks">Drinks</option>
    </select>
    <div class="divider"></div>
    <input type="text" class="search-input" placeholder="Search for items..." v-model="searchQuery" />
    <button class="search-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBoxComponent',
  data() {
    return {
      searchQuery: '',
    }
  },
}
</script>

<style scoped>
.search-box {
  display: flex;
  align-items: center;
  background: #fff;
  border: 2px solid #3bb77e;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 650px;
  height: 50px;
}

.category-dropdown {
  border: none;
  outline: none;
  padding: 0 15px;
  font-size: 14px;
  color: #253d4e;
  background: transparent;
  cursor: pointer;
  min-width: 150px;
  font-weight: 500;
}

.category-dropdown:focus {
  outline: none;
}

.divider {
  width: 1px;
  height: 30px;
  background: #ececec;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 14px;
  color: #253d4e;
}

.search-input::placeholder {
  color: #adadad;
}

.search-button {
  background: #3bb77e;
  border: none;
  padding: 0 20px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: background 0.3s ease;
}

.search-button:hover {
  background: #2d9a68;
}

.search-button svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .search-box {
    max-width: 100%;
  }

  .category-dropdown {
    min-width: 100px;
    font-size: 12px;
  }

  .search-input {
    font-size: 12px;
    padding: 0 10px;
  }
}
</style>
