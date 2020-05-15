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
    <News />
    <Beginner />
    <Slide />
    <!-- <Access /> -->
    <Price />
  </v-container>
</template>

<script>
  export default {
    components: {
      Home: () => import('@/components/Homes/Home'),
      About: () => import('@/components/Homes/About'),
      News: () => import('@/components/Homes/News'),
      Beginner: () => import('@/components/Homes/Beginner'),
      // Access: () => import('@/components/Homes/Access'),
      Slide: () => import('@/components/Homes/Slide'),
      Price: () => import('@/components/Homes/PriceTime'),
    },
    data () {
      return {
      }
    },
  }
</script>
