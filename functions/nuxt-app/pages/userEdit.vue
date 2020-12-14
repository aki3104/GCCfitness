<template>
  <v-container
    class="text-center"
    ma-0
    pa-0
    fluid
  >
    <!-- コンポーネント読み込み -->
    <UserEdit />
  </v-container>
</template>

<script>
  export default {
    components: {
      UserEdit: () => import('@/components/Users/UserEdit'),
    },
    data () {
      return {
      }
    },
  }
</script>