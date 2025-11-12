<template>
  <div class="container">
    <img :src="image" />
    <h3 class="title">{{ title }}</h3>
    <span class="count">{{ productCount }} items</span>
  </div>
</template>

<script>
export default {
  name: "CategoryComponent",
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
      required: true,
    },
    containerColor: {
      type: String,
      default: "#81b13d99",
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #81b13d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background-color: v-bind("containerColor");
  height: 200px;
}

.container:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0 0.12);
}

.count {
  color: #818080;
  font-size: 12px;
}
.title {
  font-size: 16px;
  font-weight: bold;
  color: #253d4e;
}
</style>
