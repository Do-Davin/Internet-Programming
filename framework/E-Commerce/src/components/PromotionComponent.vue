<template>
  <div class="promo-container">
    <img class="promo-image" :src="image" alt="Product image">
    <div class="promo-text">
      <h3 class="promo-title">{{ title }}</h3>
      <div>
        <button class="promo-btn">Shop Now →</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    containerColor: {
      type: String,
      default: "#81b13d99"
    },
  },
};
</script>

<style scoped>
.promo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  border: 1px solid #81b13d;
  border-radius: 10px;
  padding-left: 45px;
  padding-top: 70px;
  min-width: 520px;
  min-height: 300px;
  /* width: 100%; */
  max-width: 550px;
  height: 280px;
  background-color: v-bind("containerColor");
  /* box-sizing: border-box; */
  
  position: relative;
  overflow: hidden;
}

.promo-container:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.promo-text {
  /* flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; */
  position: absolute;
  font-size: 48px;
  font-weight: bold;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 170px;
}

.promo-title {
  /* font-size: 22px;
  color: #253d4e;
  line-height: 1.4;
  font: 700;
  margin: 0; */
  font-size: 24px;
  font-weight: bold;
  color: #253D4E;
}

.promo-btn {
  background-color: #5bb77e;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  align-self: flex-start;
}

.promo-btn:hover {
  background-color: #4aa96c;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.promo-btn:active {
  transform: scale(0.97);
}

.promo-image {
  /* flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative; */
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 100%;
  height: auto;
}

.promo-image img {
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  transition: transform 0.4s ease, filter 0.3s ease;
}

.promo-image img:hover {
  transform: scale(1.08);
}
</style>
