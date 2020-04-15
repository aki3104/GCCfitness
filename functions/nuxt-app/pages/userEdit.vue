<template>
  <v-container
  pa-0
  >
    <!-- コンポーネント読み込み -->
    <UserEdit />
  </v-container>
</template>

<script>
  export default {
    components: {
      UserEdit: () => import('@/components/UserEdit'),
    },
    data () {
      return {
      }
    },
  }
</script>