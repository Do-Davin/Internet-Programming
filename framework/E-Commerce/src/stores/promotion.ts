import { defineStore } from 'pinia'
import axios from 'axios'

export const usePromotionStore = defineStore('promotion', {
  state: () => ({
    products: [],
    categories: [],
    groups: [],
    promotions: [],
  }),

  actions: {
    async fetchPromotions() {
      const response = await axios.get('http://localhost:3000/api/promotions').then((res) => {
        this.promotions = res.data
        console.log('fetch data: ', this.promotions)
      })
      return response
    },
  },
})
