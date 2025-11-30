<template>
  <div class="container" :style="{ backgroundColor: backgroundColor }">
    <img :src="image" />
    <h3>{{ title }}</h3>
    <span class="count">{{ productCount }} items</span>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    productCount: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: '#81b13d99',
    },
  },
}
</script>

<style scoped>
.container {
  width: 136px;
  height: 177px;
  border: 1px solid #81b13d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ffffff;
  font-family: 'Quicksand', sans-serif;
  transition: all 0.3s ease;
}

.container:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transform: translateY(-5px);
}

.container img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  margin-bottom: 10px;
}

h3 {
  font-size: 14px;
  text-align: center;
  color: #253D4E;
  margin-bottom: 4px;
}

.count {
  color: #818080;
  font-size: 12px;
}
</style>
