<template>
  <v-container pa-0>
    <!-- コンポーネント読み込み -->
    <Signin />
  </v-container>
</template>

<script>
  export default {
    components: {
      Signin: () => import('@/components/Signin'),
    },
    data () {
      return {
      }
    },
  }
</script>
