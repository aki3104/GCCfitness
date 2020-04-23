<template>
    <v-container
      pa-0
      ma-0
      fluid
      fill-height
    >
     <v-row align="center" justify="center">
      <v-col class="mx-auto" align="center" >
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <NuxtLink to="/">
          ログイン画面へ戻る
        </NuxtLink>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '該当のページが見つかりません',
      otherError: 'エラーが起こりました。'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
