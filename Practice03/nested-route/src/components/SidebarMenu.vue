<template>
  <aside class="sidebar">
    <div class="title">Menu</div>

    <div @click="toSection(1)" class="item" :class="{ active: isActive(1) }">Section 1</div>
    <div @click="toSection(2)" class="item" :class="{ active: isActive(2) }">Section 2</div>
    <div @click="toSection(3)" class="item" :class="{ active: isActive(3) }">Section 3</div>
    <div @click="toSection(4)" class="item" :class="{ active: isActive(4) }">Section 4</div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarMenu',

  computed: {
    currentPage() {
      return this.$route.path.split('/')[1]
    },
  },

  methods: {
    toSection(selectId) {
      this.$router.push(`/${this.currentPage}/section/${selectId}`)
    },

    isActive(selectId) {
      return Number(this.$route.params.selectId) === selectId
    },
  },
}
</script>

<style>
.sidebar {
  width: 180px;
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
}

.title {
  padding: 1rem;
  border-bottom: 1px solid black;
  font-weight: bold;
}

.item {
  padding: 1rem;
  border-bottom: 1px solid black;
  cursor: pointer;
  text-decoration: none;
}

.active {
  color: red;
  font-weight: bold;
}
</style>
