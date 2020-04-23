<template>
  <v-app>

  <TheHeader />
  <ErrorSnackbar />
<!-- メイン -->
    <v-content>
      <v-container
       fluid
       fill-height
       pa-0
       id="default"
       >
        <nuxt />
      </v-container>
    </v-content>

  <TheFooter />

  </v-app>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  components: {
    TheHeader: () => import('@/components/Layouts/TheHeader'),
    TheFooter: () => import('@/components/Layouts/TheFooter'),
    ErrorSnackbar: () => import('@/components/Layouts/ErrorSnackbar')
  }
}
</script>


<style scoped>

</style>

