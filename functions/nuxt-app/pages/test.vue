<template>
  <v-container
    pa-0
    class="grey lighten-3"
  >
    <v-row>
    
    <!-- コンポーネント読み込み -->
    <Card>
      <template v-slot>
        <v-img 
          height="250"
          src='images/home1.jpg'>
        </v-img>
      </template>
      <template v-slot:cardTitle>
        １回の飲み会より安い
      </template>
      <template v-slot:cardText>
        １回の飲み会を我慢して１ヶ月のプライベートジムを使ってみませんか？
      </template>
    </Card>

    <Card>
     <template v-slot>
        <v-img 
          height="250"
          src='images/home2.jpg'>
        </v-img>
      </template>
      <template v-slot:cardTitle>
        通いたい放題
      </template>
      <template v-slot:cardText>
        予約さえ取れればいくら通っても大丈夫です。
      </template>
    </Card>

    <Card>
     <template v-slot>
        <v-img 
          height="250"
          src='images/home1.jpg'>
        </v-img>
      </template>
      <template v-slot:cardTitle>
        年会費、登録費
      </template>
      <template v-slot:cardText>
        初期費用、年会費はありません。
      </template>
    </Card>

    </v-row>
  </v-container>

</template>

<script>
  export default {
    components: {
      Card: () => import('@/components/Items/TheCard'),
    },
    data () {
      return {
         items: [
          {
            title: 'test1',
            src: 'images/home1.jpg',
          },
          {
            title: 'test2',
            src: 'images/home2.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>

</style>