<template>
  <v-container
  pa-0
  >
    <!-- コンポーネント読み込み -->
    <Home />
    <About />
    <Beginner />
    <Price />
  </v-container>
</template>

<script>
  export default {
    components: {
      Home: () => import('@/components/Home'),
      About: () => import('@/components/About'),
      Beginner: () => import('@/components/Beginner'),
      Price: () => import('@/components/Price'),
    },
    data () {
      return {
      }
    },
  }
</script>
