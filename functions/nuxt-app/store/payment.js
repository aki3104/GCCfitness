import axios from 'axios'

export const state = () => ({
  paid: ''
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async paymentAddress({ commit }){
    const pay = await this.$axios.$post('https://connect.squareup.com/v2/checkout?c={{CHECKOUT_ID}}&l={{LOCATION_ID}}')
    commit('pay')
  }
}