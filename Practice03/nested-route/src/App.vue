<template>
  <div class="layout">
    <HeaderSection />

    <div class="main-area">
      <SidebarMenu />

      <div class="content">
        <router-view />
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<style>
.layout {
  margin: 50px 50px;
  display: flex;
  flex-direction: column;
  height: 75vh;
  border: 2px black solid;
}

.main-area {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 2rem;
}
</style>
