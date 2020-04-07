<template>
  <v-container
    fluid fill-height
    pa-0>
    <!-- コンポーネント読み込み -->
    <AirReserve />

  </v-container>
</template>

<script>
  export default {
    components: {
      AirReserve: () => import('@/components/AirReserve'),

    },
    data () {
      return {
      }
    },
  }
</script>