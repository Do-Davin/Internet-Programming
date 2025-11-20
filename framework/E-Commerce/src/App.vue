<script lang="ts">
import PromotionComponent from "./components/PromotionComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import { useProductStore } from './stores/product'
import { usePromotionStore } from './stores/promotion'
// const burgerImage = new URL("@/assets/burger.png", import.meta.url).href;
export default {
  name: "App",

  setup() {
    const productStore = useProductStore()
    const promotionStore = usePromotionStore()

    return {
      productStore,
      promotionStore,
    }
  },

  data() {
    return {
      // burgerImage,
      activeCategory: "All",
    };
  },

  async mounted() {
    await this.productStore.fetchCategories()
    await this.promotionStore.fetchPromotions()
  },

  components: {
    CategoryComponent,
    PromotionComponent,
  },
};
</script>

<template>
  <div class="main-wrapper">

    <div class="category-header">
      <h2 class="category-title">Featured Categories</h2>

      <div class="category-nav">
        <span
         class="category-item"
         :class="{ active: activeCategory === 'All' }"
        >
          All
        </span>

        <span
         v-for="category in productStore.categories"
         :key="category['id']"
         class="category-item"
         :class="{ active: activeCategory === category['name'] }"
        >
          {{ category['name'] }}
        </span>
      </div>
    </div>

    <div class="category-wrapper">
      <!-- <CategoryComponent title="Burger" :product-count="14" :image="burgerImage" container-color="#F2FCE4"/> -->
      <CategoryComponent
        v-for="category in productStore.categories"
        :key="category['id']"
        :title="category['name']"
        :productCount="category['productCount']"
        :containerColor="category['color']"
        :image="'http://localhost:3000/' + category['image']"
      />
    </div>

    <div class="promotion-wrapper">
      <!-- <PromotionComponent title="Everyday Fresh & Clean with Our Products" :image="onionImage" containerColor="#F0E8D5"/> -->
      <PromotionComponent
       v-for="promotion in promotionStore.promotions"
       :key="promotion['id']"
       :title="promotion['title']"
       :buttonText="promotion['buttonColor']"
       :url="promotion['url']"
       :containerColor="promotion['color']"
       :image="'http://localhost:3000/' + promotion['image']"
      />
    </div>

    <div class="product-wrapper">
      <h1>Product Categories</h1>
      <ul>
        <li v-for="category in productStore.categories" :key="category['id']">
          {{ category['name'] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  flex-direction: column;
  max-width: 100%;
  width: 100%;
}

.category-header {
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

.category-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 25px;
}

.promotion-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}

.product-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}
</style>
