<script lang="ts">
import PromotionComponent from "./components/PromotionComponent.vue";
import CategoryComponent from "./components/CategoryComponent.vue";
import { useProductStore } from './stores/product'
import { useCategoryStore } from './stores/category'
import { usePromotionStore } from './stores/promotion'
import CategoryHeader from "./components/CategoryHeader.vue";
import ProductCard from "./components/ProductCard.vue";
// const burgerImage = new URL("@/assets/burger.png", import.meta.url).href;

const mangoProduct = {
  id: 1,
  brand: "Hodo Foods",
  name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
  rating: 4.0,
  weightLabel: "500 gram",
  currentPrice: 2.51,
  oldPrice: 2.8,
  discountPercent: 17,
  imageUrl: "../assets/products/mango.jpg",
  quantity: 1,
};

export default {
  name: "App",

  setup() {
    const productStore = useProductStore()
    const categoryStore = useCategoryStore()
    const promotionStore = usePromotionStore()

    return {
      productStore,
      promotionStore,
      categoryStore,
    }
  },

  data() {
    return {
      // burgerImage,
      activeTop: "All",
      activeBottom: "All",

      mangoProduct: mangoProduct,
    };
  },

  async mounted() {
    await this.productStore.fetchProducts()
    await this.categoryStore.fetchCategories()
    await this.promotionStore.fetchPromotions()
  },

  components: {
    CategoryComponent,
    PromotionComponent,
    CategoryHeader,
    ProductCard,
  },
};
</script>

<template>
  <div class="main-wrapper">

    <!-- Header -->

    <CategoryHeader
      title="Featured Categories"
      :categories="categoryStore.categories"
      :active-category="activeTop"
      @select="activeTop = $event"
    />

    <!-- <div class="category-header">
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
    </div> -->

    <!-- Categories Cart Section 1 -->
    <div class="category-wrapper">
      <!-- <CategoryComponent title="Burger" :product-count="14" :image="burgerImage" container-color="#F2FCE4"/> -->
      <CategoryComponent
        v-for="category in categoryStore.categories"
        :key="category['id']"
        :title="category['name']"
        :productCount="category['productCount']"
        :containerColor="category['color']"
        :image="'http://localhost:3000/' + category['image']"
      />
    </div>

    <!-- Promotion Cart Section 2 -->
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

    <!-- Product Categories Section 3 -->

    <CategoryHeader
      title="Popular Products"
      :categories="categoryStore.categories"
      :active-category="activeBottom"
      @select="activeBottom = $event"
    />

    <!-- <div class="product-wrapper">
      <h1>Product Categories</h1>
      <ul>
        <li v-for="category in productStore.categories" :key="category['id']">
          {{ category['name'] }}
        </li>
      </ul>
    </div> -->

    <ProductCard :product="mangoProduct" />

  </div>

</template>

<style scoped>

/* Main-CSS-Styles */
.main-wrapper {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
}

/* Category Section 1 */
.category-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 25px;
}

/* Promotion Section 2 */
.promotion-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}

/* Product Section 3 */
.product-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 40px 0;
}
</style>
