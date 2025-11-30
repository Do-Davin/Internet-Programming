<script>
import CategoryComponent from '../components/CategoryComponent.vue'
import BannerComponent from '../components/BannerComponent.vue'
import SectionHeaderComponent from '../components/SectionHeaderComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'
import ShowCaseComponent from '../components/ShowCaseComponent.vue'
import { useProductStore } from '../Stores/product'

export default {
  name: 'HomeView',
  components: {
    CategoryComponent,
    BannerComponent,
    SectionHeaderComponent,
    ProductComponent,
    ShowCaseComponent,
  },
  setup() {
    const productStore = useProductStore()
    return {
      productStore,
    }
  },
  async mounted() {
    await this.productStore.fetchProducts()
  },
  methods: {
    handleFilterChange(sectionId, filterName) {
      this.productStore.setActiveFilter(sectionId, filterName)
      console.log('Filter changed:', filterName, 'for section:', sectionId)
    },
    handleAddToCart(productId) {
      this.productStore.addToCart(productId)
    },
    goToCategory(categoryId) {
      this.$router.push({ name: 'category', params: { categoryId } })
    },
  },
}
</script>

<template>
  <div class="home">
    <!-- ShowCase Component -->
    <ShowCaseComponent />

    <!-- Featured Categories Section -->
    <section class="section">
      <SectionHeaderComponent :title="productStore.sections[0].name" :filters="productStore.filterOptions"
        :active-filter="productStore.sections[0].activeFilter"
        @filter-change="(filter) => handleFilterChange(1, filter)" />
      <div class="category-wrapper">
        <CategoryComponent v-for="category in productStore.categories" :key="category['id']" :id="category['id']"
          :title="category['name']" :product-count="category['productCount']" :background-color="category['color']"
          :image="'http://localhost:3000/' + category['image']" @click="goToCategory(category['id'])" />
      </div>
    </section>

    <!-- Banners Section -->
    <div class="banner-wrapper">
      <BannerComponent v-for="promotion in productStore.promotions" :key="promotion['id']" :title="promotion['title']"
        :button-text="promotion['bottonText']" :background-color="promotion['color']"
        :image="'http://localhost:3000/' + promotion['image']" />
    </div>

    <!-- Popular Products Section -->
    <section class="section">
      <SectionHeaderComponent :title="productStore.sections[1].name" :filters="productStore.filterOptions"
        :active-filter="productStore.sections[1].activeFilter"
        @filter-change="(filter) => handleFilterChange(2, filter)" />
      <div class="products-grid">
        <ProductComponent v-for="product in productStore.filteredProducts" :key="product.id" :id="product.id"
          :name="product.name" :category="product.category" :price="product.price"
          :original-price="product.originalPrice" :rating="product.rating" :rating-count="product.ratingCount"
          :weight="product.weight" :image="'http://localhost:3000/' + product.image" :badge="product.badge"
          :badge-type="product.badgeType" @add-to-cart="handleAddToCart" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  padding: 40px 0px;
  background-color: #f8f9fa;
}

.section {
  width: 100%;
  max-width: 1750px;
  display: flex;
  flex-direction: column;
}

.category-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.banner-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1750px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 70px;
  width: 100%;
  justify-items: center;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .app {
    gap: 40px;
    padding: 20px 10px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
