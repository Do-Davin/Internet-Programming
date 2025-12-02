<template>
  <header class="header">
    <div>Header</div>

    <nav class="nav-links">
      <router-link to="/page_1" class="link" active-class="active">Page 1</router-link>
      <router-link to="/page_2" class="link" active-class="active">Page 2</router-link>
      <router-link to="/page_3" class="link" active-class="active">Page 3</router-link>
    </nav>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #000;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.link {
  text-decoration: none;
  color: black;
}

.active {
  color: green;
  font-weight: bold;
}
</style>
