<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <div class="filter-tabs">
      <button v-for="(filter, index) in filters" :key="index"
        :class="['filter-btn', { active: filter === activeFilter }]" @click="handleFilterClick(filter)">
        {{ filter }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionHeaderComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
    activeFilter: {
      type: String,
      default: 'All'
    }
  },
  methods: {
    handleFilterClick(filter) {
      this.$emit('filter-change', filter)
    },
  },
}
</script>

<style scoped>
.section-header {
  width: 100%;
  max-width: 1800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  font-family: 'Quicksand', sans-serif;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #253d4e;
  margin: 0;
}

.filter-tabs {
  display: flex;
  gap: 20px;
  align-items: center;
}

.filter-btn {
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #7e7e7e;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s ease;
  position: relative;
}

.filter-btn:hover {
  color: #3bb77e;
}

.filter-btn.active {
  color: #3bb77e;
  font-weight: 700;
}

.filter-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #3bb77e;
}

@media (max-width: 768px) {
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .filter-tabs {
    flex-wrap: wrap;
    gap: 10px;
  }

  .filter-btn {
    font-size: 14px;
  }
}
</style>
