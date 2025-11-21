import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/api/products').then((res) => {
        this.products = res.data
        console.log('fetch data: ', this.products)
      })
      return response
    },
  },
})
