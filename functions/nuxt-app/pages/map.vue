<template>
  <v-container pa-0>
    <!-- コンポーネント読み込み -->
    <Map />
  </v-container>
</template>

<script>
  export default {
    components: {
      Map: () => import('@/components/Map'),

    },
    data () {
      return {
      }
    },
  }
</script>