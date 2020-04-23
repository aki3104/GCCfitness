<template>
  <v-container 
    class="text-center"
    ma-0
    pa-0
    fluid
  >
    <v-row align="center" justify="center">
      <Title>
        <template #title>
          {{ pageTitle }}
        </template>
      </Title>
    </v-row>
    <v-row>
      <v-carousel
        cycle
        :interval="3000"
        height="600"
        hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    components: {
      Title: () => import('@/components/Items/TheTitle'),
    },
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        pageTitle: '外観・設備'
      }
    },
  }
</script>