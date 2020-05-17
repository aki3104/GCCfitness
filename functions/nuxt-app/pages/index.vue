<template>
  <v-container
  id="pagesHome"
  pa-0
  ma-0
  fluid
  fill-height
  >
    <!-- コンポーネント読み込み -->
    <Home />
    <About />
    <News :propsNewses="newses"/>
    <Beginner />
    <Slide />
    <Price />
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    Home: () => import('@/components/Homes/Home'),
    About: () => import('@/components/Homes/About'),
    News: () => import('@/components/Homes/News'),
    Beginner: () => import('@/components/Homes/Beginner'),
    Slide: () => import('@/components/Homes/Slide'),
    Price: () => import('@/components/Homes/PriceTime'),
  },
  
  async asyncData () {
  const myHttpClient = axios.create({
    baseURL: process.env.microCMS_URL,
    headers: { 'X-API-kEY': process.env.microCMS_APIKEY },
  })
  const res = await myHttpClient.get('news')
  return await { newses: res.data.contents }
  },
}
</script>
