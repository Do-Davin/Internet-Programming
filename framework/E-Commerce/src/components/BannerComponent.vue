<template>
  <div class="banner" :style="{ backgroundColor }">
    <div class="banner-content">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <button class="shop-btn">{{ buttonText }}</button>
    </div>
    <div class="banner-image">
      <img :src="image" alt="banner image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  props: {
    title: String,
    subtitle: String,
    buttonText: {
      type: String,
      default: 'Shop Now →',
    },
    image: String,
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
  },
}
</script>

<style scoped>
.banner {
  width: 512px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 30px;
  overflow: hidden;
  box-sizing: border-box;
  font-family: 'Quicksand', sans-serif;
}

.banner-content h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #253D4E;
}

.banner-content p {
  width: 200px;
  font-size: 14px;
  color: #333;
  margin-bottom: 20px;
}

.shop-btn {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-btn:hover {
  background-color: #45a049;
}


.banner-image img {
  max-width: 300px;
  max-height: 280px;
  object-fit: contain;
  margin-top: 100px;
}
</style>
