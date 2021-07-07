<template>
  <v-container>
    <!-- コンポーネント読み込み -->
    <Signin />
  </v-container>
</template>

<script>
  export default {
    components: {
      Signin: () => import('@/components/Users/Signin'),
    },
    data () {
      return {
      }
    },
  }
</script>