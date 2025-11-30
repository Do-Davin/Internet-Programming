<template>
  <div class="page-header">
    <div class="page-header-bg">
      <img src="../assets/pageHeaderBg.png" alt="" />
    </div>
    <div class="page-header-container">
      <h1 class="page-title">{{ title }}</h1>
      <div class="breadcrumb">
        <RouterLink to="/" class="breadcrumb-link">Home</RouterLink>
        <span class="breadcrumb-separator">›</span>
        <span v-if="parentCategory" class="breadcrumb-link">{{ parentCategory }}</span>
        <span v-if="parentCategory" class="breadcrumb-separator">›</span>
        <span class="breadcrumb-current">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeaderComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    parentCategory: {
      type: String,
      default: 'Categories',
    },
  },
}
</script>

<style scoped>
.page-header {
  position: relative;
  width: 100%;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  padding: 60px 20px;
  margin-bottom: 40px;
  overflow: hidden;
}

.page-header-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: 0;
}

.page-header-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-header-container {
  position: relative;
  z-index: 1;
  max-width: 1750px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.page-title {
  font-size: 48px;
  font-weight: 700;
  color: #253d4e;
  margin: 0;
  line-height: 1.2;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
}

.breadcrumb-link {
  color: #7e7e7e;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;
}

.breadcrumb-link:hover {
  color: #3bb77e;
}

.breadcrumb-separator {
  color: #adadad;
  font-size: 18px;
  font-weight: 300;
}

.breadcrumb-current {
  color: #253d4e;
  font-weight: 600;
}

@media (max-width: 768px) {
  .page-header {
    padding: 40px 20px;
  }

  .page-title {
    font-size: 32px;
  }

  .breadcrumb {
    font-size: 13px;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 30px 15px;
  }

  .page-title {
    font-size: 24px;
  }

  .breadcrumb {
    font-size: 12px;
  }
}
</style>
