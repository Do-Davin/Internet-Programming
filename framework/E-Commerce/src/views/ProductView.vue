<script>
import { useProductStore } from '../Stores/product'
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import PageHeaderComponent from '../components/PageHeaderComponent.vue'

export default {
  name: 'ProductView',
  components: {
    PageHeaderComponent,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const productStore = useProductStore()

    const quantity = ref(1)

    // Get productId from route params
    const productId = computed(() => route.params.productId)

    // Find product details
    const product = computed(() => {
      return productStore.transformedProducts.find(
        p => p.id === parseInt(productId.value)
      )
    })

    const increaseQuantity = () => {
      quantity.value++
    }

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
      }
    }

    const addToCart = () => {
      console.log(`Adding ${quantity.value} of product ${productId.value} to cart`)
      productStore.addToCart(productId.value)
      // You can add notification or redirect here
    }

    const goBack = () => {
      router.go(-1) // Go back to previous page
    }

    return {
      productStore,
      product,
      quantity,
      increaseQuantity,
      decreaseQuantity,
      addToCart,
      goBack,
    }
  },
  async mounted() {
    // Fetch products if not already loaded
    if (this.productStore.products.length === 0) {
      await this.productStore.fetchProducts()
    }
  },
}
</script>

<template>
  <div class="product-view">
    <div v-if="product">
      <!-- Page Header -->
      <PageHeaderComponent :title="product.name" :parent-category="product.category" />

      <!-- Product Detail Container -->
      <div class="product-detail-container">
        <!-- Product Detail -->
        <div class="product-detail">
          <!-- Left: Product Image -->
          <div class="product-image-section">
            <div v-if="product.badge" :class="['badge', product.badgeType]">
              {{ product.badge }}
            </div>
            <img :src="'http://localhost:3000/' + product.image" :alt="product.name" class="product-image" />
          </div>

          <!-- Right: Product Info -->
          <div class="product-info-section">
            <p class="product-category">{{ product.category }}</p>
            <h1 class="product-name">{{ product.name }}</h1>

            <!-- Rating -->
            <div class="rating">
              <div class="stars">
                <span v-for="star in 5" :key="star" :class="['star', { filled: star <= Math.round(product.rating) }]">
                  ★
                </span>
              </div>
              <span class="rating-text">({{ product.ratingCount }} reviews)</span>
            </div>

            <!-- Price -->
            <div class="price-section">
              <span class="current-price">${{ product.price.toFixed(2) }}</span>
              <span v-if="product.originalPrice > product.price" class="original-price">
                ${{ product.originalPrice.toFixed(2) }}
              </span>
              <span v-if="product.originalPrice > product.price" class="discount-tag">
                Save {{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}%
              </span>
            </div>

            <!-- Weight/Size -->
            <div class="product-meta">
              <span class="meta-label">Size:</span>
              <span class="meta-value">{{ product.weight }}</span>
            </div>

            <!-- Stock Status -->
            <div class="stock-status">
              <span :class="['status-badge', product.inStock ? 'in-stock' : 'out-of-stock']">
                {{ product.inStock ? '✓ In Stock' : '✗ Out of Stock' }}
              </span>
            </div>

            <!-- Quantity Selector -->
            <div class="quantity-section">
              <label class="quantity-label">Quantity:</label>
              <div class="quantity-controls">
                <button class="qty-btn" @click="decreaseQuantity">-</button>
                <input type="number" v-model.number="quantity" min="1" class="qty-input" />
                <button class="qty-btn" @click="increaseQuantity">+</button>
              </div>
            </div>

            <!-- Add to Cart Button -->
            <button class="add-to-cart-btn" @click="addToCart" :disabled="!product.inStock">
              <span>🛒</span>
              <span>{{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Product Not Found -->
      <!-- <div v-else class="not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <RouterLink to="/" class="home-link">Go to Home</RouterLink>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.product-view {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.product-detail-container {
  max-width: 1750px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

/* Product Detail */
.product-detail {
  background: #fff;
  border-radius: 15px;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

/* Left: Image Section */
.product-image-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 10px;
}

.badge {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 6px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
}

.badge.discount {
  background-color: #3bb77e;
}

.badge.hot {
  background-color: #f74b81;
}

.badge.sale {
  background-color: #fdc040;
  color: #253d4e;
}

.product-image {
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
}

/* Right: Info Section */
.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-category {
  font-size: 14px;
  color: #adadad;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.product-name {
  font-size: 32px;
  font-weight: 700;
  color: #253d4e;
  line-height: 1.3;
}

/* Rating */
.rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars {
  display: flex;
  gap: 4px;
}

.star {
  color: #e0e0e0;
  font-size: 20px;
}

.star.filled {
  color: #ffc107;
}

.rating-text {
  font-size: 14px;
  color: #7e7e7e;
}

/* Price */
.price-section {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 0;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}

.current-price {
  font-size: 36px;
  font-weight: 700;
  color: #3bb77e;
}

.original-price {
  font-size: 24px;
  color: #adadad;
  text-decoration: line-through;
}

.discount-tag {
  background-color: #fff3cd;
  color: #856404;
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
}

/* Meta */
.product-meta {
  display: flex;
  gap: 10px;
  font-size: 16px;
}

.meta-label {
  color: #7e7e7e;
  font-weight: 600;
}

.meta-value {
  color: #253d4e;
}

/* Stock Status */
.stock-status {
  margin: 10px 0;
}

.status-badge {
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
}

.status-badge.in-stock {
  background-color: #d4edda;
  color: #155724;
}

.status-badge.out-of-stock {
  background-color: #f8d7da;
  color: #721c24;
}

/* Quantity */
.quantity-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.quantity-label {
  font-size: 16px;
  font-weight: 600;
  color: #253d4e;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  width: 40px;
  height: 40px;
  border: 1px solid #ececec;
  background: #fff;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.qty-btn:hover {
  background-color: #3bb77e;
  color: #fff;
  border-color: #3bb77e;
}

.qty-input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: 1px solid #ececec;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
}

/* Add to Cart Button */
.add-to-cart-btn {
  background-color: #3bb77e;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.add-to-cart-btn:hover:not(:disabled) {
  background-color: #2d9a68;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 183, 126, 0.3);
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Not Found */
.not-found {
  max-width: 600px;
  margin: 100px auto;
  text-align: center;
  padding: 40px;
  background: #fff;
  border-radius: 15px;
}

.not-found h2 {
  font-size: 32px;
  color: #253d4e;
  margin-bottom: 15px;
}

.not-found p {
  font-size: 18px;
  color: #7e7e7e;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  background-color: #3bb77e;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.home-link:hover {
  background-color: #2d9a68;
}

/* Responsive */
@media (max-width: 968px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 30px;
  }

  .product-name {
    font-size: 24px;
  }

  .current-price {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .product-detail-container {
    padding: 0 10px 40px;
  }

  .product-detail {
    padding: 20px;
  }
}
</style>
