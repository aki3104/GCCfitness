<template>
  <v-container
  pa-0
  >
    <!-- コンポーネント読み込み -->
    <Square />
  </v-container>
</template>

<script>
  export default {
    components: {
      Square: () => import('@/components/Homes/Square'),
    },
    data () {
      return {
      }
    },
  }
</script>
