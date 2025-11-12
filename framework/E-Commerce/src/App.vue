<script>
import PromotionComponent from "./components/PromotionComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
const burgerImage = new URL("@/assets/burger.png", import.meta.url).href;
const peachImage = new URL("@/assets/peach.png", import.meta.url).href;
const kiwiImage = new URL("@/assets/kiwi.png", import.meta.url).href;
const redAppleImage = new URL("@/assets/redApple.png", import.meta.url).href;
const snackImage = new URL("@/assets/snack.png", import.meta.url).href;
const blackPlumImage = new URL("@/assets/blackPlum.png", import.meta.url).href;
const vegetableImage = new URL("@/assets/vegetable.png", import.meta.url).href;
const headphoneImage = new URL("@/assets/headphone.png", import.meta.url).href;
const milkImage = new URL("@/assets/milk.png", import.meta.url).href;
const orangeImage = new URL("@/assets/orange.png", import.meta.url).href;
const onionImage = new URL("@/assets/onion.jpg", import.meta.url).href;
const juiceImage = new URL("@/assets/juice.png", import.meta.url).href;
const vegetablesImage = new URL("@/assets/vegetables.jpg", import.meta.url).href;
export default {
  name: "App",
  data() {
    return {
      burgerImage,
      peachImage,
      kiwiImage,
      redAppleImage,
      snackImage,
      blackPlumImage,
      vegetableImage,
      headphoneImage,
      milkImage,
      orangeImage,
      onionImage,
      juiceImage,
      vegetablesImage,
    };
  },
  components: {
    CategoryComponent,
    PromotionComponent,
  },
};
</script>

<template>
  <div class="main-wrapper">
    <div class="category-wrapper">
      <CategoryComponent title="Burger" :product-count="14" :image="burgerImage" container-color="##F2FCE4"/>
      <CategoryComponent title="Peach" :product-count="21" :image="kiwiImage" container-color="#FFFCEB"/>
      <CategoryComponent title="Organic Wiki" :product-count="17" :image="peachImage" container-color="#ECFFEC"/>
      <CategoryComponent title="Red Apple" :product-count="68" :image="redAppleImage" container-color="#FEEFEA"/>
      <CategoryComponent title="Snack" :product-count="34" :image="snackImage" container-color="#FFF3EB"/>
      <CategoryComponent title="Black plum" :product-count="25" :image="blackPlumImage" container-color="#FFF3FF"/>
      <CategoryComponent title="Vegetables" :product-count="65" :image="vegetableImage" container-color="#F2FCE4"/>
      <CategoryComponent title="Headphone" :product-count="33" :image="headphoneImage" container-color="#FFFCEB"/>
      <CategoryComponent title="Cake & Milk" :product-count="54" :image="milkImage" container-color="#F2FCE4"/>
      <CategoryComponent title="Orange" :product-count="63" :image="orangeImage" container-color="#FFF3FF"/>
    </div>

    <div class="promotion-wrapper">
      <PromotionComponent title="Everyday Fresh & Clean with Our Products" :image="onionImage" containerColor="#F0E8D5"/>
      <PromotionComponent title="Make your Breakfast Healthy and Easy" :image="juiceImage" containerColor="#F3E8E8"/>
      <PromotionComponent title="The best Organic Products Online" :image="vegetablesImage" containerColor="#E7EAF3"/>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  flex-direction: column;
  max-width: 100%;
  width: 100%;
}

.category-wrapper {
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: flex-start;
}

.promotion-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}
</style>
