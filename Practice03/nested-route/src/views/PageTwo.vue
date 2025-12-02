<template>
  <div class="page">
    Welcome to Page 2
    <router-view />
  </div>
</template>

<style>
.page {
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: center;
  margin-top: 5rem;
  padding: 0 10rem 0 10rem;
  gap: 10px;
}
</style>
