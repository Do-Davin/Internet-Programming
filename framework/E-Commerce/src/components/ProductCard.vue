<template>
  <div class="product-card">
    <!-- Discount badge -->
    <div v-if="promotionAsPercentage" class="badge">
      -{{ promotionAsPercentage }}%
    </div>

    <!-- Product image -->
    <div class="image-wrapper">
      <img
        :src="image"
        :alt="name"
        class="product-image"
      />
    </div>

    <!-- Content -->
    <div class="content">
      <p class="brand">{{ group }}</p>

      <h3 class="title">
        {{ name }}
      </h3>

      <!-- Rating -->
      <div class="rating-row">
        <div class="stars">
          <span
            v-for="index in 5"
            :key="index"
            class="star"
            :class="{ filled: index <= Math.round(rating || 0) }"
          >
            ★
          </span>
        </div>

        <span class="rating-text">
          ({{ safeRating }})
        </span>
      </div>

      <p class="weight">{{ size }}</p>

      <!-- Price + quantity -->
      <div class="bottom-row">
        <div class="price">
          <span class="current-price">${{ safePrice }}</span>
          <!-- <span v-if="product['oldPrice']" class="old-price">
            ${{ product['oldPrice'].toFixed(2) }}
          </span> -->
        </div>

        <div class="qty-control">
          <button class="qty-btn" @click="decreaseQty">−</button>
          <span class="qty-value">{{ qty }}</span>
          <button class="qty-btn" @click="increaseQty">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: false,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    promotionAsPercentage: {
      type: Number,
      default: null,
    },
    categoryId: {
      type: Number,
      required: true,
    },
    instock: {
      type: Number,
      required: true,
    },
    countSold: {
      type: Number,
      required: true,
    },
    group: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      qty: 1,
    };
  },

  computed: {
    safeRating() {
      return this.rating ? this.rating.toFixed(1) : "0.0";
    },
    safePrice() {
      return this.price ? this.price.toFixed(2) : "0.00";
    },
  },

  methods: {
    increaseQty() {
      if (this.qty < this.instock) {
        this.qty++;
      }
    },
    decreaseQty() {
      if (this.qty > 1) {
        this.qty--;
      }
    },
  },
};
</script>

<style scoped>
.product-card {
  position: relative;
  max-width: 300px;
  border-radius: 24px;
  border: 1px solid #d1e9d4;
  padding: 18px 18px 20px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
}

/* discount badge */
.badge {
  position: absolute;
  top: 18px;
  left: 18px;
  background: #35b86f;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  padding: 10px 24px;
  border-radius: 999px;
}

/* image */
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 18px;
}

.product-image {
  max-width: 100%;
  height: 160px;
  object-fit: contain;
}

/* content */
.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.brand {
  font-size: 14px;
  color: #8f9bb3;
  margin: 0;
}

.title {
  margin: 0;
  font-size: 18px;
  line-height: 1.3;
  color: #1e293b;
  font-weight: 700;
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 16px;
  color: #d1d5db;
}

.star.filled {
  color: #ffb020;
}

.rating-text {
  font-size: 14px;
  color: #9ca3af;
}

.weight {
  font-size: 14px;
  color: #9ca3af;
  margin: 0;
}

.bottom-row {
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.current-price {
  font-size: 24px;
  font-weight: 700;
  color: #22c55e;
}

.old-price {
  font-size: 16px;
  color: #9ca3af;
  text-decoration: line-through;
}

.qty-control {
  display: inline-flex;
  align-items: center;
  border-radius: 14px;
  border: 1px solid #22c55e;
  padding: 4px 6px;
  min-width: 96px;
  justify-content: space-between;
}

.qty-btn {
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 4px 8px;
}

.qty-value {
  font-size: 16px;
  font-weight: 600;
}
</style>
