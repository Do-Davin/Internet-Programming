<script>
// import ProductComponent from '../components/ProductComponent.vue'
import PageHeaderComponent from '../components/PageHeaderComponent.vue'
import { useProductStore } from '../Stores/product'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'CategoryView',
  components: {
    // ProductComponent,
    PageHeaderComponent,
  },
  setup() {
    const route = useRoute()
    const productStore = useProductStore()

    // Get categoryId from route params
    const categoryId = computed(() => route.params.categoryId)

    // Find category details
    const category = computed(() => {
      return productStore.categories.find(cat => cat.id === parseInt(categoryId.value))
    })

    // Filter products by this category
    const categoryProducts = computed(() => {
      return productStore.transformedProducts.filter(
        product => product.categoryId === parseInt(categoryId.value)
      )
    })

    return {
      productStore,
      categoryId,
      category,
      categoryProducts,
    }
  },
  async mounted() {
    // Fetch products if not already loaded
    if (this.productStore.products.length === 0) {
      await this.productStore.fetchProducts()
    }
  },
  methods: {
    handleAddToCart(productId) {
      this.productStore.addToCart(productId)
    },
  },
}
</script>

<template>
  <div class="category-view">
    <!-- Page Header -->
    <PageHeaderComponent :title="category ? category.name : 'Category'" parent-category="Categories" />

    <!-- Products Section -->
    <!-- <div class="products-section">
      <div class="products-container">
        <div v-if="categoryProducts.length > 0" class="products-grid">
          <ProductComponent v-for="product in categoryProducts" :key="product.id" :id="product.id" :name="product.name"
            :category="product.category" :price="product.price" :original-price="product.originalPrice"
            :rating="product.rating" :rating-count="product.ratingCount" :weight="product.weight"
            :image="'http://localhost:3000/' + product.image" :badge="product.badge" :badge-type="product.badgeType"
            @add-to-cart="handleAddToCart" />
        </div>
        <div v-else class="empty-state">
          <p>No products found in this category.</p>
          <RouterLink to="/" class="back-home-btn">Go to Home</RouterLink>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.category-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.products-section {
  padding: 0 20px 60px;
}

.products-container {
  max-width: 1750px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 70px;
  width: 100%;
  justify-items: center;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #7e7e7e;
  font-size: 18px;
}

.back-home-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 30px;
  background-color: #3bb77e;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-home-btn:hover {
  background-color: #2d9a68;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .products-section {
    padding: 0 10px 40px;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }

  .empty-state {
    font-size: 16px;
    padding: 60px 20px;
  }
}
</style>
