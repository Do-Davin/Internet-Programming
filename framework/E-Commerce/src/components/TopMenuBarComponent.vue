<template>
  <div class="top-menu-bar">
    <div class="menu-item">
      <img src="../assets/account.png" alt="Account" />
      <span>Account</span>
    </div>

    <div class="menu-item">
      <img src="../assets/compare.png" alt="Compare" />
      <span>Compare</span>
    </div>

    <div class="menu-item">
      <img src="../assets/wishlist.png" alt="Wishlist" />
      <span>Wishlist</span>
    </div>

    <div class="menu-item cart">
      <img src="../assets/cart.png" alt="Cart" />
      <span>Cart</span>
      <span class="cart-badge">2</span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TopMenuBarComponent',
}
</script>

<style scoped>
.top-menu-bar {
  display: flex;
  align-items: center;
  gap: 25px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #253d4e;
  font-size: 14px;
  font-weight: 500;
  position: relative;
}

.menu-item:hover {
  color: #3bb77e;
}

.menu-item img {
  width: 18px;
  height: 18px;
}

.menu-item.cart {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background: #3bb77e;
  color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

@media (max-width: 768px) {
  .top-menu-bar {
    gap: 15px;
  }

  .menu-item span {
    display: none;
  }

  .menu-item {
    gap: 0;
  }
}
</style>
