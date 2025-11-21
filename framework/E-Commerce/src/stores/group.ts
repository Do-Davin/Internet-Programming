import { defineStore } from 'pinia'
import axios from 'axios'

export const useGroupStore = defineStore('group', {
  state: () => ({
    groups: [],
  }),

  actions: {
    async fetchProducts() {
      const response = await axios.get('http://localhost:3000/api/groups').then((res) => {
        this.groups = res.data
        console.log('fetch data: ', this.groups)
      })
      return response
    },
  },
})
