<template>
<v-container pa-0 fluid id='begin1' class="grey lighten-4">
  <v-row class="mx-auto py-12 text-left" justify="center">
    <v-card
      width="800"
      height="400"
      flat
    >
    <div class="overline mb-2">お知らせ</div>
    <v-list-group v-for="(news, i) in newses" :key="i">
      <template v-slot:activator>
        <v-list-item-subtitle> 
          {{ news.title }}
        </v-list-item-subtitle>
      </template>

    <v-list-item-content>
      <v-list-item-action-text>
        {{ news.body }}
      </v-list-item-action-text>
    </v-list-item-content>
    </v-list-group>
    </v-card>
  </v-row>
  <v-row>
    <News />
  </v-row>
</v-container>
</template> 
<script>
import axios from 'axios'
console.log('test')
export default {
  components: {
    News: () => import('@/components/Homes/News'),
  },
  head: {
    script: [
    ],
  }, 
  async asyncData () {
    console.log('asyncData')
    const myHttpClient = axios.create({
      baseURL: process.env.microCMS_URL,
      headers: { 'X-API-kEY': process.env.microCMS_APIKEY },
    })
    const res = await myHttpClient.get('news')
    return await { newses: res.data.contents }
  },
  methods: {
    onScroll (e) {
      console.log(e)
      this.offsetTop = e.target.scrollTop
    },
  }
}
</script>

<style scoped>

</style>