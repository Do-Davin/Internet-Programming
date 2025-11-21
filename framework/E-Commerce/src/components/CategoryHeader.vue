<template>
  <div class="category-header">
    <p class="category-title">{{ title }}</p>

    <div class="category-nav">
      <span
       class="category-item"
       :class="{ active: activeCategory === 'All' }"
       @click="$emit('select', 'All')"
      >
        All
      </span>

      <span
       v-for="category in categories"
       :key="category['id']"
       class="category-item"
       :class="{ active: activeCategory === category['name'] }"
       @click="$emit('select', category['name'])"
      >
        {{ category['name'] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryHeader",
  props: {
    title: String,
    categories: Array,
    activeCategory: String,
  },
};
</script>

<style scoped>
.category-header {
  margin-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.category-title {
  font-size: 28px;
  font-weight: 400;
  color: #253d4e;
  margin: 0;
}

.category-nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.category-item {
  font-weight: 400 !important;
  font-size: 16px;
  color: #253d4e;
  cursor: pointer;
  transition: 0.2s ease;
}

.category-item:hover {
  color: #5bb77e;
}

.category-item.active {
  font-weight: 400;
  color: #5bb77e;
}
</style>
