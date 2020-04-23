<template>
  <v-container
  pa-0
  >
    <!-- コンポーネント読み込み -->
    <Signup />
  </v-container>
</template>

<script>
  export default {
    components: {
      Signup: () => import('@/components/Users/Signup'),
    },
    data () {
      return {
      }
    },
  }
</script>
