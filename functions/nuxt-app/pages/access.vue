<template>
  <v-container
  class="light-blue lighten-5"
  pa-0
  ma-0
  fluid
  fill-height
  >
    <Access />
    <Map />
  </v-container>
</template>

<script>
  export default {
    components: {
      Map: () => import('@/components/Homes/Map'),
      Access: () => import('@/components/Homes/Access'),
    },
    data () {
      return {
      }
    },
  }
</script>