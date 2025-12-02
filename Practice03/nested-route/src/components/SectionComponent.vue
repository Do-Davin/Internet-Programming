<template>
  <div class="section-wrapper">
    <div class="line"></div>

    <div>This is Section {{ selectId }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const selectId = computed(() => route.params.selectId)
</script>

<style>
.section-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 1rem;
  font-size: 24px;
  text-align: center;
}

.line {
  border-top: 2px dashed black;
  margin-bottom: 10px;
}
</style>
