<template>
  <v-carousel
  :show-arrows="false"
  cycle
  hide-delimiters
  width="cover"
  height="cover"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="scroll-x-transition"
      transition="scroll-x-transition"
    >
    </v-carousel-item>
    <Beginners />
    <Price />
  </v-carousel>
</template>

<script>
  export default {
    components: {
      Beginners: () => import('@/components/Beginners'),
      Price: () => import('@/components/Price'),
    },

    data () {
      return {
        items: [
          {
             src: 'images/home1.jpg',
          },
          {
            src: 'images/home2.jpg',
          },
          {
            src: 'images/home3.jpeg',
          },
        ],
      }
    },
  }
</script>
